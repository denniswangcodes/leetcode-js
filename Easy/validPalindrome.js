function validPalindrome(s) {
    s = s.toLowerCase();

    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        if (!/^[a-z0-9]$/.test(s[left])) {
            left++;
            continue;
        }

        if (!/^[a-z0-9]$/.test(s[right])) {
            right--;
            continue;
        }

        if (s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}