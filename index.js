function validarCedula() {
    var cedula = document.getElementById("cedula").value;
    var resultado = document.getElementById("resultado");

    // Verificar la longitud de la cédula
    if (cedula.length != 11) {
      resultado.innerHTML = "La cédula debe tener 11 dígitos";
      return;
    }

    // Verificar que todos los caracteres sean numéricos
    if (!/^\d+$/.test(cedula)) {
      resultado.innerHTML = "La cédula debe contener sólo dígitos numéricos";
      return;
    }

    // Calcular el dígito verificador
    var coeficientes = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];
    var suma = 0;
    for (var i = 0; i < 10; i++) {
      var producto = coeficientes[i] * parseInt(cedula.charAt(i));
      suma += producto < 10 ? producto : producto - 9;
    }
    var digitoVerificador = (10 - (suma % 10)) % 10;

    // Verificar el dígito verificador
    if (digitoVerificador != parseInt(cedula.charAt(10))) {
      resultado.innerHTML = "La cédula no es válida";
      return;
    }

    resultado.innerHTML = "La cédula es válida";
  }