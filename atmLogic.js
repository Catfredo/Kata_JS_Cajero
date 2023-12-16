const currentUser = JSON.parse(localStorage.getItem("currentUser"));
let saldo = currentUser.saldo;

document.getElementById("nameUser").innerHTML = currentUser.nombre;

document.getElementById("btn-consult").addEventListener("click", function () {
  document.getElementById("form-sustract").style.visibility = "hidden";
  document.getElementById("form-add").style.visibility = "hidden";
  document.getElementById("dinamic-title").innerHTML = "Consultar Saldo";
  document.getElementById("message").innerHTML = `Tu saldo actual: ${saldo}`;
});

document.getElementById("btn-add").addEventListener("click", function () {
  document.getElementById("dinamic-title").innerHTML =
    "Ingrese la cantidad a transferir";
  document.getElementById("form-sustract").style.visibility = "hidden";
  document.getElementById("form-add").style.visibility = "visible";
});

document.getElementById("btn-sustract").addEventListener("click", function () {
  document.getElementById("dinamic-title").innerHTML =
    "Ingrese la cantidad a retirar";
  document.getElementById("form-add").style.visibility = "hidden";
  document.getElementById("form-sustract").style.visibility = "visible";
});

const formAdd = document.getElementById("form-add");
const formSustract = document.getElementById("form-sustract");

formAdd.addEventListener("submit", function (event) {
  event.preventDefault();
  const balanceToAdd = parseInt(document.getElementById("input-add").value);
  if (balanceToAdd > 0) {
    if (saldo + balanceToAdd > 990) {
      document.getElementById(
        "message"
      ).innerHTML = `sobrepasa la cantidad maxima permitida`;
      document.getElementById("input-add").value = "";
    } else {
      saldo += balanceToAdd;
      document.getElementById("message").innerHTML = `Nuevo saldo: ${saldo}`;
      document.getElementById("input-add").value = "";
    }
  } else {
    document.getElementById("message").innerHTML = `Coloca una nueva cantidad`;
    document.getElementById("input-add").value = "";
  }
});

formSustract.addEventListener("submit", function (event) {
  event.preventDefault();
  const balancetoSus = parseInt(
    document.getElementById("input-sustract").value
  );
  if (balancetoSus > 0) {
    if (saldo - balancetoSus < 10) {
      document.getElementById(
        "message"
      ).innerHTML = `Es menos de la cantidad maxima permitida`;
      document.getElementById("input-sustract").value = "";
    } else {
      saldo -= balancetoSus;
      document.getElementById("message").innerHTML = `Nuevo saldo: ${saldo}`;
      document.getElementById("input-sustract").value = "";
    }
  } else {
    document.getElementById("message").innerHTML = `Intenta una nueva cantidad`;
    document.getElementById("input-sustract").value = "";
  }
});

document.getElementById("btn-logOut").addEventListener("click", function () {
  window.location.href = "./index.html";
  localStorage.removeItem("currentUser");
});
