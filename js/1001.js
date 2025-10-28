/**
 * VARIABLES
 */
let master_codigo = 1001; // CODIGO DE MAESTRIA PERTENECIENTE A ESTE MÓDULO

let INIT = () => {
  /**
   * 1. toma el objeto de localstorage y lo pasa para mostrar en presentacion
   */
  

  /**
   * 2.
   */
  FUNCIONES_HIDE_SHOW();

  $("#elformulario").append(FUNCIONES_FORMULARIO_MAS_INFORMACION(master_1001));

  FUNCION_API_OBTENER_PAISES();
};

$(document).ready(function () {
  //Iniciar la sub barra para maestría
  COMPONENT_RENDER_sub_barra({
    div: $("#subbarra"),
    opciones: [
      "resumen",
      "planestudios",
      "empleabilidad",
      "metodologia",
      "admisiones",
      "claustro",
      "calidad",
      "faq",
    ],
    mainreturn: "maestrias.html",
    codigo: "1001",
  });

  INIT();
});
