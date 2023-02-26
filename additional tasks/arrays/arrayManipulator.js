function arrayManipulator(someNums, strings) {
    let i = 0
    let nums = someNums
    while (true) {
        let data = strings[i].split(' ')
        let command = data.shift()
        if (command === 'print') {
            break
        }
        if (command === 'add') {
            nums.splice(Number(data[0]), 0, Number(data[1]))
        }

        else if (command === 'addMany') {
            let addManyIndex = Number(data.shift())
            let addArr = data.map(str => Number(str))
            nums.splice(addManyIndex, 0, ...addArr)
        }

        else if (command === 'contains') {
            let element = Number(data[0])
            if (nums.includes(element)) {
                let elementIndex = nums.indexOf(element)
                console.log(elementIndex)
            } else {
                console.log(-1)
            }
        }

        else if (command === 'remove') {
            nums.splice(Number(data[0]), 1)
        }

        else if (command === 'shift') {
            let rotations = Number(data[0])
            for (let j = 0; j < rotations; j++) {
                let currentElement = nums.shift()
                nums.push(currentElement)
            }
        }

        else if (command === 'sumPairs') {
            let sumArr = [];
            if( nums.length % 2 !==0){
                nums.push(0)
            }
            for(let i = 0; i < nums.length - 1; i += 2){
                let sum = nums[i] + nums[i + 1];
                sumArr.push(sum);
            }
            nums = sumArr;
        }
        i++
    }
    console.log(`[ ${nums.join(', ')} ]`)
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])
//arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])