
fetch("https://rickandmortyapi.com/api/character")
.then(function(res){
    return res.json()
})

.then(function (data){
console.log(data);
let section = document.querySelector("section")
let personajesRecorridos = ''

for(let i = 0; i < data.results.length; i++) {

personajesRecorridos = personajesRecorridos + `<article>
    <a href="./detalles.html?id=${data.results[i].id}">
     <img src=${data.results[i].image}>
     </a>
        <h2>${data.results[i].name}</h2>
        </article>`
}
section.innerHTML = personajesRecorridos

})

.catch(function (err){
console.log(err);
})
