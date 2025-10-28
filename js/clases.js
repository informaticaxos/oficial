//////////
//////////
//////////
//////////
/////////////////////////////////////////////// INICIO :: COMPONENTE GENERICO  ////////////////////////////////
class CLASS_COMPONENTE_GENERICO {

    repaint = () => {
        //CONSTRUYENDO HEAD
        let headComponenteTitulo = $("<h5></h5>").html(this.v_headerTitulo || "");
        let headComponenteSubtitulo = $("<i></i>").html(
            this.v_headerSubtitulo || ""
        );
        let headComponenteDescripcion = $("<p></p>")
            .addClass("col-sm-11")
            .html(this.v_headerDescripcion || "");

        let contenedorHead = $("<div></div>")
            .addClass("container-fluid") //COMPONENTE HEAD
            .append(
                //P::Titulo
                $("<p></p>").append(headComponenteTitulo).addClass("col-sm-8")
            )
            //P::Subtitulo
            .append($("<p></p>").append(headComponenteSubtitulo))
            //P::Descripcion
            .append(headComponenteDescripcion);

        //CONSTRUYENDO BODY

        let contenedorBody = $("<div></div>").addClass("row").html(""); //ROW aqui van todos los col-sm-3

        this.v_bodyElementos.forEach((bodyElemento) => {
            let bodyElemento_head =
                bodyElemento.bodyCabecera.imagen !== undefined
                    ? $("<img>")
                        .attr("src", bodyElemento.bodyCabecera.imagen)
                        .attr("width", "100%")
                    : bodyElemento.bodyCabecera.icono !== undefined
                        ? $("<i></i>").addClass(bodyElemento.bodyCabecera.icono)
                        : bodyElemento.bodyCabecera.texto !== undefined
                            ? $("<p></p>").html(bodyElemento.bodyCabecera.texto)
                            : ">>>"; //imagen//icono//texto

            let bodyElemento_body_titulo = $("<p></p>").append(
                $("<b></b>")
                    .addClass("text-dark")
                    .append(bodyElemento.bodyCuerpo.bodyCuerpoTitulo.toUpperCase() || "")
            );
            let bodyElemento_body_subtitulo = $("<p></p>").append(
                $("<i></i>")
                    .append(bodyElemento.bodyCuerpo.bodyCuerpoSubtitulo || "")
                    .addClass("text-body")
            );
            let bodyElemento_body_descripcion = $("<p></p>")
                .append(bodyElemento.bodyCuerpo.bodyCuerpoDescripcion || "")
                .addClass("text-dark");

            let contenedorBodyHead = $("<div></div>")
                .addClass("text-center")
                .ready(() => { });

            if (bodyElemento.bodyCabecera.icono !== undefined) {
                contenedorBodyHead.addClass("text-center display-5 p-4");
                contenedorBodyHead.append("<br>");
            }
            if (bodyElemento.bodyCabecera.texto !== undefined) {
                contenedorBodyHead.addClass("text-center display-6 p-4 list-inline")
                contenedorBodyHead.append("<br>");
            }
            contenedorBodyHead.append(bodyElemento_head);
            let contenedorBodyBody = $("<div></div>")
                .addClass("p-4")
                .append(bodyElemento_body_titulo)
                .append(bodyElemento_body_subtitulo)
                .append(bodyElemento_body_descripcion);

            let bodyComponenteElemento_card = $("<div></div>")
                .addClass("card")
                .append(contenedorBodyHead, contenedorBodyBody);

            let bodyComponenteElemento = $("<div></div>")
                .addClass("col-sm-3")
                .append(bodyComponenteElemento_card); //COL-SM-3

            contenedorBody.append(bodyComponenteElemento);
        });

        //CONSTRUYENDO FOOT

        let contenedorFoot = $("<div></div>");
        let contenedor_foot_row = $("<div></div>").addClass("row p-5");//este contenedor encapsula

        this.v_footElementos.forEach((footElemento) => {
            let footElementoComponente = $("<div></div>");
            footElementoComponente.addClass("col-sm-4");
            footElementoComponente.addClass(footElemento.position == null ? "text-center" : "text-" + footElemento.position);
            let footImgComponente = $("<img></img>");
            footImgComponente.attr("width", footElemento.width == null ? "80%" : footElemento.width);
            footImgComponente.attr("width", footElemento.height == null ? "80%" : footElemento.height);
            footImgComponente.attr("src", footElemento.src);

            footElementoComponente.append(footImgComponente);
            contenedor_foot_row.append(footElementoComponente);
        });
        contenedorFoot.append(contenedor_foot_row);

        this.c_pantalla.html("").append(contenedorHead, contenedorBody, contenedorFoot);
    };

    c_pantalla;

    setCPantalla = (c_pantalla) => {
        this.c_pantalla = c_pantalla;
        this.c_pantalla.addClass("container");
    };

    v_headerTitulo;
    setVHeaderTitulo = (headerTitulo) => {
        this.v_headerTitulo = headerTitulo;
        this.repaint();
    };
    v_headerSubtitulo;
    setVHeaderSubtitulo = (headerSubtitulo) => {
        this.v_headerSubtitulo = headerSubtitulo;
        this.repaint();
    };
    v_headerDescripcion;
    setVHeaderDescripcion = (headerDescripcion) => {
        this.v_headerDescripcion = headerDescripcion;
        this.repaint();
    };
    v_bodyElementos = [];
    setVBodyElementos = (bodyElementos = []) => {
        this.v_bodyElementos = bodyElementos;
        this.repaint();
    };
    setVBodyElemento = (
        elemento = {
            bodyCabecera: {
                imagen,
                icono,
                texto,
            },
            bodyCuerpo: {
                bodyCuerpoTitulo,
                bodyCuerpoSubtitulo,
                bodyCuerpoDescripcion,
            },
        }
    ) => {
        this.v_bodyElementos.push(elemento);
        this.repaint();
    };
    getVBodyElementos = () => {
        return this.v_bodyElementos;
    };
    v_footElementos = [];
    setVFootElemento = (
        elemento = {
            src,
            width,
            height,
            position
        }
    ) => {
        this.v_footElementos.push(elemento);
        this.repaint();
    };
    getVFootElementos = () => {
        return this.v_footElementos;
    }

}
/////////////////////////////////////////////// FIN :: COMPONENTE GENERICO  ////////////////////////////////
//////////
//////////
//////////
//////////
//////////
//////////////////////////////////////  INICIO :: CLASE EMPRESAS COLABORADORAS ///////////////////////////////
class CLASS_EMPRESAS_COLABORADORAS {

    cPantalla;
    cTitulo = $("<h5></h5>");
    cDescripcion = $("<p></p>");
    cImagenes = [];
    cUrlServerImagenes = "https://www.fercoadvancededucation.com/data/202311271702webpage/master/colaboradores/";


    initComponents = () => {
        this.cTitulo.addClass("col-sm-8");
    }

    setCTitulo = (titulo) => {
        this.cTitulo.html(titulo);
        this.initRender();
    }

    setCDescripcion = (descripcion) => {
        this.cDescripcion.html(this.procesarDescripcion(descripcion).descripcion);
        this.cImagenes = this.procesarDescripcion(descripcion).imagenes;
        this.initRender();
    }

    procesarDescripcion = (descripcion) => {

        if (descripcion == null || descripcion == undefined) {
            return { descripcion: "sin descripcion", imagenes: [] };
        }

        let inicioParentesis = (descripcion.includes("(")) ? descripcion.indexOf("(") : -1;
        let finParentesis = (descripcion.includes(")")) ? descripcion.indexOf(")") : -1;

        let solo_texto = descripcion.substr(0, inicioParentesis);
        let solo_imagenes = (inicioParentesis !== 0 & finParentesis !== 0) ? descripcion.substr(inicioParentesis, finParentesis) : null;
        solo_imagenes = (solo_imagenes !== null) ? solo_imagenes.replace("(", "").replace(")", "") : null;
        let imagenes = (solo_imagenes !== null ? solo_imagenes.split(",") : []);
        if (imagenes.length > 0) {
            let t_imagenes = [];
            imagenes.forEach(imag => {
                t_imagenes.push(this.cUrlServerImagenes + imag + ".jpg");
            });
            imagenes = t_imagenes;
        }
        return {
            descripcion: solo_texto,
            imagenes: imagenes
        };
    }

    setCPantalla(pantalla) {
        this.cPantalla = pantalla;
        this.initComponents();
    }

    initRender = () => {

        /**
         * contenedor que abarcara N col-sm-3
         */
        let c_div_row = $("<div></div>").addClass("row p-4");

        this.cImagenes.forEach(imagen => {
            c_div_row.append(
                $("<div></div>").addClass("col-sm-3 p-2")
                    .append(
                        $("<img>").attr("src", imagen).attr("width", "100%")
                    )
            );

        });

        this.cPantalla.html(
            $("<div></div>")
                .append(
                    $("<p></p>")
                        .append(this.cTitulo)
                ) // AQUI VA EL TITULO DE PORQUE ESTUDIAR EL MASTER
                .append(this.cDescripcion)// AQUI VA LA DESCRIPCION DE LA JUSTIFICACION DEL PORQUE ESTUDIAR EL MASTER
                .append(c_div_row)
        );
    }
}
//////////////////////////////////////  FIN :: CLASE EMPRESAS COLABORADORAS ///////////////////////////////
//////////
//////////
//////////
//////////
/////////////////////////////////////  INICIO :: CLASE PLAN DE ESTUDIOS //////////////////////////////////
class CLASS_PLAN_ESTUDIOS {

    //variables
    cPantalla;
    cMaestria;

    cTitulo;
    cSubtitulo;
    cDescripcion;

    cSeccion;

    cTabla;

    //set variables
    setCPantalla = (pantalla) => {
        this.cPantalla = pantalla;
    }
    setCMaestria = (maestria) => {
        this.cMaestria = maestria;
        this.initRender();
    }
    setCTitulo = (titulo) => {
        this.cTitulo = $("<h4></h4>").html(titulo);
        this.initRender();
    }
    setCSubtitulo = (subtitulo) => {
        this.cSubtitulo = $("<i></i>").html(subtitulo);
        this.initRender();
    }
    setCDescripcion = (descripcion) => {
        this.cDescripcion = $("<p></p>").html(descripcion);
        this.initRender();
    }


    /**
     * 
     * @param {id del acordeon padre} id_acordeon 
     * @param {id de la seccion} id_seccion 
     * @param {etiqueta del boton que aparece en el clickeable} tema 
     * @param {contenido que se mostrara} contenido 
     * @returns 
     */
    setcSeccion = (id_acordeon, id_seccion, tema, contenido = $()) => {
        this.cSeccion = $("<div></div>");
        this.cSeccion.append(//cabecera
            $("<div></div>")
                .addClass("card-header xos-bg-white")
                .append(
                    $("<a></a>")
                        .addClass("collapsed  xos-hover-1")
                        .attr("data-bs-toggle", "collapse")
                        .attr("href", "#" + id_seccion)
                        .append(
                            $("<h6></h6>")
                                .addClass("xos-hover-1")
                                .html(tema)
                        )
                )
        );
        this.cSeccion.append(//cuerpo
            $("<div></div>")
                .attr("id", id_seccion)
                .addClass("collapse")
                .attr("data-bs-parent", "#" + id_acordeon)
                .append(
                    $("<div></div>")
                        .addClass("card-body")
                        .html(contenido)
                )
        );
    }

    setCTabla = (tabla) => {
        this.cTabla = tabla;
        this.initRender();
    }

    initRender = () => {

        let estructura_primaria = $("<div></div>");
        estructura_primaria.append(this.cTitulo);
        estructura_primaria.append(this.cSubtitulo);
        estructura_primaria.append(this.cDescripcion);
        estructura_primaria.append("<br>");

        let idAcordeon = "ac";// id del acordeon que se va a usar
        let acordeon = $("<div></div>").attr("id", idAcordeon);
        let numero_seccion = 0;

        //SECCION DE ENVIO DE TABLA
        this.setcSeccion(idAcordeon, "t1", "Estructura del plan de Estudios", this.cTabla);
        acordeon.append(this.cSeccion);

        //SECCION DE ENVIO DE MATERIAS Y SUS DESCRIPCIONES
        this.cMaestria.planestudios.forEach(m => {

            let opciones = $("<ul></ul>");

            m.puntos.forEach(o => {
                opciones.append(
                    $("<li></li>").html(o)
                )
            });

            let seccion_desripcion = $("<div></div>");
            seccion_desripcion.append($("<p></p>").html(m.descripcion));
            seccion_desripcion.append(opciones);

            this.setcSeccion(idAcordeon, "s" + numero_seccion, m.materia, seccion_desripcion);
            numero_seccion++;
            acordeon.append(this.cSeccion);

        });

        estructura_primaria.append(acordeon);
        this.cPantalla.html(estructura_primaria);
    }

}
/////////////////////////////////////  FIN :: CLASE PLAN DE ESTUDIOS //////////////////////////////////
//////////
//////////
//////////
//////////
///////////////////////////////////// INICIO :: CLASE TABLA ////////////////////////////////////////////
class CLASS_TABLE {
    constructor() {
        this.initComponents();
    }
    cTabla = $("<table></table>");
    cTheadComponent = $("<thead></thead>");
    cTheadTitulos = [];
    cTbodyComponent = $("<tbody></tbody>");
    cTbodyRows = [];

    initComponents = () => {
        this.cTabla.addClass("table table-hover table-bordered");
    };

    setCTheadTitulos = (titulos = []) => {
        this.cTheadTitulos = titulos;
        let tr = $("<tr></tr>");
        this.cTheadTitulos.forEach(t => {
            let th = $("<th></th>").html(t);
            tr.append(th);
        });
        this.cTheadComponent.html(tr);
        this.initRender();
    }
    setCTbodyRows = (rows) => {
        this.cTbodyRows = rows;
        this.cTbodyRows.forEach(r => {
            let tr = $("<tr></tr>");
            tr.append(
                $("<td></td>")
                    .append(
                        $("<a></a>")
                            .addClass(" text-dark xos-hover-2")
                            .attr("href", r.catalogo)
                            .attr("download", r.catalogo)
                            .append(
                                r.materia
                            )
                    )
            );
            tr.append($("<td></td>").html(r.ects));
            tr.append($("<td></td>").html(r.tipo));
            tr.append($("<td></td>").html(r.idioma));
            this.cTbodyComponent.append(tr);
        });
        this.initComponents();
    }

    getCTabla = () => {
        return this.cTabla;
    }

    initRender = () => {
        this.cTabla.html("");
        this.cTabla.append(this.cTheadComponent);
        this.cTabla.append(this.cTbodyComponent);
    }
}
///////////////////////////////////// FIN :: CLASE TABLA ////////////////////////////////////////////
//////////
//////////
//////////
//////////
//////////////////////////////////// INICIO :: CLASE SERVER MAESTRIAS //////////////////////////////////////////
class CLASS_SERVER_MAESTRIAS {
    url = "https://www.fercoadvancededucation.com/oficialServer/main/maestrias.php";
    SELECT_ADDED = (ejecutar = () => { }) => {
        let instruction = "select_added";
        $.get(this.url + "?instruction=" + instruction, function (data, status) { ejecutar(data.response); });
    }
    SEARCH_BY_MAESTRIAS_NOMBRE = (ejecutar = () => { }, maestriasNombre = "") => {
        let instruction = "search_by_maestrias_nombre";
        $.get(this.url + "?instruction=" + instruction + "&maestriasNombre=" + maestriasNombre, function (data, status) { ejecutar(data.response); });
    }
    SEARCH_BY_MAESTRIAS_ID = (ejecutar = () => { }, maestriasId) => {
        let instruction = "search_by_maestrias_id";
        $.get(this.url + "?instruction=" + instruction + "&maestriasId=" + maestriasId, function (data, status) { ejecutar(data.response); });
    }
}
//////////////////////////////////// FIN :: CLASE SERVER MAESTRIAS //////////////////////////////////////////
//////////
//////////
//////////
//////////
////////////////////////////////////////////// INICIO :: CLASE SERVER MAESTRIAS //////////////////////////////////////////
class CLASS_SERVER_DATOS {
    url = "https://www.fercoadvancededucation.com/oficialServer/main/datos.php";
    SELECT = (ejecutar = () => { }) => {
        let instruction = "select";
        $.get(this.url + "?instruction=" + instruction, function (data, status) { ejecutar(data.response); });
    }

}
//////////////////////////////////// FIN :: CLASE SERVER MAESTRIAS //////////////////////////////////////////
//////////
//////////
//////////
//////////////////////////////////// INICIO :: CLASE SERVER PRESENTACIONES //////////////////////////////////////////
class CLASS_SERVER_PRESENTACIONES {
    url = "https://www.fercoadvancededucation.com/oficialServer/main/presentaciones.php";
    SEARCH = (ejecutar = () => { }, presentacionesId) => {
        let instruction = "search";
        $.get(this.url + "?instruction=" + instruction + "&presentacionesId=" + presentacionesId, function (data, status) { ejecutar(data.response); });
    }
    SELECT = (ejecutar = () => { }) => {
        let instruction = "select";
        $.get(this.url + "?instruction=" + instruction, function (data, status) { ejecutar(data.response); });
    }
    SELECT_MERGED = (ejecutar = () => { }) => {
        let instruction = "select_merged";
        $.get(this.url + "?instruction=" + instruction, function (data, status) { ejecutar(data.response); });
    }
    SEARCH_MERGED = (ejecutar = () => { }, presentacionesId) => {
        let instruction = "search_merged";
        $.get(this.url + "?instruction=" + instruction + "&presentacionesId=" + presentacionesId, function (data, status) { ejecutar(data.response); });
    }
    UPDATE_PRESENTACIONES_PAGE = (ejecutar, datos) => {
        let instruction = "update_presentacionesPage";
        datos.instruction = instruction;
        $.ajax({
            data: datos,
            url: this.url,
            type: 'post',
            responseType: "json",
            success: function (r) {
                ejecutar(r);
            }
        });
    }
    UPDATE_PRESENTACIONES_PRESENTACION = (ejecutar, datos) => {
        let instruction = "update_presentacionesPresentacion";
        datos.instruction = instruction;
        $.ajax({
            data: datos,
            url: this.url,
            type: 'post',
            responseType: "json",
            success: function (r) {
                ejecutar(r);
            }
        });
    }
    UPDATE_PRESENTACIONES_RESUMEN = (ejecutar, datos) => {
        let instruction = "update_presentacionesResumen";
        datos.instruction = instruction;
        $.ajax({
            data: datos,
            url: this.url,
            type: 'post',
            responseType: "json",
            success: function (r) {
                ejecutar(r);
            }
        });
    }
    UPDATE_PRESENTACIONES_CAMPUS = (ejecutar, datos) => {
        let instruction = "update_presentacionesCampus";
        datos.instruction = instruction;
        $.ajax({
            data: datos,
            url: this.url,
            type: 'post',
            responseType: "json",
            success: function (r) {
                ejecutar(r);
            }
        });
    }
    UPDATE_PRESENTACIONES_INICIO = (ejecutar, datos) => {
        let instruction = "update_presentacionesInicio";
        datos.instruction = instruction;
        $.ajax({
            data: datos,
            url: this.url,
            type: 'post',
            responseType: "json",
            success: function (r) {
                ejecutar(r);
            }
        });
    }
    UPDATE_PRESENTACIONES_UBICACION = (ejecutar, datos) => {
        let instruction = "update_presentacionesUbicacion";
        datos.instruction = instruction;
        $.ajax({
            data: datos,
            url: this.url,
            type: 'post',
            responseType: "json",
            success: function (r) {
                ejecutar(r);
            }
        });
    }
    UPDATE_PRESENTACIONES_IDIOMA = (ejecutar, datos) => {
        let instruction = "update_presentacionesIdioma";
        datos.instruction = instruction;
        $.ajax({
            data: datos,
            url: this.url,
            type: 'post',
            responseType: "json",
            success: function (r) {
                ejecutar(r);
            }
        });
    }
    UPDATE_PRESENTACIONES_ECTS = (ejecutar, datos) => {
        let instruction = "update_presentacionesEcts";
        datos.instruction = instruction;
        $.ajax({
            data: datos,
            url: this.url,
            type: 'post',
            responseType: "json",
            success: function (r) {
                ejecutar(r);
            }
        });
    }
    UPDATE_PRESENTACIONES_UNIVERSIDAD = (ejecutar, datos) => {
        let instruction = "update_presentacionesUniversidad";
        datos.instruction = instruction;
        $.ajax({
            data: datos,
            url: this.url,
            type: 'post',
            responseType: "json",
            success: function (r) {
                ejecutar(r);
            }
        });
    }
    UPDATE_PRESENTACIONES_ESCUELA = (ejecutar, datos) => {
        let instruction = "update_presentacionesEscuela";
        datos.instruction = instruction;
        $.ajax({
            data: datos,
            url: this.url,
            type: 'post',
            responseType: "json",
            success: function (r) {
                ejecutar(r);
            }
        });
    }
    UPDATE_PRESENTACIONES_CATALOGO = (ejecutar, datos) => {
        let instruction = "update_presentacionesCatalogo";
        datos.instruction = instruction;
        $.ajax({
            data: datos,
            url: this.url,
            type: 'post',
            responseType: "json",
            success: function (r) {
                ejecutar(r);
            }
        });
    }
    UPDATE_PRESENTACIONES_TITULACION = (ejecutar, datos) => {
        let instruction = "update_presentacionesTitulacion";
        datos.instruction = instruction;
        $.ajax({
            data: datos,
            url: this.url,
            type: 'post',
            responseType: "json",
            success: function (r) {
                ejecutar(r);
            }
        });
    }
    UPDATE_PRESENTACIONES_DURACION = (ejecutar, datos) => {
        let instruction = "update_presentacionesDuracion";
        datos.instruction = instruction;
        $.ajax({
            data: datos,
            url: this.url,
            type: 'post',
            responseType: "json",
            success: function (r) {
                ejecutar(r);
            }
        });
    }
}
//////////////////////////////////// FIN :: CLASE SERVER PRESENTACIONES //////////////////////////////////////////
//////////
//////////
//////////
//////////
///////////////////////////////////  INICIO :: CLASE MAESTRIAS //////////////////////////////////////////////////
class CLASS_MAESTRIAS {

    constructor(pantalla, listados) {
        this.cPantalla = pantalla;
        this.labelListados = listados;
        this.listarMaestriasAdded();
    }
    cPantalla;

    labelListados;
    cMaestrias = new CLASS_SERVER_MAESTRIAS();

    redireccinarLocalStorage = (maestria = {}) => {

    }

    urlMaster = "master.html";

    enlaceModalidades = (modalidades = []) => {
        let divModalidades = $("<div></div>");
        modalidades.forEach(modalidad => {
            divModalidades.append($("<a></a>")
                .addClass("badge bg-dark xos-hover-2")
                .append($("<i></i>").addClass(modalidad.modalidadesIcono), " ", modalidad.modalidadesNombre));
        });

        return divModalidades;
    }

    enlacesIdioma = (idiomas = []) => {
        let label = $("<label></label>");
        label.addClass("badge bg-light text-dark");
        label.append($("<i></i>").addClass("fa fa-language"));

        let idi = "";
        idiomas.forEach(idioma => {
            idi += idioma.presentacionesIdioma;
            idi += " | ";
        });
        label.append("Idioma" + " : " + idi);
        return label;
    }

    listarMaestriasAdded = () => {
        this.cMaestrias.SELECT_ADDED((data) => { this.initRender(data); });
    }
    listarMaestriasByNombre = (maestriasNombre) => {
        this.cMaestrias.SEARCH_BY_MAESTRIAS_NOMBRE((data) => { this.initRender(data); }, maestriasNombre);
    }
    listarMaestriasById = (maestriasId) => {
        this.cMaestrias.SEARCH_BY_MAESTRIAS_ID((data) => { this.initRender(data); }, maestriasId);
    }



    initRender = (maestrias) => {

        this.cPantalla.html("");

        this.labelListados.html("Listados : " + (maestrias.length));
        maestrias.forEach(maestria => {
            this.cPantalla.append(
                $("<div></div>")
                    .addClass("container mt-3")
                    .append(
                        $("<div></div>") //este es el card
                            .addClass("card")
                            .append(
                                $("<div></div>") //este es el card-body
                                    .addClass("card-body")
                                    .append(
                                        $("<h3></h3>").append(
                                            $("<a></a>")
                                                .click(() => {
                                                    // abrir_enlace_localstorage(maestria);
                                                }) //este es el enlace con el titulo de la maestria
                                                .addClass("xos-hover-1")
                                                .text(maestria.maestriasNombre)
                                                .attr("href", this.urlMaster + "?maestriasId=" + maestria.maestriasId) //REDIRECCIONAMIENTO PARA LOS DETALLES DEL MASTER
                                        ) //este es el a del enlace de la pagina con el titulo de la maestría
                                    ) //este es el h3 para el enlace del titulo
                                    .append($("<p></p>").text(maestria.presentaciones[0].presentacionesEscuela)) //este es el p de la escuela a la que pertenece la maestria
                                    .append(
                                        $("<p></p>")
                                            .append($("<b></b>").text("Modalidades")) //aqui va b (con el titulo modalidades)
                                            .append($("<br>")) //aqui va br(salto de linea)
                                            .append(this.enlaceModalidades(maestria.modalidades).append(
                                                $("<a></a>")
                                                    .attr("href", this.urlMaster + "?maestriasId=" + maestria.maestriasId) //REDIRECCIONAMIENTO PARA LOS DETALLES DEL MASTER
                                                    .addClass("badge bg-success xos-hover-3")
                                                    .append($("<i></i>").addClass("fas fa-globe")) //aqui va el icono del mundo
                                                    .append(" Ver detalles")
                                            ))

                                    ) //este es el p que contiene PLAN DE NEGOCIOS (descripcion),MODALIDADES,VER PAGINA
                                    //este es el p que contiene PLAN DE NEGOCIOS (descripcion),MODALIDADES,VER PAGINA
                                    .append(
                                        $("<p></p>").append(
                                            this.enlacesIdioma(maestria.idiomas)
                                        ).append(" ")
                                    ) // este es el p que contiene  las LABELS de los atributos
                            )
                    )
            );
        });


    }
}
///////////////////////////////////  FIN :: CLASE MAESTRIAS //////////////////////////////////////////////////
//////////
//////////
//////////
//////////
////////////////////////////////// INICIO :: CLASE MODALIDADES ////////////////////////////////////////////////
class CLASS_SERVER_MODALIDADES {
    url = "https://www.fercoadvancededucation.com/oficialServer/main/modalidades.php";
    SEARCH_BY_MAESTRIAS_ID_GROUP = (ejecutar = () => { }, maestriasId) => {
        let instruction = "search_by_maestrias_id_group";
        $.get(this.url + "?instruction=" + instruction + "&maestriasId=" + maestriasId, function (data, status) { ejecutar(data.response); });
    }

    SEARCH = (ejecutar = () => { }, modalidadesId) => {
        let instruction = "search";
        $.get(this.url + "?instruction=" + instruction + "&modalidadesId=" + modalidadesId, function (data, status) { ejecutar(data.response); });
    }
}
////////////////////////////////// FIN :: CLASE MODALIDADES ///////////////////////////////////////////////////
//////////
//////////
//////////
//////////
////////////////////////////////// INICIO :: CLASE MASTER  ////////////////////////////////////////////////////
class CLASS_MASTER {

    constructor() {
        this.initComponents();
    }
    cBarraPantalla;
    cBarraMainReturn = "maestrias.html";
    cSecciones = new CLASS_SERVER_SECCIONES();
    cMaestrias = new CLASS_SERVER_MAESTRIAS();
    cModalidades = new CLASS_SERVER_MODALIDADES();
    cPresentaciones = new CLASS_SERVER_PRESENTACIONES();
    cFormularioMasInformacion = new CLASS_FMI_FORMULARIO_MAS_INFORMACION();

    vMaestriasId;

    //variablesComponentes
    contenedorMaestriasNombre;
    contenedorMaestriasNombre1;
    contenedorPresentacionesPresentacion;
    contenedorModalidadesNombre;
    contenedorModalidadesNombre1;
    contenedorPresentacionesResumen;
    contenedorPresentacionesInicio;
    contenedorPresentacionesTitulacion;
    contenedorPresentacionesUniversidad;
    contenedorMaestriasIdioma;
    contenedorPresentacionesEcts;
    contenedorPresentacionesDuracion;
    contenedorPresentacionesEscuela;
    botonPresentacionesCatalogo;
    contenedorIntercambioModalidades;
    contenedorFormulario;


    utilsFormatearFecha = (fecha) => {
        let f = new Date(fecha);
        let fech = VARIABLES_MESES[f.getMonth()] + " de " + f.getFullYear();
        return fech;
    };

    initComponents = () => {
        this.contenedorMaestriasNombre = $("#contenedorMaestriasNombre");
        this.contenedorMaestriasNombre1 = $("#contenedorMaestriasNombre1");
        this.contenedorPresentacionesPresentacion = $("#contenedorPresentacionesPresentacion");
        this.contenedorModalidadesNombre = $("#contenedorModalidadesNombre");
        this.contenedorModalidadesNombre1 = $("#contenedorModalidadesNombre1");
        this.contenedorPresentacionesResumen = $("#contenedorPresentacionesResumen");
        this.contenedorPresentacionesInicio = $("#contenedorPresentacionesInicio");
        this.contenedorPresentacionesTitulacion = $("#contenedorPresentacionesTitulacion");
        this.contenedorPresentacionesUniversidad = $("#contenedorPresentacionesUniversidad");
        this.contenedorMaestriasIdioma = $("#contenedorMaestriasIdioma");
        this.contenedorPresentacionesEcts = $("#contenedorPresentacionesEcts");
        this.contenedorPresentacionesDuracion = $("#contenedorPresentacionesDuracion");
        this.contenedorPresentacionesEscuela = $("#contenedorPresentacionesEscuela");
        this.botonPresentacionesCatalogo = $("#botonPresentacionesCatalogo");
        this.contenedorIntercambioModalidades = $("#contenedorIntercambioModalidades");
        this.contenedorFormalario = $("#contenedorFormulario");
    }

    setVMaestriasId = (maesriasId) => {
        this.vMaestriasId = maesriasId;
        this.initRenderContenedorIntercambioModalidades();
        this.cMaestrias.SEARCH_BY_MAESTRIAS_ID((maestria) => {
            this.initPresentacionRender(maestria.presentaciones[0].presentacionesId);
        }, maesriasId);
    }

    setCBarraPantalla = (barrapantalla = $()) => {
        this.cBarraPantalla = barrapantalla;
        this.initBarraRender();
    }

    utilsPrepararParrafos = (parrafo) => {
        return parrafo.replace(".", ". <br><br> ");
    }

    initPresentacionRender = (presentacionesId) => {

        this.cPresentaciones.SEARCH_MERGED((presentacion) => {

            this.contenedorMaestriasNombre.html(presentacion.maestriasNombre);
            this.contenedorMaestriasNombre1.html(presentacion.maestriasNombre);
            this.contenedorPresentacionesPresentacion.html(presentacion.presentacionesPresentacion);
            this.contenedorModalidadesNombre.html(presentacion.modalidadesNombre);
            this.contenedorModalidadesNombre1.html(presentacion.modalidadesNombre);
            this.contenedorMaestriasIdioma.html(presentacion.presentacionesIdioma);
            this.contenedorPresentacionesInicio.html(this.utilsFormatearFecha(presentacion.presentacionesInicio));
            this.contenedorPresentacionesEcts.html(presentacion.presentacionesEcts + " Ects");
            this.contenedorPresentacionesTitulacion.html(presentacion.presentacionesTitulacion);
            this.contenedorPresentacionesDuracion.html(presentacion.presentacionesDuracion);
            this.contenedorPresentacionesUniversidad.html(presentacion.presentacionesUniversidad);
            this.contenedorPresentacionesEscuela.html(presentacion.presentacionesEscuela);
            this.contenedorPresentacionesResumen.html(this.utilsPrepararParrafos(presentacion.presentacionesResumen));
            this.botonPresentacionesCatalogo.attr("download", (presentacion.maestriasCodigo + ".pdf"));
            this.botonPresentacionesCatalogo.append($('<span class="bi bi-download"></span>'));
            this.botonPresentacionesCatalogo.append(" Descargar Catálogo");
            this.botonPresentacionesCatalogo.attr("target", "_blank");
            this.botonPresentacionesCatalogo.attr("href", presentacion.presentacionesCatalogo);

            this.cFormularioMasInformacion.setComponentPantalla(this.contenedorFormalario);//VARIABLE EN (formularioMasInformacionMaster.js)
            this.cFormularioMasInformacion.setPresentacion(presentacion);
            this.cFormularioMasInformacion.setCTitulo("¿Tienes alguna duda?");
            this.cFormularioMasInformacion.setCSubtitulo("Christian Coronel");
            this.cFormularioMasInformacion.setCDescripcion("Responsable Comercial de Maestrías Universitarias");
            this.cFormularioMasInformacion.setCFoto("https://fercoadvancededucation.com/data/202311271702webpage/comerciales/ChristianFernandoCoronelCardenas.jpg");

        }, presentacionesId);
    }

    initBarraRender = () => {
        ////////////////////////LUEGO MODIFICAR LA BARRA CUANDO YA EXISTA LA MAESTRIA DEACUERDO A LA SECCIONES EXISTENTES//////////////

        let opciones = $("<div></div>").addClass("navbar-nav ms-auto p-4 p-lg-0");
        this.cSecciones.SELECT((secciones) => {
            secciones.forEach(seccion => {
                let o = $("<a></a>");
                o.attr("href", seccion.seccionesHref);
                o.addClass("nav-item nav-link active text-dark");
                o.html(seccion.seccionesNombre);
                opciones.append(o);
            });
        });

        this.cBarraPantalla.html(
            $("<nav></nav>")
                .addClass(
                    "navbar navbar-expand-lg bg-white text-light navbar-light shadow  fixed-top p-0"
                )
                .attr("id", "home")
                .append(
                    $("<a></a>")
                        .click(() => {
                            localStorage.setItem("master", null);
                        })
                        .attr("href", this.cBarraMainReturn)
                        .addClass("navbar-brand d-flex align-items-center px-4 px-lg-5")
                        .append(
                            $("<h2></h2>")
                                .addClass("m-0")
                                .append($("<i></i>").addClass("fas fa-angle-left"))
                        )
                )
                .append(
                    $("<button></button>")
                        .attr("type", "button")
                        .addClass("navbar-toggler me-4")
                        .attr("data-bs-toggle", "collapse")
                        .attr("data-bs-target", "#navbarCollapse")
                        .append($("<span></span>").addClass("navbar-toggler-icon"))
                )
                .append(
                    $("<div></div>")
                        .addClass("collapse navbar-collapse")
                        .attr("id", "navbarCollapse")
                        .append(opciones)
                        .append(
                            //AQUI PROGRAMAR PEDIR INFORMACION
                            $("<a></a>")
                                .addClass("btn btn-dark py-4 px-lg-5 d-none d-lg-block")
                                .append($("<i></i>").addClass("fab fa-whatsapp  ms-3"))
                                .append(" Información")
                                .append($("<i></i>").addClass("bi bi-arrow-right  ms-3"))
                                .click(() => {

                                    this.cMaestrias.SEARCH_BY_MAESTRIAS_ID((maestria) => {

                                        var mensaje =
                                            "https://api.whatsapp.com/send?phone=34654704710&text=Saludos, me gustaria recibir mas informacion acerca del master : " +
                                            maestria.maestriasNombre;
                                        var win = window.open(mensaje, "_blank");
                                        // Cambiar el foco al nuevo tab (punto opcional)
                                        win.focus();
                                    }, this.vMaestriasId);

                                })
                        )
                )
        );
    }



    initRenderContenedorIntercambioModalidades = () => {
        this.cMaestrias.SEARCH_BY_MAESTRIAS_ID((data) => {

            //seccion de codigos de inicio
            let enlace_p_para_modalidad = (elementos = {}) => {

                let boton = $("<a></a>")

                boton.ready(() => {

                    let primero = elementos.maestria.presentaciones[0].presentacionesId;

                    let actual = elementos.presentacion.presentacionesId;

                    if (primero == actual) {
                        boton.addClass("bg-dark");

                    }
                });

                this.cModalidades.SEARCH((modalidad) => {
                    boton.css("font-size", "12px");
                    boton.addClass("btn border text-center text-light");
                    boton.attr("id", "b" + elementos.presentacion.presentacionesId + "b");
                    boton.append(modalidad.modalidadesNombre);
                    boton.append("<br>");
                    boton.append(
                        //icono
                        $("<i></i>").css("font-size", "12px").append(this.utilsFormatearFecha(elementos.fecha))
                    );
                    boton.append("<br>")
                    boton.append($("<i></i>").css("font-size", "12px").append(elementos.campus))
                    boton.click(() => {

                        this.initPresentacionRender(elementos.presentacion.presentacionesId);
                        elementos.maestria.presentaciones.forEach(presentacion => {
                            $("#b" + presentacion.presentacionesId + "b").removeClass("bg-dark");
                        });
                        boton.addClass("bg-dark");
                        this.botonPresentacionesCatalogo.html("");
                    });
                }, elementos.modalidad);




                return boton;
            };
            /**
             * 
   * COTNENEDOR PARA enlaces <a></a> modalidad Online
   */
            let cabecera = (icono, titulo) => {
                return $("<p></p>").append(
                    $("<b></b>")
                        .append($("<i></i>").addClass(icono))
                        .append(titulo)
                        .append($("<hr>"))
                );
            };

            let contenedor_enlaces_online = $("<div></div>").addClass("p-2 hover-overlay");

            let div_para_online = $("<div></div>")
                .addClass("col-sm-5 text-light")
                .append(cabecera("bi-laptop", " Online"))
                .append(contenedor_enlaces_online);
            /**
             * COTNENEDOR PARA enlaces <a></a> modalidad Presencial
             */
            let div_para_separador = $("<div></div>").addClass("col-sm-1");
            /**
             * COTNENEDOR PARA enlaces <a></a> modalidad Semipresencial
             */
            let contenedor_enlaces_presencial = $("<div></div>").addClass("p-2 hover-overlay");

            let div_para_presenciales = $("<div></div>")
                .addClass("col-sm-5 text-light")
                .append(cabecera("fas fa-map-marker-alt", " Presencial"))
                .append(contenedor_enlaces_presencial);


            const is_online = (modalidades) => {
                let m = false;
                modalidades.forEach((modalidad) => {
                    if (modalidad.modalidadesNombre.toUpperCase() === "ONLINE") {
                        m = true;
                    }
                });
                return m;
            };

            const is_presencial = (modalidades) => {
                let m = false;
                modalidades.forEach((modalidad) => {
                    if (modalidad.modalidadesNombre.toUpperCase() === "PRESENCIAL") {
                        m = true;
                    }
                });
                return m;
            };

            const is_semipresencial = (modalidades) => {
                let m = false;
                modalidades.forEach((modalidad) => {
                    if (modalidad.modalidadesNombre.toUpperCase() === "SEMIPRESENCIAL") {
                        m = true;
                    }
                });
                return m;
            };


            let row_duplex = $("<div></div>").addClass("row");

            if (is_online(data.modalidades)) {
                row_duplex.append(div_para_online);
            }
            /**
             * Verifica si, existen maestrías presencial o semipresencial porque van en el mismo div, carga recuadro para enlaces de maestrías presencial o semipresencial
             */
            if (is_presencial(data.modalidades) || is_semipresencial(data.modalidades)) {
                row_duplex.append(div_para_separador);
                row_duplex.append(div_para_presenciales);
            }
            //////////////////////////////////////////////////////////////





            let contador_recorrido = 0;

            data.presentaciones.forEach((presentacion) => {
                let datos = {
                    clase: presentacion.modalidadesId,
                    //fecha: FUNCIONES_FORMATEAR_FECHA(maestria.inicio),
                    fecha: presentacion.presentacionesInicio,
                    modalidad: presentacion.modalidadesId,
                    presentacion: presentacion,///aqui pasar la presentacion
                    maestria: data,
                    campus: presentacion.presentacionesCampus,
                    posicion: contador_recorrido,
                };

                if (presentacion.modalidadesId === 1) {
                    let x = enlace_p_para_modalidad(datos);
                    contenedor_enlaces_online.append(x);
                }
                if (presentacion.modalidadesId === 2) {
                    let x = enlace_p_para_modalidad(datos);
                    contenedor_enlaces_presencial.append(x);
                }

                if (presentacion.modalidadesId === 3) {
                    let x = enlace_p_para_modalidad(datos);
                    contenedor_enlaces_presencial.append(x);
                }
                contador_recorrido++;
            });
            //////////////////////////////////////////////////////////////


            let contenedor = $("<div><div>");
            contenedor.addClass("row p-4");
            contenedor.append($("<div></div>").addClass("col-sm-4"));
            contenedor.append(
                $("<div></div>")
                    .addClass("col-sm-4 p-2")
                    .css("background-color", "rgb(255, 255, 255,0.2)")
                    .append(
                        //P3
                        $("<div></div>").addClass("p-3").append(row_duplex)
                    )
            )
            this.contenedorIntercambioModalidades.html(contenedor);

        }, this.vMaestriasId)
    }

    cPantalla;
}
////////////////////////////////// FIN :: CLASE MASTER  ////////////////////////////////////////////////////
//////////
//////////
//////////
//////////
////////////////////////////////// INICIO :: CLASE SECCIONES ///////////////////////////////////////////////////////////
class CLASS_SERVER_SECCIONES {
    url = "https://www.fercoadvancededucation.com/oficialServer/main/secciones.php";

    SELECT = (ejecutar = () => { }) => {
        let instruction = "select";
        $.get(this.url + "?instruction=" + instruction, function (data, status) { ejecutar(data.response); });
    }
}
////////////////////////////////// FIN :: CLASE SECCIONES ///////////////////////////////////////////////////////////
//////////
//////////
//////////
//////////
////////////////////////////////// INICIO :: 