export function shortenString(inputString) {
    // Check if the inputString is longer than 14 characters
    if (inputString.length > 12) {
        // Shorten the string to 14 characters and add "..."
        return inputString.substring(0, 14) + " . . .";
    } else {
        // If the string is already 14 characters or shorter, return it as is
        return inputString;
    }
}