"use client"
import View from "./view";
import { useState, useEffect } from 'react';

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Función asincrónica para realizar la solicitud GET
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/views/', {
          method: 'get',
          headers: {
            'content-type': 'application/json'
          },
        }); // Reemplaza con la URL de tu API
        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);
        } else {
          console.error('Error al obtener los datos:', response.statusText);
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    // Llamar a la función para obtener los datos cuando el componente se monta
    fetchData();
  }, []);

  return (
    <>
      <a href="https://flowbite.com/" className="flex absolute top-5 left-3">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-3 sm:h-7" alt="CSS Generator  Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Historial</span>
      </a>
      <div className="flex grid grid-cols-3 p-12 h-[40.3rem]">
        {
          data.map((view) => {
            return <View
              date={view['date']}
              codeHtml={view['codeHtml']}
              codeCss={view['codeCss']}
              user={view['user']} />
          })
        }
      </div>
    </>
  );
};

export default Page;
