import { GoogleGenAI } from "@google/genai";
import { CV_DATA, SKILLS, TRANSLATIONS } from "../constants";

// Déclaration pour le compilateur
declare const __APP_GEMINI_API_KEY__: string;

let genAI: GoogleGenAI | null = null;

const getAIClient = () => {
  // Récupération de la clé injectée par le build
  const apiKey = typeof __APP_GEMINI_API_KEY__ !== 'undefined' ? __APP_GEMINI_API_KEY__ : '';
  
  // Log de debug pour le navigateur (affichera les 4 premiers caractères seulement)
  if (apiKey) {
    console.log("Chatbot: Clé détectée (début: " + apiKey.substring(0, 4) + "...)");
  } else {
    console.error("Chatbot: Aucune clé API trouvée dans le bundle.");
  }

  if (!apiKey || apiKey.length < 10) return null;
  
  if (!genAI) {
    genAI = new GoogleGenAI(apiKey);
  }
  return genAI;
};

const getCVContext = (lang: 'fr' | 'en') => {
  const tData = TRANSLATIONS[lang].data;
  return `
Tu es Kernel, l'assistant de ${CV_DATA.name}. 
Réponds en ${lang === 'fr' ? 'Français' : 'Anglais'}.
Bio: ${tData.about}
Compétences: ${SKILLS.map(s => s.name).join(', ')}
`;
};

export const askCVAssistant = async (message: string, lang: 'fr' | 'en') => {
  try {
    const client = getAIClient();
    if (!client) return lang === 'fr' ? "Assistant non configuré." : "Assistant not configured.";

    const model = client.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: getCVContext(lang),
    });

    const result = await model.generateContent(message);
    return result.response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return lang === 'fr' ? "Désolé, je ne peux pas répondre." : "Sorry, I cannot answer.";
  }
};
