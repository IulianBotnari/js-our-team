
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



for (let i = 0; i < team.length; i++) {
    let teamEl = team[i];
    console.log(teamEl);

    let markup = `
            <div class="img_container"><img src="${teamEL.image}" alt="Marco">
            </div>
            <div class="info p-2">
                <h5>${teamEL.name}</h5>
                <p>${teamEL.job}</p>
                <a href="www.google.com">${teamEL.email}</a>
            </div>
    `


}




