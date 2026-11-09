/**
 * Adds Encore, Infusion's Botpress fan assistant, as a chat window on every page.
 * Author: Praveena Vemula
 */
window.botpress.init({
  botId: "d278a299-8b3d-44f1-8318-1fcc2aa76f22",
  clientId: "ae676386-9c00-43bf-ab7b-aabc959871b0",
  configuration: {
    version: "v2",
    botName: "Encore",
    botDescription: "Friendly fan information assistant for Infusion.",
    feedbackEnabled: true,
    allowFileUpload: false,
    soundEnabled: true,
    conversationHistory: true,
    homePageEnabled: true,
    welcomeHeading: "Hi, I'm Encore, Infusion's fan assistant!",
    welcomeSubtitle: "Ask me about tour dates, tickets, the band or our music.",
    citationsEnabled: true,
    color: "#ec4899"
  }
});
