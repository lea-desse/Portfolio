
import { GoogleGenAI } from "@google/genai";
import { CV_DATA, SKILLS, TRANSLATIONS } from "../constants";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

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
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: getCVContext(lang),
        temperature: 0.7,
      },
    });
    return response.text || (lang === 'fr' ? "Désolé, je rencontre une difficulté technique." : "Sorry, I'm experiencing technical difficulties.");
  } catch (error) {
    console.error("Gemini Error:", error);
    return lang === 'fr' ? "Je ne peux pas répondre pour le moment." : "I cannot answer at the moment.";
  }
};
