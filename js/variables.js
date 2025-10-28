/**
 *
 *
 * INICIO : VARIABLES DE MENSAJES
 *
 *
 *
 */

/* const VARIABLES_MENSAJES_DESCARGAR_CATALOGO =
  "<i class='fas fa-download'></i> Descargar Catálogo"; */

/**
 *
 *
 *
 * FIN _: VARIABLES DE MENSAJES
 *
 *
 *
 */

/**
 * ESTE DOCUMENTO CONTIENE VARIABLES CONSTANTES  GLOBALES DE DATOS
 */

/**
 *
 */


//RECOGE EL MÁSTER ACTUAL SELECCIONADO LOCALIZADO EN LOCAL STORAGE
/* const VARIABLES_get_master_actual_seleccionado = () => {
  let master = JSON.parse(localStorage.getItem("grupo_master"));

  return master.maestrias[0] || null;
};
 */
const VARIABLES_MESES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

/**
 * ESTA VARIABLE CONTIENE EL PATH RAIZ DONDE ESTA UBICADO LOS CATALOGOS Y LUEGO SERA CONCATENADO CON EL NOMBRE DEL CATALOGO
 */

const VARIABLES_PATH_CATALOGOS =
  "https://fercoadvancededucation.com/data/202311271702webpage/catalogos/";
const VARIABLES_FERCO_SERVER =
  "https://www.fercoadvancededucation.com/fercoServer/";
const VARIABLES_FERCO_SERVER_DATA =
  "https://www.fercoadvancededucation.com/data/202311271702webpage";
const VARIABLES_FERCO_SERVER_LEADS_REST = "main/leads.php";

/**
 * 
 * 
 * 
 * 
 * ***************************************************************************************************
 * *************** INICIO :: SECCIÓN DE VARIABLES PARA PAGINA MÀSTER *********************************
 * ***************************************************************************************************
 * 
 * 
 * 
 * 
 * 

 */
// VARIABLE DE PLANTILLA PARA REENDERIZAR
const VARIABLES_URL_MASTER = "master.html";

// VARIABLE DE BARRA
const VARIABLES_MASTER_SUBBARRA = $("#subbarra");

/**
 *
 *
 *
 *
 *
 * ***************************************************************************************************
 * *************** FIN :: SECCIÓN DE VARIABLES PARA PAGINA MÀSTER *********************************
 * ***************************************************************************************************
 *
 *
 *
 *
 *
 */

let COMPONENTE_TEMPORAL_GENERICO = (maestria = {}) => { };

/* class CLASS_GENERICO_DATA {
  headerTitulo;
  headerSubtitulo;
  headerDescripcion;
  bodyElementos = [];

  constructor(generico) {
    this.headerSubtitulo = "";
  }
} */


/* let g = new CLASS_COMPONENTE_GENERICO();
g.setCPantalla($("#test"));
g.setVHeaderTitulo(
  "¿Por qué estudiar la Maestría en Administración y Dirección de Empresas de la Universidad Europea en Ecuador?"
);
g.setVHeaderSubtitulo("“Onboarding en Contabilidad”");
g.setVHeaderDescripcion(
  "Antes de comenzar tu maestría, accederás a un “Onboarding en Contabilidad”, curso 100% online en el que se revisan conceptos en la materia, lo que te permitirá estar más capacitado para afrontar el estudio de tu posgrado, así como tener conocimientos más amplios y fluidos en conceptos contables y financieros."
);
g.setVBodyElemento({
  bodyCabecera: {
    imagen:
      "https://universidadeuropea.com/resources/media/images/210628-img-FP-Grado-superior-GENER.2e16d0ba.fill-524x295.jpg",
    //icono: "",
    //texto: "",
  },
  bodyCuerpo: {
    bodyCuerpoTitulo: "Maestría oficial y virtual",
    bodyCuerpoSubtitulo: "Susceptible de reconocimiento por SENESCYT,",
    bodyCuerpoDescripcion:
      "Susceptible de reconocimiento por SENESCYT, este título oficial reconocido por el Ministerio de Educación, será válido en España y en todo el Espacio Europeo de Educación Superior.",
  },
});
g.setVBodyElemento({
  bodyCabecera: {
    //imagen:"https://universidadeuropea.com/resources/media/images/210628-img-FP-Grado-superior-GENER.2e16d0ba.fill-524x295.jpg",
    icono: "bi bi-archive",
    //texto: "",
  },
  bodyCuerpo: {
    bodyCuerpoTitulo: "Maestría oficial y virtual",
    bodyCuerpoSubtitulo: "Susceptible de reconocimiento por SENESCYT,",
    bodyCuerpoDescripcion:
      "Susceptible de reconocimiento por SENESCYT, este título oficial reconocido por el Ministerio de Educación, será válido en España y en todo el Espacio Europeo de Educación Superior.",
  },
});
g.setVBodyElemento({
  bodyCabecera: {
    //imagen:"https://universidadeuropea.com/resources/media/images/210628-img-FP-Grado-superior-GENER.2e16d0ba.fill-524x295.jpg",
    //icono: "bi bi-archive",
    texto: "50%",
  },
  bodyCuerpo: {
    bodyCuerpoTitulo: "Maestría oficial y virtual",
    bodyCuerpoSubtitulo: "Susceptible de reconocimiento por SENESCYT,",
    bodyCuerpoDescripcion:
      "Susceptible de reconocimiento por SENESCYT, este título oficial reconocido por el Ministerio de Educación, será válido en España y en todo el Espacio Europeo de Educación Superior.",
  },
});
g.setVBodyElemento({
  bodyCabecera: {
    //imagen:"https://universidadeuropea.com/resources/media/images/210628-img-FP-Grado-superior-GENER.2e16d0ba.fill-524x295.jpg",
    //icono: "bi bi-archive",
    texto: "%",
  },
  bodyCuerpo: {
    bodyCuerpoTitulo: "Maestría oficial y virtual",
    bodyCuerpoSubtitulo: "Susceptible de reconocimiento por SENESCYT,",
    bodyCuerpoDescripcion:
      "Susceptible de reconocimiento por SENESCYT, este título oficial reconocido por el Ministerio de Educación, será válido en España y en todo el Espacio Europeo de Educación Superior.",
  },
});
g.setVBodyElemento({
  bodyCabecera: {
    //imagen:"https://universidadeuropea.com/resources/media/images/210628-img-FP-Grado-superior-GENER.2e16d0ba.fill-524x295.jpg",
    //icono: "bi bi-archive",
    texto: "50%",
  },
  bodyCuerpo: {
    bodyCuerpoTitulo: "Maestría oficial y virtual",
    bodyCuerpoSubtitulo: "Susceptible de reconocimiento por SENESCYT,",
    bodyCuerpoDescripcion:
      "Susceptible de reconocimiento por SENESCYT, este título oficial reconocido por el Ministerio de Educación, será válido en España y en todo el Espacio Europeo de Educación Superior.",
  },
});
 */