// //console.log("A conexão com o JavaScript está funcionando!");
// //console.log("A conexão com o JavaScript está funcionando!");

/* Pegando o elemento e mudando a cor */
// const logo = document.getElementById('logo');
// console.log(logo);
// logo.style.backgroundColor = "blue"

/* Usar o getElmentsByClassName e pegar os elementos da lista*/
// const autor = document.getElementsByClassName('post-autor')//[0].innerText;//
// console.log(autor);
// console.log(autor[0]);
// console.log(autor[0].innerText);
// console.log(autor.length);
//     //pegar o segundo elemento
// console.log(autor.item(1).innerText)

/* Usar o getElmentById e pegar os elementos da lista*/
/* Mostrar a diferença do innerHTML e innerText*/
// const post02 = document.getElementById('post02');
// console.log(post02.innerHTML);
// console.log(post02.innerText);
//     //mudando o stilo da letra cor
// post02.style.color="orange";
// post02.style.fontFamily= "Arial, sans serif";

/*Pergar o elemento formulário */
// const formulario = document.getElementById('formulario');
// console.log(formulario);
// formulario.style.backgroundColor = "#ccc"
// formulario.style.padding = "5px";

/* usando o ByClassName e ByTagName*/
// const posts = document.getElementsByClassName('post');
// console.log(posts);
// const postagens = document.getElementsByTagName('article')
// console.log(postagens);
// console.log(postagens.item(1).innerText);


// const dataposts = document.getElementsByClassName('post-data');
// console.log(dataposts);

// const textposts = document.getElementsByClassName('post-texto');
// console.log(textposts);

// const redessocicais = document.getElementsByClassName('lista_redes');
// console.log(redessocicais);
// //_________________________________________//
// //link dentro do post
// const linkDoPrimeiroPost = document.querySelector('#post01 a');
// console.log(linkDoPrimeiroPost);
// //console.log(linkDoPrimeiroPost.innerText);
// //console.log(linkDoPrimeiroPost.innerHTML);
// console.log(linkDoPrimeiroPost.href);

// // A palavra em negrito dentro do texto  do segundo post
// const palavraEmNegrito = document.querySelector('#post02 strong');
// console.log(palavraEmNegrito);
// //console.log(palavraEmNegrito.innerText);
// //console.log(palavraEmNegrito.innerHTML);

// //O input de nome do formulário:
// const inputNome = document.querySelector('#nome');
// console.log(inputNome);
// //console.log(inputNome.value);

// //Os links da lista de redes no final da página:
// const linksRedes = document.querySelectorAll('footer .lista_redes a');
// console.log(linksRedes);
// console.log(linksRedes [0].innerHTML);
// console.log(linksRedes [1].innerText);
// console.log(linksRedes [2].innerText);
// // Os links da navegação (só os links, não os elementos de lista):
// console.log(linksRedes [0].href);
// console.log(linksRedes [1].href);
// console.log(linksRedes [2].href);


// //Os 4 "Autor:" e "Data:" em negrito nos dois posts:
// const autores = document.querySelectorAll('.post-autor');
// console.log(autores);
// console.log(autores[0].innerText);
// console.log(autores[1].innerText);

// const datas = document.querySelectorAll('.post-data');
// console.log(datas);
// console.log(datas[0].innerText);
// console.log(datas[1].innerText);

// //_________________________________________________________//
let titulos = document.querySelectorAll('footer .lista_redes a');

function imprimirTodos(lista) {
     console.log(`A lista contém ${lista.length} elementos:`);
     for (let i = 0; i < titulos.length; i++){
         console.log(titulos[i].innerText);
         console.log(titulos[i].href);
     }
 }
 imprimirTodos(titulos);

