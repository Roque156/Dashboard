//Declaracion de variables
const menuUI = document.querySelector('.menu');
const temporalUI = document.querySelector('.temporales');
let c=0;
let t=0;

document.addEventListener('DOMContentLoaded',getimg);
document.addEventListener('DOMContentLoaded',getTemp);


async function getimg (){
    
    let randomNumber = Math.ceil(Math.random()*1000);
    const respuesta = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNumber}`)

    .then (response=> {

        let estado = response.status;
        response.json()
        .then(data=>{   
            
            if(estado == 200 && !data.primaryImage == "" || !data.primaryImage == undefined ){
        
                if(c<6){
                    c++;
                    menuUI.innerHTML +=`
                    <img width="200px" src='${data.primaryImage}'>             
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
            
            if(estado == 200 && !data.primaryImage == "" || !data.primaryImage == undefined ){
        
                if(t<3){
                    t++;
                    temporalUI.innerHTML +=`
                    <img width="200px" src='${data.primaryImage}'>             
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
