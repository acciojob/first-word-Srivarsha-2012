function firstWord(str) {
    // Handle empty string
    if (str.length === 0) return '';

    // Remove leading spaces
    str = str.trimStart();

    // Find first space
    let index = str.indexOf(' ');

    // If no space found, return entire string
    if (index === -1) {
        return str;
    }

    // Return substring up to first space
    return str.substring(0, index);
}