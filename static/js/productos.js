

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
         
              <h2>${producto.descripcion}</h2>
              <p>${producto.marca}</p>
              <img class="producto-imagen" src="https://www.pythonanywhere.com/user/santicasalis/files/home/santicasalis/mysite/static/img/${producto.imagen_url}" alt="Imagen de ${producto.descripcion}" onerror="this.onerror=null;this.src='${producto.imagen_alternativa}';">
              <h2 class="producto-precio">${producto.precio}</h2>
              
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



document.getElementById('buscar-bar').addEventListener('input', () => {
  const termino = document.getElementById('buscar-bar').value.toLowerCase();
  const productosFiltrados = todosLosProductos.filter(producto =>
      producto.descripcion.toLowerCase().includes(termino) ||
      producto.marca.toLowerCase().includes(termino) ||
      producto.categoria.toLowerCase().includes(termino)
  );
  mostrarProductos(productosFiltrados);
});
