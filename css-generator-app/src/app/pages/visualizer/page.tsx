"use client"
import { useState } from 'react';
import { obtenerHTML } from "./ia-generator-css.js";
import CodeEditorHTML from '../visualizer/code_editor';
import CssEditor from '../visualizer/code_editor_css';

const Visualizador = () => {
  //Text Area event INPUT HTML
  const [textValue, setTextValue] = useState('');

  // const handleTextareaChange = (event: any) => {
  //   setTextValue(event.target.value);
  //   setStyleCSS(obtenerHTML(event.target.value))
  // };

  // Text Area event OUTPUT CSS   
  const [styleCSS, setStyleCSS] = useState('');
  // const handleCssAreaChange = (event: any) => {
  //   setStyleCSS(event.target.value);
  // };
  const handleCodeChange = (newCode: any) => {
    // console.log('Código actualizado:', newCode);
    setTextValue(newCode)
    setStyleCSS(obtenerHTML(newCode))
  };

  const handleCodeCSSChange = (newCodeCSS: any) => {
    // console.log('Código actualizado:', newCodeCSS);
    setStyleCSS(newCodeCSS)
  };
  
  console.log("SE ACTIVE EN EL PAGE CSS",styleCSS);
  console.log("SE ACTIVE EN EL PAGE HTML",textValue);
  // Iframe
  const iframeContent = `
  <html>
    <head>
      <style>
        ${styleCSS}
      </style>
    </head>
    <body>
      ${textValue}
    </body>
  </html>
`;


  return (
    <div className="p-0 sm:ml-4 my-2 h-[39rem]">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 h-full">
        <div className="grid grid-cols-3 gap-4 h-full">
          <div className="flex items-center justify-center min-h-96 rounded bg-gray-50 dark:bg-gray-800">
            <CodeEditorHTML  onCodeChange={handleCodeChange} />
          </div>
          <div className="flex items-center justify-center min-h-96 rounded bg-gray-50 dark:bg-gray-800">
            <CssEditor codeCSS={styleCSS} onCodeChange={handleCodeCSSChange}/>
          </div>
          {/* <textarea value={textValue}
            onChange={handleTextareaChange}
            placeholder="Escribe algo..."
            className="flex items-center justify-center min-h-96 rounded bg-gray-50 dark:bg-gray-800">
          </textarea> */}
          {/* <textarea
            value={styleCSS}
            onChange={handleCssAreaChange}
            className="flex items-center justify-center min-h-96 rounded bg-gray-50 dark:bg-gray-800">
          </textarea> */}
          <iframe
            title="Resultado"
            width="100%"
            height="100%"
            srcDoc={iframeContent}
            className="flex items-center justify-center col-end-12 col-span-9 min-h-96 rounded bg-gray-50 dark:bg-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Visualizador;
