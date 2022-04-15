const jsonData = require('./obras.json');
let salida = "<table><thead><th>Año</th><th>Título no original (español)</th><th>Título original</th></thead><tbody>";
for (let element of jsonData) {
    if (element.id % 2 == 0) {
        if (element.id==14) {
            salida += `<tr><td><a href="./detalle.html">${element.date}</a></td><td><a href="./detalle.html">${element.titulo}</a></td><td><a href="./detalle.html">${element.original}</a></td></tr>`;        
        }
        else {
        salida += `<tr><td>${element.date}</td><td>${element.titulo}</td><td>${element.original}</td></tr>`;
    }}
    else {
        salida += `<tr class="alt"><td>${element.date}</td><td>${element.titulo}</td><td>${element.original}</td></tr>`;
    }
}


salida += "</tbody></table>";
document.querySelector("#tabla").innerHTML = salida;