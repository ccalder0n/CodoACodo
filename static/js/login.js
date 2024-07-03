document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
   
    var usuario = document.getElementById('usuario').value;
    var contraseña = document.getElementById('contraseña').value;
    
    if (usuario === 'admin@mail.com' && contraseña === 'admin123') {
        
        localStorage.setItem('authenticated', 'true');
       
        window.location.href = '../templates/tienda.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

function checkAuthentication() {
    if (localStorage.getItem('authenticated') !== 'true') {
     
        window.location.href = '../templates/login.html';
    }
}

