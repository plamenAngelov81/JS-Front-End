function theatre_promotions(day_type, customer_age) {
    let ticket_price = 0
    if (customer_age < 0 || customer_age > 122) {
        return console.log("Error!");
    }

    if (customer_age >= 0 && customer_age <= 18) {
        if (day_type === "Weekday") {
            ticket_price = 12
        }
        else if (day_type === 'Weekend') {
            ticket_price = 15
        }
    
        else if (day_type === 'Holiday') {
            ticket_price = 5
        }
    }

    else if (customer_age > 18 && customer_age <= 64) {
        if (day_type === "Weekday") {
            ticket_price = 18
        }
        else if (day_type === 'Weekend') {
            ticket_price = 20
        }
    
        else if (day_type === 'Holiday') {
            ticket_price = 12
        }
    }

    else if (customer_age > 64 && customer_age <= 122) {
        if (day_type === "Weekday") {
            ticket_price = 12
        }
        else if (day_type === 'Weekend') {
            ticket_price = 15
        }
    
        else if (day_type === 'Holiday') {
            ticket_price = 10
        }
    }
    
    console.log(`${ticket_price}$`);
}

theatre_promotions('Holiday', 64)