const generateBtn = document.getElementById("generate-btn");
const pwOne = document.getElementById("pw-1");
const pwTwo = document.getElementById("pw-2");
const lengthInput = document.getElementById("length-input");
const charPoolInput = document.getElementById("char-pool");
const toast = document.getElementById("copy-toast");
const strengthBar = document.getElementById("strength-bar-fill");
const strengthText = document.getElementById("strength-text");

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
    updateStrengthUI();
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

/* added for password strength indication */
function updateStrengthUI(){
    const length = parseInt(lengthInput.value);
    const pool = charPoolInput.value;

    let score = 0;

    // 1. Length Logic
    if(length > 8) score++;
    if(length > 12) score++;
    if(length > 16) score++;

    // 2. Variety Logic
    const hasNumbers = /\d/.test(pool);
    const hasSpecial = /[~`@#$%^&*()_\-+={[\]]\|\\:;"'<,>.?\/]/.test(pool);
    const hasLower = /[a-z]/.test(pool);
    const hasUpper = /[A-Z]/.test(pool);
    // Detect emojis or non-standard characters
    const hasAdvanced = Array.from(pool).some(char => char.charCodeAt(0) > 127);

    if(hasNumbers && hasSpecial) score++;
    if(hasLower && hasUpper) score++;
    if(hasAdvanced) score++;

    // 3. UI Update Logic
    strengthBar.className = ""; // Reset classes

    if (score <= 2) {
        strengthBar.classList.add("weak");
        strengthText.textContent = "Weak";
        strengthText.style.color = "#EF4444";
    } else if (score <= 4) {
        strengthBar.classList.add("fair");
        strengthText.textContent = "Fair";
        strengthText.style.color = "#F59E0B";
    } else if (score === 5) {
        strengthBar.classList.add("good");
        strengthText.textContent = "Good";
        strengthText.style.color = "#3B82F6";
    } else {
        strengthBar.classList.add("strong");
        strengthText.textContent = "Strong / Secure";
        strengthText.style.color = "#10B981";
    }
}

// update the strength when user changes settings manually
lengthInput.addEventListener("input", updateStrengthUI);
charPoolInput.addEventListener("input", updateStrengthUI);
