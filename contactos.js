let listaContacto = [
    "Carlos Diaz",
    "Jose Escorcia",
    "Maria Mercado",
    "Carlos Catillo",
  ];
  
  function agregarContacto(nuevoContacto) {
    listaContacto.push(nuevoContacto);
  }
  
  agregarContacto("Maria Mercado");
  
  function borrarContacto(borrar) {
    listaContacto.splice(borrar, 1);
  }
  
  function imprimirContacto() {
    for (let i = 0; i < listaContacto.length; i++) {
      console.log(listaContacto[i]);
    }
  }