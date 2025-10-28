
//Este componente reenderiza la pagina principal para cada master
/**
 *
 *
 *
 *
 *
 *
 *
 * INICIO :: COMPONENTE MASTER PARA HTML MAESTRIA
 *
 * 
 * 
 * 
 *
 *
 *
 * @param {*Toma parametros para reenderizar} data
 */
//ESTA FUNCION UTILIZA VARIABLES DECLARADAS EN JS ORIGINAL PARA CADA SECCION

let COMPONENT_MASTER_MAESTRIA = (c_master = {}) => {
  /***************************************************/
/*   // 1: RECUPERAMOS EL MASTER SELECCIONADO POR EL USUARIO
  //var c_master = VARIABLES_get_master_actual_seleccionado();
  // 2: Asignamos el nombre de máster a la cabecera de presentación (Título)
  MASTER_VARIABLES_P_V_MASTER.html(c_master.master);
  // 3: Asignamos la descripcion a la cabecera de presentación (Descripcion)
  MASTER_VARIABLES_P_V_DESCRIPCION.html(c_master.descripcion);
  // 4: Asignamos la modalidad a la cabecera de presentación (Modalidad)
  MASTER_VARIABLES_P_V_MODALIDAD.html(c_master.modalidad);
  // 5: Asignamos los valores a CARD de presentación
  MASTER_VARIABLES_V_MODALIDAD.html(c_master.modalidad); //Fecha de inicio
  MASTER_VARIABLES_V_INICIO.html(FUNCIONES_FORMATEAR_FECHA(c_master.inicio)); //Fecha de inicio
  MASTER_VARIABLES_V_TITULACION.html(c_master.titulacion); //Titulacion Oficial
  MASTER_VARIABLES_V_UNIVERSIDAD.html(c_master.universidad); //Universidad de Dicta el Máster
  MASTER_VARIABLES_V_IDIOMA.html(c_master.idioma); //Idioma del Máster
  MASTER_VARIABLES_V_ECTS.html(c_master.ects); //Ects del Máster
  MASTER_VARIABLES_V_DURACION.html(c_master.duracion); //Duración el Máster
  MASTER_VARIABLES_V_ESCUELA.html(c_master.escuela); //Facultad o Escuela que dicta el Máster
  MASTER_VARIABLES_V_CATALOGO.html(VARIABLES_MENSAJES_DESCARGAR_CATALOGO)
    .attr("download", c_master.master + "_" + c_master.modalidad)
    .attr("href", VARIABLES_PATH_CATALOGOS + c_master.catalogo); //catalogo pdf
 */
  // 6: Asignamos el formulario de pedir información
  // 7 : Cargamos los párrafos de presentación antes de los parámetros de presentación del Máster
  COMPONENT_MASTER_MOSTRAR_INFORMACION_PRESENTACION(c_master);
  // 8 : Cargamos el Formulario de "MAS INFORMACION"


  let formulario_mas_informacion = new CLASS_FMI_FORMULARIO_MAS_INFORMACION();
  formulario_mas_informacion.setComponentPantalla(FMI_VAR_COMPONENTE_PANTALLA_FORMULARIO);//VARIABLE EN (formularioMasInformacionMaster.js)
  formulario_mas_informacion.setMaestria(c_master);
  formulario_mas_informacion.setCTitulo("¿Tienes alguna duda?");
  formulario_mas_informacion.setCSubtitulo("Christian Coronel");
  formulario_mas_informacion.setCDescripcion("Responsable Comercial de Maestrías Universitarias");
  formulario_mas_informacion.setCFoto("img/comercial.jpg");


  // 9: Cargamos la seccion "PORQUÉ ESTUDIAR ESTE MÁSTER"
  MASTER_CONTROLADOR_COMPONENTE_PORQUE(c_master);

  // 10: Cargamos la seccion de Empresas Colaboradoras con imagenes  
  MASTER_CONTROLADOR_COMPONENTE_EMPRESAS_COLABORADORAS(c_master);

  // 11: Cargamos la sección de Doble Titulacion
  MASTER_VARIABLES_CONTAINER_RESUMEN_DOBLE_TITULACION.html("").append(
    COMPONENT_DOBLE_TITULACION(c_master)
  );

  // 12: Cargamos la seccion de Entidades Colaboradoras
  MASTER_VARIABLES_CONTAINER_RESUMEN_ENTIDADES_COLABORADORAS.html("").append(
    COMPONENT_ENTIDADES_COLABORADORAS(c_master)
  );

  MASTER_VARIABLES_INTERCAMBIO.html("").append(
    COMPONENT_INTERCAMBIO_MAESTRIA(
      JSON.parse(localStorage.getItem("grupo_master"))
    )
  );




  MASTER_CONTROLADOR_COMPONENTE_PLAN_ESTUDIOS(c_master);//////////////////////////////////////////////////////////
};
/**
 *
 *FIN :: COMPONENTE MASTER PARA HTML MAESTRIA
 *
 */

let COMPONENT_MASTER_MOSTRAR_INFORMACION_PRESENTACION = (maestria = {}) => {
  // 1: Asignamos el titulo
  MASTER_VARIABLES_P_V_TITULO_DESCRIPCION.html(maestria.master);
  // 2: Asignamos parrafos
  let parrafos =
    maestria.presentacion != undefined ? maestria.presentacion.split(".") : [];

  MASTER_VARIABLES_P_V_PARRAFOS_DESCRIPCION.html("");

  parrafos.forEach((parrafo) => {
    MASTER_VARIABLES_P_V_PARRAFOS_DESCRIPCION.append(
      $("<p></p>").append((parrafo += "."))
    );
  });
};

<<<<<<< Updated upstream

////////////////////////////////////////////////////////////////////////////////////////////////////////////
let COMPONENT_DOBLE_TITULACION = (maestria = {}) => {
  /**
   *
   * @param {solo letras descriptivas del icono} icono
   * @param {es el subtitulo del recuadro de presentacion COL-SM-3  } subtitulo
   * @param {es el detalle del reacuadro detalle COL-SM-3*} detalle
   * @returns
   */
  let c_columna_sm3 = (imagen, subtitulo, detalle) => {
    return $("<div></div>")
      .addClass("col-sm-4 p-2")
      .append($("<img>").attr("src", imagen).attr("width", "100%"))
      .append(
        $("<div></div>")
          .addClass("border p-3")
          .append(
            $("<p></p>")
              .addClass("text-center")
              .append
              //$("<img>").attr("src", imagen).attr("width", "100%")
              ()
          )
          .append(
            $("<h5></h5>").addClass("text-center text-dark").append(subtitulo) // SUBTITULO DE COL-SM-3
          )
          .append($("<p></p>").addClass("p-3").append(detalle)) // DETALLE DEL COL-SM-3
      );
  };

  /**
   * contenedor que abarcara N col-sm-3
   */
  let c_div_row = $("<div></div>").addClass("row p-4");

  /**
   * cargamos los col-sm-3 de porques a div row
   */

  maestria.dobletitulaciones.forEach((dobletitulacion) => {
    c_div_row.append(
      c_columna_sm3(
        MASTER_VARIABLES_DATA_MASTER +
        "/dobletitulacion/" +
        dobletitulacion.imagen +
        ".png",
        dobletitulacion.subtitulo,
        dobletitulacion.detalles
      )
    );
  });

  //retorna el contenedor completo cargado
  return $("<div></div>")
    .addClass("container")
    .append(
      // AQUI VA EL TITULO DE PORQUE ESTUDIAR EL MASTER
      $("<p></p>").append(
        $("<h5></h5>")
          .addClass("col-sm-8")
          .append("CONSIGUE UNA DOBLE TITULACIÓN")
      )
    )
    .append(
      // AQUI VA LA DESCRIPCION DE LA JUSTIFICACION DEL PORQUE ESTUDIAR EL MASTER
      $("<p></p>").append(
        maestria.dobletitulaciondescripcion == undefined
          ? ""
          : maestria.dobletitulaciondescripcion
      )
    )
    .append(c_div_row);
=======
let COMPONENT_NAVBAR = () => {
  return `
    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white text-light navbar-light shadow sticky-top p-0" id="home">
        <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5 xos-temblor">
            <h2 class="m-0"><img width="40" alt="" id="logoBarra" /></h2>
        </a>
        <button type="button" class="navbar-toggler me-4 " data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="index.html" class="nav-item nav-link active text-dark xos-temblor">Home</a>
                <a href="maestrias.html" class="nav-item nav-link active text-dark xos-temblor">Maestr&iacute;as Oficiales en
                    Espa&ntilde;a</a>
              
                <a href="about.html" class="nav-item nav-link xos-temblor">¿Quiénes Somos?</a>
                <a href="https://www.fercoadvancededucation.com/landing"
                    class="nav-item nav-link xos-temblor">Contáctos</a>
            </div>
            <!--  <a href="" class="btn btn-dark py-4 px-lg-5 d-none d-lg-block">Join Now<
                    class="fa fa-arrow-right ms-3"></i></a> -->
        </div>
    </nav>
    <!-- Navbar End -->
  `;
>>>>>>> Stashed changes
};

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
 *
 *
 *
 *
 *
 * COMPONENTE PARA ENTIDADES COLABORADORAS
 * @param {OBJETO MAESTRIA} maestria
 * @returns
 */
let COMPONENT_ENTIDADES_COLABORADORAS = (maestria) => {
  //elemento para cuando solo existe una foto
  let div_solo_una_foto = (foto) => {
    return $("<div></div>")
      .addClass("col-sm-5 text-center p-3")
      .append($("<img>").attr("src", foto).attr("width", "100%"));
  };

  //elemento para cuando existen varias fotos
  let div_varias_fotos = (fotos = []) => {
    //creamos el contenedor div col-sm-12 de 12 puntos para que abarque toda la pantalla horizontal inferior
    let div_fotos = $("<div></div>").addClass("col-sm-12 p-3");
    /**
     *
     * @param {Una sola fotografía} foto
     * @returns returna un img cargado de una foto
     */
    let imagen = (foto) => {
      return $("<img>").attr("src", foto).attr("width", "19%");
    };
    //recorremos el array de fotos para cargar cada foto al div col-sm-12
    fotos.forEach((foto) => {
      div_fotos.append(imagen(foto));
    });
    //retirnamos el div de 12 puntos totalmente cargado
    return div_fotos;
  };

  // 1: Primer elemento
  let p_titulo_entidades_colaboradoras = (titulo) => {
    return $("<p></p>").append(
      $("<h4></h4>").addClass("col-sm-8 text-uppercase").append(titulo)
    );
  };

  // 2.1: elemento
  let div_subtitulo_descripcion = (entidadcolaboradora = {}) => {
    var descripcion = "";
    if (entidadcolaboradora.parrafo != undefined) {
      descripcion = entidadcolaboradora.parrafo;
      descripcion += "<br><br>";
      entidadcolaboradora.opciones.forEach((opcion) => {
        descripcion += "<li>" + opcion + "</li>";
      });
    } else {
      descripcion = entidadcolaboradora.descripcion;
    }

    return $("<div></div>")
      .addClass("col-sm-7")
      .append($("<p></p>").append(entidadcolaboradora.subtitulo || ""))
      .append($("<p></p>").addClass("pt-lg-5").append(descripcion));
  };

  // 2: tercer elemento
  let div_cuerpo_elemento = (entidadcolaboradora) => {
    let cuerpo = $("<div></div>")
      .addClass("row p-4")
      .append(div_subtitulo_descripcion(entidadcolaboradora));

    if (entidadcolaboradora.imagenes.length > 1) {
      cuerpo.append(div_varias_fotos(entidadcolaboradora.imagenes));
    } else {
      cuerpo.append(div_solo_una_foto(entidadcolaboradora.imagenes[0]));
    }
    return cuerpo;
  };

  let entidades_colaboradoras = $("<div></div>");

  //recorro las entidades colaboradoras de ese master
  maestria.entidadescolaboradoras.forEach((entidadcolaboradora) => {
    //Tomo la información de las entidades colaboradoras y asigno a un contenedor
    entidades_colaboradoras.append(
      $("<div></div>")
        .addClass("container")
        .append(p_titulo_entidades_colaboradoras(entidadcolaboradora.titulo)) //primero asigno un titulo
        .append(div_cuerpo_elemento(entidadcolaboradora))
        .append("<hr>") //luego asigno un cuerpo
    );
  });
  return entidades_colaboradoras;
};
/**
 *
 */


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
 *
 *
 *
 *
 */

/**
 *
 *
 *
 *
 *
 *
 * INICIO : COMPONENTE CUADRO MAESTRIA
 */

/**
 * FIN : COMPONENTE CUADRO MAESTRIA
 */

let COMPONENT_INTERCAMBIO_MAESTRIA = (maestrias_group) => {
  /**
   * Verifica si en el grupo existen maestrias con modalidad Online
   * @param {GRUPO DE MAESTRIAS} maestrias_group
   * @returns
   */
  const is_online = (maestrias_group) => {
    let m = false;
    maestrias_group.maestrias.forEach((maestria) => {
      if (maestria.modalidad.toUpperCase() === "ONLINE") {
        m = true;
      }
    });
    return m;
  };
  /**
   * Verifica si en el grupo existen maestrias con modalidad Presencial
   * @param {GRUPO DE MAESTRIAS} maestrias_group
   * @returns
   */
  const is_presencial = (maestrias_group) => {
    let m = false;
    maestrias_group.maestrias.forEach((maestria) => {
      if (maestria.modalidad.toUpperCase() === "PRESENCIAL") {
        m = true;
      }
    });
    return m;
  };

  /**
   * Verifica si en el grupo existen maestrias con modalidad Semipresencial
   * @param {GRUPO DE MAESTRIAS} maestrias_group
   * @returns
   */
  const is_semipresencial = (maestrias_group) => {
    let m = false;
    maestrias_group.maestrias.forEach((maestria) => {
      if (maestria.modalidad.toUpperCase() === "SEMIPRESENCIAL") {
        m = true;
      }
    });
    return m;
  };

  /**
   * Devuelve una cabecera con titulo e icono
   * @param {icono <i/>} icono
   * @param {titulo del titulo (Presencial, Online)} titulo
   * @returns
   */
  let cabecera = (icono, titulo) => {
    return $("<p></p>").append(
      $("<b></b>")
        .append($("<i></i>").addClass(icono))
        .append(titulo)
        .append($("<hr>"))
    );
  };

  //seccion de codigos de inicio
  let enlace_p_para_modalidad = (elementos = {}) => {
    let boton = $("<a></a>")
      .ready(() => {
        let b = JSON.parse(localStorage.getItem("master"));
        if (b !== null) {
          if (b.codigo === elementos.maestria.codigo) {
            $(".b" + b.codigo + "b").addClass("bg-dark");
          }
        } else if ((b === null) & (elementos.posicion === 0)) {
          $(".b" + elementos.maestria.codigo + "b").addClass("bg-dark");
        }
      })
      .css("font-size", "10px")
      .addClass("btn border text-center text-light")
      .addClass("b" + elementos.maestria.codigo + "b")
      .append(elementos.modalidad)
      .append("<br>")
      .append(
        //icono
        $("<i></i>").css("font-size", "12px").append(elementos.fecha)
      )
      .append("<br>")
      .append($("<i></i>").css("font-size", "12px").append(elementos.campus))
      .click(() => {
        localStorage.setItem("master", JSON.stringify(elementos.maestria));
        COMPONENT_MASTER_MAESTRIA(elementos.maestria);
      }); /* 
      .mouseenter(function () {
        boton.addClass("bg-light text-dark")
      })
      .mouseleave(function () {
        boton.removeClass("bg-light text-dark")
      }) */

    return boton;
  };

  /**
   * COTNENEDOR PARA enlaces <a></a> modalidad Online
   */
  let contenedor_enlaces_online = $("<div></div>").addClass("p-2 hover-overlay");
  let div_para_online = $("<div></div>")
    .addClass("col-sm-5 text-light")
    .append(cabecera("bi-laptop", " Online"))
    .append(contenedor_enlaces_online);
  /**
   * COTNENEDOR PARA enlaces <a></a> modalidad Presencial
   */
  let div_para_separador = $("<div></div>").addClass("col-sm-2");
  /**
   * COTNENEDOR PARA enlaces <a></a> modalidad Semipresencial
   */
  let contenedor_enlaces_presencial =
    $("<div></div>").addClass("p-2 hover-overlay");
  let div_para_presenciales = $("<div></div>")
    .addClass("col-sm-5 text-light")
    .append(cabecera("fas fa-map-marker-alt", " Presencial"))
    .append(contenedor_enlaces_presencial);

  /**
   * contenedor para subcontenedor ONLINES o PRESENCIALES SEMIPRESENCIALES,
   */
  let row_duplex = $("<div></div>").addClass("row");

  /**
   * Contenedor principal
   */
  let contenedor = $("<div><div>")
    .addClass("row p-5")
    .append($("<div></div>").addClass("col-sm-4"))
    .append(
      $("<div></div>")
        .addClass("col-sm-4 p-3")
        .css("background-color", "rgb(255, 255, 255,0.2)")
        .append(
          //P3
          $("<div></div>").addClass("p-3").append(row_duplex)
        )
    );

  /**
   * Verifica si, existen maestrías online, carga recuadro para enlaces de maestrías online
   */
  if (is_online(maestrias_group)) {
    row_duplex.append(div_para_online);
  }
  /**
   * Verifica si, existen maestrías presencial o semipresencial porque van en el mismo div, carga recuadro para enlaces de maestrías presencial o semipresencial
   */
  if (is_presencial(maestrias_group) || is_semipresencial(maestrias_group)) {
    row_duplex.append(div_para_separador);
    row_duplex.append(div_para_presenciales);
  }

  let contador_recorrido = 0;

  maestrias_group.maestrias.forEach((maestria) => {
    let datos = {
      clase: maestria.modalidad.toLowerCase(),
      //fecha: FUNCIONES_FORMATEAR_FECHA(maestria.inicio),
      fecha: maestria.inicio,
      modalidad: maestria.modalidad,
      maestria: maestria,
      campus: maestria.universidad.includes("Madrid")
        ? "(Madrid)"
        : maestria.universidad.includes("Canarias")
          ? "(Canarias)"
          : maestria.universidad.includes("Valencia")
            ? "(Valencia)"
            : "",
      posicion: contador_recorrido,
    };

    if (maestria.modalidad === "Online") {
      let x = enlace_p_para_modalidad(datos);
      contenedor_enlaces_online.append(x);
    }
    if (maestria.modalidad === "Presencial") {
      let x = enlace_p_para_modalidad(datos);
      contenedor_enlaces_presencial.append(x);
    }

    if (maestria.modalidad === "Semipresencial") {
      let x = enlace_p_para_modalidad(datos);
      contenedor_enlaces_presencial.append(x);
    }
    contador_recorrido++;
  });

  /**
   * * INICIO : FUNCIONES INTERNAS
   */
  //devuelve los codigos seleccionados en localstorage
  let codigos = () => {
    let c = [];
    let d = JSON.parse(localStorage.getItem("grupo_master"));

    d.maestrias.forEach((m) => {
      c.push(m.codigo);
    });
    return c;
  };
  //marca las opciones
  let marcar = (maestria = {}, codes = []) => {
    codes.forEach((codigo) => {
      $("#b" + codigo + "b").removeClass("bg-dark");
    });
    $("#b" + maestria.codigo + "b").addClass("bg-dark");
  };
  /**
   * FIN : FUNCIONES INTERNAS
   */

  /**
   * aqui va la logica de marcado de los elementos de botones para intercambio de acciones entre  las diferentes modalidades
   */

  let m_a_s = JSON.parse(localStorage.getItem("master"));

  if (m_a_s === null) {
    let primero = VARIABLES_get_master_actual_seleccionado();
    marcar(primero, codigos());
  } else {
    let primero = JSON.parse(localStorage.getItem("master"));
    marcar(primero, codigos());
  }
  /* else if ((m_a_s !== null) & (elementos.posicion == 0)) {
    marcar(m_a_s, codigos());
  } else if ((m_a_s !== null) & (elementos.posicion > 0)) {
    marcar(elementos.master, codigos());
  } else {
    marcar(elementos.master, codigos());
  } */

  return contenedor;
};

















/**
        atributo.icon_class,
            atributo.titulo,
            atributo.contenido
       */
/**
  <!-- INICIO DE PRUEBA DE CODIGO -->
            <div class="container mt-3">
                <div class="card">
                    <div class="card-body">
                        <h3>
                            <a href="maestria_construccion.html" class=" xos-hover-1">
                                Máster Universitario en Gestión Internacional de la edificación y la Construcción MBA
                            </a>
                        </h3>
                        <p>
                            Escuela de Arquitectura, Ingeniería y Diseño
                        </p>
                        <p>
                            <b>
                                Plan de estudios
                            </b>
                            <br>
                            <div>
                                <!-- OPCIONES DE MODALIDADES -->
                                <a href="./masteres/ARQUITECTURA Y DISEÑO/master_universitario_gestion_edificacion_online_jWrx3mq.pdf"
                                    download="planEstudios" class="badge bg-dark xos-hover-2" data-bs-toggle="tooltip"
                                    title="descargar">
                                    <i class="fas fa-download "></i>
                                    PRESENCIAL
                                </a>
                                <a href="./masteres/ARQUITECTURA Y DISEÑO/master_universitario_gestion_edificacion_online_jWrx3mq.pdf"
                                    download="planEstudios" class="badge bg-dark xos-hover-2" data-bs-toggle="tooltip"
                                    title="descargar">
                                    <i class="fas fa-download "></i>
                                    ONLINE
                                </a>
                            </div>
                            <div>
                                <a href="maestria_construccion.html" class="badge bg-success xos-hover-3">
                                    <i class="fas fa-globe"></i>
                                    Ver detalles
                                </a>
                            </div>
                        </p>
                        <p>
                            <label class=" badge bg-light text-dark"><i class="fa fa-language"></i>
                                Idioma : Español</label>
                            <label class=" badge bg-light text-dark"><i class="fa fa-clock"></i> Duración : 11
                                Meses</label>
                            <label class=" badge bg-light text-dark"><i class="fa fa-calendar"></i> Inicio : 30 Octubre
                                2023</label>
                        </p>
                    </div>
                </div>
            </div>
            <!-- FIN DE PRUEBA DE CODIGO --> 
   */