"use client"
import { useState } from 'react';
import { obtenerHTML } from "./ia-generator-css.js";

const Visualizador = () => {
  //Text Area event INPUT HTML
  const [textValue, setTextValue] = useState('');

  const handleTextareaChange = (event: any) => {
    setTextValue(event.target.value);
    setStyleCSS(obtenerHTML(event.target.value))
  };

  // Text Area event OUTPUT CSS   
  const [styleCSS, setStyleCSS] = useState('');
  const handleCssAreaChange = (event: any) => {
    setStyleCSS(event.target.value);
  };

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
        <div className="flex grid grid-cols-3 gap-4 h-full">
          <div>
            <button data-copy-to-clipboard-target="code-block" data-copy-to-clipboard-content-type="innerHTML" data-copy-to-clipboard-html-entities="true" className="absolute text-gray-900 dark:text-gray-400 ml-96 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-1 inline-flex items-center justify-center bg-white border-gray-200 ">
              <span id="default-message" className="inline-flex items-center">
                <svg className="w-5 h-5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
            </button>
            <textarea value={textValue}
              onChange={handleTextareaChange}
              placeholder="Escribe algo..."
              className="code flex items-center justify-center w-96 p-2 rounded bg-gray-50 dark:bg-gray-800">
            </textarea>
          </div>

          <div>
            <button data-copy-to-clipboard-target="code-block" data-copy-to-clipboard-content-type="innerHTML" data-copy-to-clipboard-html-entities="true" className="absolute text-gray-900 dark:text-gray-400 ml-96 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-1 inline-flex items-center justify-center bg-white border-gray-200 ">
              <span id="default-message" className="inline-flex items-center">
                <svg className="w-5 h-5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
            </button>
            <textarea
              value={styleCSS}
              onChange={handleCssAreaChange}
              className="code flex items-center justify-center w-96 p-2 rounded bg-gray-50 dark:bg-gray-800">
            </textarea>
          </div>

          <div>
            <button data-copy-to-clipboard-target="code-block" data-copy-to-clipboard-content-type="innerHTML" data-copy-to-clipboard-html-entities="true" className="absolute text-gray-900 dark:text-gray-400 ml-96 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-1 inline-flex items-center justify-center bg-white border-gray-200 ">
              <span id="default-message" className="inline-flex items-center">
                <svg className="w-5 h-5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
            </button>
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
    </div>
  );
};

export default Visualizador;
