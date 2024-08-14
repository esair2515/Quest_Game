document.getElementById("nextButton").addEventListener("click", function() {
    startStory();
});

function startStory() {
    const storyText = "You find yourself in a dark forest. The trees tower above you, their leaves rustling in the wind. Ahead, you see a faint light flickering through the trees.";
    document.getElementById("story").textContent = storyText;

    const choice1 = document.createElement("button");
    choice1.textContent = "Investigate the light";
    choice1.onclick = function() { investigateLight(); };
    
    const choice2 = document.createElement("button");
    choice2.textContent = "Stay where you are";
    choice2.onclick = function() { stayWhereYouAre(); };

    const storyContainer = document.getElementById("story");
    storyContainer.appendChild(document.createElement("br"));
    storyContainer.appendChild(choice1);
    storyContainer.appendChild(choice2);

    document.getElementById("nextButton").style.display = "none";
}

function investigateLight() {
    const storyText = "You decide to investigate the light. As you approach, you realize it's coming from a lantern held by a mysterious figure.";
    updateStory(storyText);
}

function stayWhereYouAre() {
    const storyText = "You decide to stay where you are. The forest is eerily quiet, and you feel a chill run down your spine.";
    updateStory(storyText);
}

function updateStory(newText) {
    const storyContainer = document.getElementById("story");
    storyContainer.textContent = newText;

    const nextButton = document.createElement("button");
    nextButton.textContent = "Continue";
    nextButton.onclick = function() { startStory(); };

    storyContainer.appendChild(document.createElement("br"));
    storyContainer.appendChild(nextButton);
}
