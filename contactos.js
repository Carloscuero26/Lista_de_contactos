let listaContacto = [
    {
      id: 1,
      nombre: "carlos",
      apellido: "Cuero",
      telefono: 3244610057,
      ubicacion: "Colombia",
      ciudad: "Cartagena- Bolivar",
      direccion: "Calla 20 #59b-75",
    },
    {
      id: 2,
      nombre: "Maria",
      apellido: "Mercado",
      telefono: 3002469432,
      ubicacion: "Colombia",
      ciudad: "Sincelejo",
      direccion: "Tranversal 19 #12c-91",
    },
    {
      id: 3,
      nombre: "Jose",
      apellido: "Escorcia",
      telefono: 3204578930,
      ubicacion: "Colombia",
      ciudad: "Barranquilla",
      direccion: "Diagonal 5 #47aa-134",
    },
  ];
  function añadirContacto(contacto) {
    listaContacto.push(contacto);
  }
  
  let nuevoContacto = {
    id: 4,
    nombre: "Kevin",
    apellido: "Ortega",
    telefono: 3201788746,
    ubicacion: "Colombia",
    ciudad: "Bogota",
    direccion: "Carrera 21 #72-87",
  };
  
  añadirContacto(nuevoContacto);
  
  function chaoContacto(chao) {
    const posicion = listaContacto.indexOf(chao);
    if (posicion !== -1) {
      listaContacto.splice(posicion, 1);
    }
  }
  chaoContacto(listaContacto[1]);
  console.log(listaContacto);