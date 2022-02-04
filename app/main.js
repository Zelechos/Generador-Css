'use strict';

window.addEventListener('load', ()=> {
    
    copyStyle();
    generatorDataset();    
    
});


//======================== Exportando el Modelo Generador_Css========================
let model = null;
// Cargamos el Modelo 
const loadModel = async ()=> {
    console.log("Cargando el Modelo ...");
    model = await tf.loadLayersModel("./model.json");
    console.log("Cargando el Modelo ...");
}



const generatorDataset = ()=>{
    const styleArea = document.querySelector('#code');

    // Aqui le pasamos la etiqueta queramos
    styleArea.innerHTML= tableOfPromos(50);
}

// Subrutina para generar los colores CSS
const generatorColors = () =>{
    const digitColors = "01234565789ABCDEF";
    let color = "#";
    for (let index = 0; index < 6; index++) {
        color += digitColors.charAt(Math.floor(Math.random() * (15-0)+0));
    }
    console.log(color);
    return color
}


//Subrutina para Copiar el estilo CSS
const copyStyle = () => {
    const button = document.querySelector('#btnCopy');
    const alert = document.querySelector("#aviso");
    const input = document.querySelector('#code');
    
    button.addEventListener('click',()=>{
        input.classList.toggle('animation');
        input.focus();
        document.execCommand('selectAll');
        document.execCommand('copy');
        alert.innerHTML = "Codigo Copiado";
        setTimeout(()=> alert.innerHTML = "" , 4000);
    });
    input.classList.toggle('animation');

}
























































const load = async ()=> {
    console.log("Cargando el Modelo ...");
    setTimeout(()=>{
        console.log("Modelo Listo!!!");
    }, 4000);
}
load();