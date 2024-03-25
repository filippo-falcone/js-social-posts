/*
// Creo una funzione che genera i post e la richiamo in un ciclo forEach
// Cambio i valori della funzione con le chiavi del mio array di dati
// Richiamo tutti gli elementi del dom con classe 'js-like-button' e tutti quelli con la classe 'js-likes-counter'
// Per ogni post aggiungo la classe 'like-button--liked' e incremento il counter like di 1
// Salvo il contenuto della chiave id in un array vuoto

// BONUS

// Creo un array con split per la chiave created
// Decoscruisto l'array e inserisco le constanti nel formato corretto
// Attraverso un operatore ternario gestisco l'immagine profilo
// Se author.image esiste stampo l'immagine altrimenti aggiungo la classe 'profile-pic-default'
*/

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const postsContainer = document.querySelector('#container');
posts.forEach((post) => {
    postsContainer.innerHTML += generatePost(post);
});

const allLikeBtn = document.querySelectorAll('.js-like-button');
const allLikeCounter = document.querySelectorAll('.js-likes-counter');
const likedIdArray = [];
allLikeBtn.forEach((likeBtn, index) => {
    likeBtn.addEventListener('click', function () {
        likeBtn.classList.add('like-button--liked');
        const thisLikeCounter = allLikeCounter[index];
        parseInt(thisLikeCounter.textContent++);
        likedIdArray.push(posts[index].id);
    });
});

/* FUCTIONS */
// Funzione che genera i post
// post: elemento che rappresenta l'oggetto
// return: elemento del dom che rappresenta un post
function generatePost(post) {
    const { id, content, media, author, likes, created } = post;
    const createdArray = created.split('-');
    const [year, month, day] = createdArray;
    const newPost = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        ${setProfilePic(author.image)}                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${author.name}</div>
                        <div class="post-meta__time">${day}-${month}-${year}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src="${media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button js-like-button" href="#" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `;
    return newPost;
}

// Funzione che gestisce l'immagine del profilo
// image: chiave dell'oggetto author
// return: profilePic elemento del dom che rappresenta l'immagine del profilo
function setProfilePic(authorImage) {
    const profilePic = authorImage ? `<img class="profile-pic" src="${authorImage}" alt="Phil Mangione">` : `<span class="profile-pic-default">LF</span>`;
    return profilePic;
}