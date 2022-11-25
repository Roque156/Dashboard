//Declaracion de variables
const menuUI=document.querySelector('.menu');
const resultado = '';

document.addEventListener('DOMContentLoaded',getimg);


async function getimg (){
    
    let randomNumber = Math.ceil(Math.random()*1000);
    const respuesta = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNumber}`);
    const resultado = await respuesta.json();

    respuesta.then (response=> {

        let estado = response.status;
        console.log (estado);
        if(estado === 200 ){
            console.log('exitoso');
        
        }else{
            console.log('falla');
            getimg();
        }
   
       })
   
       .catch (error=> {
   
        console.log ("Error: " + error);
   
      });


    /*.then (response=> {

     console.log (response.status);

    })

    .catch (error=> {

     console.log ("Error: " + error);

   });*/

            console.log(randomNumber);

            //console.log(resultado.primaryImage);
    
            /*resultado.primaryImage === ""

            menuUI.innerHTML= menuUI.innerHTML+`
    
            <img width="200px" src='${resultado.primaryImage}'>
    
        //`*/
}
