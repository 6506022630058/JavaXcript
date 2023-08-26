function frequencySort(str) {
    const freqMap = new Map();

    for (const char of str) {
        if (freqMap.has(char)) {
            freqMap.set(char, freqMap.get(char) + 1);
        } else {
            freqMap.set(char, 1);
        }
    }

    const sortedEntries = Array.from(freqMap.entries()).sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1]; // Sort by frequency in descending order
        } else {
            if (a[0] >= 'A' && a[0] <= 'Z' && !(b[0] >= 'A' && b[0] <= 'Z')) {
                return -1; // Capital letter comes before lowercase
            } else if (!(a[0] >= 'A' && a[0] <= 'Z') && b[0] >= 'A' && b[0] <= 'Z') {
                return 1; // Lowercase comes after capital letter
            } else {
                return a[0].localeCompare(b[0]); // Sort alphabetically if frequency and case are the same
            }
        }
    });

    let output = "";
    for (const [char, frequency] of sortedEntries) {
        output += char.repeat(frequency);
    }

    console.log(output);
}

frequencySort("tree");   // eert
frequencySort("cccaaa"); // cccaaa
frequencySort("Aabb");   // Aabb