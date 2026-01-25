import { GoogleGenerativeAI } from "@google/generative-ai";
import { CV_DATA, SKILLS, TRANSLATIONS } from "../constants";

let genAI: GoogleGenerativeAI | null = null;

export const askCVAssistant = async (message: string, lang: 'fr' | 'en', history: {role: 'user' | 'model', parts: {text: string}[]}[] = []) => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      return lang === 'fr' ? "Erreur : Clé API manquante." : "Error: API Key missing.";
    }

    if (!genAI) {
      genAI = new GoogleGenerativeAI(apiKey);
    }

    const tData = TRANSLATIONS[lang].data;
    
    // Instructions système strictes
    const systemInstruction = `Tu es Kernel, l'assistant intelligent de ${CV_DATA.name}. 
NE TE PRÉSENTE PAS si la conversation est déjà engagée.
N'UTILISE JAMAIS de gras (**texte**) dans tes réponses.
Réponds de manière concise en ${lang === 'fr' ? 'Français' : 'Anglais'}.
Contexte bio: ${tData.about}
Compétences: ${SKILLS.map(s => s.name).join(', ')}`;

    const model = genAI.getGenerativeModel({ 
      model: "gemini-3-flash-preview",
      systemInstruction: systemInstruction,
    });

    // On démarre un chat avec l'historique fourni
    const chat = model.startChat({
      history: history,
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
    
  } catch (error: any) {
    console.error("Gemini Error Detail:", error);
    return lang === 'fr' 
      ? "Désolé, je rencontre une difficulté pour accéder au service IA." 
      : "Sorry, I'm having trouble accessing the AI service.";
  }
};