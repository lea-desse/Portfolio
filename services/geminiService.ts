import { GoogleGenAI } from "@google/genai";
import { CV_DATA, SKILLS, TRANSLATIONS } from "../constants";

let genAI: GoogleGenAI | null = null;

export const askCVAssistant = async (message: string, lang: 'fr' | 'en') => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      return lang === 'fr' ? "Clé API non trouvée." : "API Key not found.";
    }

    if (!genAI) {
      genAI = new GoogleGenAI(apiKey);
    }

    const tData = TRANSLATIONS[lang].data;
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: `Tu es Kernel, l'assistant de ${CV_DATA.name}. Bio: ${tData.about}`,
    });

    const result = await model.generateContent(message);
    return result.response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Désolé, une erreur est survenue.";
  }
};