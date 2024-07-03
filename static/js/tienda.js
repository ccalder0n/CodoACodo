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
  



const URL = "https://ninjaproductos.pythonanywhere.com/";

let todosLosProductos = [];

document.addEventListener('DOMContentLoaded', () => {
    fetch(URL + 'productos')
        .then(response => {
            if (response.ok) {
                return response.json(); 
            } else {
                throw new Error('Error al obtener los productos.');
            }
        })
        .then(data => {
            todosLosProductos = data;
            mostrarProductos(todosLosProductos);
        })
        .catch(error => {
            alert('Error al obtener los productos.');
        });
});

function mostrarProductos(productos) {
  let productosContainer = document.getElementById('productos');
  productosContainer.innerHTML = '';

  if (productos.length === 0) {
    let mensaje = document.createElement("p");
    mensaje.classList.add("errorBusqueda")
      mensaje.innerText = "No se ha encontrado ningún artículo.";
      productosContainer.appendChild(mensaje);
  } else {
      productos.forEach(producto => {
          let productoContainer = document.createElement("div");
          productoContainer.classList.add("productoContainer");
          productoContainer.innerHTML = `
              <p class="categoria-producto">${producto.categoria}</p>
              <button class="boton-eliminar" onclick="eliminarProducto('${producto.codigo}')">X</button>
              <h2>${producto.descripcion}</h2>
              <p>${producto.marca}</p>
             <img class="producto-imagen" src="https://www.pythonanywhere.com/user/santicasalis/files/home/santicasalis/mysite/static/img/${producto.imagen_url}" alt="Imagen de ${producto.descripcion}" onerror="this.onerror=null;this.src='${producto.imagen_alternativa}';">
              <h2 class="producto-precio">${producto.precio}</h2>
              <button class="button-editar"><a href="editar.html?codigo=${producto.codigo}">Editar</a></button>
          `;
          productosContainer.appendChild(productoContainer);
      });
  }
}

function filtrarPorCategoria(categoria) {
  const productosFiltrados = todosLosProductos.filter(producto => 
      producto.categoria.toLowerCase() === categoria.toLowerCase()
  );
  mostrarProductos(productosFiltrados);
}
function mostrarTodos() {
  mostrarProductos(todosLosProductos);
}

function ordenarPorPrecio(orden) {
  let productosOrdenados = [...todosLosProductos]; 
  if (orden === 'asc') {
      productosOrdenados.sort((a, b) => parseFloat(a.precio) - parseFloat(b.precio));
  } else if (orden === 'desc') {
      productosOrdenados.sort((a, b) => parseFloat(b.precio) - parseFloat(a.precio));
  } else {
      productosOrdenados = todosLosProductos; 
  }

  mostrarProductos(productosOrdenados);
}


function eliminarProducto(codigo) {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
        fetch(URL + `productos/${codigo}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    alert('Producto eliminado.');
                    window.location.reload();
                }
            })
            .catch(error => {
                alert(error.message);
            });
    }
}

document.getElementById('buscar-bar').addEventListener('input', () => {
  const termino = document.getElementById('buscar-bar').value.toLowerCase();
  const productosFiltrados = todosLosProductos.filter(producto =>
      producto.descripcion.toLowerCase().includes(termino) ||
      producto.marca.toLowerCase().includes(termino) ||
      producto.categoria.toLowerCase().includes(termino)
  );
  mostrarProductos(productosFiltrados);
});
