const listaTweets = document.getElementById("listaTweets");

// Event listeners
eventListeners();

function eventListeners() {
    document.getElementById("formulario").addEventListener("submit", agregarTweet);
}

// Funciones

function agregarTweet(e) {
    e.preventDefault();
    // Leer el valor del text area
    const text = document.getElementById("tweet").value;

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
    tweetText.classList.add("col-9", "p-2");
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

    console.log(text);
}