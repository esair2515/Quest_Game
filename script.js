document.getElementById("nextButton").addEventListener("click", function() {
    startStory();
});

function startStory() {
    const storyText = "You find yourself in a dark forest. The trees tower above you, their leaves rustling in the wind. Ahead, you see a faint light flickering through the trees.";
    document.getElementById("story").textContent = storyText;
    document.getElementById("nextButton").textContent = "Continue";
}
