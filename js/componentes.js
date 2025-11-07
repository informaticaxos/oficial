let COMPONENT_HEAD = () => {
    return `c   
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
        <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5 xos-temblor">
            <h2 class="m-0"><img width="40" alt="" id="logoBarra" /></h2>
        </a>
        <button type="button" class="navbar-toggler me-4 " data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="index.html" class="nav-item nav-link active text-dark xos-temblor">Home</a>
                <a href="maestrias.html" class="nav-item nav-link active text-dark xos-temblor">Maestrías Oficiales en
                    España</a>              
                <a href="about.html" class="nav-item nav-link xos-temblor">¿Quiénes Somos?</a>
                <a href="https://www.fercoadvancededucation.com/landing"
                    class="nav-item nav-link xos-temblor">Contáctos</a>
            </div>
        </div>
    </nav>
  `;
};

let COMPONENT_FOOTER = () => {
    return `
    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-12 col-md-6">
                    <h4 class="text-white mb-3">Contactos</h4>
                    <p class="mb-2">
                        <i class="fa fa-map-marker-alt me-3"></i>Barcelona, España <br>
                        <i class="fa fa-phone-alt me-3"></i><a href="tel:34654704710" target="_blank"
                            class="text-light">+34 678 79 13 32</a>
                    </p>
                    <p class="mb-2">
                    </p>
                    <p class="mb-2">

                        <i class="fa fa-map-marker-alt me-3"></i>Cuenca, Ecuador <br>
                        <i class="fa fa-phone-alt me-3"></i><a href="tel:593995113549" target="_blank"
                            class="text-light">+593 99 511 3549</a>
                    </p>
                    <p class="mb-2">
                        <hr>
                    </p>
                    <p class="mb-2">
                        <i class="fa fa-envelope me-3"></i>info.latinoamerica@fercoadvancededucation.com
                    </p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social"
                            href="https://www.instagram.com/fercoadvancededucation" target="_blank"><i
                                class="fab fa-instagram"></i></a>
                        <a class="btn btn-outline-light btn-social" href="https://www.facebook.com/fercoededucation/"
                            target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social"
                            href="https://api.whatsapp.com/send?phone=34678791332&text=." target="_blank">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" id="contactos">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-12 text-center text-md-start mb-3 mb-md-0">
                        &copy;
                        <a class="border-bottom" href="#"> fercoadvancededucation.com </a>, All Right Reserved.
                        Designed
                        By
                        <a class="border-bottom" href="https://htmlcodex.com">Informática XOS</a><br /><br />
                    </div>

                    <div class="col-md-12 text-center text-md-start mb-3 mb-md-0"> 
                        <a class="border-bottom" target="_blank" href="https://fercoadvancededucation.com/php-ferco-files-ws/frontend/">Gestión de Datos</a><br /><br />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->
  `;
};
// document.getElementById('footer').innerHTML = COMPONENT_FOOTER();