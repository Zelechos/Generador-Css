"use strict";
import { main } from "./api-model.js";

export const getGeneratedCSSStyle = async (codeHtml, color) => {
  // Model Implementation
  let response = "";
  if (codeHtml != null) {
    let realRequest = `Generame con la paleta ${randomPalette()} de colores en base al color ${color} y implementa esta paleta de colores en un solo estilo CSS para este codigo HTML sin generar codigo HTML: ${codeHtml}`;
    console.warn("GROK PREGUNTA ==> ", realRequest);
    response = await main(realRequest);
    console.warn(response);
  }
  return response;
};

const randomPalette= ()=>{
  const palettes = ["Análoga","Monocromática","Complementaria", "Triádica", "Tetrádica"];
  const randomIndex = Math.floor(Math.random() * palettes.length);
  return palettes[randomIndex]
}

const randomApproach= ()=>{
  const approachs = ["Minimalista","Flat Design","Material Design", "Skeuomorphic Design", "Neumorphism (Soft UI)", "Responsive Design", "Retro/Vintage", "Tipográfico", "Asimétrico"];
const randomIndex = Math.floor(Math.random() * approachs.length);
  return approachs[randomIndex]
}