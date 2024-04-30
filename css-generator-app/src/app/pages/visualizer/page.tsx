"use client"
import { useRef, useState } from 'react';
import { obtenerHTML } from "./ia-generator-css.js";
import View from '../history/view';

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
  let iframeContent = `
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

  // Send Code to View
  //  const [code, setCode] = useState("");

  const sendCode = () => {
    // setCode("Hola desde el padre");
    <View codeHtml={textValue} codeCss={styleCSS} />
  };

  // Copy HTML CODE
  const textAreaRef = useRef(null);
  const handleCopyHtmlCode = () => {
    if (textAreaRef.current != null) {
      textAreaRef.current.select();
    }
    document.execCommand('copy');
  }
  // Clean HTML CODE
  const handleCleanHtmlCode = () => {
    if (textAreaRef.current) {
      textAreaRef.current.value = ''; // Limpiar el valor del textarea
    }
  }


  // Copy CSS CODE
  const textAreaRefCSS = useRef(null);
  const handleCopyCSSCode = () => {
    if (textAreaRefCSS.current != null) {
      textAreaRefCSS.current.select();
    }
    document.execCommand('copy');
  }
  // Clean CSS CODE
  const handleCleanCssCode = () => {
    if (textAreaRefCSS.current) {
      textAreaRefCSS.current.value = ''; // Limpiar el valor del textarea
    }
  }

  // Copy IFRAME CODE
  const iframeRef = useRef(null);
  const handleCopyIframe = () => {
    const iframe = iframeRef.current;
    // Verificar si el iframe está disponible
    if (iframe && iframe.contentDocument) {
      // Seleccionar el texto dentro del iframe
      const content = iframeContent;
      // Copiar el contenido al portapapeles
      navigator.clipboard.writeText(content)
        .then(() => {
          console.log('Contenido del iframe copiado con éxito');
        })
        .catch((error) => {
          console.error('Error al copiar el contenido del iframe:', error);
        });
    }
  }

  return (
    <div className="p-0 h-full">
      <div className="p-4 dark:border-gray-700 h-full">
        <div className="flex grid grid-cols-3 gap-4 h-full">
          <div>
            <button data-copy-to-clipboard-target="code-block" data-copy-to-clipboard-content-type="innerHTML" data-copy-to-clipboard-html-entities="true" className="absolute text-gray-900 dark:text-gray-400 ml-[23rem] hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-1 inline-flex items-center justify-center bg-white border-gray-200" onClick={handleCopyHtmlCode}>
              <span id="default-message" className="inline-flex items-center">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 -2 18 24">
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
            </button>
            <button data-copy-to-clipboard-target="code-block" data-copy-to-clipboard-content-type="innerHTML" data-copy-to-clipboard-html-entities="true" className="absolute text-gray-900 dark:text-gray-400 ml-[25rem] hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-1 inline-flex items-center justify-center bg-white border-gray-200" onClick={handleCleanHtmlCode}>
              <span id="default-message" className="inline-flex items-center">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd" />
                </svg>

              </span>
            </button>
            <textarea value={textValue}
              onChange={handleTextareaChange}
              placeholder="Escribe codigo <HTML> ..."
              className="h-[35rem] w-[27rem] flex items-center justify-center w-96 p-2 rounded bg-gray-50 dark:bg-gray-800"
              ref={textAreaRef}>
            </textarea>
          </div>

          <div>
            <button data-copy-to-clipboard-target="code-block" data-copy-to-clipboard-content-type="innerHTML" data-copy-to-clipboard-html-entities="true" className="absolute text-gray-900 dark:text-gray-400 ml-[23rem] hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-1 inline-flex items-center justify-center bg-white border-gray-200" onClick={handleCopyCSSCode}>
              <span id="default-message" className="inline-flex items-center">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 -2 18 24">
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
            </button>
            <button data-copy-to-clipboard-target="code-block" data-copy-to-clipboard-content-type="innerHTML" data-copy-to-clipboard-html-entities="true" className="absolute text-gray-900 dark:text-gray-400 ml-[25rem] hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-1 inline-flex items-center justify-center bg-white border-gray-200" onClick={handleCleanCssCode}>
              <span id="default-message" className="inline-flex items-center">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd" />
                </svg>

              </span>
            </button>
            <textarea
              value={styleCSS}
              onChange={handleCssAreaChange}
              placeholder="Genera codigo CSS ..."
              className="h-[35rem] w-[27rem] flex items-center justify-center w-96 p-2 rounded bg-gray-50 dark:bg-gray-800"
              ref={textAreaRefCSS}>
            </textarea>
          </div>

          <div>
            <button data-copy-to-clipboard-target="code-block" data-copy-to-clipboard-content-type="innerHTML" data-copy-to-clipboard-html-entities="true" className="absolute  text-gray-900 dark:text-gray-400 ml-[25rem] hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-1 inline-flex items-center justify-center bg-white border-gray-200" onClick={handleCopyIframe}>
              <span id="default-message" className="inline-flex items-center">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 -2 18 24">
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
            </button>
            <iframe
              title="Resultado"
              width="100%"
              height="100%"
              srcDoc={iframeContent}
              className="flex items-center justify-center h-[35rem] w-[27rem] col-end-12 col-span-9 min-h-96 rounded bg-gray-50 dark:bg-gray-800"
              ref={iframeRef}
            />
          </div>

          <button className="inline-flex w-[15rem] items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={sendCode}>
            Save the Style
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Visualizador;
