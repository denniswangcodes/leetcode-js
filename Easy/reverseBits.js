function reverseBits(n) {
    const s = n.toString(2).padStart(32, '0');
    const r = s.split('').reverse().jopin('');
    return parseInt(r,2) >>> 0;
}