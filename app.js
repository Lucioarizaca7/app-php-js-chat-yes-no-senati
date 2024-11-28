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
       console.log('Aqui llega informacion');
       
       console.log(data.image);
       console.log(data.answer);
       agregarMensaje(data.answer,false,data.image)
       //agregarMensaje(data.answer,data.answer=='no'?true:false);
    } catch (error) {
        console.log("Error al momento de hacer peticion GET: ", error)
    }

}


let btnget = document.querySelector('#btnget');
btnget.addEventListener('click',function(){
    getbtnData();
   // alert('hola mundo');
})

//boton PUT-----------------

async function putData() {
    try {
        const respuesta = await fetch(apiURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: "Lucio Andre 1",
                apellido: "Arizaca Carrion",
                lenguaje_favorito: "JavaScript",
                color: "celeste"
            })
        });

       
        const dataRetorno = await respuesta.json();
        console.log("Respuesta del servidor:", dataRetorno);
    } catch (error) {
        console.error("Error al realizar la petición PUT:", error);
    }
}

let botonPut = document.querySelector('#put-data');
botonPut.addEventListener('click',function(){
    putData();
})


//boton delete-------------

async function deleteData() {
    console.log('Ingreso a deleteData');
    try {
        const respuesta = await fetch(`${apiURL}?id=123`,{
         method: "DELETE"
        }); 
        const data = await respuesta.json();
        console.log(data);
     } catch (error) {
         console.log("Error al momento de hacer peticion DELETE: ", error)
     }
}

let botondelete = document.querySelector('#delete-data');
botondelete.addEventListener('click',function(){
    deleteData();
})


let chatMessages = document.getElementById('chatMessages');
let chatFrom = document.getElementById('chatFrom');
let messageInput =document.getElementById('messageInput');

function agregarMensaje(mensaje, soyYo = true, imagen = null){
    const mensajeDiv = document.createElement('div');

    mensajeDiv.classList.add('message');
    mensajeDiv.classList.add(soyYo?'user-message':'api-message');
    mensajeDiv.textContent = mensaje;

    if(imagen){
        const img =  document.createElement('img')
        img.src= imagen;
        mensajeDiv.appendChild(img);

    }
    setTimeout(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight
    }, 150);

    chatMessages.appendChild(mensajeDiv);

}
// agregarMensaje("hola soy Lucio",true);
// agregarMensaje("hola soy Api",false);
chatForm.addEventListener('submit',function(e){
    e.preventDefault();
    const miMensaje = messageInput.value;
   agregarMensaje(miMensaje,true);
   getbtnData();
});


