// Character data array
const characters = [
    { name: "Agent Smith", image: "images/Agent-smith-lg.png", description: "Agent Smith is a formidable agent of the Matrix, capable of manipulating the digital world." },
    { name: "Arya Stark", image: "images/Arya_Stark_Portrait.png.png", description: "Arya Stark uses her agility and speed to defeat her enemies." },
    { name: "Batman", image: "images/Batman_Portrait_Full.png", description: "Batman is a skilled fighter with gadgets and stealth." },
    { name: "Banana Guard", image: "images/Banana-guard.png", description: "Banana Guard is a goofy yet tough character who will defend with all his might." },
    { name: "Betelgeuse", image: "images/Betelgeuse.png", description: "Betelgeuse brings chaos and mischief with his unpredictable powers." },
    { name: "Black Adam", image: "images/Black_Adam_Alternative_2.png", description: "Black Adam is a powerhouse with devastating electrical attacks." },
    { name: "Bugs Bunny", image: "images/Bugs_Bunny_Portrait_Full.png", description: "Bugs Bunny uses his wit and gadgets to outsmart opponents." },
    { name: "Finn the Human", image: "images/Finn_the_Human_Portrait_Full.png", description: "Finn is a versatile fighter with a variety of attacks and abilities." },
    { name: "Garnet", image: "images/Garnet_Portrait_Full.png", description: "Garnet is a tank with a mix of powerful fists and protective abilities." },
    { name: "Gizmo", image: "images/Gizmo.png", description: "Gizmo is a small, but resourceful fighter who uses gadgets to his advantage." },
    { name: "Harley Quinn", image: "images/Harley_Quinn_Portrait_Full.png", description: "Harley Quinn is unpredictable, using explosive gadgets and acrobatics." },
    { name: "Iron Giant", image: "images/RosterArt_IronGiant_Skin_Hero.png", description: "The Iron Giant is a massive tank with powerful attacks and defense." },
    { name: "Jake the Dog", image: "images/Jake_the_Dog_Portrait_Full.png", description: "Jake is a shapeshifting dog who can stretch and bend to his advantage." },
    { name: "Jason Voorhees", image: "images/Jason_Voorhees_Multiversus.png", description: "Jason Voorhees brings terror with his brutal attacks and relentless pursuit." },
    { name: "The Joker", image: "images/The_Joker_MV.png", description: "The Joker is chaotic, unpredictable, and always ready with a laugh." },
    { name: "LeBron James", image: "images/LeBron_Full_Portrait.png", description: "LeBron James is a versatile fighter with basketball-themed abilities." },
    { name: "Marvin the Martian", image: "images/Marvin.png", description: "Marvin uses his advanced technology to control the battlefield." },
    { name: "Morty Smith", image: "images/Morty_MV.png", description: "Morty is an unpredictable and awkward fighter with strange attacks." },
    { name: "Nubia", image: "images/Nubia.png", description: "Nubia, a fierce Amazonian warrior, fights with power and precision." },
    { name: "Powerpuff Girls", image: "images/The_Powerpuff_Girls.png", description: "The Powerpuff Girls bring combined strength and teamwork into the fight." },
    { name: "Raven", image: "images/Raven.png", description: "Raven uses her dark powers to manipulate the battlefield." },
    { name: "Reindog", image: "images/Reindog_Portrait_Full.png", description: "Reindog is a supportive fighter who uses magic to help allies." },
    { name: "Rick Sanchez", image: "images/Rick_MV.png", description: "Rick uses his science skills and gadgets to manipulate the battlefield." },
    { name: "Samurai Jack", image: "images/Samurai_Jack_Render.png", description: "Samurai Jack fights with precision and discipline, mastering the sword and martial arts." },
    { name: "Shaggy", image: "images/Shaggy_Portrait_Full.png", description: "Shaggy is a powerful fighter with crazy strength." },
    { name: "Steven Universe", image: "images/Steven_Universe_Portrait_Full.png", description: "Steven Universe is a supportive fighter, using healing powers and shields." },
    { name: "Stripe", image: "images/Stripe.png", description: "Stripe is a relentless, wild character that uses brute strength to win." },
    { name: "Superman", image: "images/Superman_Portrait_Full.png", description: "Superman has super strength, flight, and heat vision." },
    { name: "Taz", image: "images/Taz_Portrait_Full.png", description: "Taz is a wild and ferocious fighter, spinning his way to victory." },
    { name: "Tom and Jerry", image: "images/Tom_and_Jerry_Portrait_Full.png", description: "Tom and Jerry work together with their chaotic antics to attack enemies." },
    { name: "Velma", image: "images/Velma_Portrait_Full.png", description: "Velma uses her intelligence and gadgets to support teammates." },
    { name: "Wonder Woman", image: "images/Wonder_Woman_Portrait_Full.png", description: "Wonder Woman is a balanced fighter with powerful combat skills." },
];

// Retrieve selected characters from localStorage (or an empty array if none)
let selectedCharacters = JSON.parse(localStorage.getItem('selectedCharacters')) || [];

// Function to generate a random character
function generateRandomCharacter() {
    const availableCharacters = characters.filter(character => selectedCharacters.includes(character.name));

    if (availableCharacters.length === 0) {
        alert('No characters selected! Please click on some characters to select them.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    const randomCharacter = availableCharacters[randomIndex];

    // Display the random character info
    document.getElementById("character-name").innerText = randomCharacter.name;
    document.getElementById("character-description").innerText = randomCharacter.description;
    document.getElementById("character-image").src = randomCharacter.image;

    // Deselect the character after being randomly chosen (stop glowing)
    selectedCharacters = selectedCharacters.filter(name => name !== randomCharacter.name);
    localStorage.setItem('selectedCharacters', JSON.stringify(selectedCharacters)); // Save the updated state to localStorage
    renderCharacterGallery(); // Re-render the gallery to reflect the new state
}

// Render the character gallery
function renderCharacterGallery() {
    const galleryContainer = document.getElementById("gallery-container");
    galleryContainer.innerHTML = '';  // Clear the existing gallery before re-rendering

    let hasVisibleCharacters = false;

    characters.forEach((character) => {
        const characterDiv = document.createElement("div");
        characterDiv.classList.add("character");

        // If the character is selected, apply the "clicked" class (glow effect)
        if (selectedCharacters.includes(character.name)) {
            characterDiv.classList.add("clicked");
        }

        characterDiv.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
        `;
        galleryContainer.appendChild(characterDiv);

        // Toggle selection on click
        characterDiv.addEventListener("click", function () {
            if (characterDiv.classList.contains("clicked")) {
                characterDiv.classList.remove("clicked");
                // Deselect character
                selectedCharacters = selectedCharacters.filter(name => name !== character.name);
            } else {
                characterDiv.classList.add("clicked");
                // Select character
                selectedCharacters.push(character.name);
            }

            // Save updated selected characters in localStorage
            localStorage.setItem('selectedCharacters', JSON.stringify(selectedCharacters));
        });

        // Check if the gallery has visible characters
        if (selectedCharacters.includes(character.name)) {
            hasVisibleCharacters = true;
        }
    });

    // Set default message when no character is selected and the gallery is empty
    const characterNameElement = document.getElementById("character-name");
    const characterDescriptionElement = document.getElementById("character-description");
    const characterImageElement = document.getElementById("character-image");

    if (selectedCharacters.length === 0 || !hasVisibleCharacters) {
        characterNameElement.innerText = "COMPLETE";
        characterDescriptionElement.innerText = "Reset your characters to try again!";
        characterImageElement.style.display = "none"; // Hide the image if no fighter is selected
    } else {
        characterImageElement.style.display = "block"; // Show the image if a character is selected
    }
}

// Reset all character selections (select all characters and save state)
document.getElementById("reset-btn").addEventListener("click", function () {
    selectedCharacters = characters.map(c => c.name); // Select all characters by their names
    localStorage.setItem('selectedCharacters', JSON.stringify(selectedCharacters)); // Save to localStorage
    renderCharacterGallery(); // Re-render the gallery with updated state
});

// Initialize the page on load
document.addEventListener("DOMContentLoaded", function () {
    renderCharacterGallery();
    document.getElementById("generate-btn").addEventListener("click", generateRandomCharacter);
});
