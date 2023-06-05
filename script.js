function calcularPrecio(precioBase, pais) {
  let impuesto;

  if (pais === "A") {
    impuesto = 0.21; // IVA del 21% en Argentina
  } else {
    impuesto = 0.07; // Impuestos del 7% en otros países
  }

  return precioBase * (1 + impuesto); // Sumar el porcentaje de impuestos al precio base
}

let opcion;
const opcionesValidas = ["1", "2", "3"];

do {
  opcion = prompt("Selecciona una de las siguientes opciones:\n1) Fender\n2) Gibson\n3) Ibanez");

  if (!opcionesValidas.includes(opcion)) {
    alert("Debes seleccionar una opción válida.");
  }
} while (!opcionesValidas.includes(opcion));

let modelo, precio, pais;

do {
  pais = prompt("Por favor, ingresa el país de destino usando la letra correspondiente:\nA) Argentina\nR) Resto del mundo").toUpperCase();

  if (pais !== "A" && pais !== "R") { // Validar entrada del usuario
    alert("Debes ingresar un país válido.");
  }
} while (pais !== "A" && pais !== "R");

switch (opcion) {
  case "1":
    modelo = prompt("Selecciona el modelo de Fender:\n1) Stratocaster\n2) Telecaster");
    precio = 1000; // Precio base de la guitarra Fender

    opcion = `Fender ${modelo === "1" ? "Stratocaster" : "Telecaster"} - Precio: $${calcularPrecio(precio, pais)}`;
    break;

  case "2":
    modelo = prompt("Selecciona el modelo de Gibson:\n1) Les Paul\n2) SG");
    precio = 1200; // Precio base de la guitarra Gibson

    opcion = `Gibson ${modelo === "1" ? "Les Paul" : "SG"} - Precio: $${calcularPrecio(precio, pais)}`;
    break;


  case "3":
    modelo = prompt("Selecciona el modelo de Ibanez:\n1) RG\n2) S");
    precio = 800; // Precio base de la guitarra Ibanez

    opcion = `Ibanez ${modelo === "1" ? "RG" : "S"} - Precio: $${calcularPrecio(precio, pais)}`;
    break;
}

console.log(`Has seleccionado la opción:\n${opcion}.`);




/* FUNCIONA SUPER BIEN 

let opcion;
const opcionesValidas = ["1", "2", "3"];

do {
  opcion = prompt("Selecciona una de las siguientes opciones:\n1) Fender\n2) Gibson\n3) Ibanez");

  if (!opcionesValidas.includes(opcion)) {
    alert("Debes seleccionar una opción válida.");
  }
} while (!opcionesValidas.includes(opcion));

let modelo, precio, pais;

do {
  pais = prompt("Por favor, ingresa el país de destino usando la letra correspondiente:\nA) Argentina\nR) Resto del mundo").toUpperCase();

  if (pais !== "A" && pais !== "R") { // Validar entrada del usuario
    alert("Debes ingresar un país válido.");
  }
} while (pais !== "A" && pais !== "R");

switch (opcion) {
  case "1":
    modelo = prompt("Selecciona el modelo de Fender:\n1) Stratocaster\n2) Telecaster");
    precio = 1000; // Precio base de la guitarra Fender
    
    if (pais === "A") {
      precio = precio * 1.21; // Sumar el 21% de IVA si el país es Argentina
    } else {
      precio = precio * 1.07; // Sumar el 7% de impuestos si el país es diferente a Argentina
    }
    
    opcion = `Fender ${modelo === "1" ? "Stratocaster" : "Telecaster"} - Precio: $${precio}`;
    break;
    
  case "2":
    modelo = prompt("Selecciona el modelo de Gibson:\n1) Les Paul\n2) SG");
    precio = 1200; // Precio base de la guitarra Gibson
    
    if (pais === "A") {
      precio = precio * 1.21; // Sumar el 21% de IVA si el país es Argentina
    } else {
      precio = precio * 1.07; // Sumar el 7% de impuestos si el país es diferente a Argentina
    }
    
    opcion = `Gibson ${modelo === "1" ? "Les Paul" : "SG"} - Precio: $${precio}`;
    break;
    
    
  case "3":
    modelo = prompt("Selecciona el modelo de Ibanez:\n1) RG\n2) S");
    precio = 800; // Precio base de la guitarra Ibanez
    
    if (pais === "A") {
      precio = precio * 1.21; // Sumar el 21% de IVA si el país es Argentina
    } else {
      precio = precio * 1.07; // Sumar el 7% de impuestos si el país es diferente a Argentina
    }
    
    opcion = `Ibanez ${modelo === "1" ? "RG" : "S"} - Precio: $${precio}`;
    break;
}

console.log(`Has seleccionado la opción:\n${opcion}.`);





/* este codigo funciona bien



let opcion;
const opcionesValidas = ["1", "2", "3"];

while (true) {
  opcion = prompt("Selecciona una de las siguientes opciones:\n1) Fender\n2) Gibson\n3) Ibanez");

  if (!opcionesValidas.includes(opcion)) {
    alert("Debes seleccionar una opción válida.");
  } else {
    let modelo, precio;
    switch (opcion) {
      case "1":
        modelo = prompt("Selecciona el modelo de Fender:\n1) Stratocaster\n2) Telecaster");
        precio = prompt("Selecciona el precio de Fender:\n1) $1000\n2) $1500");
        opcion = `Fender ${modelo === "1" ? "Stratocaster" : "Telecaster"} - Precio: ${precio === "1" ? "$1000" : "$1500"}`;
        break;
      case "2":
        modelo = prompt("Selecciona el modelo de Gibson:\n1) Les Paul\n2) SG");
        precio = prompt("Selecciona el precio de Gibson:\n1) $2000\n2) $2500");
        opcion = `Gibson ${modelo === "1" ? "Les Paul" : "SG"} - Precio: ${precio === "1" ? "$2000" : "$2500"}`;
        break;
      case "3":
        modelo = prompt("Selecciona el modelo de Ibanez:\n1) RG\n2) S");
        precio = prompt("Selecciona el precio de Ibanez:\n1) $800\n2) $1200");
        opcion = `Ibanez ${modelo === "1" ? "RG" : "S"} - Precio: ${precio === "1" ? "$800" : "$1200"}`;
        break;
    }
    break;
  }
}

console.log(`Has seleccionado la opción:\n${opcion}.`);  */

/*if (opcion === '1') {
  let subopcionA = prompt('Selecciona una de las siguientes opciones para la opción A: \n 1 - Subopción A1 \n 2 - Subopción A2');

  if (subopcio1nA === '1') {
    console.log('Has seleccionado la subopción A1 de la opción A.');
  } else if (subopcionA === '2') {
    console.log('Has seleccionado la subopción A2 de la opción A.');
  } else {
    console.log('Subopción inválida.');
  }
} else if (opcion === '2') {
  let subopcionB = prompt('Selecciona una de las siguientes opciones para la opción B: \n 1 - Subopción B1 \n 2 - Subopción B2');

  if (subopcionB === '1') {
    console.log('Has seleccionado la subopción B1 de la opción B.');
  } else if (subopcionB === '2') {
    console.log('Has seleccionado la subopción B2 de la opción B.');
  } else {
    console.log('Subopción inválida.');
  }
} else if (opcion === '3') {
  let subopcionC = prompt('Selecciona una de las siguientes opciones para la opción C: \n 1 - Subopción C1 \n 2 - Subopción C2');

  if (subopcionC === '1') {
    console.log('Has seleccionado la subopción C1 de la opción C.');
  } else if (subopcionC === '2') {
    console.log('Has seleccionado la subopción C2 de la opción C.');
  } else {
    console.log('Subopción inválida.');
  }
} else {
  console.log('Opción inválida.');
}*/
