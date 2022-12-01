//Declaracion de variables

let w=0;
const agenUI = document.querySelector('.agenda');


export const getAge = async ()=>{
    
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
