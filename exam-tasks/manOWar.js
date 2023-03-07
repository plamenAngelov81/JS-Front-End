function manOWar(data) {
    let pirateShip = data.shift().split(">").map(Number);
    let warShip = data.shift().split(">").map(Number);
    let maxHp = Number(data.shift());
    let gameOver = false;

    let counter = 0
    while (true) {
        let command = data[counter].split(' ')
        if (command[0] === "Retire") {
            break;
        }

        if (command[0] === "Fire") {
            let section = Number(command[1]);
            let damage = Number(command[2]);
            if (0 <= section && section < warShip.length) {
                warShip[section] -= damage;
                if (warShip[section] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    gameOver = true;
                    break;
                }
            }
        } else if (command[0] === "Defend") {
            let startSection = Number(command[1]);
            let endSection = Number(command[2]);
            let warshipDamage = Number(command[3]);
            if (0 <= startSection && startSection <= endSection && endSection < pirateShip.length) {
                for (let i = startSection; i <= endSection; i++) {
                    pirateShip[i] -= warshipDamage;
                    if (pirateShip[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        gameOver = true;
                        break;
                    }
                }
            }
        } else if (command[0] === "Repair") {
            let section1 = Number(command[1]);
            let repairHp = Number(command[2]);
            if (0 <= section1 && section1 < pirateShip.length) {
                pirateShip[section1] += repairHp;
                if (pirateShip[section1] > maxHp) {
                    pirateShip[section1] = maxHp;
                }
            }
        } else if (command[0] === "Status") {
            let sectionCounter = 0;
            for (let i = 0; i < pirateShip.length; i++) {
                if (pirateShip[i] < maxHp * 0.2) {
                    sectionCounter++;
                }
            }
            console.log(`${sectionCounter} sections need repair.`);
        }
        counter += 1
    }

    if (!gameOver) {
        console.log(`Pirate ship status: ${pirateShip.reduce((a, b) => a + b, 0)}`);
        console.log(`Warship status: ${warShip.reduce((a, b) => a + b, 0)}`);
    }
}

//manOWar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"])

manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])