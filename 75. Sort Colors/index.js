module.exports = function sortColors (nums) {
    let k = 0
    let j = 0
    for(let index = 0; index < nums.length; index++) {

        // current number
        let v = nums[index]
        nums[index] = 2
        
        if(v < 2) {
           nums[j] = 1
           j += 1
        }

        if(v === 0) {
           nums[k] = 0
           k += 1
        }
    }

    return nums;
};

