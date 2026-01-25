import { GoogleGenerativeAI } from "@google/generative-ai";
import { CV_DATA, SKILLS, TRANSLATIONS } from "../constants";

let genAI: GoogleGenerativeAI | null = null;

export const askCVAssistant = async (message: string, lang: 'fr' | 'en') => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      return lang === 'fr' ? "Erreur : Clé API manquante dans le build." : "Error: API Key missing in build.";
    }

    if (!genAI) {
      genAI = new GoogleGenerativeAI(apiKey);
    }

    const tData = TRANSLATIONS[lang].data;
    // Modèle le plus standard
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
    });

    // On passe les instructions système dans le prompt pour plus de compatibilité
    const prompt = `
Instructions système: Tu es Kernel, l'assistant intelligent de ${CV_DATA.name}. 
Réponds de manière concise en ${lang === 'fr' ? 'Français' : 'Anglais'}.
Contexte bio: ${tData.about}
Compétences: ${SKILLS.map(s => s.name).join(', ')}

Question de l'utilisateur: ${message}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
    
  } catch (error: any) {
    console.error("Gemini Error Detail:", error);
    // On affiche un message un peu plus précis pour débugger
    const errorMsg = error?.message || "";
    if (errorMsg.includes("location")) {
        return lang === 'fr' 
          ? "L'API Gemini n'est pas disponible dans votre région (France/UE) sans passer par un proxy ou un compte Vertex AI." 
          : "Gemini API is not available in your region.";
    }
    return lang === 'fr' 
      ? `Désolé, une erreur est survenue : ${errorMsg.substring(0, 50)}...` 
      : `Sorry, an error occurred: ${errorMsg.substring(0, 50)}...`;
  }
};
