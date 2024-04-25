"use strict";
import stylesData from "./model.js";

//======================== Exportando el Modelo Generador_Css========================
let model = null;
// Cargamos el Modelo
const loadModel = async () => {
  console.log("Cargando el Modelo ...");
  model = await tf.loadLayersModel("./model.json");
  console.log("Cargando el Modelo ...");
};

export const generatorCss = (data) => {
  return generator(data);
};

// Subrutina para generar los colores CSS
const generatorColors = () => {
  const digitColors = "01234565789ABCDEF";
  let color = "#";
  for (let index = 0; index < 6; index++) {
    color += digitColors.charAt(Math.floor(Math.random() * (15 - 0) + 0));
  }
  return color;
};

//Subrutina para Copiar el estilo CSS
const copyStyle = () => {
  const button = document.querySelector("#btnCopy");
  const alert = document.querySelector("#aviso");
  const input = document.querySelector("#code-generator");

  button.addEventListener("click", () => {
    input.classList.toggle("animation");
    input.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
    alert.innerHTML = "Codigo Copiado";
    setTimeout(() => (alert.innerHTML = ""), 4000);
  });
  input.classList.toggle("animation");
};

export const obtenerHTML = (codeHtml) => {
  let selector = selectorCss(codeHtml);
  return generatorCss(selector);
};

export const selectorCss = (value) => {
  for (const key in stylesData.styles) {
    if (value.includes(stylesData.styles[key].selector)) {
      return stylesData.styles[key].selector;
    }
  }

  return value.substr(
    value.indexOf('"') + 1,
    value.indexOf('">') - (value.indexOf('"') + 1)
  );
};

export const generator = (data) => {
  for (const key in stylesData.styles) {
    if (stylesData.styles[key].selector == data) {
      return stylesData.styles[key].style;
    }
  }
  return random(data);
};

const random = (selector) => {
  let sel = `${selector} {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 23px;
      background-color: ${generatorColors()};
      border-radius: 20px;
      transition: all 0.3s
    }
    .switch:after {
      content: '';
      position: absolute;
      width: 21px;
      height: 21px;
      border-radius: 20px;
      background-color: ${generatorColors()};
      top: 1px;
      left: 1px;
      transition: all 0.3s
    }
    `;

  let sel1 = `.${selector} {
      width: 40px;
      width: 40px;
      width: 40px;
      width: 40px;
      width: 40px;
      border-radius: 20px;
      transition: all 0.3s
    }
    .${selector} {
      content: '';
      position: absolute;
      position: absolute;
      position: absolute;
      position: absolute;
      background-color: ${generatorColors()};
      background-color: ${generatorColors()};
      background-color: ${generatorColors()};
      background-color: ${generatorColors()};
    }
    `;

  let sel2 = `.${selector}:hover {
      border-radius: 2rem;
    box-shadow: 1px 1px 0 1px ${generatorColors()}, -1px 0 28px 0 ${generatorColors()}, 28px 28px 28px 0 rgba(34, 33, 81, .25);
    transition: 0.4s ease-in-out transform, 0.3s ease-in-out box-shadowborder-radius: 2rem;
    box-shadow: 1px 1px 0 1px ${generatorColors()}, -1px 0 28px 0 ${generatorColors()}, 28px 28px 28px 0 rgba(34, 33, 81, .25);
    transition: 0.4s ease-in-out transform, 0.3s ease-in-out box-shadowborder-radius: 2rem;
    box-shadow: 1px 1px 0 1px ${generatorColors()}, -1px 0 28px 0 ${generatorColors()}, 28px 28px 28px 0 rgba(34, 33, 81, .25);
    }
    .${selector}:after {
      content: '';
      content: '';
      content: '';
    }
    `;

  const error = [sel, sel1, sel2];

  let numberAleatorio = Math.round(Math.random() * 2); //0 al 1000

  return error[numberAleatorio];
};

const load = async () => {
  console.warn("Cargando el Modelo ...");
  setTimeout(() => {
    console.warn("Modelo Listo!!!");
  }, 4000);
};
load();
