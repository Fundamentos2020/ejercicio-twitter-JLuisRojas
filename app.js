const listaTweets = document.getElementById("listaTweets");

// Event listeners
eventListeners();

function eventListeners() {
    // Cuando se envia el formulario
    document.getElementById("formulario").addEventListener("submit", agregarTweet);

    // Borrar tweets
    listaTweets.addEventListener("click", borrarTweet);

    // Contenido cargado
    document.addEventListener("DOMContentLoaded", localStorageListo);
}

// Funciones

function agregarTweet(e) {
    e.preventDefault();
    // Leer el valor del text area
    const text = document.getElementById("tweet").value;

    crearTweet(text);

    // Aniadir a Local Storage
    agregarTweetLocalStorage(text);
}

function crearTweet(text) {
    const tweet = document.createElement("div");
    tweet.classList.add("row", "p-3", "tweet_contendor", "bt");

    // Imagen del tweet
    const image = document.createElement("img");
    image.src = "https://picsum.photos/200/200";
    image.classList = "img-fluid";
    const tweetImage = document.createElement("div");
    tweetImage.classList = "col-2";
    tweetImage.appendChild(image);

    // Texto del tweet
    const tweetText = document.createElement("div");
    tweetText.classList.add("col-9", "p-2", "tweet_texto_c");
    tweetText.innerText = text;

    // Boton de borrar
    const tweetBorrar = document.createElement("div");
    tweetBorrar.classList = "col-1";
    const boton = document.createElement("button");
    boton.classList = "boton_borrar";
    boton.innerText = "X";
    tweetBorrar.appendChild(boton);

    tweet.appendChild(tweetImage);
    tweet.appendChild(tweetText);
    tweet.appendChild(tweetBorrar);

    listaTweets.appendChild(tweet);
}

function borrarTweet(e) {
    e.preventDefault();
    if(e.target.className === "boton_borrar") {
        var t = e.target.parentElement.parentElement.querySelector(".tweet_texto_c");
        console.log(t);
        e.target.parentElement.parentElement.remove();
        borrarTweetLocalStorage(t.innerText);
    }    
}

// Mostrar datos de local storage en la lista
function localStorageListo() {
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(tweet => {
        crearTweet(tweet);
    });
}

// Agrega tweet a local storage
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    // Aniadir el nuevo tweet
    tweets.push(tweet);
    // Convertir de string a arreglo para local storage
    localStorage.setItem("tweets", JSON.stringify(tweets));
}

// Obtiene los elementos del local storage
function obtenerTweetsLocalStorage() {
    let tweets;
    // Revisamos local storage
    if(localStorage.getItem("tweets") === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem("tweets"));
    }

    return tweets;
}

function borrarTweetLocalStorage(tweetBorrar) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index) {
        if(tweetBorrar === tweet) {
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem("tweets", JSON.stringify(tweets));
}
