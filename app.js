import {getTemp} from './temporal.js'
import {getAge} from './agenda.js';

//Declaracion de variables
const menuUI = document.querySelector('.menu');
let c=0;

//Eventos
document.addEventListener('DOMContentLoaded',getimg);
document.addEventListener('DOMContentLoaded',getTemp);
document.addEventListener('DOMContentLoaded',getAge);

async function getimg (){
    
    let randomNumber = Math.ceil(Math.random()*1000);
    const respuesta = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNumber}`)

    .then (response=> {

        let estado = response.status;
        response.json()
        .then(data=>{   
            
            if(estado == 200 && !data.primaryImageSmall == "" || !data.primaryImageSmall == undefined
                && !data.artistDisplayName == "" || !data.artistDisplayName == undefined ){
        
                if(c<6){
                    c++;
                    menuUI.innerHTML +=`
                    <div class = "destacados">
                        <img src='${data.primaryImageSmall}'>
                        <h4 class="artista">'${data.artistDisplayName}'</h4>
                    </div>
                    `
                    getimg();
                }
            }else{
                getimg();
            }
        });
   
       })
   
       .catch (error=> {
   
        console.log ("Error: " + error);
   
      });
    
}


