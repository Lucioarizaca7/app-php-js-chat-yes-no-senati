const apiURL = "http://localhost/app-php-js-chat-yes-no-senati/api.php";

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