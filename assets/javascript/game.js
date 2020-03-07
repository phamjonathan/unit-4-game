$(document).ready(function) {
    var yourMatchingNUmber = 0;
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
        }
    }
}