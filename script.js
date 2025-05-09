var data = [
    { nombre: 'perfumesf', categoria: 'mujer' },
    { nombre: 'perfumesm', categoria: 'hombre' },
    { nombre: 'perfumesu', categoria: 'unisex' },
];

function filtrarPerfumesPorCategoria(categoria) {
    data.forEach(item => {
    const elementos = document.getElementsByClassName(item.nombre);
    for (let i = 0; i < elementos.length; i++) {
        if (categoria === 'all' || item.categoria === categoria) {
        elementos[i].style.display = 'block';
        } else {
        elementos[i].style.display = 'none';
        }
    }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const filtro = document.getElementById('filter');
    filtro.addEventListener('change', function () {
    filtrarPerfumesPorCategoria(filtro.value);
    });
});



