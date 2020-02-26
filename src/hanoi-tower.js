module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = Math.pow(2, disksNumber) - 1;
    let turnsInSec = (turnsSpeed / 3600).toExponential();
    let res = {
        turns: turns,
        seconds: turns / turnsInSec
    };
    return res;

}