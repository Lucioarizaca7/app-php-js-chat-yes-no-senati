// boton get---------------------------------------------------------
const apiURL = "http://localhost/app-php-js-chat-yes-no-senati/api.php";
const apiurl = "https://yesno.wtf/api"

async function getData(){
    console.log('Ingreso a get data');
    try {
       const respuesta = await fetch(`${apiURL}?id=123&nombre=Lucio&apellido=Arizaca`,{
        method: "GET"
       }); 
       const data = await respuesta.json();
       console.log(data);
    } catch (error) {
        console.log("Error al momento de hacer peticion GET: ", error)
    }

}

let botonget = document.querySelector('#getdata');
botonget.addEventListener('click',function(){
    getData();
})

// boton post-------------------------------------------------------------

async function postData(){
    //alert ('Ingreso aquiiiiiiiiiiii')
    try {
        const respuesta = await fetch(apiURL,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre : "Lucio",
                apellido : "Arizaca",
                lenguaje_favorito : "JavaScript",
                color : "caleste"
            })
        });
        const data_retorno = await respuesta.json();
        console.log(data_retorno);
        
    } catch (error) {
        console.log("Error al momento de hacer la peticion POST:", error);
    }

};

let botonPost = document.querySelector('#post-data');
botonPost.addEventListener('click', function(){
     postData();
    // => alert('Ingreso aquiiiiiiiiiiiiiii');
})

//api_yes_no------------------

async function getbtnData(){
    console.log('Ingreso a get data');
    try {
       const respuesta = await fetch(apiurl ,{
        method: "GET"
       }); 
       const data = await respuesta.json();
       console.log(data.image);
       console.log(data.answer);
    } catch (error) {
        console.log("Error al momento de hacer peticion GET: ", error)
    }

}


let btnget = document.querySelector('#btnget');
btnget.addEventListener('click',function(){
    getbtnData();
   // alert('hola mundo');
})