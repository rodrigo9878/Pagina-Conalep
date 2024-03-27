function cambiarIdioma(selector) {
    var idioma = selector.value;
    document.getElementById('htmlLang').setAttribute('lang', idioma);
}

function mostrarInicio() {
    document.getElementById('inicio').style.display = 'block';
    document.getElementById('historia').style.display = 'none';
    document.getElementById('instalaciones').style.display = 'none';
    document.getElementById('encuesta').style.display = 'none';
}

function mostrarHistoria() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('historia').style.display = 'block';
    document.getElementById('instalaciones').style.display = 'none';
    document.getElementById('encuesta').style.display = 'none';
}

function mostrarInstalaciones() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('historia').style.display = 'none';
    document.getElementById('instalaciones').style.display = 'block';
    document.getElementById('encuesta').style.display = 'none';
}

function mostrarEncuesta() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('historia').style.display = 'none';
    document.getElementById('instalaciones').style.display = 'none';
    document.getElementById('encuesta').style.display = 'block';
}