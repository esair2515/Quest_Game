document.getElementById("nextButton").addEventListener("click", function() {
    startStory();
    playBackgroundMusic();
});

function startStory() {
    const storyText = "You find yourself in a dark forest. The trees tower above you, their leaves rustling in the wind. Ahead, you see a faint light flickering through the trees.";
    document.body.className = "dark-forest";
    updateStory(storyText, [
        { text: "Investigate the light", action: investigateLight },
        { text: "Stay where you are", action: stayWhereYouAre }
    ]);
}

function investigateLight() {
    const storyText = "You decide to investigate the light. As you approach, you realize it's coming from a lantern held by a mysterious figure.";
    document.body.className = "mysterious-figure";
    updateStory(storyText, [
        { text: "Talk to the figure", action: talkToFigure },
        { text: "Run away", action: runAway }
    ]);
}

function stayWhereYouAre() {
    const storyText = "You decide to stay where you are. The forest is eerily quiet, and you feel a chill run down your spine.";
    document.body.className = "dark-forest";
    updateStory(storyText, [
        { text: "Wait and see", action: waitAndSee },
        { text: "Shout for help", action: shoutForHelp }
    ]);
}

function talkToFigure() {
    const storyText = "The figure is friendly and offers you guidance out of the forest. You've found a friend!";
    document.body.className = "sunrise";
    endGame(storyText, "You reached a peaceful ending.");
}

function runAway() {
    const storyText = "You run as fast as you can, but you trip and fall. The darkness swallows you.";
    document.body.className = "lost";
    endGame(storyText, "You met an unfortunate end.");
}

function waitAndSee() {
    const storyText = "You wait patiently. Eventually, the sun rises, revealing a path out of the forest.";
    document.body.className = "sunrise";
    endGame(storyText, "You found your way out.");
}

function shoutForHelp() {
    const storyText = "You shout as loud as you can, but no one hears you. You're lost in the forest.";
    document.body.className = "lost";
    endGame(storyText, "You got lost and couldn't find your way out.");
}

function endGame(storyText, endingMessage) {
    const storyContainer = document.getElementById("story");

    // Fade out
    storyContainer.style.opacity = 0;
    setTimeout(function() {
        storyContainer.textContent = `${storyText} ${endingMessage}`;

        const restartButton = document.createElement("button");
        restartButton.textContent = "Restart Game";
        restartButton.className = "choice-button";
        restartButton.onclick = function() { startStory(); };

        storyContainer.appendChild(document.createElement("br"));
        storyContainer.appendChild(restartButton);

        // Fade in
        storyContainer.style.opacity = 1;
    }, 500);
}

function updateStory(newText, choices) {
    const storyContainer = document.getElementById("story");
    
    // Fade out
    storyContainer.style.opacity = 0;
    setTimeout(function() {
        storyContainer.textContent = newText;
        choices.forEach(choice => {
            const choiceButton = document.createElement("button");
            choiceButton.textContent = choice.text;
            choiceButton.className = "choice-button";
            choiceButton.onclick = choice.action;
            storyContainer.appendChild(document.createElement("br"));
            storyContainer.appendChild(choiceButton);
        });

        // Fade in
        storyContainer.style.opacity = 1;
    }, 500);
}

function playBackgroundMusic() {
    const backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.play();
}

FOUR======================================================================================================================================================================================================
NA
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
NA
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let inventory = [];

document.getElementById("nextButton").addEventListener("click", function() {
    startStory();
    playBackgroundMusic();
});

function startStory() {
    inventory = []; // Reset inventory at the start of the game
    const storyText = "You find yourself in a dark forest. The trees tower above you, their leaves rustling in the wind. Ahead, you see a faint light flickering through the trees.";
    document.body.className = "dark-forest";
    updateStory(storyText, [
        { text: "Investigate the light", action: investigateLight },
        { text: "Stay where you are", action: stayWhereYouAre }
    ]);
}

function investigateLight() {
    const storyText = "You decide to investigate the light. As you approach, you realize it's coming from a lantern held by a mysterious figure.";
    document.body.className = "mysterious-figure";
    updateStory(storyText, [
        { text: "Talk to the figure", action: talkToFigure },
        { text: "Run away", action: runAway }
    ]);
}

function stayWhereYouAre() {
    const storyText = "You decide to stay where you are. The forest is eerily quiet, and you feel a chill run down your spine.";
    document.body.className = "dark-forest";
    updateStory(storyText, [
        { text: "Wait and see", action: waitAndSee },
        { text: "Shout for help", action: shoutForHelp }
    ]);
}

function talkToFigure() {
    inventory.push("Lantern"); // Add lantern to inventory
    const storyText = "The figure is friendly and offers you a lantern to help you navigate the forest.";
    document.body.className = "sunrise";
    updateStory(storyText, [
        { text: "Thank the figure and continue", action: continueWithLantern }
    ]);
}

function continueWithLantern() {
    const storyText = "With the lantern lighting your way, you feel more confident as you continue through the forest.";
    document.body.className = "sunrise";
    updateStory(storyText, [
        { text: "Move forward", action: encounterWolf }
    ]);
}

function encounterWolf() {
    const storyText = "You encounter a wolf blocking your path. It seems aggressive.";
    document.body.className = "lost";
    
    if (inventory.includes("Lantern")) {
        updateStory(storyText, [
            { text: "Use the lantern to scare the wolf away", action: scareWolfWithLantern },
            { text: "Run away", action: runAway }
        ]);
    } else {
        updateStory(storyText, [
            { text: "Try to scare the wolf", action: scareWolfWithoutLantern },
            { text: "Run away", action: runAway }
        ]);
    }
}

function scareWolfWithLantern() {
    const storyText = "You shine the lantern at the wolf, and it runs away. You've safely passed through the forest.";
    endGame(storyText, "You reached a safe ending.");
}

function scareWolfWithoutLantern() {
    const storyText = "You try to scare the wolf, but it doesn't back down. It attacks you, and you meet a tragic end.";
    endGame(storyText, "You met an unfortunate end.");
}

function runAway() {
    const storyText = "You run as fast as you can, but you trip and fall. The darkness swallows you.";
    document.body.className = "lost";
    endGame(storyText, "You met an unfortunate end.");
}

function waitAndSee() {
    const storyText = "You wait patiently. Eventually, the sun rises, revealing a path out of the forest.";
    document.body.className = "sunrise";
    endGame(storyText, "You found your way out.");
}

function shoutForHelp() {
    const storyText = "You shout as loud as you can, but no one hears you. You're lost in the forest.";
    document.body.className = "lost";
    endGame(storyText, "You got lost and couldn't find your way out.");
}

function endGame(storyText, endingMessage) {
    const storyContainer = document.getElementById("story");

    // Fade out
    storyContainer.style.opacity = 0;
    setTimeout(function() {
        storyContainer.textContent = `${storyText} ${endingMessage}`;

        const restartButton = document.createElement("button");
        restartButton.textContent = "Restart Game";
        restartButton.className = "choice-button";
        restartButton.onclick = function() { startStory(); };

        storyContainer.appendChild(document.createElement("br"));
        storyContainer.appendChild(restartButton);

        // Fade in
        storyContainer.style.opacity = 1;
    }, 500);
}

function updateStory(newText, choices) {
    const storyContainer = document.getElementById("story");
    
    // Fade out
    storyContainer.style.opacity = 0;
    setTimeout(function() {
        storyContainer.textContent = newText;
        choices.forEach(choice => {
            const choiceButton = document.createElement("button");
            choiceButton.textContent = choice.text;
            choiceButton.className = "choice-button";
            choiceButton.onclick = choice.action;
            storyContainer.appendChild(document.createElement("br"));
            storyContainer.appendChild(choiceButton);
        });

        // Fade in
        storyContainer.style.opacity = 1;
    }, 500);
}

function playBackgroundMusic() {
    const backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.play();
}
