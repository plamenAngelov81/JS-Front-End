function thePyramid(base, increment) {

    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let counter = 0;
    let currentBase = base;

    while (currentBase > 2) {
        let marble = currentBase * 4 - 4;
        let stone = currentBase * currentBase - marble;
        totalStone += stone;

        counter += 1;
        if (counter % 5 === 0) {
            totalLapis += marble;
        } else {
            totalMarble += marble;
        }
        currentBase -= 2;
    }
    counter += 1;
    let gold = currentBase * currentBase;

    let stonesNeeded = Math.ceil(totalStone * increment)
    let marbleNeeded = Math.ceil(totalMarble * increment)
    let lazuliNeeded = Math.ceil(totalLapis * increment)
    let goldNeeded = Math.ceil(gold * increment)
    let pyramidHeight = Math.floor(counter * increment)

    console.log(`Stone required: ${stonesNeeded}`);
    console.log(`Marble required: ${marbleNeeded}`);
    console.log(`Lapis Lazuli required: ${lazuliNeeded}`);
    console.log(`Gold required: ${goldNeeded}`);
    console.log(`Final pyramid height: ${pyramidHeight}`);

}

// thePyramid(11, 0.75)