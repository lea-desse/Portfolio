import { GoogleGenAI } from "@google/genai";
import { CV_DATA, SKILLS, TRANSLATIONS } from "../constants";

// Déclaration pour TypeScript
declare global {
  const __APP_GEMINI_API_KEY__: string | undefined;
}

// Initialize AI lazily to avoid crashing if key is missing
let genAI: GoogleGenAI | null = null;

const getAIClient = () => {
  // On cherche d'abord dans notre variable personnalisée, puis dans import.meta.env
  const apiKey = (typeof __APP_GEMINI_API_KEY__ !== 'undefined' && __APP_GEMINI_API_KEY__) 
                 || import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey) {
    console.error("DEBUG: No API Key found in __APP_GEMINI_API_KEY__ or import.meta.env");
    return null;
  }
  
  if (!genAI) {
    try {
      genAI = new GoogleGenAI(apiKey);
    } catch (e) {
      console.error("DEBUG: Failed to initialize GoogleGenAI constructor:", e);
      return null;
    }
  }
  return genAI;
};

const getCVContext = (lang: 'fr' | 'en') => {
  const tData = TRANSLATIONS[lang].data;
  const tGeneral = TRANSLATIONS[lang];

  return `
Tu es Kernel, l'assistant personnel intelligent de ${CV_DATA.name}, une ingénieure en logiciel embarqué. 
Ton but est de répondre aux questions des recruteurs ou visiteurs sur son profil en utilisant la langue : ${lang === 'fr' ? 'Français' : 'Anglais'}.

Identité:
- Ton nom est Kernel.
- Tu es amical, technique mais accessible, et tu valorises la précision (comme tout bon ingénieur).

Profil de Léa:
- Nom: ${CV_DATA.name}
- Localisation: ${CV_DATA.location}
- Bio: ${tData.about}

Compétences:
${SKILLS.map(s => `- ${s.name} (Niveau: ${s.level}%)`).join('\n')}

Expériences:
${tData.experiences.map((e: any) => `- ${e.role} chez ${e.company} (${e.period})`).join('\n')}

Projets majeurs:
${tData.projects.map((p: any) => `- ${p.title}: ${p.description}`).join('\n')}

Réponds de manière professionnelle, concise et chaleureuse. N'hésite pas à utiliser un ton légèrement enthousiaste quand tu parles de ses projets techniques. Si tu ne connais pas la réponse, suggère de contacter ${CV_DATA.name} par email à ${CV_DATA.email}.
Always respond in ${lang === 'fr' ? 'French' : 'English'}.
`;
};

export const askCVAssistant = async (message: string, lang: 'fr' | 'en') => {
  try {
    const client = getAIClient();
    if (!client) {
      return lang === 'fr' 
        ? "L'assistant est désactivé (problème de configuration de clé)." 
        : "Assistant disabled (API key configuration issue).";
    }

    const model = client.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: getCVContext(lang),
    });

    const result = await model.generateContent(message);
    const response = await result.response;
    return response.text();
    
  } catch (error: any) {
    console.error("Gemini API Error Detail:", error);
    if (error?.message?.includes("API Key must be set")) {
        return lang === 'fr' 
            ? "Erreur : La clé API est vide au moment de l'appel." 
            : "Error: API Key is empty during call.";
    }
    return lang === 'fr' ? "Je ne peux pas répondre pour le moment." : "I cannot answer at the moment.";
  }
};