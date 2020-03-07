# unit-4-game
jquery.min.js:2 jQuery.Deferred exception: math is not defined ReferenceError: math is not defined
    at randomNumCrystals (file:///Users/jonathanpham/Documents/GitHub/Homework/unit-4-game/assets/javascript/game.js:12:36)
    at setGame (file:///Users/jonathanpham/Documents/GitHub/Homework/unit-4-game/assets/javascript/game.js:35:20)
    at HTMLDocument.<anonymous> (file:///Users/jonathanpham/Documents/GitHub/Homework/unit-4-game/assets/javascript/game.js:77:5)
    at j (https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js:2:29999)
    at k (https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js:2:30313) undefined
r.Deferred.exceptionHook @ jquery.min.js:2
k @ jquery.min.js:2
setTimeout (async)
(anonymous) @ jquery.min.js:2
i @ jquery.min.js:2
fireWith @ jquery.min.js:2
fire @ jquery.min.js:2
i @ jquery.min.js:2
fireWith @ jquery.min.js:2
ready @ jquery.min.js:2
S @ jquery.min.js:3
jquery.min.js:2 Uncaught ReferenceError: math is not defined
    at randomNumCrystals (game.js:12)
    at setGame (game.js:35)
    at HTMLDocument.<anonymous> (game.js:77)
    at j (jquery.min.js:2)
    at k (jquery.min.js:2)

So after debugging I noticed that the linkage was not correlating well.
Wasn't the styling nor the index.html
in lines 2 randomNumGen(); isn't defined - which immediatley breaks the rest of code as shown above
lines 12:36
lines 35:20
lines 77:5

Bottom line is make sure the syntax is properly initated at the very beginning to prevent this from happening.

(document).ready(function() {
​
    var yourMatchingNumber = 0;
    var randomNum = randomNumGen();
    var wins = 0;
    var losses = 0;
    var crystals;
​
    function randomNumCrystals() {
        return {
            quartz: {
                points: Math.floor(math.random() * 12) + 1,
                imageUrl: ""
            },
            amethyst: {
                points: Math.floor(math.random() * 12) + 1,
                imageUrl: ""
            },
            jade: {
                points: Math.floor(math.random() * 12) + 1,
                imageUrl: ""
            },
            diamond: {
                points: Math.floor(math.random() * 12) + 1,
                imageUrl: ""
            }
        };
    }
    function randomNumGen() {
        return Math.floor(Math.random() * 100) + 20;
    }
​
    function setGame() {
        yourMatchingNumber = 0;
        crystals = randomNumCrystals();
        randomNum = randomNumGen();
        $("#random-area").empty();
​
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
​
    $(".crystals-button").on("click", function(event) {
        updateMatchingNumber($(this));
        renderMatchingNumber();
​
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