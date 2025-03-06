document.addEventListener("DOMContentLoaded", function () {
    const avatar = document.getElementById("avatar");
    const spilContainer = document.getElementById("spil-container");
    let avatarX = 175;
    const speed = 20;
    let gameOver = false;

    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft" && avatarX > 0) {
            avatarX -= speed;
        }
        if (event.key === "ArrowRight" && avatarX < spilContainer.clientWidth - avatar.clientWidth) {
            avatarX += speed;
        }
        avatar.style.left = avatarX + "px";
    });

    // Funktion til at lave et nyt tweet
    function createTweet() {
        if (gameOver) return;

        const tweet = document.createElement("div");
        tweet.className = "tweet"; // Skal styles i CSS
        tweet.innerText = getRandomTweet();
        tweet.style.left = Math.random() * (spilContainer.clientWidth - 150) + "px"; //Sikrer at tweets ikke starter uden for boksen
        tweet.style.top = "0px"; //Starter fra toppen 
        spilContainer.appendChild(tweet); //tilføjer tweet til spilContainer

        moveTweet(tweet); //Kalder funktionen og starter tweet bevægelse
    }

    // Funktion til at få et tilfældigt tweet
    function getRandomTweet() {
        //Array
        const tweets = [
            "Hot take: Pineapple DOES belong on pizza! 🍍🍕",
            "AI kommer til at tage alle vores jobs 😱",
            "Jeg synes faktisk, at Twitter var bedre før Elon Musk 😬",
            "Måske skulle vi alle bare logge af internettet...",
            "Klimaændringer er ikke så slemme, vel? 😏",
            "Vi stemmer på Trump, ik?",
                ];
        return tweets[Math.floor(Math.random() * tweets.length)]; //skal hente random tweet fra array
    }

    // Funktion til at få tweets til at falde nedad
    function moveTweet(tweet) {
        let tweetY = 0; //starter fra toppen - y-aksen
        tweet.style.position = "absolute"; // Sikrer at tweets kan bevæge sig nedad - Position
        const interval = setInterval(() => {
           //Tjekker om spillet er slut- Hvis gameOver er true, så stopper tweets - clearInterval
            if (gameOver) {
                clearInterval(interval);
                return;
            }
        
            tweetY += 5; //Flytter tweet nedad ved at øge med 5 px 
            tweet.style.top = tweetY + "px";   //opdaterer tweetets position i browseren

            // Tjekker om avataren rammer tweet
            if (isColliding(tweet, avatar)) { //stopper tweet bevæegelse 
                clearInterval(interval);
                gameOver = true;
                alert("Game Over! Du blev ramt af et tweet! 😵");
                window.location.href = "andenside.html";
            }
            // Fjern tweet, hvis det ryger ud af skærmen
            if (tweetY > spilContainer.clientHeight) {
                clearInterval(interval); //stopper tweet bevæeglse 
                tweet.remove();
            }
        }, 50);
    }

// Kollision og buffer
function isColliding(tweet, avatar) {
    const tweetRect = tweet.getBoundingClientRect();
    const avatarRect = avatar.getBoundingClientRect();

    const buffer = 17; //  Bufferstørrelsen 

    return !(
        tweetRect.top > avatarRect.bottom - buffer ||
        tweetRect.bottom < avatarRect.top + buffer ||
        tweetRect.left > avatarRect.right - buffer ||
        tweetRect.right < avatarRect.left + buffer
    );
}

// Tweet speed
setInterval(createTweet, 2300);
});
