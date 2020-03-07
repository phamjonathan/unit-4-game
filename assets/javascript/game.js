$(document).ready(function() {

    var yourMatchingNumber = 0;
    var randomNum = randomNumGen();
    var wins = 0;
    var losses = 0;
    var crystals;

    function randomNumCrystals() {
        return {
            quartz: {
                points: Math.floor(math.random() * 15) + 2,
                imageUrl: "assets/images/quartz.jpg"
            },
            amethyst: {
                points: Math.floor(math.random() * 15) + 2,
                imageUrl: "assets/images/amethyst.jpg"
            },
            jade: {
                points: Math.floor(math.random() * 15) + 2,
                imageUrl: "assets/images/jade.jpg"
            },
            diamond: {
                points: Math.floor(math.random() * 15) + 2,
                imageUrl: "assets/images/diamond.jpg"
            }
        };
    }
    function randomNumGen() {
        return Math.floor(Math.random() * 100) + 20;
    }

    function setGame() {
        yourMatchingNumber = 0;
        crystals = randomNumCrystals();
        randomNum = randomNumGen();
        $("#random-area").empty();

        if (didUserWin === true ) {
            $("#win-area").append($("<p>").text("You Won!!"));
            setGame();
            renderMatchingNumber();
        }
        else if (didUserWin === false ) {
            $("#win-area").append($("<p>").text("You lost!!"));
            setGame();
            renderMatchingNumber();
        }
        var wSpan = $("<span>").text(wins);
        var lSpan = $("<span>").text(losses);
    
        var pWins = $("<p>").text("Wins: ");
        var pLosses = $("<p>").text("Losses: ");
    
        pWins.append(wSpan);
        pLosses.append(lSpan);
    
        $("#win-area").append(pWins);
        $("#win-area").append(pLosses);
    }
    function renderCrystals() {
        for (var key in crystals) {
          var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
          var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].imageUrl);
          crystalDiv.append(crystalImg);
          $("#crystal-area").append(crystalDiv);
        }
    }
    function updateMatchingNumber(crystal) {
        yourMatchingNumber += crystals[crystal.attr("data-name")].points;
    }
    function renderMatchingNumber() {
        var scoreNumDiv = $("<div id='score-number'>").text(yourMatchingNumber);
        $("#score-area").html();
        $("#score-area").html(scoreNumDiv);
    }
    setGame();
    updateDom();
    renderCrystals();
    renderMatchingNumber();

    $(".crystals-button").on("click", function(event) {
        updateMatchingNumber($(this));
        renderMatchingNumber();

        if (yourMatchingNumber === randomNum) {
            wins++;
            setGame();
            updateDom(true);
        }
        else if (yourMatchingNumber > randomNum ) {
            losses++;
            setGame();
            updateDom(false);
        }
    });
});