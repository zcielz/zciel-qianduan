//可以使用下面的技巧来写满足范围值的switch语句：

function getWaterState(tempInCelsius) {
    let state;

    switch (true) {
        case(tempInCelsius <= 0):
            state = 'Solid';
            break;
        case(tempInCelsius > 0 && tempInCelsius < 100):
            state = 'Liquid';
            break;
        default:
            state = 'Gas';

    }
    return state;
}

let waterState = getWaterState(1);
console.log(waterState);