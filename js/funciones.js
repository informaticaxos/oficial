/*******************************************************************************************************
 * ************************************ FUNCIONES LIBRERIAS ********************************************
 * *****************************************************************************************************
 *
 * Esta funcion asigna los elementos finales a la sub barra render con html recibiendo parametros como las opciones a mostar
 *
 */

let FUNCIONES_HIDE_SHOW = () => {
  //let S_RESUMEN = $("#resumen").hide();
  let S_PLAN_DE_ESTUDIOS = $("#planestudios").hide();
  let S_EMPLEABILIDAD = $("#empleabilidad").hide();
  let S_METODOLOGIA = $("#metodologia").hide();
  let S_ADMISIONES = $("#admisiones").hide();
  let S_CLAUSTRO = $("#claustro").hide();
  let S_CALIDAD = $("#calidad").hide();
  let S_FAQ = $("#faq").hide();
};

/* let FUNCIONES_MOSTRAR_PRESENTACION_MASTER = () => {}; */

//Funcion para obtener todos los paises de la base de datos
/**
 *
 * @param {*} proceso proceso(response) ejecutamos una funcion como parametro y nos retorna una variable de datos con los paises
 */
let FUNCION_API_OBTENER_PAISES = (proceso = function () { }) => {
  $.get(
    "https://fercoadvancededucation.com/fercoServer/main/paises.php?instruction=select",
    (data) => {
      proceso(data);
    }
  );
};

let FUNCIONES_MERGED_MAESTRIAS = () => {
  let maestrias_return = []; //VARIABLE VACIA DE MAESTRIAS :: SE RETORNARA LA VARIABNLE UNA VEZ HAYA SIDO LLENADA DESPUES DE MEZCLAR

  /************************************************************************
   * INICIO : CAMBIO A ARRAYS LAS IMAGENES DE ENTIDADES COLABORADORAS Y TRANSFORMO LAS IMAGENES A PATH
   ************************************************************************/
  let entidadescolaboradoras_imagenes_modificadas =
    DATABASE.entidadescolaboradoras;

  for (
    let index = 0;
    index < entidadescolaboradoras_imagenes_modificadas.length;
    index++
  ) {
    let imagenes = [];
    imagenes =
      entidadescolaboradoras_imagenes_modificadas[index].imagen.split(",");
    for (let index = 0; index < imagenes.length; index++) {
      imagenes[index] =
        VARIABLES_FERCO_SERVER_DATA +
        "/master/entidadescolaboradoras/" +
        imagenes[index] +
        ".jpg";
    }
    entidadescolaboradoras_imagenes_modificadas[index].imagenes = imagenes;

    let texto_procesado =
      FUNCIONES_EXTRAER_OPCIONES_TEXTO_ENTIDADES_COLABORADORAS(
        entidadescolaboradoras_imagenes_modificadas[index].descripcion
      );

    if (texto_procesado.opciones.length > 0) {
      entidadescolaboradoras_imagenes_modificadas[index].parrafo =
        texto_procesado.parrafo;
      entidadescolaboradoras_imagenes_modificadas[index].opciones =
        texto_procesado.opciones;
    }
  }
  /************************************************************************
   * FIN : CAMBIO A ARRAYS LAS IMAGENES DE ENTIDADES COLABORADORAS Y TRANSFORMO LAS IMAGENES A PATH
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   ************************************************************************/

  /************************************************************************
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   * INICIO : MERGE MAESTRIAS CON SUS DIFERENTES COMPONENTES
   *************************************************************************/

  DATABASE.maestrias.forEach((maestria) => {
    //este array filtrará los porques encontrados con los arrays (porque) para asignarlos al objeto maestria
    let array_porques_temporal = [];
    let array_dobletitulacion_temporal = [];
    let array_entidadcolaboradora_temporal = [];

    /**
     * FILTRO DE MAESTRIAS PARA INCRUSTAR LOS PORQUES A LA MAESTRIA CORRESPONDIENTE
     */
    //recorre los porques en totalidad
    DATABASE.porques.forEach((porque) => {
      //comparamos el porque por codigo para filtrar solo por codigos y asignarlos a las maestrias correspondientes
      if (porque.codigo === maestria.codigo) {
        //si hace match asigno al array temporal las maestrias
        array_porques_temporal.push(porque);
      }
    });
    //Asigno a los porques de las maestrias como array , el array temporal filtrado con los porques correspondientes
    maestria.porques = array_porques_temporal;

    /**
     * FILTROS DE MAESTRIAS PARA INCRUSTAR LOS DOBLETITULACIONES A LA MAESTRIA CORRESPONDIENTE
     */
    DATABASE.dobletitulaciones.forEach((dobletitulacion) => {
      //comparamos si el codigo de la doble titulacion coincide con el codigo de la maestria se inscrusta la doble titulacion en la maestria
      if (dobletitulacion.codigo === maestria.codigo) {
        //agreagamos al array temporal la doble titulacion correspondiente
        array_dobletitulacion_temporal.push(dobletitulacion);
      }
    });

    //incrustamos las doble titulaciones en la maestria actual
    maestria.dobletitulaciones = array_dobletitulacion_temporal;

    /**
     * FILTROS DE MAESTRIAS PARA INSCRUSTAR LAS ENTIDADES COLABORADORAS
     */
    entidadescolaboradoras_imagenes_modificadas.forEach(
      (entidadcolaboradora) => {
        //comparamos si el codigo de entidad colaboradora coincide con codigo de maestria para incrustar en maestria
        if (entidadcolaboradora.codigo === maestria.codigo) {
          array_entidadcolaboradora_temporal.push(entidadcolaboradora);
        }
      }
    );
    maestria.entidadescolaboradoras = array_entidadcolaboradora_temporal;

    //Finalmente asignamos las maestrias filtradas y asignadas al array que retornara
    maestrias_return.push(maestria);
  });
  /************************************************************************
   * FIN : MERGE MAESTRIAS CON SUS DIFERENTES COMPONENTES
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *************************************************************************/

  /**
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   * INICIO  : PROCEDO DE MEZACLADO DE MAESTRIAS PARA AGRUPAR POR MODALIDADES
   */

  let mezclar_por_modalidad = (maestrias = []) => {


    //
    let m_m = [];

    for (let i = 0; i < maestrias.length; i++) {
      // esta variable guardara la lista de masteres
      let masteres_temp = [];

      for (let j = 0; j < maestrias.length; j++) {
        let temp_i = maestrias[i];
        let temp_j = maestrias[j];
        let temp_master = {};
        if (temp_i.master == temp_j.master) {
          temp_master = temp_j;
          masteres_temp.push(temp_master);
        }
      }
      m_m.push({
        master: maestrias[i].master,
        maestrias: masteres_temp,
      });
    }

    ////////////////////////////////////////////

    let contenedor_filtrados = [];


    for (let a = 0; a < m_m.length - 1; a++) {
      if (m_m[a].master !== m_m[a + 1].master) {

        contenedor_filtrados.push(m_m[a]);
      }
    }

    return contenedor_filtrados;
  };

  let maestrias_merged_modalidades = mezclar_por_modalidad(maestrias_return);

  /**
   * FIN  : PROCEDO DE MEZACLADO DE MAESTRIAS PARA AGRUPAR POR MODALIDADES
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   */

  return maestrias_merged_modalidades;
};

/**
 * **************************************************
 * **************************************************
 * ******* FIN : MERGED MAESTRIAS *************************
 * ESTA FUNCION MEZCLA LOS DATOS EN MAESTRIAS PARA PROCESAR LOS DATOS COMO UN SOLO OBJETO INDIVIDUAL
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

let FUNCIONES_CONTAR_CARACTERES = (palabra, caracter) => {
  var indices = [];
  for (var i = 0; i < palabra.length; i++) {
    if (palabra[i].toLowerCase() === caracter) indices.push(i);
  }
  return indices.length;
};

let FUNCIONES_EXTRAER_CONTENIDO_PARENTESIS = (cadena) => {
  //var cadena = "(BBVA,CORREOS,ACCENTURE,FORD,MAPFRE,REPSOL)";
  //almacenas el valor de la respuesta en una variabe
  //validas que la cadena contenga el parentesis de apertura
  if (!cadena) { return; }
  if (cadena.includes("(")) {
    //divides la cadena en tantos elementos como delimitador del parentesis contenga quedando asi.
    //cadenaTemp[0]='We ' /*/  cadenaTemp[1]='can) do it!'
    var cadenaTemp = cadena.split("(");
    //asiganas a la cadena el segundo valor
    cadena = cadenaTemp[1]; //'can) do it!'
    //validamos que el resto de la cadena tenga el parentesis de cierre el cual tambien dividira
    if (cadena.includes(")")) {
      //cadenaTemp[0]='can' /*/  cadenaTemp[1]=' do it!'
      var cadenaTemp = cadena.split(")");
      //capturamos el valor que necesitamos
      cadena = cadenaTemp[0];
    }
  }
  return cadena;
};
let FUNCIONES_EXTRAER_CONTENIDO_CORCHETES = (cadena) => {
  //var cadena = "(BBVA,CORREOS,ACCENTURE,FORD,MAPFRE,REPSOL)";
  //almacenas el valor de la respuesta en una variabe
  //validas que la cadena contenga el parentesis de apertura
  if (cadena.includes("[")) {
    //divides la cadena en tantos elementos como delimitador del parentesis contenga quedando asi.
    //cadenaTemp[0]='We ' /*/  cadenaTemp[1]='can) do it!'
    var cadenaTemp = cadena.split("[");
    //asiganas a la cadena el segundo valor
    cadena = cadenaTemp[1]; //'can) do it!'
    //validamos que el resto de la cadena tenga el parentesis de cierre el cual tambien dividira
    if (cadena.includes("]")) {
      //cadenaTemp[0]='can' /*/  cadenaTemp[1]=' do it!'
      var cadenaTemp = cadena.split("]");
      //capturamos el valor que necesitamos
      cadena = cadenaTemp[0];
    }
  }
  return cadena;
};

FUNCIONES_EXTRAER_OPCIONES_TEXTO_ENTIDADES_COLABORADORAS = (cadena) => {
  let inicios = [];
  let finales = [];

  let opciones_encontradas = [];
  let texto_excluido = "";

  let caracteres = cadena.split("");

  for (let index = 0; index < caracteres.length; index++) {
    if (caracteres[index] == "[") {
      inicios.push(index + 1);
    }
    if (caracteres[index] == "]") {
      finales.push(index);
    }
  }

  if (
    (inicios.length == finales.length) &
    ((inicios.length > 0) & (finales.length > 0))
  ) {
    texto_excluido = cadena.slice(0, inicios[0] - 1);
    for (let index = 0; index < inicios.length; index++) {
      let texto_temporal = cadena.slice(inicios[index], finales[index]);

      opciones_encontradas.push(texto_temporal);
    }
  } else {
    texto_excluido = cadena;
  }

  retorna = { opciones: opciones_encontradas, parrafo: texto_excluido };

  return retorna;
};



/*
let datos_sql = FUNCIONES_MERGED_MAESTRIAS();
//console.log(datos_sql);
let id_maestrias = 1;
let id_presentaciones = 1;
let sentencias_maestrias = [];
let sentencias_presentaciones = [];
let codigo = Date.now();

datos_sql.forEach(dsql => {
  let mmm = ("INSERT INTO maestrias (maestriasId,maestriasCodigo,maestriasNombre) VALUES('" + id_maestrias + "','" + codigo + "','" + dsql.maestrias[0].master + "');");
  //console.log(mmm);
  sentencias_maestrias.push(mmm);
  let mae = dsql.maestrias;
  mae.forEach(m => {
    let ubicacion = m.universidad.toUpperCase().includes("CANARIAS") ? "Canarias" : m.universidad.toUpperCase().includes("ALICANTE") ? "Alicante" : m.universidad.toUpperCase().includes("VALENCIA") ? "Valencia" : m.universidad.toUpperCase().includes("MADRID") ? "Madrid" : "";
    let modalidads = m.modalidad.includes("Online") ? "1" : m.modalidad.includes("Presencial") ? "2" : m.modalidad.includes("Semipresencial") ? "3" : "0";
    let area = m.categoria.includes("Arquitectura") ? 1 :
      m.categoria.includes("Biomédicas y Salud") ? 2 :
        m.categoria.includes("Comunicación y ") ? 3 :
          m.categoria.includes("Deporte") ? 4 :
            m.categoria.includes("Derecho") ? 5 :
              m.categoria.includes("Diseño") ? 6 :
                m.categoria.includes("Fisioterapia") ? 7 :
                  m.categoria.includes("Nutrición") ? 8 :
                    m.categoria.includes("Psicología") ? 9 :
                      m.categoria.includes("Educación") ? 10 :
                        m.categoria.includes("Animació") ? 11 :
                          m.categoria.includes("Empresa y T") ? 12 :
                            m.categoria.includes("Ingeniería") ? 13 :
                              m.categoria.includes("Odontología") ? 14 : "*************************************************************"
    let ppp = ("INSERT INTO  `presentaciones` (`presentacionesId`,`presentacionesCodigo`,`presentacionesIdioma`,`presentacionesInicio`,`presentacionesEcts`,`presentacionesUniversidad`,`presentacionesEscuela`,`presentacionesCatalogo`,`presentacionesTitulacion`,`presentacionesResumen`,`presentacionesPresentacion`,`presentacionesCampus`,`presentacionesUbicacion`,`maestriasId`,`modalidadesId`,`areasId`) VALUES(" + id_presentaciones + ",'" + m.codigo + "','" + m.idioma + "','" + m.inicio + "'," + m.ects + ",'" + m.universidad + "','" + m.escuela + "','https://fercoadvancededucation.com/data/202311271702webpage/catalogos/" + m.codigo + ".pdf','" + m.titulacion + "','" + (m.presentacion || "") + "','sin presentacion','sin campus','" + ubicacion + "'," + id_maestrias + "," + modalidads + "," + area + ");");

    let insertarDuracion = "UPDATE presentaciones set presentacionesDuracion = '"+m.duracion+"' WHERE presentacionesCodigo = '"+m.codigo+"';"
    console.log(insertarDuracion);
    //console.log(ppp);
    sentencias_presentaciones.push(ppp);
    id_presentaciones++;
  });
  codigo++;
  id_maestrias++;
});
*/
/* sentencias_maestrias.forEach(sm => {
  console.log(sm);
}); */
