import { GoogleGenerativeAI } from "@google/generative-ai";
import { CV_DATA, SKILLS, TRANSLATIONS } from "../constants";

let genAI: GoogleGenerativeAI | null = null;

export const askCVAssistant = async (message: string, lang: 'fr' | 'en') => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      return lang === 'fr' ? "Clé API absente." : "API Key missing.";
    }

    if (!genAI) {
      genAI = new GoogleGenerativeAI(apiKey);
    }

    // On utilise le nom le plus simple possible
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const tData = TRANSLATIONS[lang].data;
    const prompt = `Tu es Kernel, l'assistant de ${CV_DATA.name}. Bio: ${tData.about}. Réponds à : ${message}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return text;
    
  } catch (error: any) {
    console.error("Gemini Error Detail:", error);
    if (error?.message?.includes("404") || error?.message?.includes("not found")) {
        return lang === 'fr' 
          ? "Erreur 404 : Le modèle est introuvable. Veuillez vérifier que votre clé API provient bien de Google AI Studio et que l'API est activée." 
          : "Error 404: Model not found. Please check your API key and ensured the API is enabled.";
    }
    return lang === 'fr' ? "Une erreur est survenue." : "An error occurred.";
  }
};
