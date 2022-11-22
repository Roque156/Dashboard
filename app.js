//Declaracion de variables
const jumbotronUI=document.querySelector('.jumbotron');

//document.addEventListener('DOMContentLoaded',getimg);

/*async function getimg (){

    let randomNumber = Math.ceil(Math.random()*1000);
    const respuesta = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNumber}`);
    
    if(respuesta.status === 200){
    
        const resultado = await respuesta.json();

        console.log(resultado.primaryImage);
    
        if(resultado.primaryImage === ""){
            getimg();
        }

        jumbotronUI.innerHTML=`
    
        <img width="200px" src='${resultado.primaryImage}'>
    
        `
    }
    else {
        getimg();
    }
    
}*/

