//Structure d'un fetch
// fetch(("mon-lien-api.com")
// .then((res) => res.json())
// .then((data) => console.log(data));


// Avant de fetch => controler si le lien renvoie les données dans le navigateur 
function getQuote() {

    fetch("https://api.quotable.io/random")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            document.body.innerHTML = `
        <div class="quote">
        <h3>${data.content}</h3>
        <h4>${data.author}</h4>
        </div>
        `;



        });
}
getQuote();

document.body.addEventListener("click", getQuote);
