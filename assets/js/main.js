
// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.

// (trovate l’array del team all’interno della cartella in allegato)


// Bonus
// Rendere l’esercizio responsive, mandando a capo le card
// Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! :sorridere:)

console.log("ciao");

let team = [
    {
        image: "./assets/img/male1.png",
        name: "Marco Bianchi",
        job: "Designer",
        email: "marcobianchi@team.com"
    },
    {
        image: "./assets/img/female1.png",
        name: "Laura Rossi",
        job: "Front-end Developer",
        email: "laurarossi@team.com"
    },
    {
        image: "./assets/img/male2.png",
        name: "Giorgio Verdi",
        job: "Back-end Developer",
        email: "giorgioverdi@team.com"
    },
    {
        image: "./assets/img/female2.png",
        name: "Marta Ipsum",
        job: "SEO Specialist",
        email: "martaipsum@team.com"
    },
    {
        image: "./assets/img/male3.png",
        name: "Roberto Lorem",
        job: "SEO Specialist",
        email: "robertolorem@team.com"
    },
    {
        image: "./assets/img/female3.png",
        name: "Daniela Amet",
        job: "Analyst",
        email: "danielaamet@team.com"
    },
]

let employer = document.querySelector(".row")

for (let i = 0; i < team.length; i++) {
    let teamEl = team[i];
    console.log(teamEl);

    let markup = `
        <div class="col-12 col-md-6 col-lg-4 d-flex g-4">
            <div class="img_container"><img src="${teamEl.image}" alt="Marco">
            </div>
            <div class="info p-2">
                <h5>${teamEl.name}</h5>
                <p>${teamEl.job}</p>
                <a href="www.google.com">${teamEl.email}</a
            </div>
        </div>    
        `

        employer.insertAdjacentHTML("beforeend", markup)


}




