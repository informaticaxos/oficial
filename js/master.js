
////////////////////////////////
////////////////////////////////
////////////////////////////////
/* let MASTER_VARIABLES_SECCION_RESUMEN = $("#resumen");
let MASTER_VARIABLES_SECCION_PLAN_DE_ESTUDIOS = $("#planestudios");
let MASTER_VARIABLES_SECCION_EMPLEABILIDAD = $("#empleabilidad");
let MASTER_VARIABLES_SECCION_METODOLOGIA = $("#metodologia");
let MASTER_VARIABLES_SECCION_ADMISIONES = $("#admisiones");
let MASTER_VARIABLES_SECCION_CLAUSTRO = $("#claustro");
let MASTER_VARIABLES_SECCION_CALIDAD = $("#calidad");
let MASTER_VARIABLES_SECCION_FAQ = $("#faq"); */
////////////////////////////////
////////////////////////////////
////////////////////////////////



let MASTER_VARIABLES_CONTAINER_RESUMEN_COLABORADORES = $(
  "#v_resumen_colaboradores"
);
let MASTER_VARIABLES_CONTAINER_RESUMEN_DOBLE_TITULACION = $(
  "#v_resumen_dobletitulacion"
);
let MASTER_VARIABLES_CONTAINER_RESUMEN_ENTIDADES_COLABORADORAS = $(
  "#v_resumen_entidadescolaboradoras"
);

let MASTER_VARIABLES_DATA_MASTER = VARIABLES_FERCO_SERVER_DATA + "/master";


$(document).ready(function () {
  //////////
  ///////////////////////////////////// TODA ESTA SECCION DEBE IR DENTRO DE UN CONTROLADOR //////////////////////
  //////////
  ///////////////////////////////////// Esta seccion es de variables ///////////////////////////////////////
  let MASTER_VARIABLES_maestriasId = (new URLSearchParams(window.location.search).get('maestriasId')) || 0;
  if (!MASTER_VARIABLES_maestriasId) { window.location.href = "maestrias.html" };
  let MASTER_VARIABLES_barra = $("#subbarra");
  //////////
  //////////
  let CLASE_SERVER_MAESTRIAS = new CLASS_SERVER_MAESTRIAS();
  let CLASE_MASTER = new CLASS_MASTER();
  //////////
  //////////
  //////////
  //////////  
  CLASE_MASTER.setCBarraPantalla(MASTER_VARIABLES_barra);
  CLASE_MASTER.setVMaestriasId(MASTER_VARIABLES_maestriasId);
  //////////
  //////////
  //////////
  //////////
  FUNCIONES_HIDE_SHOW();//temporal para desaparecer las secciones





  let clasemaestria = new CLASS_SERVER_PRESENTACIONES;
  clasemaestria.SEARCH_MERGED((maestria) => {
    console.log(maestria);
    let COTNENEDOR_TEMPORAL = $("#contenedor_temporal");
    let porque_generico = new CLASS_COMPONENTE_GENERICO();
    /*    porque_generico.setCPantalla(COTNENEDOR_TEMPORAL);
       porque_generico.setVHeaderTitulo("¿ PORQUE ESTUDIAR EL MASTER " + maestria.maestriasNombre + " ?");
       porque_generico.setVHeaderDescripcion(maestria.presentacionesResumen); */
    /////////////////////////////////////////////////////////////////////////////////////////
    /* porque_generico.setVBodyElemento({
      bodyCabecera: {
        texto: "50%",
      },
      bodyCuerpo: {
        bodyCuerpoTitulo: "Este es el titulo",
        bodyCuerpoSubtitulo: "Este es el sub-titulo",
        bodyCuerpoDescripcion: maestria.presentacionesResumen,
      },
    }); */
    /////////////////////////////////////////////////////////////////////////////////////////
    /*   porque_generico.setVBodyElemento({
        bodyCabecera: {
          texto: "50%",
        },
        bodyCuerpo: {
          bodyCuerpoTitulo: "Este es el titulo",
          bodyCuerpoSubtitulo: "Este es el sub-titulo",
          bodyCuerpoDescripcion: maestria.presentacionesResumen,
        },
      }); */
    /////////////////////////////////////////////////////////////////////////////////////////
    /* porque_generico.setVBodyElemento({
      bodyCabecera: {
        texto: "50%",
      },
      bodyCuerpo: {
        bodyCuerpoTitulo: "Este es el titulo",
        bodyCuerpoSubtitulo: "Este es el sub-titulo",
        bodyCuerpoDescripcion: maestria.presentacionesResumen,
      },
    }); */
    /////////////////////////////////////////////////////////////////////////////////////////
    /*  porque_generico.setVBodyElemento({
       bodyCabecera: {
         texto: "50%",
       },
       bodyCuerpo: {
         bodyCuerpoTitulo: "Este es el titulo",
         bodyCuerpoSubtitulo: "Este es el sub-titulo",
         bodyCuerpoDescripcion: maestria.presentacionesResumen,
       },
     }); */
    /////////////////////////////////////////////////////////////////////////////////////////
    /* porque_generico.setVFootElemento(
      {
        src: "https://fercoadvancededucation.com/data/202311271702webpage/paginaEnConstruccion.jpg",//path de la imagen
        width: "80%",//ancho de la imagen 1-100%
        height: "80%",//alto de la imagen 1-100%
        position: "center" // start-center-end
      }
    ); */
    //////////////////////////////////////////////////////////////////////////////////////////
    /* porque_generico.setVFootElemento(
      {
        src: "https://fercoadvancededucation.com/data/202311271702webpage/paginaEnConstruccion.jpg",//path de la imagen
        width: "80%",//ancho de la imagen 1-100%
        height: "80%",//alto de la imagen 1-100%
        position: "center" // start-center-end
      }
    ); */
    //////////////////////////////////////////////////////////////////////////////////////////
    /*  porque_generico.setVFootElemento(
       {
         src: "https://fercoadvancededucation.com/data/202311271702webpage/paginaEnConstruccion.jpg",//path de la imagen
         width: "80%",//ancho de la imagen 1-100%
         height: "80%",//alto de la imagen 1-100%
         position: "center" // start-center-end
       }
     ); */
    //////////////////////////////////////////////////////////////////////////////////////////

  }, MASTER_VARIABLES_maestriasId);





});

///////////////////////////  INICIO :: CONTROLADOR PORQUE   ///////////////////////////////////////
let MASTER_CONTROLADOR_COMPONENTE_PORQUE = (maestria = {}) => {

  let MASTER_VARIABLES_CONTAINER_RESUMEN_PORQUE = $("#v_resumen_porque");

  let porque_generico = new CLASS_COMPONENTE_GENERICO();
  // porque_generico.setCPantalla(MASTER_VARIABLES_CONTAINER_RESUMEN_PORQUE);
  porque_generico.setVHeaderTitulo("¿ PORQUE ESTUDIAR EL " + maestria.master);
  porque_generico.setVHeaderDescripcion(maestria.poquedescripcion);

  maestria.porques.forEach((porque) => {
    porque_generico.setVBodyElemento({
      bodyCabecera: {
        icono: porque.icono,
      },
      bodyCuerpo: {
        bodyCuerpoTitulo: porque.subtitulo,
        bodyCuerpoDescripcion: porque.detalles,
      },
    });
  });
};
///////////////////////////  FIN :: CONTROLADOR PORQUE   //////////////////////////////////////////
///////////
///////////
///////////
///////////
///////////////////////////  INICIO :: CONTROLADOR EMPRESAS COLABORADORAS ////////////////////////
let MASTER_CONTROLADOR_COMPONENTE_EMPRESAS_COLABORADORAS = (maestria = {}) => {
  let empresas_colaboradoras = new CLASS_EMPRESAS_COLABORADORAS();
  empresas_colaboradoras.setCPantalla(MASTER_VARIABLES_CONTAINER_RESUMEN_COLABORADORES);
  empresas_colaboradoras.setCTitulo("EMPRESAS COLABORADORAS");
  empresas_colaboradoras.setCDescripcion(maestria.colaboradoresdescripcion);
};
///////////////////////////  FIN :: CONTROLADOR EMPRESAS COLABORADORAS ////////////////////////
//////////
//////////
//////////
//////////
/////////////////////////// INICIO :: CONTROLADOR PLAN DE ESTUDIOS /////////////////////////////////
let MASTER_CONTROLADOR_COMPONENTE_PLAN_ESTUDIOS = (maestria = {}) => {

  let MASTER_VARIABLES_VENTANA_PLAN_DE_ESTUDIOS = $("#v_planestudios");
  let planestudios = new CLASS_PLAN_ESTUDIOS();
  planestudios.setCPantalla(MASTER_VARIABLES_VENTANA_PLAN_DE_ESTUDIOS);
  maestria.planestudios = [
    {
      materia: "Módulo 1. El Contexto de la Educación Superior (6 ECTS, S1)",
      catalogo: "catalogo.pdf",
      ects: 6,
      tipo: "OBLIGATORIA",
      idioma: "Español",
      descripcion: "Adquirirás los conocimiento de la estructura, funcionamiento y gestión de las Instituciones de Educación Superior en América y Europa.",
      puntos: ["Adquirir conocimientos específicos en cuanto al uso del color.", "Analizar la evolución del diseño interior desde la antigüedad hasta la actualidad.", "Diseñar un espacio interior teniendo en cuenta los requerimientos estéticos y funcionales del cliente.", "Acondicionar los colores de un espacio teniendo en cuenta las necesidades estéticas y funcionales del cliente.", "Desarrollar estrategias para la organización del espacio.", "Elaborar un catálogo de operadores actuales para el desarrollo de proyectos."],
    },
    {
      materia: "Módulo 2. El Contexto de la Educación Superior (6 ECTS, S1)",
      catalogo: "catalogo.pdf",
      ects: 6,
      tipo: "OBLIGATORIA",
      idioma: "Español",
      descripcion: "Adquirirás los conocimiento de la estructura, funcionamiento y gestión de las Instituciones de Educación Superior en América y Europa.",
      puntos: ["Adquirir conocimientos específicos en cuanto al uso del color.", "Analizar la evolución del diseño interior desde la antigüedad hasta la actualidad.", "Diseñar un espacio interior teniendo en cuenta los requerimientos estéticos y funcionales del cliente.", "Acondicionar los colores de un espacio teniendo en cuenta las necesidades estéticas y funcionales del cliente.", "Desarrollar estrategias para la organización del espacio.", "Elaborar un catálogo de operadores actuales para el desarrollo de proyectos."],
    },
    {
      materia: "Módulo 3. El Contexto de la Educación Superior (6 ECTS, S1)",
      catalogo: "catalogo.pdf",
      ects: 6,
      tipo: "OBLIGATORIA",
      idioma: "Español",
      descripcion: "Adquirirás los conocimiento de la estructura, funcionamiento y gestión de las Instituciones de Educación Superior en América y Europa.",
      puntos: ["Adquirir conocimientos específicos en cuanto al uso del color.", "Analizar la evolución del diseño interior desde la antigüedad hasta la actualidad.", "Diseñar un espacio interior teniendo en cuenta los requerimientos estéticos y funcionales del cliente.", "Acondicionar los colores de un espacio teniendo en cuenta las necesidades estéticas y funcionales del cliente.", "Desarrollar estrategias para la organización del espacio.", "Elaborar un catálogo de operadores actuales para el desarrollo de proyectos."],
    },
    {
      materia: "Módulo 4. El Contexto de la Educación Superior (6 ECTS, S1)",
      catalogo: "catalogo.pdf",
      ects: 6,
      tipo: "OBLIGATORIA",
      idioma: "Español",
      descripcion: "Adquirirás los conocimiento de la estructura, funcionamiento y gestión de las Instituciones de Educación Superior en América y Europa.",
      puntos: ["Adquirir conocimientos específicos en cuanto al uso del color.", "Analizar la evolución del diseño interior desde la antigüedad hasta la actualidad.", "Diseñar un espacio interior teniendo en cuenta los requerimientos estéticos y funcionales del cliente.", "Acondicionar los colores de un espacio teniendo en cuenta las necesidades estéticas y funcionales del cliente.", "Desarrollar estrategias para la organización del espacio.", "Elaborar un catálogo de operadores actuales para el desarrollo de proyectos."],
    },
    {
      materia: "Módulo 5. El Contexto de la Educación Superior (6 ECTS, S1)",
      catalogo: "catalogo.pdf",
      ects: 6,
      tipo: "OBLIGATORIA",
      idioma: "Español",
      descripcion: "Adquirirás los conocimiento de la estructura, funcionamiento y gestión de las Instituciones de Educación Superior en América y Europa.",
      puntos: ["Adquirir conocimientos específicos en cuanto al uso del color.", "Analizar la evolución del diseño interior desde la antigüedad hasta la actualidad.", "Diseñar un espacio interior teniendo en cuenta los requerimientos estéticos y funcionales del cliente.", "Acondicionar los colores de un espacio teniendo en cuenta las necesidades estéticas y funcionales del cliente.", "Desarrollar estrategias para la organización del espacio.", "Elaborar un catálogo de operadores actuales para el desarrollo de proyectos."],
    },
    {
      materia: "Módulo 6. El Contexto de la Educación Superior (6 ECTS, S1)",
      catalogo: "catalogo.pdf",
      ects: 6,
      tipo: "OBLIGATORIA",
      idioma: "Español",
      descripcion: "Adquirirás los conocimiento de la estructura, funcionamiento y gestión de las Instituciones de Educación Superior en América y Europa.",
      puntos: ["Adquirir conocimientos específicos en cuanto al uso del color.", "Analizar la evolución del diseño interior desde la antigüedad hasta la actualidad.", "Diseñar un espacio interior teniendo en cuenta los requerimientos estéticos y funcionales del cliente.", "Acondicionar los colores de un espacio teniendo en cuenta las necesidades estéticas y funcionales del cliente.", "Desarrollar estrategias para la organización del espacio.", "Elaborar un catálogo de operadores actuales para el desarrollo de proyectos."],
    },
    {
      materia: "Módulo 7. El Contexto de la Educación Superior (6 ECTS, S1)",
      catalogo: "catalogo.pdf",
      ects: 6,
      tipo: "OBLIGATORIA",
      idioma: "Español",
      descripcion: "Adquirirás los conocimiento de la estructura, funcionamiento y gestión de las Instituciones de Educación Superior en América y Europa.",
      puntos: ["Adquirir conocimientos específicos en cuanto al uso del color.", "Analizar la evolución del diseño interior desde la antigüedad hasta la actualidad.", "Diseñar un espacio interior teniendo en cuenta los requerimientos estéticos y funcionales del cliente.", "Acondicionar los colores de un espacio teniendo en cuenta las necesidades estéticas y funcionales del cliente.", "Desarrollar estrategias para la organización del espacio.", "Elaborar un catálogo de operadores actuales para el desarrollo de proyectos."],
    },
    {
      materia: "Módulo 8. El Contexto de la Educación Superior (6 ECTS, S1)",
      catalogo: "catalogo.pdf",
      ects: 6,
      tipo: "OBLIGATORIA",
      idioma: "Español",
      descripcion: "Adquirirás los conocimiento de la estructura, funcionamiento y gestión de las Instituciones de Educación Superior en América y Europa.",
      puntos: ["Adquirir conocimientos específicos en cuanto al uso del color.", "Analizar la evolución del diseño interior desde la antigüedad hasta la actualidad.", "Diseñar un espacio interior teniendo en cuenta los requerimientos estéticos y funcionales del cliente.", "Acondicionar los colores de un espacio teniendo en cuenta las necesidades estéticas y funcionales del cliente.", "Desarrollar estrategias para la organización del espacio.", "Elaborar un catálogo de operadores actuales para el desarrollo de proyectos."],
    },
    {
      materia: "Módulo 9. El Contexto de la Educación Superior (6 ECTS, S1)",
      catalogo: "catalogo.pdf",
      ects: 6,
      tipo: "OBLIGATORIA",
      idioma: "Español",
      descripcion: "Adquirirás los conocimiento de la estructura, funcionamiento y gestión de las Instituciones de Educación Superior en América y Europa.",
      puntos: ["Adquirir conocimientos específicos en cuanto al uso del color.", "Analizar la evolución del diseño interior desde la antigüedad hasta la actualidad.", "Diseñar un espacio interior teniendo en cuenta los requerimientos estéticos y funcionales del cliente.", "Acondicionar los colores de un espacio teniendo en cuenta las necesidades estéticas y funcionales del cliente.", "Desarrollar estrategias para la organización del espacio.", "Elaborar un catálogo de operadores actuales para el desarrollo de proyectos."],
    },
  ];
  planestudios.setCMaestria(maestria);
  planestudios.setCTitulo("PLAN DE ESTUDIOS");
  planestudios.setCSubtitulo("Este es el subtitulo del plan de estudios");
  planestudios.setCDescripcion("Ve más allá y diferénciate de otros perfiles profesionales a través de un Curso o Experto Universitario. Ahorra un 2% extra en el Máster + un 30% en el Curso o bien, un 5% extra en el Máster + un 50% en el Experto con tu formación combinada y obtén una doble titulación.");

  let tabla = new CLASS_TABLE()
  tabla.setCTheadTitulos(["Materia", "ECTS", "Tipo", "Idioma de Impartición"]);
  tabla.setCTbodyRows(maestria.planestudios);
  planestudios.setCTabla(tabla.getCTabla());


}
/////////////////////////// FIN :: CONTROLADOR PLAN DE ESTUDIOS /////////////////////////////////
