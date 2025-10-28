/**
 * ********** INICIO :: DE VARIABLES PARA SECCION 
 */

let FMI_VAR_COMPONENTE_PANTALLA_FORMULARIO = $("#elformulario"); //esta variable contendra el componente donde sera incrustado el formulario de Mas imformacion
/**
 * ********** FIN :: DE VARIABLES PARA SECCION 
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
 */


class CLASS_FMI_FORMULARIO_MAS_INFORMACION {
  /**
   *INICIALIZA LOS COMPONENTES CON TODAS SUS CARACTERISTICAS
   */
  initComponents = () => {

    this.formnombres.attr("type", "text")
    this.formnombres.addClass("form-control")
    this.formnombres.attr("placeholder", "* Nombres")

    this.formapellidos.attr("type", "text")
    this.formapellidos.addClass("form-control")
    this.formapellidos.attr("placeholder", "* Apellidos")

    this.formcorreo.attr("type", "text")
    this.formcorreo.addClass("form-control")
    this.formcorreo.attr("placeholder", "* Correo")

    this.formtelefono.attr("type", "text")
    this.formtelefono.addClass("form-control")
    this.formtelefono.attr("placeholder", "* Telefono")

    this.formpais.addClass("form-control");

    this.formterminos.addClass("form-check-input")
    this.formterminos.attr("type", "checkbox")
    this.formterminos.attr("name", "formterminos");

    this.botonsubmit.attr("type", "submit");
    this.botonsubmit.addClass("btn btn-outline-dark");
    this.botonsubmit.html("Enviar");

    this.cDescripcion.addClass("card-text");

    this.cFoto.addClass("card-img-top");
    this.cFoto.attr("width", "100%");

  }

  /**
   * INICIALIZA LOS COMPONENTES CON EVENTOS
   */

  initRender = () => {
    this.initComponents();
    this.cPantalla.html("")
    this.cPantalla.append(
      $("<div></div>")
        .addClass("card")
        .append(
          //segundo nivel
          $("<div></div>")
            .addClass("card-body p-4")
            .append(
              //tercer nivel
              $("<div></div>")
                .addClass("row")
                //cuarto nivel 1
                .append(
                  //.
                  $("<div></div>").addClass("col-sm-5").append(this.cFoto)
                ) //cuarto nivel 2
                .append(
                  //.
                  $("<div></div>")
                    .addClass("col-sm-7")
                    //
                    .append(
                      $("<h4></h4>")
                        .addClass("card-title")
                        .append("<br>")
                        .append(this.cTitulo)
                    )
                    //
                    .append(this.cSubtitulo)
                    //
                    .append(this.cDescripcion)
                )
            )
            .append(
              //
              $("<div></div>")
                .append("<form></form>")
                //PRIMERO
                .append(
                  //
                  $("<div></div>").addClass("mb-3 mt-3").append(
                    //
                    $("<div></div>")
                      .addClass("input-group mb-3")
                      .append(this.formnombres.keyup(() => {
                        this.verificarLleno();
                      }))
                      .append(this.formapellidos.keyup(() => {
                        this.verificarLleno();
                      }))
                  )
                )
                //SEGUNDO
                .append($("<div></div>").addClass("mb-3").append(this.formcorreo.keyup(() => {
                  this.verificarLleno();
                })))
                //TERCERO
                .append($("<div></div>").addClass("mb-3").append(this.formpais.ready(() => {

                  this.formpais.html("");

                  let opc = $("<option></option>")
                    .attr("value", "0")
                    .html("* Elige tu país");

                  this.formpais.append(opc);

                  FUNCION_API_OBTENER_PAISES((data) => {

                    localStorage.setItem("countries", JSON.stringify(data.response));

                    data.response.forEach((pais) => {
                      this.formpais.append(
                        $("<option></option>")
                          .attr("value", pais.codigo)
                          .attr("name", pais.nombre)
                          .html(pais.nombre + " " + pais.codigo)
                      );
                    });

                  });

                }).change(() => {
                  if (this.formpais.val() > 0) {
                    this.formtelefono.val(this.formpais.val() + " ").focus();
                  } else {
                    this.formtelefono.val("");
                  }
                  this.verificarLleno();
                })))
                //CUARTO
                .append($("<div></div>").addClass("mb-3").append(this.formtelefono.keyup(() => {
                  this.verificarLleno();
                })))
                //QUINTO
                .append(
                  $("<div></div>")
                    .addClass("form-check mb-3")
                    .append(
                      $("<p></p>").append(
                        $("<label></label>")
                          .addClass("form-check-label text-dark")
                          .append(this.formterminos.keyup(() => {
                            this.verificarLleno();
                          }))
                          .append(
                            "Acepto recibir información acerca de : " +
                            this.presentacion.maestriasNombre
                          )
                      )
                    )
                )
                //SEXTO
                .append(
                  $("<div></div>").addClass("text-center").append(this.botonsubmit.click(() => {
                    this.botonsubmitEventClick(() => {
                      this.cargandoEvent(true);
                    }, () => {
                      this.cargandoEvent(false);
                    }, () => {
                      this.limpiarFormulario();
                    });
                  }))
                )
                .append(this.cargando)
            ) //////////////////////////////////////////////////////////////////////
        )
    );

  }

  getFormDataToWeb = () => {
    return {
      instruction: "insert",
      nombres: this.formnombres.val(),
      apellidos: this.formapellidos.val(),
      correo: this.formcorreo.val(),
      pais: JSON.parse(localStorage.getItem("countries")).filter(
        (pais) => pais.codigo === this.formpais.val()
      )[0],
      telefono: this.formtelefono.val(),
      master: this.presentacion.maestriasNombre,
      titulacion: null,
      comentario: null,
      tipo: null,
    }
  }

  limpiarFormulario = () => {
    this.formnombres.val("");
    this.formapellidos.val("");
    this.formcorreo.val("");
    this.formtelefono.val("");
    this.formterminos.prop("checked", false);
    this.cargando.html("");
  };

  verificarLleno = () => {

    let filled = true;

    let inputs = this.getInputs();

    inputs.forEach(input => {

      if (input.attr("type") === "text") {
        if (input.val().length <= 0) {
          filled = false;
        }
      }
      if (input.attr("type") === "checkbox") {
        if (input.prop("checked") === false) {
          filled = false;
        }
      }
      if (input.attr("type") == "undefined" || input.attr("type") == "null") {
        if (input.val() == 0) {
          filled = false;
        }

      }
      if (filled) {
        input.css("border-color", "green");
      } else {
        input.css("border-color", "red");
      }
    });



    return filled;
  }

  getInputs = () => {
    return [
      this.formnombres,
      this.formapellidos,
      this.formcorreo,
      this.formpais,
      this.formtelefono,
      this.formterminos
    ];
  }

  setPresentacion = (presentacion) => {
    this.presentacion = presentacion;
    this.initRender();
  }

  setComponentPantalla = (pantalla) => {
    this.cPantalla = pantalla;
    this.cPantalla.addClass("container");
  }

  setCTitulo = (texto) => {
    this.cTitulo.html(texto);
    this.initRender();
  }

  setCSubtitulo = (texto) => {
    this.cSubtitulo.html(texto);
    this.initRender();
  }

  setCDescripcion = (texto) => {
    this.cDescripcion.html(texto);
    this.initRender();
  }

  setCFoto = (foto) => {
    this.cFoto.attr("src", foto);
    this.initRender()
  }




  /**
   * INICIO :: VARIABLES
   */

  cPantalla;
  formnombres = $("<input></input>");
  formapellidos = $("<input></input>");
  formcorreo = $("<input></input>");
  formpais = $("<select></select>");
  formtelefono = $("<input></input>");
  formterminos = $("<input></input>");
  botonsubmit = $("<button></button>");
  presentacion;
  cargando = $("<div></div>");
  cTitulo = $("<p></p>");
  cSubtitulo = $("<b></b>");
  cDescripcion = $("<p></p>");
  cFoto = $("<img>");

  /**
  * FIN :: VARIABLES
  */



  /**
   * INICIO :: EVENTOS
   */
  botonsubmitEventClick = (cargandoOn = () => { }, cargandoOff = () => { }, limpiarFormulario = () => { }) => {
    if (this.verificarLleno()) {

      $.ajax({
        data: this.getFormDataToWeb(), //datos que se envian a traves de ajax
        url: VARIABLES_FERCO_SERVER + VARIABLES_FERCO_SERVER_LEADS_REST, //archivo que recibe la peticion
        type: "post", //método de envío

        beforeSend: function () {
          cargandoOn();
          //this.cargandoEvent(true);
        },
        success: function (response) {
          //una vez que el archivo recibe el request lo procesa y lo devuelve

          if (response.response) {
            /* this.cargando.html(
              "<b class='text-success'>Tu petición ha sido registrada! <br> Pronto nos pondremos en contacto para asesorarte con mejor precisión<b>"
            ); */
            alert("Tu petición ha sido registrada! \n Pronto nos pondremos en contacto para asesorarte con mejor precisión");
          } else {
            /* this.cargando.html(
              "<b class='text-success'>Ocurrió un error al guardar, por favor intenta nuevamente recargando la página<b>"
            ); */
            alert("Ocurrió un error al guardar, por favor intenta nuevamente recargando la página");
          }

    
          setTimeout(function () {
            cargandoOff()
          }, 2000);

          limpiarFormulario();
        },
      });
    } else {

      this.cargando.html("<b class='text-danger'>Rellene todos los campos<b>");

      /*      setTimeout(function () {
             //this.cargando.html("");
           }, 2000); */
    }
  }

  cargandoEvent(status) {
    if (status) {
      this.cargando.addClass("spinner-border");

    } else
      this.cargando.removeClass("spinner-border");
  }
  /**
   * FIN :: EVENTOS
   */
}//FIN DE LA CLASE