// Update length display
function updateLength() {
    const length = document.getElementById('length').value;
    document.getElementById('lengthValue').textContent = length;
    
    // Show custom text section if length >= 12
    const customTextSection = document.getElementById('customTextSection');
    if (length >= 12) {
        customTextSection.classList.add('show');
    } else {
        customTextSection.classList.remove('show');
        document.getElementById('customText').value = '';
    }
}

// Generate password
function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;
    const customText = document.getElementById('customText').value;
    
    // Character sets
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let charset = '';
    if (includeUppercase) charset += uppercase;
    if (includeLowercase) charset += lowercase;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;
    
    if (charset === '') {
        alert('Please select at least one character type!');
        return;
    }
    
    let password = '';
    
    // Include custom text if length >= 12
    if (length >= 12 && customText) {
        // If custom text is longer than password length, truncate it
        if (customText.length > length) {
            password = customText.substring(0, length);
        } else {
            password = customText;
        }
    }
    
    // Generate remaining characters
    const remainingLength = length - password.length;
    for (let i = 0; i < remainingLength; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    // Shuffle password if custom text was included
    if (customText && length >= 12 && customText.length < length) {
        password = shuffleString(password);
    }
    
    document.getElementById('passwordOutput').value = password;
    updateStrengthIndicator(password);
}

// Shuffle string
function shuffleString(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

// Update password strength indicator
function updateStrengthIndicator(password) {
    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');
    
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength += 20;
    if (password.length >= 12) strength += 20;
    if (password.length >= 16) strength += 10;
    
    // Character variety checks
    if (/[a-z]/.test(password)) strength += 10;
    if (/[A-Z]/.test(password)) strength += 10;
    if (/[0-9]/.test(password)) strength += 10;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 20;
    
    // Update UI
    strengthFill.style.width = strength + '%';
    
    if (strength < 30) {
        strengthFill.style.backgroundColor = '#f44336';
        strengthText.textContent = 'Weak';
        strengthText.style.color = '#f44336';
    } else if (strength < 60) {
        strengthFill.style.backgroundColor = '#ff9800';
        strengthText.textContent = 'Medium';
        strengthText.style.color = '#ff9800';
    } else if (strength < 80) {
        strengthFill.style.backgroundColor = '#4CAF50';
        strengthText.textContent = 'Strong';
        strengthText.style.color = '#4CAF50';
    } else {
        strengthFill.style.backgroundColor = '#4CAF50';
        strengthText.textContent = 'Very Strong';
        strengthText.style.color = '#4CAF50';
    }
}

// Copy password to clipboard
function copyPassword() {
    const passwordOutput = document.getElementById('passwordOutput');
    if (passwordOutput.value) {
        // Create a temporary textarea for better browser compatibility
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = passwordOutput.value;
        tempTextarea.style.position = 'absolute';
        tempTextarea.style.left = '-9999px';
        document.body.appendChild(tempTextarea);
        
        // Select and copy
        tempTextarea.select();
        tempTextarea.setSelectionRange(0, 99999); // For mobile devices
        
        try {
            document.execCommand('copy');
            
            // Visual feedback
            const copyBtn = document.querySelector('.copy-btn');
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            copyBtn.style.color = '#4CAF50';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
                copyBtn.style.color = '#333';
            }, 1500);
        } catch (err) {
            alert('Failed to copy password');
        }
        
        document.body.removeChild(tempTextarea);
    } else {
        alert('Please generate a password first!');
    }
}

// Initialize on page load
window.onload = function() {
    // Set initial state
    updateLength();
    
    // Generate initial password
    generatePassword();
    
    // Add event listeners for real-time strength checking
    document.getElementById('passwordOutput').addEventListener('input', function() {
        if (this.value) {
            updateStrengthIndicator(this.value);
        }
    });
    
    // Add enter key support for custom text input
    document.getElementById('customText').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generatePassword();
        }
    });
};

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + G to generate password
    if ((e.ctrlKey || e.metaKey) && e.key === 'g') {
        e.preventDefault();
        generatePassword();
    }
    
    // Ctrl/Cmd + C to copy password when output is focused
    if ((e.ctrlKey || e.metaKey) && e.key === 'c' && document.activeElement.id === 'passwordOutput') {
        e.preventDefault();
        copyPassword();
    }
});