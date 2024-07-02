"use strict";
//  process.env.GROQ_API_KEY
const Groq = require("groq-sdk");
const groq = new Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});
async function main(codeToModel) {
  const chatCompletion = await getGroqChatCompletion(codeToModel);
  // Print the completion returned by the LLM.
  let codeResponse = chatCompletion.choices[0]?.message?.content || "";

  console.log(codeResponse);

  const regex = /```(.*?)```/gs;
  // Usar `match` para encontrar el contenido entre comillas invertidas
  const matches = [...codeResponse.matchAll(regex)];
  const contents = matches.map(match => match[1].replace(/css/g, ''));
  console.log(contents[0]);
  // console.log(contents[1]);

  return contents[0];
}
async function getGroqChatCompletion(codeToModel) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: codeToModel,
      },
    ],
    model: "llama3-8b-8192",
  });
}
module.exports = {
  main,
  getGroqChatCompletion,
};
