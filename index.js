var FechaUsuario = prompt('Ingrese su edad')

console.log('La edad ingresada es: ' + FechaUsuario)

if(FechaUsuario>=18)
{
  alert('Usted es mayor de edad') 
}
else{
  alert('Usted es menor de edad') 
}

var edadMayor = 0
for(var i=1; i<4; i++)
{
  var edad = parseInt(prompt('Ingrese edad del usuario '+i))

  console.log(edad) 
  console.log(edadMayor) 


  if(edadMayor <= edad)
  {
    edadMayor= edad
  }
}
alert('La edad mayor ingresada es: '+ edadMayor)


