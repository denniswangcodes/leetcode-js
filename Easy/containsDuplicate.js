var containsDuplicate = function(nums) {
    let seen = new Set();

    for (const num of nums) {
        if (!seen.has(num)){
            seen.add(num)
        } else {
            return true;
        }
    }
    
    return false;
};


//const containsDuplicate = nums => new Set(nums).size !== nums.length;