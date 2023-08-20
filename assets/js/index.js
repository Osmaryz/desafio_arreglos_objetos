document.addEventListener("DOMContentLoaded", function () {
  const propiedadesJSON = [
    {
      nombre: "Casa de campo",
      descripcion: "Un lugar ideal para descansar de la ciudad",
      src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      cuartos: 2,
      metros: 170,
    },
    {
      nombre: "Casa de playa",
      descripcion: "Despierta tus días oyendo el oceano",
      src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      cuartos: 2,
      metros: 130,
    },
    {
      nombre: "Casa en el centro",
      descripcion: "Ten cerca de ti todo lo que necesitas",
      src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      cuartos: 1,
      metros: 80,
    },
    {
      nombre: "Casa rodante",
      descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
      src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      cuartos: 1,
      metros: 6,
    },
    {
      nombre: "Departamento",
      descripcion: "Desde las alturas todo se ve mejor",
      src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      cuartos: 3,
      metros: 200,
    },
    {
      nombre: "Mansión",
      descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
      src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      cuartos: 5,
      metros: 500,
    },
  ];

  let boton_busqueda = document.getElementById("boton_busqueda");

  boton_busqueda.addEventListener("click", function () {
    let cantidad_cuartos = document.querySelector(
      "#usuario_cantidad_cuartos"
    ).value;
    let usuario_metros_inicial = document.querySelector("#mt_inicial").value;
    let usuario_metros_final = document.querySelector("#mt_final").value;

    if (
      !isNaN(cantidad_cuartos) &&
      cantidad_cuartos > 0 &&
      !isNaN(usuario_metros_inicial) &&
      usuario_metros_inicial > 0 &&
      !isNaN(usuario_metros_final) &&
      usuario_metros_final > 0
    ) {
      let cuartos_y_metros_filtrados = [];
      let total_resultado_busqueda = document.querySelector("#total_resultado");

      for (let propiedad of propiedadesJSON) {
        if (
          propiedad.cuartos == cantidad_cuartos &&
          propiedad.metros >= usuario_metros_inicial &&
          propiedad.metros <= usuario_metros_final
        ) {
          cuartos_y_metros_filtrados.push(propiedad);
        }
      }

      if (cuartos_y_metros_filtrados.length > 0) {
        
        const seccion_principal = document.querySelector(".propiedades");
        seccion_principal.innerHTML = "";
        for (let propiedad_filtrada of cuartos_y_metros_filtrados) {
          total_resultado_busqueda.innerHTML = `${cuartos_y_metros_filtrados.length}`;
          const elemento_nuevo = document.createElement("div");
          elemento_nuevo.classList.add("propiedad");
          elemento_nuevo.innerHTML = `<div class="img" style="background-image: url('${propiedad_filtrada.src}')"></div>
        <section>
            <h5>${propiedad_filtrada.nombre}</h5>
            <div class="d-flex justify-content-between">
                <p>Cuartos: ${propiedad_filtrada.cuartos}</p>
                <p>Metros: ${propiedad_filtrada.metros}</p>
 </div>
            <p class="my-3">${propiedad_filtrada.descripcion}</p>
            <button class="btn btn-info">Ver más</button>
        </section>
      `;
          seccion_principal.appendChild(elemento_nuevo);
        }
      } else {
        console.log("No hay resultado para su búsqueda.");
      }

      //
    } else {
      alert("Ingrese números validos");
    }
  });
});
