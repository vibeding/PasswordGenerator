const generateBtn = document.getElementById("generate-btn");
const pwOne = document.getElementById("pw-1");
const pwTwo = document.getElementById("pw-2");
const lengthInput = document.getElementById("length-input");
const charPoolInput = document.getElementById("char-pool");
const toast = document.getElementById("copy-toast");

// Function to generate a single password
function generatePassword(){
    // Array.from handles emojis/special characters correctly
    const characters = Array.from(charPoolInput.value);
    const length = parseInt(lengthInput.value);

    if(characters.lenght === 0) return "Empty Pool!";

    let password = "";
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

// Even Listner for button click
generateBtn.addEventListener("click", () => {
    pwOne.textContent = generatePassword();
    pwTwo.textContent = generatePassword();
});

// Function to copy to clipboard with feedback
async function copyToClipboard(element){
    const text = element.textContent;
    if(text === "..." || text === "Empty Pool!") return;

    try {
        await navigator.clipboard.writeText(text);
        showToast();
    } catch(err){
        console.error("Failed to copy: ", err);
    }
}

function showToast() {
    toast.classList.remove("hidden");

    setTimeout(() => {
        toast.classList.add("hidden");
    }, 2000);
}

// Add click event Listeners to the password boxes
pwOne.addEventListener("click", () => copyToClipboard(pwOne));
pwTwo.addEventListener("click", () => copyToClipboard(pwTwo));