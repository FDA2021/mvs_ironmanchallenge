// Character data array, including the new characters added in re-release
const characters = [
    {
        name: "Batman",
        image: "https://static.wikia.nocookie.net/multiversus/images/9/95/Batman_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174359",
        description: "Batman is a skilled fighter with gadgets and stealth.",
    },
    {
        name: "Superman",
        image: "https://static.wikia.nocookie.net/multiversus/images/5/55/Superman_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174432",
        description: "Superman has super strength, flight, and heat vision.",
    },
    {
        name: "Shaggy",
        image: "https://static.wikia.nocookie.net/multiversus/images/c/c9/Shaggy_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174454",
        description: "Shaggy is a powerful fighter with crazy strength.",
    },
    {
        name: "Bugs Bunny",
        image: "https://static.wikia.nocookie.net/multiversus/images/a/a9/Bugs_Bunny_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174516",
        description: "Bugs Bunny uses his wit and gadgets to outsmart opponents.",
    },
    {
        name: "Wonder Woman",
        image: "https://static.wikia.nocookie.net/multiversus/images/9/97/Wonder_Woman_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174535",
        description: "Wonder Woman is a balanced fighter with powerful combat skills.",
    },
    {
        name: "Arya Stark",
        image: "https://static.wikia.nocookie.net/multiversus/images/0/0d/Arya_Stark_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174553",
        description: "Arya Stark uses her agility and speed to defeat her enemies.",
    },
    {
        name: "Finn the Human",
        image: "https://static.wikia.nocookie.net/multiversus/images/4/4e/Finn_the_Human_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174608",
        description: "Finn is a versatile fighter with a variety of attacks and abilities.",
    },
    {
        name: "Jake the Dog",
        image: "https://static.wikia.nocookie.net/multiversus/images/7/77/Jake_the_Dog_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174629",
        description: "Jake is a shapeshifting dog who can stretch and bend to his advantage.",
    },
    {
        name: "Tom and Jerry",
        image: "https://static.wikia.nocookie.net/multiversus/images/4/47/Tom_and_Jerry_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174644",
        description: "Tom and Jerry work together with their chaotic antics to attack enemies.",
    },
    {
        name: "Harley Quinn",
        image: "https://static.wikia.nocookie.net/multiversus/images/c/cd/Harley_Quinn_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174657",
        description: "Harley Quinn is unpredictable, using explosive gadgets and acrobatics.",
    },
    {
        name: "Reindog",
        image: "https://static.wikia.nocookie.net/multiversus/images/1/17/Reindog_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174710",
        description: "Reindog is a supportive fighter who uses magic to help allies.",
    },
    {
        name: "Velma",
        image: "https://static.wikia.nocookie.net/multiversus/images/f/f6/Velma_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174723",
        description: "Velma uses her intelligence and gadgets to support teammates.",
    },
    {
        name: "Garnet",
        image: "https://static.wikia.nocookie.net/multiversus/images/c/c0/Garnet_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174737",
        description: "Garnet is a tank with a mix of powerful fists and protective abilities.",
    },
    {
        name: "LeBron James",
        image: "https://static.wikia.nocookie.net/multiversus/images/d/d5/LeBron_James_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174753",
        description: "LeBron James is a versatile fighter with basketball-themed abilities.",
    },
    {
        name: "Rick Sanchez",
        image: "https://static.wikia.nocookie.net/multiversus/images/2/25/Rick_Sanchez_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174809",
        description: "Rick uses his science skills and gadgets to manipulate the battlefield.",
    },
    {
        name: "Morty Smith",
        image: "https://static.wikia.nocookie.net/multiversus/images/d/d0/Morty_Smith_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174820",
        description: "Morty is an unpredictable and awkward fighter with strange attacks.",
    },
    {
        name: "Taz",
        image: "https://static.wikia.nocookie.net/multiversus/images/e/e2/Taz_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174836",
        description: "Taz is a wild and ferocious fighter, spinning his way to victory.",
    },
    {
        name: "Steven Universe",
        image: "https://static.wikia.nocookie.net/multiversus/images/a/a2/Steven_Universe_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174849",
        description: "Steven Universe is a supportive fighter, using healing powers and shields.",
    },
    {
        name: "The Iron Giant",
        image: "https://static.wikia.nocookie.net/multiversus/images/7/74/Iron_Giant_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174904",
        description: "The Iron Giant is a massive tank with powerful attacks and defense.",
    },
    {
        name: "Marvin the Martian",
        image: "https://static.wikia.nocookie.net/multiversus/images/c/c9/Marvin_the_Martian_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174917",
        description: "Marvin uses his advanced technology to control the battlefield.",
    },
    {
        name: "Black Adam",
        image: "https://static.wikia.nocookie.net/multiversus/images/2/2d/Black_Adam_icon.png/revision/latest/scale-to-width-down/350?cb=20220924174933",
        description: "Black Adam is a powerhouse with devastating electrical attacks.",
    },
    // **New characters added in re-release**
    {
        name: "Betelgeuse",
        image: "https://static.wikia.nocookie.net/multiversus/images/2/2c/Betelgeuse_icon.png/revision/latest/scale-to-width-down/350?cb=202309150915",
        description: "Betelgeuse brings chaos and mischief with his unpredictable powers.",
    },
    {
        name: "Nubia",
        image: "https://static.wikia.nocookie.net/multiversus/images/a/a4/Nubia_icon.png/revision/latest/scale-to-width-down/350?cb=202309150916",
        description: "Nubia, a fierce Amazonian warrior, fights with power and precision.",
    },
    {
        name: "The Powerpuff Girls",
        image: "https://static.wikia.nocookie.net/multiversus/images/4/49/Powerpuff_Girls_icon.png/revision/latest/scale-to-width-down/350?cb=202309150917",
        description: "The Powerpuff Girls combine their powers for explosive teamwork.",
    },
    {
        name: "Agent Smith",
        image: "https://static.wikia.nocookie.net/multiversus/images/a/a7/Agent_Smith_icon.png/revision/latest/scale-to-width-down/350?cb=202309150918",
        description: "Agent Smith uses his martial arts and control over the Matrix to defeat enemies.",
    },
    {
        name: "Banana Guard",
        image: "https://static.wikia.nocookie.net/multiversus/images/f/f7/Banana_Guard_icon.png/revision/latest/scale-to-width-down/350?cb=202309150919",
        description: "Banana Guard is a loyal and tough protector, equipped with humor and strength.",
    },
    {
        name: "Lola Bunny",
        image: "https://static.wikia.nocookie.net/multiversus/images/7/7a/Lola_Bunny_icon.png/revision/latest/scale-to-width-down/350?cb=202309150920",
        description: "Lola Bunny is fast and agile, with a fiery competitive spirit.",
    },
    {
        name: "Marceline the Vampire Queen",
        image: "https://static.wikia.nocookie.net/multiversus/images/9/92/Marceline_icon.png/revision/latest/scale-to-width-down/350?cb=202309150921",
        description: "Marceline uses her vampire abilities and her bass guitar to battle.",
    },
    {
        name: "Samurai Jack",
        image: "https://static.wikia.nocookie.net/multiversus/images/5/58/Samurai_Jack_icon.png/revision/latest/scale-to-width-down/350?cb=202309150922",
        description: "Samurai Jack is a disciplined and powerful warrior, skilled in swordsmanship.",
    },
    {
        name: "Raven",
        image: "https://static.wikia.nocookie.net/multiversus/images/a/aa/Raven_icon.png/revision/latest/scale-to-width-down/350?cb=202309150923",
        description: "Raven uses her dark magic and psychic powers to control her enemies.",
    },
    {
        name: "The Joker",
        image: "https://static.wikia.nocookie.net/multiversus/images/6/60/Joker_icon.png/revision/latest/scale-to-width-down/350?cb=202309150924",
        description: "The Joker is a master of chaos, using gadgets and mind games to defeat enemies.",
    },
    {
        name: "Aquaman",
        image: "https://static.wikia.nocookie.net/multiversus/images/8/8e/Aquaman_icon.png/revision/latest/scale-to-width-down/350?cb=202309150925",
        description: "Aquaman is a mighty warrior with control over the sea and its creatures.",
    },
    {
        name: "Jason Voorhees",
        image: "https://static.wikia.nocookie.net/multiversus/images/9/90/Jason_Voorhees_icon.png/revision/latest/scale-to-width-down/350?cb=202309150926",
        description: "Jason Voorhees is a terrifying force with unstoppable strength.",
    },
];

// Function to render characters on the page
function renderCharacters() {
    const characterContainer = document.querySelector(".character-container");
    characterContainer.innerHTML = "";

    characters.forEach((character, index) => {
        const characterDiv = document.createElement("div");
        characterDiv.classList.add("character");
        characterDiv.classList.add("unclicked"); // Add default unclicked state
        
        // Create image element
        const characterImage = document.createElement("img");
        characterImage.src = character.image;
        characterImage.alt = character.name;
        characterDiv.appendChild(characterImage);

        // Add name label
        const characterName = document.createElement("p");
        characterName.textContent = character.name;
        characterDiv.appendChild(characterName);

        // Add click event listener to choose character
        characterDiv.addEventListener("click", () => {
            if (characterDiv.classList.contains("unclicked")) {
                characterDiv.classList.remove("unclicked");
                characterDiv.classList.add("clicked");
                characterDiv.style.filter = "grayscale(100%)"; // Apply greyed-out effect
            } else {
                characterDiv.classList.remove("clicked");
                characterDiv.classList.add("unclicked");
                characterDiv.style.filter = "none"; // Reset filter
            }
        });

        characterContainer.appendChild(characterDiv);
    });
}

// Generate random character button logic
document.getElementById("generate-btn").addEventListener("click", function () {
    const unchosenCharacters = characters.filter((character, index) => {
        return !document.querySelectorAll(".character")[index].classList.contains("clicked");
    });

    if (unchosenCharacters.length > 0) {
        const randomIndex = Math.floor(Math.random() * unchosenCharacters.length);
        const randomCharacter = unchosenCharacters[randomIndex];

        alert("Your random character is: " + randomCharacter.name);
    } else {
        alert("Please reset all characters before generating a new one.");
    }
});

// Reset all characters button logic
document.getElementById("reset-btn").addEventListener("click", function () {
    // Reset the character array to be unclicked and remove grey-out
    const allCharacterDivs = document.querySelectorAll(".character");
    allCharacterDivs.forEach(characterDiv => {
        characterDiv.classList.remove("clicked");
        characterDiv.classList.add("unclicked");
        characterDiv.style.filter = "none"; // Reset any styling (e.g., grayscale)
    });
});

// Initial render of characters
renderCharacters();
