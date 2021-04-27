var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var vB = document.getElementById("botonVaca");
var botonV= false;
var vP = document.getElementById("botonPollo");
var botonP= false;
var vC = document.getElementById("botonCerdo");
var botonC= false;
var vVP = document.getElementById("botonVP");
var botonVP= false;
var vVC = document.getElementById("botonVC");
var botonVC= false;
var vPC = document.getElementById("botonPC");
var botonPC= false;
var vT = document.getElementById("botonT");
var botonT= false;

var fondo = {
  url: "tile.png",
  cargaOK: false
};
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var pollo = {
  url: "pollo.png",
  cargaOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarfondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarPollos);

function cargarfondo()
{
  fondo.cargaOK = true;
  dibujarV();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujarV();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujarP();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujarC();
}

vB.addEventListener("click", pulsoV);
function pulsoV()
{
  botonV = true;
  dibujarV();
}

vP.addEventListener("click", pulsoP);
function pulsoP()
{
  botonP = true;
  dibujarP();
}

vC.addEventListener("click", pulsoC);
function pulsoC()
{
  botonC = true;
  dibujarC();
}

vVP.addEventListener("click", pulsoVP);
function pulsoVP()
{
  botonVP = true;
  dibujarVP();
}

vVC.addEventListener("click", pulsoVC);
function pulsoVC()
{
  botonVC = true;
  dibujarVC();
}

vPC.addEventListener("click", pulsoPC);
function pulsoPC()
{
  botonPC = true;
  dibujarPC();
}

vT.addEventListener("click", pulsoT);
function pulsoT()
{
  botonT = true;
  dibujarT();
}

function dibujarV()
{
  if(fondo.cargaOK)
  {
  var cantidad1 = aleatorio(0, 20);
  console.log(cantidad1);
  papel.drawImage(fondo.imagen, 0, 0);
    {
      if (botonV)
      {
        for(var v=0; v<cantidad1; v++)
        {
          var x = aleatorio(0, 420);
          var y = aleatorio(0, 420);
          papel.drawImage(vaca.imagen, x, y);
        }
      }
    }
  }
}

function dibujarP()
{
  if(fondo.cargaOK)
  {
  var cantidad2 = aleatorio(0, 20);
  console.log(cantidad2)
  papel.drawImage(fondo.imagen, 0, 0);
    {
      if (botonP)
      {
        for(var v=0; v<cantidad2; v++)
        {
          var x = aleatorio(0, 420);
          var y = aleatorio(0, 420);
          papel.drawImage(pollo.imagen, x, y);
        }
      }
    }
  }
}

function dibujarC()
{
  if(fondo.cargaOK)
  {
  var cantidad3 = aleatorio(0, 20);
  console.log(cantidad3)
  papel.drawImage(fondo.imagen, 0, 0);
    {
      if (botonC)
      {
        for(var v=0; v<cantidad3; v++)
        {
          var x = aleatorio(0, 420);
          var y = aleatorio(0, 420);
          papel.drawImage(cerdo.imagen, x, y);
        }
      }
    }
  }
}

function dibujarVP()
{
  if(fondo.cargaOK)
  {
  var cantidad1 = aleatorio(0, 20);
  var cantidad2 = aleatorio(0, 20);
  console.log(cantidad1)
  console.log(cantidad2)
  papel.drawImage(fondo.imagen, 0, 0);
    {
      if (botonVP)
      {
        for(var v=0; v<cantidad1; v++)
        {
          var x = aleatorio(0, 420);
          var y = aleatorio(0, 420);
          papel.drawImage(vaca.imagen, x, y);
        }
        for(var v=0; v<cantidad2; v++)
        {
          var x = aleatorio(0, 420);
          var y = aleatorio(0, 420);
          papel.drawImage(pollo.imagen, x, y);
        }
      }
    }
  }
}

function dibujarVC()
{
  if(fondo.cargaOK)
  {
  var cantidad1 = aleatorio(0, 20);
  var cantidad2 = aleatorio(0, 20);
  console.log(cantidad1)
  console.log(cantidad2)
  papel.drawImage(fondo.imagen, 0, 0);
    {
      if (botonVC)
      {
        for(var v=0; v<cantidad1; v++)
        {
          var x = aleatorio(0, 420);
          var y = aleatorio(0, 420);
          papel.drawImage(vaca.imagen, x, y);
        }
        for(var v=0; v<cantidad2; v++)
        {
          var x = aleatorio(0, 420);
          var y = aleatorio(0, 420);
          papel.drawImage(cerdo.imagen, x, y);
        }
      }
    }
  }
}

function dibujarPC()
{
  if(fondo.cargaOK)
  {
  var cantidad1 = aleatorio(0, 20);
  var cantidad2 = aleatorio(0, 20);
  console.log(cantidad1)
  console.log(cantidad2)
  papel.drawImage(fondo.imagen, 0, 0);
    {
      if (botonPC)
      {
        for(var v=0; v<cantidad1; v++)
        {
          var x = aleatorio(0, 420);
          var y = aleatorio(0, 420);
          papel.drawImage(pollo.imagen, x, y);
        }
        for(var v=0; v<cantidad2; v++)
        {
          var x = aleatorio(0, 420);
          var y = aleatorio(0, 420);
          papel.drawImage(cerdo.imagen, x, y);
        }
      }
    }
  }
}

function dibujarT()
{
  if(fondo.cargaOK)
  {
  var cantidad1 = aleatorio(0, 20);
  var cantidad2 = aleatorio(0, 20);
  var cantidad3 = aleatorio(0, 20);
  console.log(cantidad1)
  console.log(cantidad2)
  console.log(cantidad3)
  papel.drawImage(fondo.imagen, 0, 0);
    {
      if (botonT)
      {
        for(var v=0; v<cantidad1; v++)
        {
          var x = aleatorio(0, 420);
          var y = aleatorio(0, 420);
          papel.drawImage(pollo.imagen, x, y);
        }
        for(var v=0; v<cantidad2; v++)
        {
          var x = aleatorio(0, 420);
          var y = aleatorio(0, 420);
          papel.drawImage(cerdo.imagen, x, y);
        }
        for(var v=0; v<cantidad3; v++)
        {
          var x = aleatorio(0, 420);
          var y = aleatorio(0, 420);
          papel.drawImage(vaca.imagen, x, y);
        }
      }
    }
  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
