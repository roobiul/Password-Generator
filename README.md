# Neumorphic Password Generator

A modern, elegant password generator with a soft UI design featuring neumorphic (soft UI) effects. Built with vanilla HTML, CSS, and JavaScript, this tool creates secure passwords with customizable options and a beautiful user interface.

![Password Generator](https://img.shields.io/badge/Password-Generator-4CAF50?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🎨 Features

- **Neumorphic Design**: Soft, modern UI with beautiful shadow effects
- **Customizable Password Length**: Adjustable from 4 to 32 characters
- **Character Options**: 
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Special symbols (!@#$%^&*)
- **Custom Text Integration**: Include your own text in passwords (available for 12+ character passwords)
- **Password Strength Indicator**: Real-time strength assessment with color-coded feedback
- **One-Click Copy**: Easy clipboard copying with visual feedback
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Keyboard Shortcuts**: 
  - `Ctrl/Cmd + G` - Generate new password
  - `Ctrl/Cmd + C` - Copy password when focused

## 🚀 Live Demo

[View Live Demo](https://roobiul.github.io/Password-Generator/)

## 📸 Screenshots

![Screenshots](https://github.com/roobiul/Password-Generator/blob/main/Screenshot%20.png)

## 🛠️ Technologies Used

- **HTML5** - Structure and layout
- **CSS3** - Neumorphic styling and animations
- **JavaScript** - Password generation logic and interactivity
- **SVG** - Icons and graphics

## 💻 Installation & Usage

Open `index.html` in your web browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

## 📁 Project Structure

```
neumorphic-password-generator/
│
├── index.html          # Main HTML file
├── styles.css          # Neumorphic styles and animations
├── script.js           # Password generation logic
└── README.md          # Project documentation
```

## 🎯 Key Features Explained

### Neumorphic Design
The entire interface uses soft UI design principles with:
- Soft shadows for depth
- Smooth transitions
- Minimalist color palette
- Toggle switches instead of traditional checkboxes

### Password Strength Algorithm
The strength indicator evaluates passwords based on:
- Length (8+ characters for basic, 12+ for strong, 16+ for very strong)
- Character variety (uppercase, lowercase, numbers, symbols)
- Visual feedback with color coding (red → orange → green)

### Custom Text Feature
When generating passwords of 12 or more characters, users can include their own text, which will be randomly shuffled within the generated password for added security.

## 🔧 Customization

You can easily customize the generator by modifying:

- **Colors**: Update the color scheme in `styles.css`
- **Character Sets**: Modify the character strings in `script.js`
- **Password Length Range**: Adjust min/max values in the HTML range input
- **Strength Algorithm**: Customize the strength calculation in `updateStrengthIndicator()`

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## 👨‍💻 Developer

**MD ROBIUL ISLAM**  
Department of Computer Science and Engineering (CSE)  
Jashore University of Science and Technology (JSTU)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).


## ⭐ Show your support

Give a ⭐️ if you like this project!

---

*Built with ❤️ by MD ROBIUL ISLAM*
