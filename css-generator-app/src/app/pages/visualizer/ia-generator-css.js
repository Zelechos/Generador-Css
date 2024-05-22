"use strict";
import { main } from "./api-model.js";

export const getGeneratedCSSStyle = async (codeHtml) => {
  // Model Implementation
  let response = "";
  if (codeHtml != null) {
    let realRequest = `Generame un solo estilo CSS para este codigo HTML : ${codeHtml}`;
    console.warn("GROK PREGUNTA ==> ", realRequest);
    response = await main(realRequest);
    console.warn(response);
  }
  return response;
};
