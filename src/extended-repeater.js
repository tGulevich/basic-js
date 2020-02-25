
module.exports = function repeater(str, options) {
    if (typeof options.addition === "boolean" || options.addition === null) {
        options.addition = String(options.addition);
    } 

    options.separator = options.separator || '+';
    options.addition = options.addition || '';

    let ad = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;
    return (str + ad + options.separator).repeat(options.repeatTimes - 1) + (str + ad);
};