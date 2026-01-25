import { GoogleGenAI } from "@google/genai";
import { CV_DATA, SKILLS, TRANSLATIONS } from "../constants";

// Initialize AI lazily to avoid crashing if key is missing
let genAI: GoogleGenAI | null = null;

const getAIClient = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  // Si la clé est vide ou n'est pas une chaîne valide
  if (!apiKey || typeof apiKey !== 'string' || apiKey.length < 5) {
    console.error("VITE_GEMINI_API_KEY is missing or invalid in the environment.");
    return null;
  }
  
  if (!genAI) {
    try {
      genAI = new GoogleGenAI(apiKey);
    } catch (e) {
      console.error("Failed to initialize GoogleGenAI:", e);
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
      console.error("Gemini Client could not be initialized (Key issue)");
      return lang === 'fr' 
        ? "L'assistant est actuellement désactivé. Vérifiez que la clé API est bien configurée dans les Secrets GitHub." 
        : "The assistant is currently disabled. Please check the API key configuration in GitHub Secrets.";
    }

    const model = client.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: getCVContext(lang),
    });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();
    
    return text || (lang === 'fr' ? "Désolé, je rencontre une difficulté technique." : "Sorry, I'm experiencing technical difficulties.");
  } catch (error) {
    console.error("Gemini API Error Detail:", error);
    return lang === 'fr' ? "Je ne peux pas répondre pour le moment. (Erreur technique)" : "I cannot answer at the moment. (Technical error)";
  }
};