function firstWord(str) {
    // Remove leading spaces
    str = str.trimStart();
    
    // Find the first space
    let index = str.indexOf(' ');
    
    // If no space found, return the whole string
    if (index === -1) {
        return str;
    }
    
    // Return substring from start to first space
    return str.substring(0, index);
}