const formulario= document.querySelector('#busca');
const boton = document.querySelector('#buscar');
const resultado= document.querySelector('#resultados');
const productos = [
    {nombre: 'platanos', valor: 500},
    {nombre: 'naranjas', valor:200},
    {nombre: 'piñas', valor: 300},
    {nombre: 'manzanas', valor: 700},
    {nombre: 'cerezas', valor: 500},
    {nombre: 'limones', valor: 600},
    {nombre: 'tomates', valor: 900},
    {nombre: 'pepeinos', valor: 1000},
]
const filtrar = ()=>{
    //console.log(formulario.value);
    resultado.innerHTML = '';
    const texto=formulario.value.toLowerCase();
    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <li>${producto.nombre} - >${producto.valor}</li>
            `

        }

    }
    if(resultado.innerHTML === ''){
        resultado.innerHTML += `<li>Producto no encontrado</li>`
    }

}
boton.addEventListener("click" ,filtrar,false);