let inventory = [];
let currentStoryPoint = "";

document.getElementById("nextButton").addEventListener("click", function() {
    startStory();
    playBackgroundMusic();
});

function startStory() {
    inventory = []; // Reset inventory at the start of the game
    currentStoryPoint = "start";
    const storyText = "You find yourself in a dark forest. The trees tower above you, their leaves rustling in the wind. Ahead, you see a faint light flickering through the trees.";
    document.body.className = "dark-forest";
    updateStory(storyText, [
        { text: "Investigate the light", action: investigateLight },
        { text: "Stay where you are", action: stayWhereYouAre }
    ]);
}

function investigateLight() {
    currentStoryPoint = "investigateLight";
    inventory.push("Lantern"); // Add lantern to inventory
    const storyText = "You decide to investigate the light. As you approach, you realize it's coming from a lantern held by a mysterious figure.";
    document.body.className = "mysterious-figure";
    updateStory(storyText, [
        { text: "Talk to the figure", action: talkToFigure },
        { text: "Run away", action: runAway }
    ]);
}

function talkToFigure() {
    currentStoryPoint = "talkToFigure";
    const storyText = "The figure is friendly and offers you guidance out of the forest.";
    document.body.className = "sunrise";
    updateStory(storyText, [
        { text: "Continue", action: continueWithLantern }
    ]);
}

function continueWithLantern() {
    currentStoryPoint = "continueWithLantern";
    const storyText = "With the lantern lighting your way, you feel more confident as you continue through the forest.";
    document.body.className = "sunrise";
    updateStory(storyText, [
        { text: "Move forward", action: encounterWolf }
    ]);
}

function encounterWolf() {
    currentStoryPoint = "encounterWolf";
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
    currentStoryPoint = "scareWolfWithLantern";
    const storyText = "You shine the lantern at the wolf, and it runs away. You've safely passed through the forest.";
    endGame(storyText, "You reached a safe ending.");
}

function scareWolfWithoutLantern() {
    currentStoryPoint = "scareWolfWithoutLantern";
    const storyText = "You try to scare the wolf, but it doesn't back down. It attacks you, and you meet a tragic end.";
    endGame(storyText, "You met an unfortunate end.");
}

function runAway() {
    currentStoryPoint = "runAway";
    const storyText = "You run as fast as you can, but you trip and fall. The darkness swallows you.";
    document.body.className = "lost";
    endGame(storyText, "You met an unfortunate end.");
}

function stayWhereYouAre() {
    currentStoryPoint = "stayWhereYouAre";
    const storyText = "You decide to stay where you are. The forest is eerily quiet, and you feel a chill run down your spine.";
    document.body.className = "dark-forest";
    updateStory(storyText, [
        { text: "Wait and see", action: waitAndSee },
        { text: "Shout for help", action: shoutForHelp }
    ]);
}

function waitAndSee() {
    currentStoryPoint = "waitAndSee";
    const storyText = "You wait patiently. Eventually, the sun rises, revealing a path out of the forest.";
    document.body.className = "sunrise";
    endGame(storyText, "You found your way out.");
}

function shoutForHelp() {
    currentStoryPoint = "shoutForHelp";
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

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save Progress";
        saveButton.className = "choice-button";
        saveButton.onclick = function() { saveGame(); };

        const loadButton = document.createElement("button");
        loadButton.textContent = "Load Progress";
        loadButton.className = "choice-button";
        loadButton.onclick = function() { loadGame(); };

        storyContainer.appendChild(document.createElement("br"));
        storyContainer.appendChild(restartButton);
        storyContainer.appendChild(saveButton);
        storyContainer.appendChild(loadButton);

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

function saveGame() {
    localStorage.setItem("inventory", JSON.stringify(inventory));
    localStorage.setItem("currentStoryPoint", currentStoryPoint);
    alert("Game progress saved!");
}

function loadGame() {
    const savedInventory = localStorage.getItem("inventory");
    const savedStoryPoint = localStorage.getItem("currentStoryPoint");

    if (savedInventory && savedStoryPoint) {
        inventory = JSON.parse(savedInventory);
        currentStoryPoint = savedStoryPoint;
        loadStoryPoint();
    } else {
        alert("No saved progress found.");
    }
}

function loadStoryPoint() {
    switch (currentStoryPoint) {
        case "investigateLight":
            investigateLight();
            break;
        case "talkToFigure":
            talkToFigure();
            break;
        case "continueWithLantern":
            continueWithLantern();
            break;
        case "encounterWolf":
            encounterWolf();
            break;
        case "scareWolfWithLantern":
            scareWolfWithLantern();
            break;
        case "scareWolfWithoutLantern":
            scareWolfWithoutLantern();
            break;
        case "runAway":
            runAway();
            break;
        case "stayWhereYouAre":
            stayWhereYouAre();
            break;
        case "waitAndSee":
            waitAndSee();
            break;
        case "shoutForHelp":
            shoutForHelp();
            break;
        default:
            startStory();
    }
}

function playBackgroundMusic() {
    const backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.play();
}
