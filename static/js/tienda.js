<<<<<<< HEAD
// let noticiasJson = [
//     {
//       id: 1,
//       titulo:
//             "Nokia 1100",
//             precio:5000,
//       categoria: "Celulares",
    
//       imagen:
//         "https://media.istockphoto.com/id/1321826386/es/foto/nuevo-samsung-galaxy-s6-32gb-unboxed.jpg?s=612x612&w=0&k=20&c=M9C8iy-YyTs0mNYHkYZm7-OaGDa7kgsMWHPHaly8B1k=",
//     },
//     {
//       id: 2,
//       titulo:
//         "Iphone 8 64GB",
//         categoria: "Celulares",
//       precio:5000,
     
//       imagen:
//         "https://media.istockphoto.com/id/1321826386/es/foto/nuevo-samsung-galaxy-s6-32gb-unboxed.jpg?s=612x612&w=0&k=20&c=M9C8iy-YyTs0mNYHkYZm7-OaGDa7kgsMWHPHaly8B1k=",
//     },
//     {
//       id: 3,
//       titulo:
//         "Lenovo i5 16gb Ram ",
//         categoria: "Computadoras",
//         precio:1500000,
     
//       imagen: "https://media.istockphoto.com/id/458405389/es/foto/lenovo-thinkpad-x201-port%C3%A1til.jpg?s=612x612&w=0&k=20&c=2TSb3LMeMrtTTEYWvUE5wN2ZZ2EeJhgR2UzTGSKpmv0=",
//     },
//     {
//       id: 4,
//       titulo: "HP Got 8gb",
//       categoria: "Computadoras",
//       precio:1200000,
//       imagen:
//         "https://media.istockphoto.com/id/458405389/es/foto/lenovo-thinkpad-x201-port%C3%A1til.jpg?s=612x612&w=0&k=20&c=2TSb3LMeMrtTTEYWvUE5wN2ZZ2EeJhgR2UzTGSKpmv0=",
//     },
//     {
//       id: "5",
//       titulo: "Mouse inalambricos ",
//       categoria: "Accesorios",
//       precio:500,
//       imagen:
//         "https://media.istockphoto.com/id/1417952732/es/foto/vista-de-tres-cuartos-del-simple-rat%C3%B3n-de-ordenador-inal%C3%A1mbrico-negro-delgado-aislado-en-blanco.jpg?s=612x612&w=0&k=20&c=dJpwF0cN1QSt5DSN0car_DC1vxMJStYXoJdc1IZ3mvw=",
//     },
//     {
//       id: "6",
//       titulo:
//         "Teclado Logitech",
//         categoria: "Accesorios",
//         precio:6000,
     
//       imagen:
//         "https://media.istockphoto.com/id/93296433/es/foto/teclado.jpg?s=612x612&w=0&k=20&c=99EqDZsa-eYoo1INj2KWnA8oRk0cwGeVyBkI6jvmxX8=",
//     },
//     {
//       id: "7",
//       titulo: "Samsung Galaxy",
//         categoria: "Celulares",
//         precio:80000,
      
//       imagen:
//         "https://media.istockphoto.com/id/1321826386/es/foto/nuevo-samsung-galaxy-s6-32gb-unboxed.jpg?s=612x612&w=0&k=20&c=M9C8iy-YyTs0mNYHkYZm7-OaGDa7kgsMWHPHaly8B1k=",
//     },
  
//     {
//       id: "9",
//       titulo:
//         "Cargador USB-C",
//         categoria: "Accesorios",
//         precio:50000,
     
//       imagen:
//         "https://media.istockphoto.com/id/1364231816/es/foto/cable-usb-tipo-c-aislado-sobre-fondo-blanco-con-trazado-de-recorte.jpg?s=612x612&w=0&k=20&c=ZCurnMokfNX7BtfpJmZheHt-Rj5NppDHpbzk0L2M9Jg=",
//     },
//     {
//       id: "10",
//       titulo:
//         "Auriculares Samsung",
//       categoria: "Accesorios",
//       precio:50000,
//       imagen:
//         "https://media.istockphoto.com/id/1136444543/es/foto/samsung-galaxy-s10e.jpg?s=612x612&w=0&k=20&c=gR4IXfqv_jqrrdSGxB9o1bdCxMDvByjHQsQTirZKWyk=",
//     },
//   ];
  

const URL = "https://santicasalis.pythonanywhere.com/"


fetch(URL + 'productos')
  .then(function (response) {
    console.log(response);
      if (response.ok) {
          
            return response.json(); 
        } else {
            throw new Error('Error al obtener los productos.');
        }
    })
    .then(function (data) {
      let productos = document.getElementById('productos'); 
      console.log(data);
        for (let producto of data) {
            let productoContainer = document.createElement("div");
            productoContainer.classList.add("productoContainer");
          productoContainer.innerHTML = `
            
                 <p class="categoria-producto">${producto.categoria}</p>
                <h2>${producto.descripcion}</h2>
                <p>${producto.marca}</p>
               
                <img class="producto-imagen" src="https://www.pythonanywhere.com/user/santicasalis/files/home/santicasalis/mysite/static/img/${producto.imagen_url}" alt="Imagen de ${producto.descripcion}">
                
                <h4 class="producto-precio">${producto.precio}</h4>
                
            `;
            productos.appendChild(productoContainer);
        }
    })
    .catch(function (error) {
        // Código para manejar errores
        alert('Error al obtener los productos.');
    });
=======
let noticiasJson = [
  {
    id: 1,
    titulo:
          "Nokia 1100",
          precio:5000,
    categoria: "Celulares",
  
    imagen:
      "https://media.istockphoto.com/id/1321826386/es/foto/nuevo-samsung-galaxy-s6-32gb-unboxed.jpg?s=612x612&w=0&k=20&c=M9C8iy-YyTs0mNYHkYZm7-OaGDa7kgsMWHPHaly8B1k=",
  },
  {
    id: 2,
    titulo:
      "Iphone 8 64GB",
      categoria: "Celulares",
    precio:5000,
   
    imagen:
      "https://media.istockphoto.com/id/1321826386/es/foto/nuevo-samsung-galaxy-s6-32gb-unboxed.jpg?s=612x612&w=0&k=20&c=M9C8iy-YyTs0mNYHkYZm7-OaGDa7kgsMWHPHaly8B1k=",
  },
  {
    id: 3,
    titulo:
      "Lenovo i5 16gb Ram ",
      categoria: "Computadoras",
      precio:1500000,
   
    imagen: "https://media.istockphoto.com/id/458405389/es/foto/lenovo-thinkpad-x201-port%C3%A1til.jpg?s=612x612&w=0&k=20&c=2TSb3LMeMrtTTEYWvUE5wN2ZZ2EeJhgR2UzTGSKpmv0=",
  },
  {
    id: 4,
    titulo: "HP Got 8gb",
    categoria: "Computadoras",
    precio:1200000,
    imagen:
      "https://media.istockphoto.com/id/458405389/es/foto/lenovo-thinkpad-x201-port%C3%A1til.jpg?s=612x612&w=0&k=20&c=2TSb3LMeMrtTTEYWvUE5wN2ZZ2EeJhgR2UzTGSKpmv0=",
  },
  {
    id: "5",
    titulo: "Mouse inalambricos ",
    categoria: "Accesorios",
    precio:500,
    imagen:
      "https://media.istockphoto.com/id/1417952732/es/foto/vista-de-tres-cuartos-del-simple-rat%C3%B3n-de-ordenador-inal%C3%A1mbrico-negro-delgado-aislado-en-blanco.jpg?s=612x612&w=0&k=20&c=dJpwF0cN1QSt5DSN0car_DC1vxMJStYXoJdc1IZ3mvw=",
  },
  {
    id: "6",
    titulo:
      "Teclado Logitech",
      categoria: "Accesorios",
      precio:6000,
   
    imagen:
      "https://media.istockphoto.com/id/93296433/es/foto/teclado.jpg?s=612x612&w=0&k=20&c=99EqDZsa-eYoo1INj2KWnA8oRk0cwGeVyBkI6jvmxX8=",
  },
  {
    id: "7",
    titulo: "Samsung Galaxy",
      categoria: "Celulares",
      precio:80000,
    
    imagen:
      "https://media.istockphoto.com/id/1321826386/es/foto/nuevo-samsung-galaxy-s6-32gb-unboxed.jpg?s=612x612&w=0&k=20&c=M9C8iy-YyTs0mNYHkYZm7-OaGDa7kgsMWHPHaly8B1k=",
  },

  {
    id: "9",
    titulo:
      "Cargador USB-C",
      categoria: "Accesorios",
      precio:50000,
   
    imagen:
      "https://media.istockphoto.com/id/1364231816/es/foto/cable-usb-tipo-c-aislado-sobre-fondo-blanco-con-trazado-de-recorte.jpg?s=612x612&w=0&k=20&c=ZCurnMokfNX7BtfpJmZheHt-Rj5NppDHpbzk0L2M9Jg=",
  },
  {
    id: "10",
    titulo:
      "Auriculares Samsung",
    categoria: "Accesorios",
    precio:50000,
    imagen:
      "https://media.istockphoto.com/id/1136444543/es/foto/samsung-galaxy-s10e.jpg?s=612x612&w=0&k=20&c=gR4IXfqv_jqrrdSGxB9o1bdCxMDvByjHQsQTirZKWyk=",
  },
];





//const URL = "http://127.0.0.1:5000/"
  const URL = "https://santicasalis.pythonanywhere.com/"
  
  fetch(URL + 'productos')
          .then(function (response) {
              if (response.ok) {
                  //Si la respuesta es exitosa (response.ok), convierte el cuerpo de la respuesta de formato JSON a un objeto JavaScript y pasa estos datos a la siguiente promesa then.
                  return response.json(); 
          } else {
                  // Si hubo un error, lanzar explícitamente una excepción para ser "catcheada" más adelante
                  throw new Error('Error al obtener los productos.');
              }
          })
         //.then(function (data) {

.then(function (data) {


  let productosContainer = document.getElementById("productos");

  data.forEach(function (articulo) {
    let  productoContainer = document.createElement("div");
    productoContainer.classList.add("productoContainer");
    productoContainer.setAttribute("style", "width: 300px; height: 300px;");

    let categoria = document.createElement("p");
    categoria.textContent = articulo.categoria;
    categoria.classList.add("producto-noticia")
    let imagen = document.createElement("img");
    imagen.src = articulo.imagen_url
    imagen.alt = articulo.categoria;
    imagen.setAttribute("style", "width: 300px; height: auto;");

    let titulo = document.createElement("h3");
    titulo.textContent = articulo.titulo;

    let precio = document.createElement("p");
      precio.textContent = `$${articulo.precio}`
      precio.classList.add("producto-precio")
      

    productoContainer.appendChild(categoria);
    productoContainer.appendChild(imagen);
      productoContainer.appendChild(titulo);
      productoContainer.appendChild(precio);
    productosContainer.appendChild(productoContainer);
  });
})

function mostrarDetalleNoticia(articulo) {
  

  var detalleHTML = `
  <style>
  body {
      font-family: Arial, sans-serif;
      background-color: #f8f8f8;
      padding: 20px;
  }
  h2 {
      color: #333;
  }
  p {
      margin-bottom: 10px;
  }
  img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
  }
</style>
      <h2>${articulo.titulo}</h2>
      <p> ${articulo.categoria}</p>
       <img src="${articulo.imagen}" alt="imagen de  ${articulo.categoria}">
      <h4> ${articulo.resumen}</h4>
      <p> ${articulo.contenido}</p>
     
      </div>
    `;

   
}
window.onload = cargarProductos;
  
>>>>>>> 949fa8754595ce0a349057da35f6e6078b31d75c
