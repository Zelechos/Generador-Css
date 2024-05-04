const View = (props: any) => {

  const createContainerCSS = `
.container{
  display: flex;
  justify-content: center; /* Centrar horizontalmente */
  align-items: center; /* Centrar verticalmente */
  width: 100%;
  height: 50vh; /* Opcional: ajusta la altura según necesites */
}
`;
  let styleCSS;
  if (props.codeCss != null) {
    styleCSS = props.codeCss.concat(createContainerCSS);
  }
  const textValue = props.codeHtml;
  const codeHTML = `<div class="container">${textValue}</div>`
  const iframeContent = `
  <html>
    <head>
      <style>
        ${styleCSS}
      </style>
    </head>
    <body>
      ${codeHTML}
    </body>
  </html>
`;
  console.log("DESDE VIEW :", iframeContent);
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 h-[17rem]">

        <div className="p-2">
          <iframe
            title="Resultado"
            srcDoc={iframeContent}
            className="flex items-center justify-center h-[10rem] w-full col-end-12 col-span-9  rounded bg-gray-50 dark:bg-gray-800"
          />
          <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Hora: {props.date} <br></br> Usuario : {props.user}</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Copiar Estilo
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );

}
export default View;