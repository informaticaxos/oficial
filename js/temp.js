let data_componente_generico = {
  /* Corresponde a un objeto que contiene variables de tipo texto */
  head: {
    headTitulo /* Tipo Texto :: Titulo de la cabecera de seccion */,
    headSubtitulo /* Tipo Texto :: Subtitulo de la cabecera de seccion */,
    headDescripcion /* Tipo Texto :: Descripcion de la cabecera de seccion */,
  },
  /* 
    Body corresponde a Array de Elementos Body 
    */
  body: [
    {
      /* 
      Corresponde al primer objeto de tipo bodyCabecera 
      */
      bodyCabecera: {
        /* 
        Corresponde a un objeto que puede ser de un solo tipo ( imagen || icono (bi) || texto )
        */
        imagen /* url de imagen */,
        icono /* nombre de la clase de icono <i></i> para generar el icono */,
        texto /* texto corto a mostrar como cabecera de inicio como abreviaturas, etc */,
      },
      /* 
      Corresponde al primer objeto de tipo bodyCuerpo 
      */
      bodyCuerpo: {
        /* 
        Corresponde a un objeto de tres variables tipo texto 
        */
        bodyCuerpoTitulo /* Corresponde al titulo del contenido del cuerpo  */,
        bodyCuerpoSubtitulo /* Corresponde al subtitulo del contenido del cuerpo  */,
        bodyCuerpoDescripcion /* Corresponde a la descripcion del contenido del cuerpo  */,
      },
    },
  ],
  foot:
    [// imagenes como objetos con caracteristicas
      {
        src: "img/imagen.jpg",//path de la imagen
        width: "80%",//ancho de la imagen 1-100%
        height: "80%",//alto de la imagen 1-100%
        position: "center" // start-center-end
      }
    ]

};

let maestria = {
  genericos: [
    {
      /* Corresponde a un objeto que contiene variables de tipo texto */
      head: {
        headTitulo /* Tipo Texto :: Titulo de la cabecera de seccion */,
        headSubtitulo /* Tipo Texto :: Subtitulo de la cabecera de seccion */,
        headDescripcion /* Tipo Texto :: Descripcion de la cabecera de seccion */,
      },
      /* 
            Body corresponde a Array de Elementos Body 
            */
      body: [
        {
          /* 
              Corresponde al primer objeto de tipo bodyCabecera 
              */
          bodyCabecera: {
            /* 
                Corresponde a un objeto que puede ser de un solo tipo ( imagen || icono (bi) || texto )
                */
            imagen /* url de imagen */,
            icono /* nombre de la clase de icono <i></i> para generar el icono */,
            texto /* texto corto a mostrar como cabecera de inicio como abreviaturas, etc */,
          },
          /* 
              Corresponde al primer objeto de tipo bodyCuerpo 
              */
          bodyCuerpo: {
            /* 
                Corresponde a un objeto de tres variables tipo texto 
                */
            bodyCuerpoTitulo /* Corresponde al titulo del contenido del cuerpo  */,
            bodyCuerpoSubtitulo /* Corresponde al subtitulo del contenido del cuerpo  */,
            bodyCuerpoDescripcion /* Corresponde a la descripcion del contenido del cuerpo  */,
          },
        },
      ],
    },
  ],
};

let plan_estudios_object = {
  pdeHead: {
    headTitulo: "Plan de estudios",
    headDescripcion: "Descripcion larga del plan de estudios",
  },
  pdeBody: {},
};

let temp_tabla =
{
  materias: [
    {
      materia: "Módulo 1. El Contexto de la Educación Superior (6 ECTS, S1)",
      catalogo: "modulo.pdf",
      ects: 6,
      tipo: "OBLIGATORIA",
      idioma: "Español",
      descripcion: "Adquirirás los conocimiento de la estructura, funcionamiento y gestión de las Instituciones de Educación Superior en América y Europa.",
      puntos: [
        "Adquirir conocimientos específicos en cuanto al uso del color.",
        "Analizar la evolución del diseño interior desde la antigüedad hasta la actualidad.",
        "Diseñar un espacio interior teniendo en cuenta los requerimientos estéticos y funcionales del cliente.",
        "Acondicionar los colores de un espacio teniendo en cuenta las necesidades estéticas y funcionales del cliente.",
        "Desarrollar estrategias para la organización del espacio.",
        "Elaborar un catálogo de operadores actuales para el desarrollo de proyectos.",
      ]
    },
    {
      materia: "Módulo 2. Actores y Escenarios (6 ECTS, S1)",
      catalogo: "modulo.pdf",
      ects: 6,
      tipo: "OBLIGATORIA",
      idioma: "Español",
      descripcion: "Adquirirás los conocimiento de la estructura, funcionamiento y gestión de las Instituciones de Educación Superior en América y Europa.",
      puntos: [
        "Adquirir conocimientos específicos en cuanto al uso del color.",
        "Analizar la evolución del diseño interior desde la antigüedad hasta la actualidad.",
        "Diseñar un espacio interior teniendo en cuenta los requerimientos estéticos y funcionales del cliente.",
        "Acondicionar los colores de un espacio teniendo en cuenta las necesidades estéticas y funcionales del cliente.",
        "Desarrollar estrategias para la organización del espacio.",
        "Elaborar un catálogo de operadores actuales para el desarrollo de proyectos.",
      ]
    },
    {
      materia: "Módulo 3. El Proceso de Enseñanza- Aprendizaje I (6 ECTS, S1)",
      catalogo: "modulo.pdf",
      ects: 6,
      tipo: "OBLIGATORIA",
      idioma: "Español",
      descripcion: "Adquirirás los conocimiento de la estructura, funcionamiento y gestión de las Instituciones de Educación Superior en América y Europa.",
      puntos: [
        "Adquirir conocimientos específicos en cuanto al uso del color.",
        "Analizar la evolución del diseño interior desde la antigüedad hasta la actualidad.",
        "Diseñar un espacio interior teniendo en cuenta los requerimientos estéticos y funcionales del cliente.",
        "Acondicionar los colores de un espacio teniendo en cuenta las necesidades estéticas y funcionales del cliente.",
        "Desarrollar estrategias para la organización del espacio.",
        "Elaborar un catálogo de operadores actuales para el desarrollo de proyectos.",
      ]
    },
    {
      materia: "Módulo 4. Seguimiento y Evolución del Proceso de Aprendizaje (6 ECTS, S1)",
      catalogo: "modulo.pdf",
      ects: 6,
      tipo: "OBLIGATORIA",
      idioma: "Español",
      descripcion: "Adquirirás los conocimiento de la estructura, funcionamiento y gestión de las Instituciones de Educación Superior en América y Europa.",
      puntos: [
        "Adquirir conocimientos específicos en cuanto al uso del color.",
        "Analizar la evolución del diseño interior desde la antigüedad hasta la actualidad.",
        "Diseñar un espacio interior teniendo en cuenta los requerimientos estéticos y funcionales del cliente.",
        "Acondicionar los colores de un espacio teniendo en cuenta las necesidades estéticas y funcionales del cliente.",
        "Desarrollar estrategias para la organización del espacio.",
        "Elaborar un catálogo de operadores actuales para el desarrollo de proyectos.",
      ]
    },
    {
      materia: "Módulo 5. Las TICs en el Proceso de Enseñanza- Aprendizaje (6 ECTS, S1)",
      catalogo: "modulo.pdf",
      ects: 6,
      tipo: "OBLIGATORIA",
      idioma: "Español",
      descripcion: "Adquirirás los conocimiento de la estructura, funcionamiento y gestión de las Instituciones de Educación Superior en América y Europa.",
      puntos: [
        "Adquirir conocimientos específicos en cuanto al uso del color.",
        "Analizar la evolución del diseño interior desde la antigüedad hasta la actualidad.",
        "Diseñar un espacio interior teniendo en cuenta los requerimientos estéticos y funcionales del cliente.",
        "Acondicionar los colores de un espacio teniendo en cuenta las necesidades estéticas y funcionales del cliente.",
        "Desarrollar estrategias para la organización del espacio.",
        "Elaborar un catálogo de operadores actuales para el desarrollo de proyectos.",
      ]
    },
    {
      materia: "Módulo 6. Desarrollo de habilidades Docentes: docencia presencial, semipresencial y a distancia (6 ECTS, S2)",
      catalogo: "modulo.pdf",
      ects: 6,
      tipo: "OBLIGATORIA",
      idioma: "Español",
      descripcion: "Adquirirás los conocimiento de la estructura, funcionamiento y gestión de las Instituciones de Educación Superior en América y Europa.",
      puntos: [
        "Adquirir conocimientos específicos en cuanto al uso del color.",
        "Analizar la evolución del diseño interior desde la antigüedad hasta la actualidad.",
        "Diseñar un espacio interior teniendo en cuenta los requerimientos estéticos y funcionales del cliente.",
        "Acondicionar los colores de un espacio teniendo en cuenta las necesidades estéticas y funcionales del cliente.",
        "Desarrollar estrategias para la organización del espacio.",
        "Elaborar un catálogo de operadores actuales para el desarrollo de proyectos.",
      ]
    },
    {
      materia: "Módulo 7. Iniciación a la Investigación Educativa (6 ECTS, S2)",
      catalogo: "modulo.pdf",
      ects: 6,
      tipo: "OBLIGATORIA",
      idioma: "Español",
      descripcion: "Adquirirás los conocimiento de la estructura, funcionamiento y gestión de las Instituciones de Educación Superior en América y Europa.",
      puntos: [
        "Adquirir conocimientos específicos en cuanto al uso del color.",
        "Analizar la evolución del diseño interior desde la antigüedad hasta la actualidad.",
        "Diseñar un espacio interior teniendo en cuenta los requerimientos estéticos y funcionales del cliente.",
        "Acondicionar los colores de un espacio teniendo en cuenta las necesidades estéticas y funcionales del cliente.",
        "Desarrollar estrategias para la organización del espacio.",
        "Elaborar un catálogo de operadores actuales para el desarrollo de proyectos.",
      ]
    },
    {
      materia: "Módulo 8. Innovación Docente (6 ECTS, S2)",
      catalogo: "modulo.pdf",
      ects: 6,
      tipo: "OBLIGATORIA",
      idioma: "Español",
      descripcion: "Adquirirás los conocimiento de la estructura, funcionamiento y gestión de las Instituciones de Educación Superior en América y Europa.",
      puntos: [
        "Adquirir conocimientos específicos en cuanto al uso del color.",
        "Analizar la evolución del diseño interior desde la antigüedad hasta la actualidad.",
        "Diseñar un espacio interior teniendo en cuenta los requerimientos estéticos y funcionales del cliente.",
        "Acondicionar los colores de un espacio teniendo en cuenta las necesidades estéticas y funcionales del cliente.",
        "Desarrollar estrategias para la organización del espacio.",
        "Elaborar un catálogo de operadores actuales para el desarrollo de proyectos.",
      ]
    },
    {
      materia: "Módulo 9. Prácticas Profesionales: Prácticum (6 ECTS, S2)",
      catalogo: "modulo.pdf",
      ects: 6,
      tipo: "OBLIGATORIA",
      idioma: "Español",
      descripcion: "Adquirirás los conocimiento de la estructura, funcionamiento y gestión de las Instituciones de Educación Superior en América y Europa.",
      puntos: [
        "Adquirir conocimientos específicos en cuanto al uso del color.",
        "Analizar la evolución del diseño interior desde la antigüedad hasta la actualidad.",
        "Diseñar un espacio interior teniendo en cuenta los requerimientos estéticos y funcionales del cliente.",
        "Acondicionar los colores de un espacio teniendo en cuenta las necesidades estéticas y funcionales del cliente.",
        "Desarrollar estrategias para la organización del espacio.",
        "Elaborar un catálogo de operadores actuales para el desarrollo de proyectos.",
      ]
    },
    {
      materia: "Módulo 10. Trabajo Fin de Máster (6 ECTS, S2)",
      catalogo: "modulo.pdf",
      ects: 6,
      tipo: "OBLIGATORIA",
      idioma: "Español",
      descripcion: "Adquirirás los conocimiento de la estructura, funcionamiento y gestión de las Instituciones de Educación Superior en América y Europa.",
      puntos: [
        "Adquirir conocimientos específicos en cuanto al uso del color.",
        "Analizar la evolución del diseño interior desde la antigüedad hasta la actualidad.",
        "Diseñar un espacio interior teniendo en cuenta los requerimientos estéticos y funcionales del cliente.",
        "Acondicionar los colores de un espacio teniendo en cuenta las necesidades estéticas y funcionales del cliente.",
        "Desarrollar estrategias para la organización del espacio.",
        "Elaborar un catálogo de operadores actuales para el desarrollo de proyectos.",
      ]
    },
  ],
};
