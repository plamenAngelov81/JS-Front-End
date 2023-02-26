function searchForNumber(nums, data) {
    nums = nums.slice(0, data[0])
    for (let i = 0; i < data[1]; i++){
        nums.shift()
    }
    let counter = 0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === data[2]) {
            counter += 1
        }
    }
    console.log(`Number ${data[2]} occurs ${counter} times.`)
}

searchForNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])


searchForNumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5])