class Producto {
  constructor(nombre, precio, id) {
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
  }
}

let productoId;

let carrito = [];

const corteDePelo = new Producto("Corte de pelo", 800, 1);
const vacuna = new Producto("Vacunas", 1000, 2);
const alimentox10 = new Producto(
  "Bolsa de alimento balanceado x10 kg",
  9000,
  3
);
const alimentox20 = new Producto(
  "Bolsa de alimento balanceado x20 kg",
  16000,
  4
);
const pipetaPulgas = new Producto("Pipeta antipulgas", 1500, 5);
const pipetaGarrapatas = new Producto("Pipeta anti garrapatas", 1500, 6);
const consulta = new Producto("Consulta veterinaria", 2000, 7);

const productos = [
  corteDePelo,
  vacuna,
  alimentox10,
  alimentox20,
  pipetaPulgas,
  pipetaGarrapatas,
  consulta,
];

const saludar = () => {
  let cliente = prompt(
    "Bienvenido a veterinaria Dame la Pata. Por favor ingrese su nombre"
  );
  while (cliente === "") {
    cliente = prompt(
      "Bienvenido a veterinaria Dame la Pata. Por favor ingrese su nombre"
    );
  }
  alert("Bienvenido " + cliente);
  console.log("Bienvenido " + cliente);
};

const mostrarLista = () => {
  let texto = "";
  productos.forEach((item) => {
    texto += `${item.id}) ${item.nombre} ${item.precio}\n`;
  });
  let seleccion = parseInt(prompt(`Que producto vas a llevar?\n${texto}`));
  if (seleccion === 1 || seleccion === 7) {
    turnos();
  }
  if (seleccion === 3 || seleccion === 4) {
    balanceado();
  }
  if (seleccion === 2 || seleccion === 5 || seleccion === 6) {
    mascota();
  }
  while (seleccion < 1 || seleccion > 7) {
    alert("Dato inválido");
    seleccion = parseInt(prompt(`Que producto vas a llevar?\n${texto}`));
    if (seleccion === 1 || seleccion === 7) {
      turnos();
    }
    if (seleccion === 3 || seleccion === 4) {
      balanceado();
    }
    if (seleccion === 2 || seleccion === 5 || seleccion === 6) {
      mascota();
    }
  }
  return seleccion;
};

const productoElegido = (id) => {
  console.log(id);
  let productoFind = productos.find((item) => item.id === id);
  carrito.push(productoFind);
  let continuar = confirm("Desea llevar otro producto? ");
  if (continuar === true) {
    function1();
  }
};

const function1 = () => {
  productoId = mostrarLista();
  productoElegido(productoId);
};

const turnos = () => {
  let dia = prompt(
    "Por favor elegi una opcion :\n1-lunes\n2-martes\n3-miercoles\n4-jueves\n5-viernes"
  );
  let horario = prompt(
    "Por fPor favor elegi una opcion :\n1-10hs\n2-11hs\n3-12hs\n4-13hs\n5-14hs\n6-15hs"
  );
};

const balanceado = () => {
  let tipo = (pet = prompt("Gato o perro?"));
};

const mascota = () => {
  const datos = [
    (pet = prompt("Gato o perro?")),
    (edad = prompt("Edad de tu mascota")),
    (peso = prompt("Cuanto pesa?")),
  ];
};

saludar();
function1();

let total = carrito.reduce((acc, item) => acc + item.precio, 0);
console.log("Su total es de: " + total + ". Muchas gracias por elegirnos");
