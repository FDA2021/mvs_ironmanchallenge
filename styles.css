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

let chosenCharacters = [];

document.getElementById("generate-button").addEventListener("click", function() {
    // Pick a random character from the array that hasn't been chosen yet
    let unchosenCharacters = characters.filter(character => !chosenCharacters.includes(character));
    
    if (unchosenCharacters.length === 0) {
        alert("All characters have been used!");
        return;
    }

    const randomCharacter = unchosenCharacters[Math.floor(Math.random() * unchosenCharacters.length)];
    
    // Mark character as chosen
    chosenCharacters.push(randomCharacter);

    // Update the UI with the selected character
    document.getElementById("character-name").textContent = randomCharacter.name;
    document.getElementById("character-description").textContent = randomCharacter.description;
    document.getElementById("character-image").src = randomCharacter.image;

    updateCharacterGallery();
});

function updateCharacterGallery() {
    const galleryContainer = document.getElementById("gallery-container");
    galleryContainer.innerHTML = "";  // Clear current gallery

    characters.forEach(character => {
        const characterDiv = document.createElement("div");
        characterDiv.classList.add("character-item");
        
        if (chosenCharacters.includes(character)) {
            characterDiv.classList.add("chosen");
        } else {
            characterDiv.classList.add("unchosen");
        }

        const img = document.createElement("img");
        img.src = character.image;
        img.alt = character.name;

        characterDiv.appendChild(img);
        galleryContainer.appendChild(characterDiv);
    });
}

// Initial gallery load
updateCharacterGallery();
