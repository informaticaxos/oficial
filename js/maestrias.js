let MAESTRIAS_CLASE_MAESTRIAS = new CLASS_MAESTRIAS($("#contenedor_maestrias"), $("#listados"));
let MAESTRIAS_CLASE_SERVER_MAESTRIAS = new CLASS_SERVER_MAESTRIAS();
let MAESTRIAS_INPUT_BUSQUEDA = $("#input_busqueda");

$(document).ready(function () {

});

MAESTRIAS_INPUT_BUSQUEDA.ready(() => {
 
});

MAESTRIAS_INPUT_BUSQUEDA.keyup(() => {
  MAESTRIAS_CLASE_MAESTRIAS.listarMaestriasByNombre(MAESTRIAS_INPUT_BUSQUEDA.val());
});
