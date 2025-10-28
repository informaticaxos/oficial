let campoPresentacionesCodigo = $("<div></div>");
let campoPresentacionesIdioma = $("<div></div>");
let campoPresentacionesInicio = $("<div></div>");
let campoPresentacionesEcts = $("<div></div>");
let campoPresentacionesUniversidad = $("<div></div>");
let campoPresentacionesEscuela = $("<div></div>");
let campoPresentacionesCatalogo = $("<div></div>");
let campoPresentacionesTitulacion = $("<div></div>");
let campoPresentacionesResumen = $("<div></div>");
let campoPresentacionesPresentacion = $("<div></div>");
let campoPresentacionesCampus = $("<div></div>");
let campoPresentacionesUbicacion = $("<div></div>");
let campoPresentacionesPage = $("<div></div>");
let campoPresentacionesDuracion = $("<div></div>");

$(document).ready(function () {
    $("#inputFiltrar").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#filtrar tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});



$(document).ready(() => {
    console.log("aqui epiezo ");

    /*  let tr = () => {
         return $("<tr></tr>");
     } */

    let init = 1;
    let tbodyplantilla = $("#tbodyplantilla");
    let cl_presentaciones = new CLASS_SERVER_PRESENTACIONES();
    cl_presentaciones.SELECT_MERGED((presentaciones) => {
        presentaciones.forEach(p => {


            let tr = $("<tr></tr>");

            let s_modalHeadTitle = $("#s_modalHeadTitle");

            let s_id = $("#s_id").addClass("text-light");
            let s_codigo = $("#s_codigo").addClass("text-danger");
            let s_maestriasNombre = $("#s_maestriasNombre").addClass("text-light");
            let s_idioma = $("#s_idioma").addClass("text-light");
            let s_inicio = $("#s_inicio").addClass("text-light");
            let s_ects = $("#s_ects").addClass("text-light");
            let s_universidad = $("#s_universidad").addClass("text-light");
            let s_escuela = $("#s_escuela").addClass("text-light");
            let s_catalogo = $("#s_catalogo").addClass("text-light");
            let s_titulacion = $("#s_titulacion").addClass("text-light");
            let s_resumen = $("#s_resumen").addClass("text-light");
            let s_presentacion = $("#s_presentacion").addClass("text-light");
            let s_campus = $("#s_campus").addClass("text-light");
            let s_ubicacion = $("#s_ubicacion").addClass("text-light");
            let s_page = $("#s_page").addClass("text-light");
            let s_duracion = $("#s_duracion").addClass("text-light");



            let v_codigo = $("<label></label>").addClass("text-danger").html(p.presentacionesCodigo);
            let v_idioma = $("<label></label>").addClass("text-light").html(p.presentacionesIdioma);
            let v_inicio = $("<label></label>").addClass("text-light").html(p.presentacionesInicio);
            let v_ects = $("<label></label>").addClass("text-light").html(p.presentacionesEcts);
            let v_universidad = $("<label></label>").addClass("text-light").html(p.presentacionesUniversidad);
            let v_escuela = $("<label></label>").addClass("text-light").html(p.presentacionesEscuela);
            let v_catalogo = $("<label></label>").addClass("text-light").html(p.presentacionesCatalogo);
            let v_titulacion = $("<label></label>").addClass("text-light").html(p.presentacionesTitulacion);
            let v_resumen = $("<label></label>").addClass("text-light").html(p.presentacionesResumen.replace(". ", "<br><br>"));
            let v_presentacion = $("<label></label>").addClass("text-light").html(p.presentacionesPresentacion.replace(". ", "<br><br>"));
            let v_campus = $("<label></label>").addClass("text-light").html(p.presentacionesCampus);
            let v_ubicacion = $("<label></label>").addClass("text-light").html(p.presentacionesUbicacion);
            let v_page = $("<a></a>").addClass("text-light").html(p.presentacionesPage).attr("href", p.presentacionesPage);
            let v_duracion = $("<label></label>").addClass("text-light").html(p.presentacionesDuracion);
            let v_maestriasNombre = $("<label></label>").addClass("text-light").html(p.maestriasNombre);
            let v_modalidadaesNombre = $("<label></label>").addClass("text-light").html(p.modalidadesNombre);






            let botonModalMaster = $("<button></button>")
                .attr("type", "button")
                .addClass("btn btn-warning")
                .attr("data-bs-toggle", "modal")
                .attr("data-bs-target", "#modalMaster")
                .append("Editar").click(() => {



                    let enlaceOnline = "https://universidadeuropea.com/masters-online/?search=";
                    let enlacePresencialSemipresencial = "https://universidadeuropea.com/masters-universitarios/?search=";
                    let master_split = p.maestriasNombre.replace(" ", "+");

                    let enlaceReferencia = $("<a></a>")
                        .attr("target", "_blank")
                        .attr("href", p.modalidadesNombre.toUpperCase() == "ONLINE" ? enlaceOnline + master_split : enlacePresencialSemipresencial + master_split).html("<h6><b class='text-success'>Máster Referencial </b></h6>");




                    s_modalHeadTitle.html(" ").html(p.maestriasNombre + " (" + p.modalidadesNombre + ")");
                    //s_id.html(" ").html(p.presentacionesId);
                    s_id.html(" ").html(enlaceReferencia);
                    s_codigo.html(" ").html(p.presentacionesCodigo);
                    s_maestriasNombre.html(" ").html(p.maestriasNombre);

                    cl_presentaciones.SEARCH_MERGED((p) => {


                        /**
                        * INICIO ::  Seccion Actualizar presentacionesIdioma
                        */
                        let input_presentacionesIdioma = $("<input></input>").attr("type", "text").addClass("form-control bg-dark text-seconday border-success xos-input-sinborde").attr("placeholder", "Idioma : ");
                        let boton_presentacionesIdioma = $("<button></button>").html($('<i class="fa fa-floppy-o"></i>')).addClass("btn btn-sm btn-success");
                        boton_presentacionesIdioma.click(() => {
                            if (input_presentacionesIdioma.val().length > 0) {

                                cl_presentaciones.UPDATE_PRESENTACIONES_IDIOMA((data, status) => {

                                    if (data.response) {
                                        enlace_presentacionesIdioma.html(input_presentacionesIdioma.val());
                                        v_idioma.html(input_presentacionesIdioma.val());
                                        input_presentacionesIdioma.val("");
                                        alert("Acualizado!")
                                    } else {
                                        alert("error al actualizar")
                                    }

                                }, {
                                    presentacionesIdioma: input_presentacionesIdioma.val(),
                                    presentacionesId: p.presentacionesId
                                })

                            } else {
                                alert("ingrese idioma para guaradar!");
                            }

                        });
                        let enlace_presentacionesIdioma = $("<p></p>").html(p.presentacionesIdioma);
                        let contenedor_presentacionesIdioma = $("<div></div>").addClass("input-group mb-3").append(input_presentacionesIdioma, boton_presentacionesIdioma);
                        let td_presentacionesIdioma = $("<p></p>").append(enlace_presentacionesIdioma, contenedor_presentacionesIdioma);
                        s_idioma.html(" ").html(td_presentacionesIdioma);
                        /**
                        * FIN ::  Seccion Actualizar presentacionesIdioma
                        */


                        /**
                      * INICIO ::  Seccion Actualizar presentacionesInicio
                      */
                        let input_presentacionesInicio = $("<input></input>").attr("type", "date").addClass("form-control bg-dark text-seconday border-success xos-input-sinborde").attr("placeholder", "Presentacion : ");
                        let boton_presentacionesInicio = $("<button></button>").html($('<i class="fa fa-floppy-o"></i>')).addClass("btn btn-sm btn-success");
                        boton_presentacionesInicio.click(() => {
                            if (input_presentacionesInicio.val().length > 0) {


                                cl_presentaciones.UPDATE_PRESENTACIONES_INICIO((data, status) => {

                                    if (data.response) {
                                        enlace_presentacionesInicio.html(input_presentacionesInicio.val());
                                        v_inicio.html(input_presentacionesInicio.val());
                                        input_presentacionesInicio.val("");
                                        alert("Acualizado!")
                                    } else {
                                        alert("error al actualizar")
                                    }

                                }, {
                                    presentacionesInicio: input_presentacionesInicio.val(),
                                    presentacionesId: p.presentacionesId
                                })

                            } else {
                                alert("Seleccione una fecha de Inicio valida!");
                            }

                        });
                        let enlace_presentacionesInicio = $("<p></p>").addClass("text-light").html(p.presentacionesInicio);
                        let contenedor_presentacionesInicio = $("<div></div>").addClass("input-group mb-3").append(input_presentacionesInicio, boton_presentacionesInicio);
                        let td_presentacionesInicio = $("<p></p>").append(enlace_presentacionesInicio, contenedor_presentacionesInicio);
                        s_inicio.html(" ").html(td_presentacionesInicio);
                        /**
                        * FIN ::  Seccion Actualizar presentacionesInicio
                        */


                        /**
                        * INICIO ::  Seccion Actualizar presentacionesEcts
                        */
                        let input_presentacionesEcts = $("<input></input>").attr("type", "text").addClass("form-control bg-dark text-seconday border-success xos-input-sinborde").attr("placeholder", "Ects : ");
                        let boton_presentacionesEcts = $("<button></button>").html($('<i class="fa fa-floppy-o"></i>')).addClass("btn btn-sm btn-success");
                        boton_presentacionesEcts.click(() => {
                            if (input_presentacionesEcts.val().length > 0) {

                                cl_presentaciones.UPDATE_PRESENTACIONES_ECTS((data, status) => {

                                    if (data.response) {
                                        enlace_presentacionesEcts.html(input_presentacionesEcts.val());
                                        v_ects.html(input_presentacionesEcts.val());
                                        input_presentacionesEcts.val("");
                                        alert("Acualizado!")
                                    } else {
                                        alert("error al actualizar")
                                    }

                                }, {
                                    presentacionesEcts: input_presentacionesEcts.val(),
                                    presentacionesId: p.presentacionesId
                                })

                            } else {
                                alert("ingrese idioma para guaradar!");
                            }

                        });
                        let enlace_presentacionesEcts = $("<p></p>").html(p.presentacionesEcts);
                        let contenedor_presentacionesEcts = $("<div></div>").addClass("input-group mb-3").append(input_presentacionesEcts, boton_presentacionesEcts);
                        let td_presentacionesEcts = $("<p></p>").append(enlace_presentacionesEcts, contenedor_presentacionesEcts);
                        s_ects.html(" ").html(td_presentacionesEcts);
                        /**
                        * FIN ::  Seccion Actualizar presentacionesEcts
                        */

                        /**
                       * INICIO ::  Seccion Actualizar presentacionesUniversidad
                       */
                        let input_presentacionesUniversidad = $("<select></select>").addClass("form-control bg-dark text-seconday border-success xos-input-sinborde");
                        input_presentacionesUniversidad.append("<option>Universidad Europea de Madrid</option>");
                        input_presentacionesUniversidad.append("<option>Universidad Europea de Valencia</option>");
                        input_presentacionesUniversidad.append("<option>Universidad Europea de Canarias</option>");
                        let boton_presentacionesUniversidad = $("<button></button>").html($('<i class="fa fa-floppy-o"></i>')).addClass("btn btn-sm btn-success");
                        boton_presentacionesUniversidad.click(() => {
                            if (input_presentacionesUniversidad.val().length > 0) {

                                cl_presentaciones.UPDATE_PRESENTACIONES_UNIVERSIDAD((data, status) => {

                                    if (data.response) {
                                        enlace_presentacionesUniversidad.html(input_presentacionesUniversidad.val());
                                        v_universidad.html(input_presentacionesUniversidad.val());
                                        input_presentacionesUniversidad.val("");
                                        alert("Acualizado!")
                                    } else {
                                        alert("error al actualizar")
                                    }

                                }, {
                                    presentacionesUniversidad: input_presentacionesUniversidad.val(),
                                    presentacionesId: p.presentacionesId
                                })

                            } else {
                                alert("ingrese Universidad para guardar!");
                            }

                        });
                        let enlace_presentacionesUniversidad = $("<p></p>").html(p.presentacionesUniversidad);
                        let contenedor_presentacionesUniversidad = $("<div></div>").addClass("input-group mb-3").append(input_presentacionesUniversidad, boton_presentacionesUniversidad);
                        let td_presentacionesUniversidad = $("<p></p>").append(enlace_presentacionesUniversidad, contenedor_presentacionesUniversidad);
                        s_universidad.html(" ").html(td_presentacionesUniversidad);
                        /**
                        * FIN ::  Seccion Actualizar presentacionesUniversidad
                        */

                        /**
                     * INICIO ::  Seccion Actualizar presentacionesEscuela
                     */
                        let input_presentacionesEscuela = $("<select></select>").addClass("form-control bg-dark text-seconday border-success xos-input-sinborde");
                        input_presentacionesEscuela.append("<option>Escuela de Arquitectura</option>");
                        input_presentacionesEscuela.append("<option>Escuela de Arquitectura y Politécnica</option>");
                        input_presentacionesEscuela.append("<option>Escuela de Arquitectura, Ingeniería y Diseño</option>");
                        input_presentacionesEscuela.append("<option>Escuela Universitaria Real Madrid Universidad Europea</option>");
                        input_presentacionesEscuela.append("<option>Facultad de Ciencias Biomédicas y de la Salud</option>");
                        input_presentacionesEscuela.append("<option>Facultad de Ciencias de la Actividad Física y el Deporte</option>");
                        input_presentacionesEscuela.append("<option>Facultad de Ciencias de la Salud</option>");
                        input_presentacionesEscuela.append("<option>Facultad de Ciencias Sociales</option>");
                        input_presentacionesEscuela.append("<option>Facultad de Ciencias Sociales y de la Comunicación</option>");
                        let boton_presentacionesEscuela = $("<button></button>").html($('<i class="fa fa-floppy-o"></i>')).addClass("btn btn-sm btn-success");
                        boton_presentacionesEscuela.click(() => {
                            if (input_presentacionesEscuela.val().length > 0) {

                                cl_presentaciones.UPDATE_PRESENTACIONES_ESCUELA((data, status) => {

                                    if (data.response) {
                                        enlace_presentacionesEscuela.html(input_presentacionesEscuela.val());
                                        v_escuela.html(input_presentacionesEscuela.val());
                                        input_presentacionesEscuela.val("");
                                        alert("Acualizado!")
                                    } else {
                                        alert("error al actualizar")
                                    }

                                }, {
                                    presentacionesEscuela: input_presentacionesEscuela.val(),
                                    presentacionesId: p.presentacionesId
                                })

                            } else {
                                alert("ingrese Escuela para guardar!");
                            }

                        });
                        let enlace_presentacionesEscuela = $("<p></p>").html(p.presentacionesEscuela);
                        let contenedor_presentacionesEscuela = $("<div></div>").addClass("input-group mb-3").append(input_presentacionesEscuela, boton_presentacionesEscuela);
                        let td_presentacionesEscuela = $("<p></p>").append(enlace_presentacionesEscuela, contenedor_presentacionesEscuela);
                        s_escuela.html(" ").html(td_presentacionesEscuela);
                        /**
                        * FIN ::  Seccion Actualizar presentacionesEscuela
                        */


                        /**
                         * INICIO ::  Seccion Actualizar presentacionesCatalogo
                         */
                        let input_presentacionesCatalogo = $("<textarea></textarea>").attr("type", "text").addClass("form-control bg-dark text-seconday border-success xos-input-sinborde").attr("placeholder", "Catálogo : ");
                        let boton_presentacionesCatalogo = $("<button></button>").html($('<i class="fa fa-floppy-o"></i>')).addClass("btn btn-sm btn-success");
                        boton_presentacionesCatalogo.click(() => {
                            if (input_presentacionesCatalogo.val().length > 0) {

                                cl_presentaciones.UPDATE_PRESENTACIONES_CATALOGO((data, status) => {

                                    if (data.response) {
                                        enlace_presentacionesCatalogo.html(input_presentacionesCatalogo.val());
                                        v_catalogo.html(input_presentacionesCatalogo.val());
                                        input_presentacionesCatalogo.val("");
                                        alert("Acualizado!")
                                    } else {
                                        alert("error al actualizar")
                                    }

                                }, {
                                    presentacionesCatalogo: input_presentacionesCatalogo.val(),
                                    presentacionesId: p.presentacionesId
                                })

                            } else {
                                alert("ingrese un enlace para guardar!");
                            }

                        });
                        let enlace_presentacionesCatalogo = $("<a></a>").attr("href", p.presentacionesCatalogo).html(p.presentacionesCatalogo).addClass("btn btn-sm btn-link").attr("target", "_blank");
                        let contenedor_presentacionesCatalogo = $("<div></div>").addClass("input-group mb-3").append(input_presentacionesCatalogo, boton_presentacionesCatalogo);
                        let td_presentacionesCatalogo = $("<p></p>").append(enlace_presentacionesCatalogo, contenedor_presentacionesCatalogo);
                        s_catalogo.html(" ").html(td_presentacionesCatalogo);                                            /**
                        * FIN ::  Seccion Actualizar presentacionesCatalogo
                        */

                        /**
                        * INICIO ::  Seccion Actualizar presentacionesTitulacion
                        */
                        let input_presentacionesTitulacion = $("<textarea></textarea>").attr("type", "text").addClass("form-control bg-dark text-seconday border-success xos-input-sinborde").attr("placeholder", "Titulación : ");
                        let boton_presentacionesTitulacion = $("<button></button>").html($('<i class="fa fa-floppy-o"></i>')).addClass("btn btn-sm btn-success");
                        boton_presentacionesTitulacion.click(() => {
                            if (input_presentacionesTitulacion.val().length > 0) {

                                cl_presentaciones.UPDATE_PRESENTACIONES_TITULACION((data, status) => {

                                    if (data.response) {
                                        enlace_presentacionesTitulacion.html(input_presentacionesTitulacion.val());
                                        v_titulacion.html(input_presentacionesTitulacion.val());
                                        input_presentacionesTitulacion.val("");
                                        alert("Acualizado!")
                                    } else {
                                        alert("error al actualizar")
                                    }

                                }, {
                                    presentacionesTitulacion: input_presentacionesTitulacion.val(),
                                    presentacionesId: p.presentacionesId
                                })

                            } else {
                                alert("ingrese Titulación para guardar!");
                            }

                        });
                        let enlace_presentacionesTitulacion = $("<p></p>").html(p.presentacionesTitulacion);
                        let contenedor_presentacionesTitulacion = $("<div></div>").addClass("input-group mb-3").append(input_presentacionesTitulacion, boton_presentacionesTitulacion);
                        let td_presentacionesTitulacion = $("<p></p>").append(enlace_presentacionesTitulacion, contenedor_presentacionesTitulacion);
                        s_titulacion.html(" ").html(td_presentacionesTitulacion);                                            /**
                         * FIN ::  Seccion Actualizar presentacionesTitulacion
                         */



                        /**
                  * INICIO ::  Seccion Actualizar presentacionesResumen
                  */
                        let input_presentacionesResumen = $("<textarea></textarea>").attr("type", "text").addClass("form-control bg-dark text-seconday border-success xos-input-sinborde").attr("placeholder", "Resumen : ").attr("rows", "10");
                        let boton_presentacionesResumen = $("<button></button>").html($('<i class="fa fa-floppy-o"></i>')).addClass("btn btn-sm btn-success");
                        boton_presentacionesResumen.click(() => {
                            if (input_presentacionesResumen.val().length > 0) {

                                cl_presentaciones.UPDATE_PRESENTACIONES_RESUMEN((data, status) => {

                                    if (data.response) {
                                        enlace_presentacionesResumen.html(input_presentacionesResumen.val());
                                        v_resumen.html(input_presentacionesResumen.val());
                                        input_presentacionesResumen.val("");
                                        alert("Acualizado!")
                                    } else {
                                        alert("error al actualizar")
                                    }

                                }, {
                                    presentacionesResumen: input_presentacionesResumen.val(),
                                    presentacionesId: p.presentacionesId
                                })

                            } else {
                                alert("ingrese un enlace para guaradar!");
                            }

                        });
                        let enlace_presentacionesResumen = $("<p></p>").html(p.presentacionesResumen);
                        let contenedor_presentacionesResumen = $("<div></div>").addClass("input-group mb-3").append(input_presentacionesResumen, boton_presentacionesResumen);
                        let td_presentacionesResumen = $("<td></td>").append(enlace_presentacionesResumen, contenedor_presentacionesResumen);
                        s_resumen.html(" ").html(td_presentacionesResumen);
                        /**
                        * FIN ::  Seccion Actualizar presentacionesResumen
                        */

                        /**
                         * INICIO ::  Seccion Actualizar presentacionesPresentacion
                         */
                        let input_presentacionesPresentacion = $("<textarea></textarea>").attr("type", "textarea").addClass("form-control bg-dark text-seconday border-success xos-input-sinborde").attr("placeholder", "Presentacion : ").attr("rows", "5");
                        let boton_presentacionesPresentacion = $("<button></button>").html($('<i class="fa fa-floppy-o"></i>')).addClass("btn btn-sm btn-success");
                        boton_presentacionesPresentacion.click(() => {
                            if (input_presentacionesPresentacion.val().length > 0) {

                                cl_presentaciones.UPDATE_PRESENTACIONES_PRESENTACION((data, status) => {

                                    if (data.response) {
                                        enlace_presentacionesPresentacion.html(input_presentacionesPresentacion.val());
                                        v_presentacion.html(input_presentacionesPresentacion.val());
                                        input_presentacionesPresentacion.val("");
                                        alert("Acualizado!")
                                    } else {
                                        alert("error al actualizar")
                                    }

                                }, {
                                    presentacionesPresentacion: input_presentacionesPresentacion.val(),
                                    presentacionesId: p.presentacionesId
                                })

                            } else {
                                alert("ingrese un enlace para guaradar!");
                            }

                        });
                        let enlace_presentacionesPresentacion = $("<p></p>").addClass("text-light").html(p.presentacionesPresentacion);
                        let contenedor_presentacionesPresentacion = $("<div></div>").addClass("input-group mb-3").append(input_presentacionesPresentacion, boton_presentacionesPresentacion);
                        let td_presentacionesPresentacion = $("<p></p>").append(enlace_presentacionesPresentacion, contenedor_presentacionesPresentacion);
                        s_presentacion.html(" ").html(td_presentacionesPresentacion);
                        /**
                        * FIN ::  Seccion Actualizar presentacionesPresentacion
                        */

                        /**
                                             * INICIO ::  Seccion Actualizar presentacionesCampus
                                             */
                        let input_presentacionesCampus = $("<input></input>").attr("type", "text").addClass("form-control bg-dark text-seconday border-success xos-input-sinborde").attr("placeholder", "Campus : ");
                        let boton_presentacionesCampus = $("<button></button>").html($('<i class="fa fa-floppy-o"></i>')).addClass("btn btn-sm btn-success");
                        boton_presentacionesCampus.click(() => {
                            if (input_presentacionesCampus.val().length > 0) {

                                cl_presentaciones.UPDATE_PRESENTACIONES_CAMPUS((data, status) => {

                                    if (data.response) {
                                        enlace_presentacionesCampus.html(input_presentacionesCampus.val());
                                        v_campus.html(input_presentacionesCampus.val());
                                        input_presentacionesCampus.val("");
                                        alert("Acualizado!")
                                    } else {
                                        alert("error al actualizar");
                                    }

                                }, {
                                    presentacionesCampus: input_presentacionesCampus.val(),
                                    presentacionesId: p.presentacionesId
                                })

                            } else {
                                alert("ingrese un enlace para guaradar!");
                            }

                        });
                        let enlace_presentacionesCampus = $("<p></p>").html(p.presentacionesCampus);
                        let contenedor_presentacionesCampus = $("<div></div>").addClass("input-group mb-3").append(input_presentacionesCampus, boton_presentacionesCampus);
                        let td_presentacionesCampus = $("<p></p>").append(enlace_presentacionesCampus, contenedor_presentacionesCampus);
                        s_campus.html(" ").html(td_presentacionesCampus);
                        /**
                        * FIN ::  Seccion Actualizar presentacionesCampus
                        */


                        /**
                        * INICIO ::  Seccion Actualizar presentacionesUbicacion
                        */
                        let input_presentacionesUbicacion = $("<input></input>").attr("type", "text").addClass("form-control bg-dark text-seconday border-success xos-input-sinborde").attr("placeholder", "Ubicacion : ");
                        let boton_presentacionesUbicacion = $("<button></button>").html($('<i class="fa fa-floppy-o"></i>')).addClass("btn btn-sm btn-success");
                        boton_presentacionesUbicacion.click(() => {
                            if (input_presentacionesUbicacion.val().length > 0) {

                                cl_presentaciones.UPDATE_PRESENTACIONES_UBICACION((data, status) => {

                                    if (data.response) {
                                        enlace_presentacionesUbicacion.html(input_presentacionesUbicacion.val());
                                        v_ubicacion.html(input_presentacionesUbicacion.val());
                                        input_presentacionesUbicacion.val("");
                                        alert("Acualizado!")
                                    } else {
                                        alert("error al actualizar")
                                    }

                                }, {
                                    presentacionesUbicacion: input_presentacionesUbicacion.val(),
                                    presentacionesId: p.presentacionesId
                                })

                            } else {
                                alert("ingrese un enlace para guaradar!");
                            }

                        });
                        let enlace_presentacionesUbicacion = $("<p></p>").html(p.presentacionesUbicacion);
                        let contenedor_presentacionesUbicacion = $("<div></div>").addClass("input-group mb-3").append(input_presentacionesUbicacion, boton_presentacionesUbicacion);
                        let td_presentacionesUbicacion = $("<p></p>").append(enlace_presentacionesUbicacion, contenedor_presentacionesUbicacion);
                        s_ubicacion.html(" ").html(td_presentacionesUbicacion);
                        /**
                        * FIN ::  Seccion Actualizar presentacionesUbicacion
                        */

                        /**
                         * INICIO ::  Seccion Actualizar presentacionesPage
                         */
                        let input_presentacionesPage = $("<textarea></textarea>").attr("type", "text").addClass("form-control bg-dark text-seconday border-success xos-input-sinborde").attr("placeholder", "Url : ");
                        let boton_presentacionesPage = $("<button></button>").html($('<i class="fa fa-floppy-o"></i>')).addClass("btn btn-sm btn-success");
                        boton_presentacionesPage.click(() => {
                            if (input_presentacionesPage.val().length > 0) {

                                cl_presentaciones.UPDATE_PRESENTACIONES_PAGE((data, status) => {

                                    if (data.response) {
                                        enlace_presentacionesPage.html(input_presentacionesPage.val());
                                        v_page.html(input_presentacionesPage.val());
                                        input_presentacionesPage.val("");
                                        alert("Acualizado!")
                                    } else {
                                        alert("error al actualizar")
                                    }

                                }, {
                                    presentacionesPage: input_presentacionesPage.val(),
                                    presentacionesId: p.presentacionesId
                                })

                            } else {
                                alert("ingrese un enlace para guaradar!");
                            }

                        });
                        let enlace_presentacionesPage = $("<a></a>").attr("href", p.presentacionesPage).html(p.presentacionesPage).addClass("btn btn-sm btn-link").attr("target", "_blank");
                        let contenedor_presentacionesPage = $("<div></div>").addClass("input-group mb-3").append(input_presentacionesPage, boton_presentacionesPage);
                        let td_presentacionesPage = $("<p></p>").append(enlace_presentacionesPage, contenedor_presentacionesPage);
                        s_page.html(" ").html(td_presentacionesPage);                                            /**
                        * FIN ::  Seccion Actualizar presentacionesPage
                        */

                        /**
                      * INICIO ::  Seccion Actualizar presentacionesDuracion
                      */
                        let input_presentacionesDuracion = $("<input></input>").attr("type", "text").addClass("form-control bg-dark text-seconday border-success xos-input-sinborde").attr("placeholder", "Duracion : ");
                        let boton_presentacionesDuracion = $("<button></button>").html($('<i class="fa fa-floppy-o"></i>')).addClass("btn btn-sm btn-success");
                        boton_presentacionesDuracion.click(() => {
                            if (input_presentacionesDuracion.val().length > 0) {

                                cl_presentaciones.UPDATE_PRESENTACIONES_DURACION((data, status) => {

                                    if (data.response) {
                                        enlace_presentacionesDuracion.html(input_presentacionesDuracion.val());
                                        v_duracion.html(input_presentacionesDuracion.val());
                                        input_presentacionesDuracion.val("");
                                        alert("Acualizado!")
                                    } else {
                                        alert("error al actualizar")
                                    }

                                }, {
                                    presentacionesDuracion: input_presentacionesDuracion.val(),
                                    presentacionesId: p.presentacionesId
                                })

                            } else {
                                alert("ingrese duración para guaradar!");
                            }

                        });
                        let enlace_presentacionesDuracion = $("<p></p>").html(p.presentacionesDuracion);
                        let contenedor_presentacionesDuracion = $("<div></div>").addClass("input-group mb-3").append(input_presentacionesDuracion, boton_presentacionesDuracion);
                        let td_presentacionesDuracion = $("<p></p>").append(enlace_presentacionesDuracion, contenedor_presentacionesDuracion);
                        s_duracion.html(" ").html(td_presentacionesDuracion);
                        /**
                        * FIN ::  Seccion Actualizar presentacionesDuracion
                        */






                    }, p.presentacionesId);

                });

            tr.append($("<td></td>").html(init));

            tr.append($("<td></td>").addClass("text-center").html(botonModalMaster));

            let m_codigo = $("<p></p>").addClass("text-warning").html(" ").append("Codigo : ").append(v_codigo);
            let m_idioma = $("<p></p>").addClass("text-warning").html(" ").append("Idioma : ").append(v_idioma);
            let m_inicio = $("<p></p>").addClass("text-warning").html(" ").append("Inicio : ").append(v_inicio);
            let m_ects = $("<p></p>").addClass("text-warning").html(" ").append("ECTS : ").append(v_ects);
            let m_universidad = $("<p></p>").addClass("text-warning").html(" ").append("Universidad : ").append(v_universidad);
            let m_escuela = $("<p></p>").addClass("text-warning").html(" ").append("Escuela : ").append(v_escuela);
            let m_catalogo = $("<p></p>").addClass("text-warning").html(" ").append("Catalogo : ").append(v_catalogo);
            let m_titulacion = $("<p></p>").addClass("text-warning").html(" ").append("Titulacion : ").append(v_titulacion);
            let m_resumen = $("<p></p>").addClass("text-warning").html(" ").append("Resumen : ").append(v_resumen);
            let m_presentacion = $("<p></p>").addClass("text-warning").html(" ").append("Presentacion : ").append(v_presentacion);
            let m_campus = $("<p></p>").addClass("text-warning").html(" ").append("Campus : ").append(v_campus);
            let m_ubicacion = $("<p></p>").addClass("text-warning").html(" ").append("Ubicacion : ").append(v_ubicacion);
            let m_page = $("<p></p>").addClass("text-warning").html(" ").append("Page : ").append(v_page);
            let m_duracion = $("<p></p>").addClass("text-warning").html(" ").append("Duracion : ").append(v_duracion);
            let m_maestriasNombre = $("<p></p>").addClass("text-warning").html(" ").append("Mestria : ").append(v_maestriasNombre);
            let m_modalidadaesNombre = $("<p></p>").addClass("text-warning").html(" ").append("Modalidad : ").append(v_modalidadaesNombre);

            let informcionCampo = $("<div></div>")
                .append(m_codigo)
                .append(m_maestriasNombre)
                .append(m_modalidadaesNombre)
                .append(m_idioma)
                .append(m_inicio)
                .append(m_ects)
                .append(m_universidad)
                .append(m_escuela)
                .append(m_catalogo)
                .append(m_titulacion)
                .append(m_resumen)
                .append(m_presentacion)
                .append(m_campus)
                .append(m_ubicacion)
                .append(m_page)
                .append(m_duracion)
                ;

            tr.append($("<td></td>").html(informcionCampo));

            /**
             * 
             * 
             * 
             * <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#modalMaster"
        >
          Open modal
        </button>
             * 
             * 
             */




            /* tr.append(td_presentacionesInicio);
            tr.append(td_presentacionesPresentacion);
            tr.append(td_presentacionesResumen);
            tr.append(td_presentacionesCampus);
            tr.append(td_presentacionesUbicacion);
            tr.append(td_presentacionesPage);
 */
            /*  if (p.presentacionesResumen) {
                 if (p.presentacionesResumen.length > 10
                     &&
                     p.presentacionesPresentacion.length > 10
                     &&
                     p.presentacionesPage.length > 10
                 ) {
                     tr.css("background-color", "#DCEDC8");
                     tr.hide();
                 } else {
                     tr.css("background-color", "#FFEBEE ");
                 }
             } */
            init++;
            tbodyplantilla.append(tr);
        });
    });
});

/* 
let dat = new CLASS_SERVER_DATOS();
dat.SELECT((d) => {
    d.forEach(el => {
        let jss = JSON.parse(el.datosInformacion);
        jss.resumen = [];
        console.log(JSON.stringify(jss));
    });
}); */
/*




        <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
        </tr>



*/







