let COMPONENT_HEAD = () => {
    return `   
    <title>FERCO Advanced Education</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="" name="keywords" />
    <meta content="" name="description" />
    <link href="img/favicon.ico" rel="icon" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap"
        rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
    <link href="lib/animate/animate.min.css" rel="stylesheet" />
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/style.css" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@300;400&display=swap"
        rel="stylesheet">
  `;
};

let COMPONENT_NAVBAR = () => {
    return `
    <nav class="navbar navbar-expand-lg bg-white text-light navbar-light shadow sticky-top p-0" id="home">
        <a href="index.html" class="navbar-brand d-flex align-items-center gap-2 px-4 px-lg-5 xos-temblor" style="font-weight:700; font-size:1.18rem; letter-spacing:0.04em; color:#181d38;">
            <span style="background: #fff; border-radius: 50%; width: 38px; height: 38px; display: inline-flex; align-items: center; justify-content: center; overflow: hidden; padding: 0; box-shadow:0 2px 8px rgba(24,29,56,0.10);">
                <img src="./img/logos-ferco/logofull.png" alt="Logo FERCO" style="width: 32px; height: 32px; object-fit: contain; display: block;" />
            </span>
            FERCO ADVANCED EDUCATION
        </a>
        <button type="button" class="navbar-toggler me-4 " data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="index.html" class="nav-item nav-link active text-dark xos-temblor">Home</a>
                <a href="maestrias.html" class="nav-item nav-link active text-dark xos-temblor">Maestrías Oficiales en España</a>
                <a href="about.html" class="nav-item nav-link xos-temblor">¿Quiénes Somos?</a>
                <a href="https://www.fercoadvancededucation.com/landing" class="nav-item nav-link xos-temblor">Contáctos</a>
            </div>
        </div>
    </nav>
  `;
};

let COMPONENT_FOOTER = () => {
        return `
        <!-- Footer Start -->
        <footer class="bg-dark text-white mt-5 pt-5 pb-3 w-100" style="font-size:1.08rem; letter-spacing:0.01em;">
            <div class="container-fluid px-4">
                <div class="row align-items-center">
                    <div class="col-md-7 mb-4 mb-md-0">
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <span style="background: #fff; border-radius: 50%; width: 40px; height: 40px; display: inline-flex; align-items: center; justify-content: center; overflow: hidden; padding: 0;">
                                <img src="./img/logos-ferco/logofull.png" alt="Logo FERCO" style="width: 34px; height: 34px; object-fit: contain; display: block;" />
                            </span>
                            <span class="fw-bold" style="font-size:1.35rem; letter-spacing:0.04em;">FERCO Advanced Education</span>
                        </div>
                        <div class="mb-2" style="line-height:1.5;">
                            Facilitamos oportunidades de formación académica internacional, representando universidades y asesorando sobre las mejores opciones educativas.
                        </div>
                        <div class="mb-2" style="line-height:1.5;">
                            <span class="fw-bold">RUC Empresa:</span> <a href="https://srienlinea.sri.gob.ec/sri-en-linea/SriRucWeb/ConsultaRuc/Consultas/consultaRuc" class="text-white text-decoration-underline" target="_blank" title="Consulta nuestra empresa">0104655832001</a>
                        </div>
                    </div>
                    <div class="col-md-5 text-md-end">
                        <div class="mb-2" style="line-height:1.5;">
                            <span class="fw-bold">Contacto:</span> <a href="mailto:info@fercoadvancededucation.com" class="text-white text-decoration-underline">info@fercoadvancededucation.com</a>
                        </div>
                        <div class="mb-2" style="line-height:1.5;">
                            <span class="fw-bold">WhatsApp:</span> <a href="https://wa.me/34678791332?text=Hola!%20visitaba%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n!%0AMi%20nombre%20es%20:%20" class="text-white text-decoration-underline">+34 678 791 332</a>
                        </div>
                        <div class="mb-2" style="line-height:1.5;">
                            <span class="fw-bold">Dirección:</span> Barcelona, España
                        </div>
                        <div class="mb-2" style="line-height:1.5;">
                            <span class="fw-bold">Soporte:</span> <a href="https://fercoadvancededucation.com/php-ferco-files-ws/frontend/" class="text-white text-decoration-underline" target="_blank">Gestión de Datos</a>
                        </div>
                    </div>
                </div>
                <hr class="border-secondary my-4" />
                <div class="row">
                    <div class="col-12 text-center" style="font-size:0.98rem; letter-spacing:0.01em;">
                        &copy; ${new Date().getFullYear()} FERCO Advanced Education. Todos los derechos reservados.
                    </div>
                </div>
            </div>
        </footer>
        <!-- Footer End -->
    `;
};


// document.getElementById('footer').innerHTML = COMPONENT_FOOTER();