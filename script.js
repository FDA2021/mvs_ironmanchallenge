const characters = [
    {
        name: "Batman",
        image: "https://link-to-batman-image.jpg", // Replace with actual image link
        description: "Batman is a skilled fighter with gadgets and stealth.",
    },
    {
        name: "Superman",
        image: "https://link-to-superman-image.jpg", // Replace with actual image link
        description: "Superman has super strength, flight, and heat vision.",
    },
    {
        name: "Shaggy",
        image: "https://link-to-shaggy-image.jpg", // Replace with actual image link
        description: "Shaggy is a powerful fighter with crazy strength.",
    },
    // Add more characters as needed...
];
document.getElementById("generate-button").addEventListener("click", function() {
    // Pick a random character from the array
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    
    // Update the UI with the selected character
    document.getElementById("character-name").textContent = randomCharacter.name;
    document.getElementById("character-description").textContent = randomCharacter.description;
    document.getElementById("character-image").src = randomCharacter.image;
});
