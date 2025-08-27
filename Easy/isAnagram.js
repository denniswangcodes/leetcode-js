function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }

    for (const each of count) {
        if (each !== 0) return false;
    }

    return true;
}

// function isAnagram(s, t) {
//     if (s.length !== t.length) return false;
//     return[...s].sort().join('') === [...t].sort().join('');
// }