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
    }
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
