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
                    <div class="contenido">
                            <img width="350px" height="500px" src='${data.primaryImageSmall}'>         
                            <h4 class="text">'${data.classification}'</h4>
                            <h4 class="text">'${data.title}'</h4>
                            <h5>DICIEMBRE -22 / ENERO-23</h5>
                            <a href="">Leer mas...</>
                    </div>
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
