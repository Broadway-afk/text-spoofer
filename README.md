# Text Spoofer

This repository contains a JavaScript function that replaces every character in a given string with a corresponding symbol from a predefined character mapping (enum), while preserving any content enclosed within `< >` (such as HTML tags). Additionally, the repository includes a custom font file that ensures all replaced symbols appear visually intact while making copied text unreadable.

## Features
- Replaces each character in the input string based on a provided mapping.
- Preserves content inside HTML tags.
- Uses a custom font to maintain visual integrity while making copied text garbled.
- Simple and efficient implementation using regex and string manipulation.

## Usage

```javascript
const text = "Hello <b>world</b>!";
const replacedText = spoofString(text);
console.log(replacedText);
```
**Output:**
```
Éäëëî <b>öîñëã</b>!
```

## Custom Font
This repository includes a custom font file that ensures visually intact text while making copied text unreadable. To use the font, include the following CSS in your project:

```css
@font-face {
    font-family: "manrope-crypto"; // you should definatly not add noncrypto fallback fonts
    src: url("fonts/Manrope-crypto.ttf");
}

.replaced-text {
    font-family: 'manrope-crypto';
}
```
In case of using single font file without bold version you will suffer from lack of text customization so css tricks 
will be handy.
```css
.replaced-text b {
    text-shadow: 0 0 1px black;
    filter: blur(0.2px);
}
```

Apply the `replaced-text` class to the modified text elements:
```html
<p class="replaced-text">Éäëëî <b>öîñëã</b>!</p>
```

## Installation
No installation required. Simply copy the function, character mapping, and font file into your project.

## License
This project is licensed under the MIT License.

## Contributions
Feel free to submit issues or pull requests to enhance functionality, improve performance, widen symbol range or to add 
new "crypto" fonts.
