//console.log("A conexão com o JavaScript está funcionando!");
//console.log("A conexão com o JavaScript está funcionando!");
//const logo = document.getElementById('logo');
//console.log(logo);

//const autor = document.getElementsByClassName('post-autor');
//console.log(autor);
//console.log(autor[0]);
const post02 = document.getElementById('post02');
console.log(post02);

const formulario = document.getElementById('formulario');
console.log(formulario);

const posts = document.getElementsByClassName('post');
console.log(posts);

const dataposts = document.getElementsByClassName('post-data');
console.log(dataposts);

const textposts = document.getElementsByClassName('post-texto');
console.log(textposts);

const redessocicais = document.getElementsByClassName('lista_redes');
console.log(redessocicais);
//_________________________________________//
//link dentro do post
const linkDoPrimeiroPost = document.querySelector('#post01 a');
console.log(linkDoPrimeiroPost);
//console.log(linkDoPrimeiroPost.innerText);
//console.log(linkDoPrimeiroPost.innerHTML);
console.log(linkDoPrimeiroPost.href);

// A palavra em negrito dentro do texto  do segundo post
const palavraEmNegrito = document.querySelector('#post02 strong');
console.log(palavraEmNegrito);
//console.log(palavraEmNegrito.innerText);
//console.log(palavraEmNegrito.innerHTML);

//O input de nome do formulário:
const inputNome = document.querySelector('#nome');
console.log(inputNome);
//console.log(inputNome.value);

//Os links da lista de redes no final da página:
const linksRedes = document.querySelectorAll('footer .lista_redes a');
console.log(linksRedes);
console.log(linksRedes [0].innerHTML);
console.log(linksRedes [1].innerText);
console.log(linksRedes [2].innerText);
// Os links da navegação (só os links, não os elementos de lista):
console.log(linksRedes [0].href);
console.log(linksRedes [1].href);
console.log(linksRedes [2].href);


//Os 4 "Autor:" e "Data:" em negrito nos dois posts:
const autores = document.querySelectorAll('.post-autor');
console.log(autores);
console.log(autores[0].innerText);
console.log(autores[1].innerText);

const datas = document.querySelectorAll('.post-data');
console.log(datas);
console.log(datas[0].innerText);
console.log(datas[1].innerText);

//_________________________________________________________//
let titulos = document.querySelectorAll('footer .lista_redes a');

function imprimirTodos(lista) {
    console.log(`A lista contém ${lista.length} elementos:`);
    for (let i = 0; i < titulos.length; i++){
        console.log(titulos[i].innerText);
        console.log(titulos[i].href);
    }
}
imprimirTodos(titulos);

