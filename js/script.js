//1
const lista = ["pane", "acqua", "carta igienica", "oreo", "pasta", "tonno", "mozzarella"];
let i=0;
let output, li;
const ul = document.getElementById('spesa');

while (i < lista.length){
    output = lista[i];
    li = `<li>${output}</li>`;
    ul.innerHTML += li;
    i++;
}