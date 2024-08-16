/**
 * 
 */
function append(character) {
    document.getElementById('result').value += character;
}

// Clear the display
function clearScreen() {
    document.getElementById('result').value = '';
}

// Delete the last character
function deleteChar() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}