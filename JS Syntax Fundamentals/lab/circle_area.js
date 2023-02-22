function circle_area(value) {
    let value_type = typeof(value)
    if (value_type !== "number" || value_type === NaN) {
        return console.log(`We can not calculate the circle area, because we receive a ${value_type}.`);
    }
    area = Math.PI * value * value;
    console.log(area.toFixed(2));
}

circle_area(NaN)