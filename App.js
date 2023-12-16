const cuentas = [
    { nombre: "Romina Arenas", password: "123R", saldo: 100 },
    { nombre: "Luis García", password: "123L", saldo: 100 },
    { nombre: "Mar Demeneghi", password: "123D", saldo: 100 },
  ];
  
  document.getElementById('formId').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const selectedAccount = document.getElementById('select-form').value;
      const password = document.getElementById('inputPassword').value;
  
      const cuentaEncontrada = cuentas.find(cuenta => cuenta.nombre === selectedAccount && cuenta.password === password);
      
  
      if (cuentaEncontrada) {
          document.getElementById("message").innerHTML = "Credenciales Válidas";
          localStorage.setItem('currentUser', JSON.stringify(cuentaEncontrada));
          window.location.href = "./atm.html";

          
      } else {
          document.getElementById("message").innerHTML = "Credenciales inválidas";
          localStorage.removeItem('currentUser');
      }


  });
  