function roadRadar(speed, area) {
    let speed_limits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    };

    function get_status(number) {
        let status = '';
        if (number <= 20) {
            status = 'speeding';
        }
        else if (20 < number && number <= 40 ) {
            status = 'excessive speeding';
        }
        else if (number > 40) {
            status = 'reckless driving';
        }
        return status
    }
    if (speed <= speed_limits[area]) {
        return console.log(`Driving ${speed} km/h in a ${speed_limits[area]} zone`);
    }

    let diff = speed - speed_limits[area];
    let current_status = get_status(diff);
    let current_speed_limit = speed_limits[area];
    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${current_speed_limit} - ${current_status}`);
}

roadRadar(200, 'motorway')