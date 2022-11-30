//Declaracion de variables
const menuUI = document.querySelector('.menu');
const temporalUI = document.querySelector('.temporales');
/*const wid1UI = document.querySelector('.widget-1');
const wid2UI = document.querySelector('.widget-2');
const wid3UI = document.querySelector('.widget-3');*/
const agenUI = document.querySelector('.agenda');

let c=0;
let t=0;
let w=0;

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
            
            if(estado == 200 && !data.primaryImageSmall == "" || !data.primaryImageSmall == undefined ){
        
                if(c<6){
                    c++;
                    menuUI.innerHTML +=`
                    <div class = "destacados">
                        <img width="200px" src='${data.primaryImageSmall}'>
                            <div class= "descripcion" >
                                <h4>'${data.title}'</h4>
                                <h5>'${data.artistDisplayName}'</h5>
                            </div>             
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

async function getTemp (){
    
    let randomNumber = Math.ceil(Math.random()*1000);
    const respuesta = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNumber}`)

    .then (response=> {

        let estado = response.status;
        response.json()
        .then(data=>{   
            
            if(estado == 200 && !data.primaryImageSmall == "" || !data.primaryImageSmall == undefined ){
        
                if(t<2){
                    t++;
                    temporalUI.innerHTML +=`
                    <img width="200px" src='${data.primaryImageSmall}'>             
                    `
                    getTemp();
                }
            }else{
                getTemp();
            }
        });
   
       })
   
       .catch (error=> {
   
        console.log ("Error: " + error);
   
      });
    
}
async function getAge (){
    
    let randomNumber = Math.ceil(Math.random()*1000);
    const respuesta = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNumber}`)

    .then (response=> {

        let estado = response.status;
        response.json()
        .then(data=>{   
            
            if(estado == 200 && !data.primaryImageSmall == "" || !data.primaryImageSmall == undefined ){
        
                if(w<3){
                    w++;
                    agenUI.innerHTML +=`
                    <img width="200px" src='${data.primaryImageSmall}'>             
                    `
                    getAge();
                }

            }else{
                getAge();
            }
        });
   
       })
   
       .catch (error=> {
   
        console.log ("Error: " + error);
   
      });
    
}

