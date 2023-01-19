let nums = [1,2,3,4,5]

function multiply2(nums){
    for(let i in nums){
        nums[i] = nums[i] * 2
    }
}

function map(nums){
    multiply2(nums)
    return nums
}

console.log(map(nums))