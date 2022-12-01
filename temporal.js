//Declaracion de variables

let t=0;
const temporalUI = document.querySelector('.temporales');

export const getTemp = async ()=>{
    
    let randomNumber = Math.ceil(Math.random()*1000);
    const respuesta = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNumber}`)

    .then (response=> {

        let estado = response.status;
        response.json()
        .then(data=>{   
            
            if(estado == 200 && !data.primaryImageSmall == "" || !data.primaryImageSmall == undefined 
                && data.artistDisplayBio == "" || !data.artistDisplayBio == undefined){
        
                if(t<2){
                    t++;
                    temporalUI.innerHTML +=`
                    <div class="temporal">
                        <img width="200px" src='${data.primaryImageSmall}'>
                        <h4 class="bio">'${data.artistDisplayBio}'</h4>    
                    </div>
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
