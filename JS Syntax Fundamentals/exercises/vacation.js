function vacation(group_of_people, group_type, day) {
    let price = 0
    if (group_type === 'Students') {
        if (day === 'Friday') {
            price = 8.45
        } else if (day === 'Saturday') {
            price = 9.80
        } else if (day === 'Sunday') {
            price = 10.46
        }
        let total_price = price * group_of_people
        if (group_of_people >= 30) {
            total_price = total_price - total_price * 0.15
        }
        console.log(`Total price: ${total_price.toFixed(2)}`)
    }

    else if (group_type === 'Business')  {
        if (day === 'Friday') {
            price = 10.90
        } else if (day === 'Saturday') {
            price = 15.60
        } else if (day === 'Sunday') {
            price = 16
        }
        let total_price = price * group_of_people
        if (group_of_people >= 100) {
            total_price = total_price - 10 * price
        }
        console.log(`Total price: ${total_price.toFixed(2)}`)
    }

    else if (group_type === 'Regular') {
        if (day === 'Friday') {
            price = 15
        } else if (day === 'Saturday') {
            price = 20
        } else if (day === 'Sunday') {
            price = 22.50
        }
        let total_price = price * group_of_people
        if (group_of_people >= 10 && group_of_people <= 20) {
            total_price = total_price - total_price * 0.05
        }
        console.log(`Total price: ${total_price.toFixed(2)}`)
    }
}

vacation(40,
    "Regular",
    "Saturday")