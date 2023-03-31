// function shopping_list(data) {
//     let products = data.shift().split("!")
//
//
//     let counter = 0
//     while (true) {
//         if (data[counter] === 'Go Shopping!') {
//             console.log(products.join(', '))
//             break
//         }
//
//         let command_data = data[counter].split(' ')
//         let command = command_data[0]
//
//         if (command === 'Urgent') {
//             let current_item = command_data[1]
//             if (!products.includes(current_item)) {
//                 products.unshift(current_item)
//                 }
//             } else if (command === 'Unnecessary') {
//                  let elementToRemove = command_data[1]
//                  if (products.includes(elementToRemove)) {
//                      let index = products.indexOf(elementToRemove)
//                      products.splice(index, 1)
//                  }
//             } else if (command === 'Correct') {
//                  let old_item = command_data[1]
//                  let new_item = command_data[2]
//                  if (products.includes(old_item)) {
//                      let index = products.indexOf(old_item)
//                      products.splice(index, 1, new_item)
//                  }
//             } else if (command === 'Rearrange') {
//                 let rearrange_item = command_data[1]
//                 if(products.includes(rearrange_item)) {
//                 let index = products.indexOf(rearrange_item);
//                 products.splice(index, 1);
//                 products.push(rearrange_item);
//                 }
//             }
//         counter += 1
//     }
// }


function shopping_list(data) {
    let products = data.shift().split("!")
    data.pop()

    for (let i of data) {
        let command_data = i.split(' ')
        let command = command_data[0]
        if (command === 'Urgent') {
            let current_item = command_data[1]
            if (!products.includes(current_item)) {
                products.unshift(current_item)
            }
        } else if (command === 'Unnecessary') {
            let elementToRemove = command_data[1]
            if (products.includes(elementToRemove)) {
                products = products.filter(item => item !== elementToRemove)
            }
        } else if (command === 'Correct') {
            let old_item = command_data[1]
            let new_item = command_data[2]
            if (products.includes(old_item)) {
                let index = products.indexOf(old_item)
                products[index] = new_item

            }
        } else if (command === 'Rearrange') {
            let rearrange_item = command_data[1]
            if(products.includes(rearrange_item)) {
                let rearrange_index = products.indexOf(rearrange_item)
                products.splice(rearrange_index, 1)
                products.push(rearrange_item)
            }
        }
    }
    console.log(products.join(', '))
}



// shopping_list(
//     ["Milk!Pepper!Salt!Water!Banana",
//         "Urgent Salt",
//         "Unnecessary Grapes",
//         "Correct Pepper Onion",
//         "Rearrange Grapes",
//         "Correct Tomatoes Potatoes",
//         "Go Shopping!"])




shopping_list(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])