function firstWord(str) {
  // Trim the input to remove leading or trailing spaces
  str = str.trim();
  
  // Check if the string contains any space
  const spaceIndex = str.indexOf(' ');

  // If space exists, return the substring before the first space
  if (spaceIndex !== -1) {
    return str.substring(0, spaceIndex);
  }

  // If no space, return the entire string
  return str;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
