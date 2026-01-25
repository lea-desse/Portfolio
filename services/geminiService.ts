import { GoogleGenerativeAI } from "@google/generative-ai";
import { CV_DATA, SKILLS, TRANSLATIONS } from "../constants";

let genAI: GoogleGenerativeAI | null = null;

export const askCVAssistant = async (message: string, lang: 'fr' | 'en') => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      return lang === 'fr' ? "Erreur : Clé API manquante." : "Error: API Key missing.";
    }

    if (!genAI) {
      // On force l'utilisation de l'API v1 au lieu de v1beta pour plus de stabilité
      genAI = new GoogleGenerativeAI(apiKey);
    }

    const tData = TRANSLATIONS[lang].data;
    
    // On spécifie explicitement la version v1 dans les options du modèle
    const model = genAI.getGenerativeModel(
      { model: "gemini-1.5-flash" },
      { apiVersion: 'v1' }
    );

    const prompt = `
Tu es Kernel, l'assistant de ${CV_DATA.name}. 
Réponds de manière concise en ${lang === 'fr' ? 'Français' : 'Anglais'}.
Contexte bio: ${tData.about}
Compétences: ${SKILLS.map(s => s.name).join(', ')}

Question: ${message}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
    
  } catch (error: any) {
    console.error("Gemini Error Detail:", error);
    return lang === 'fr' 
      ? "Désolé, je rencontre une difficulté pour accéder au service IA." 
      : "Sorry, I'm having trouble accessing the AI service.";
  }
};