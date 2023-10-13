const API = 'https://swapi.dev/api/people/'

function personaje(texto) { 
    let div = document.createElement('div')
    let h1_texto = document.createTextNode(texto.url+" ->> "+texto.name) 
    div.appendChild(h1_texto)
     


    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var tdUrl = document.createElement('td');  
    var tdName = document.createElement('td');    

    tdUrl.style.border = '1px solid #000';
    tdName.style.border = '1px solid #000';
    tdUrl.textContent = texto.url;
    tdName.textContent = texto.name; 
   
    tr.appendChild(tdUrl);
    tr.appendChild(tdName); 
    table.appendChild(tr);


   /* let img = document.createElement('img')
    img.src = texto.image
    div.appendChild(img)*/

    let contenedor = document.getElementById('contenedor')
    contenedor.appendChild( table )
}

function obtener_personaje(id) {
    return new Promise((resolve, reject) => {
        fetch(`${API}${id}`)
            .then((data) => resolve(data.json()))
            .catch((error) => reject(`[error]: ${error}`))
    })
}

let ids = []
for (let i=1; i<=90; i++) {
    ids.push(i)
}

let promesas = ids.map( id => obtener_personaje(id) )

// Promesas Encadenadas
Promise
    .all( promesas )
    .then( data => {
        for (let i=0; i<data.length; i++) {
            personaje( data[i] )
        }
    } )
