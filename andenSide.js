//DOM sikrer at koden kører efter at HTML er indlæst 
document.addEventListener("DOMContentLoaded", function () {
    //Array m. citater
    const quotes = [
        "Folk skal bare hærde sig lidt!",
        "Måske er det en god ting, at vi er mere bevidste om vores ord?",
        "Jeg siger, hvad jeg vil, og hvis du bliver sur, er det ikke mit problem."
    ];

    const newQuotes = [
        "Haha, Greta Thunberg slapper lige lidt af!",
        "Vi har større problemer, lad os fokusere på økonomien.",
        "Videnskaben viser, at klimaforandringerne er menneskeskabte. Vi må handle nu.",
    ];
    //henter fra HTML-siden
    const container = document.getElementById("quotes-container");

     //Laver en div for hvert citat - Loop
     quotes.forEach((quote, index) => {
        const div = document.createElement("div");
        div.className = "quote-box";
        div.id = `quote${index + 2}`;
        div.innerText = quote;
        div.addEventListener("click", function () {
            //if else funktion til at tjekke om svaret er korrekt
            if (quote === "Måske er det en god ting, at vi er mere bevidste om vores ord?" || quote === "Videnskaben viser, at klimaforandringerne er menneskeskabte. Vi må handle nu.") {
                window.location.href = "3dodge.html"; // Navigerer til næste side
            } else {
                showNewQuotes();
            }
        });
        container.appendChild(div);
    });

    //skifter citaterne ud, hvis svaret er forkert- Function
    function showNewQuotes() {
        container.innerHTML = ''; // Tøm containeren så man ikke kan se de forrige citater

        // Tilføjer quotes2-container øverst
        const quotes2Container = document.createElement("div");
        quotes2Container.id = "quotes2-container";
        quotes2Container.innerHTML = `
            <div class="quotes-box">
                <h2>"Folk overdriver problemet med klimaændringer. Det har jo altid været varmt om sommeren!"</h2>
            </div>
        `;
        container.appendChild(quotes2Container); //gør det muligt at se citatet på siden

        // Tilføjer nye citater og er en forEach loop. Den skaber en ny div ved hvert citat
         //Hjælp fra Copilot
        newQuotes.forEach((newQuote, index) => {
            const newDiv = document.createElement("div"); 
            newDiv.className = "quote-box"; //Så den kan styles i CSS
            if (newQuote === "Folk overdriver problemet med klimaændringer. Det har jo altid været varmt om sommeren!") {
                newDiv.innerHTML = `<strong>${newQuote}</strong>`; // gør at H2 skrives i tyk skrift
                newDiv.style.pointerEvents = "none"; // Gør den IKKE klikbar som de andre citater //Hjælp fra Copilot
            } else {
                newDiv.innerText = newQuote;
                newDiv.addEventListener("click", function () {
                    if (newQuote === "Videnskaben viser, at klimaforandringerne er menneskeskabte. Vi må handle nu.") {
                        window.location.href = "3dodge.html"; // Navigerer til næste side
                    }
                });
            }
            container.appendChild(newDiv);  
        });
    }
});