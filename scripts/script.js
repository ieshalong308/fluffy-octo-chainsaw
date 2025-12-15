$(function () {
    console.log("document is ready!");

    // 1. MAKE THE PICTURE DRAGGABLE
    $("#meme-pic").draggable({
        containment: "#containment-wrapper",
        scroll: false,
        drag: function () {
            calculateWow(); // live scoring as the user drags
        },
        stop: function () {
            calculateWow(); // final update
        }
    });

    // 2. SCORE CALCULATION
    function calculateWow() {
        var pos = $("#meme-pic").position();
        // score value based on the picture location
        var score = Math.floor(pos.top + pos.left);
        console.log(score);

        // Display score
        $("#score-display").text(score);

        // Progress bar (max 1000)
        var percent = Math.min((score / 1000) * 100, 100);
        $("#score-progress").css("width", percent + "%");

        // Special Actions: Change background dynamically
        var pinkLevel = Math.min(score / 5, 255);
        $("body").css(
            "background",
            `rgb(255, ${200 - pinkLevel}, ${220 - pinkLevel})`
        );

            // SPECIAL ACTIONS AT MAX SCORE
            $("#containment-wrapper").addClass("win-glow"); // glow effect
            $("#meme-pic").draggable("disable"); // lock image
        }
    }
);
