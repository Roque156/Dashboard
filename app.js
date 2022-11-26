//Declaracion de variables
const menuUI=document.querySelector('.menu');
let c=0;

document.addEventListener('DOMContentLoaded',getimg);


async function getimg (){
    
    let randomNumber = Math.ceil(Math.random()*1000);
    const respuesta = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNumber}`)
    //const resultado = await respuesta.json();

    .then (response=> {

        let estado = response.status;
        //let datos = response.json();

        //console.log (estado);
        //console.log (response.json());
        /*const resultado = response.json()
        .then(response=>{
            console.log(resultado);
        })*/
        /*console.log(*/response.json()/*)*/
        .then(data=>{   
            /*console.log(data);
            console.log(estado);*/
            if(estado ==200 && !data.primaryImage =="" || !data.primaryImage == undefined ){
                /*console.log(data.primaryImage);
                console.log(estado);*/
                if(c<6){
                    c++;
                    console.log(data.primaryImage);
                    getimg();
                }
            }else{
                console.log(data.primaryImage + " " + 'no existe');
                console.log(estado);
                getimg();
            }
        });
   
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
