🛡️ PowerPass Generator
A sleek, modern, dark-mode web application designed to generate secure, random passwords. PowerPass allows users to fully customize their security by defining character pools—including full emoji support—and provides real-time feedback on password strength.

✨ Features
Dual Generation: Generates two unique passwords simultaneously so you can choose your favorite.

Advanced Customization: Modify the character pool directly. Add specific symbols, remove confusing characters (like O and 0), or include emojis for high-entropy passwords.

Strength Meter: Real-time analysis of your settings. The bar changes color (Red → Yellow → Blue → Green) based on length and character diversity.

Click-to-Copy: One-tap copying to your clipboard using the modern Clipboard API.

Toast Notifications: Immediate visual confirmation when a password has been successfully copied.

Responsive Dark Mode: Optimized for eye comfort with a deep charcoal and emerald green aesthetic.

🚀 Quick Start
Since this is a standard frontend project, no installation or compilers are required.

Clone or Download the repository.

Ensure index.html, index.css, and index.js are in the same folder.

Open index.html in any modern web browser (Chrome, Firefox, Edge, or Safari).

🛠️ Technical Details
Emoji Handling
Unlike standard string iteration which can "break" emojis (treating them as two separate surrogate pairs), this app uses Array.from() to convert the character pool. This ensures that emojis like 🛡️ or 🚀 are treated as single, valid characters in your password.

Password Strength Logic
The strength is calculated using a scoring system based on:

Length: Incremental points for lengths > 8, 12, and 16.

Diversity: Checks for the presence of numbers, symbols, uppercase, and lowercase letters.

Entropy Bonus: Extra points awarded for using non-standard ASCII characters (emojis/special glyphs).

🔗 Link
https://password-generator-vd.netlify.app/
