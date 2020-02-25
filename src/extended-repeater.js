module.exports = function repeater(str, options) {

    if (typeof options.addition === "boolean") {
        options.addition = options.addition.toString();
    } else if (options.addition === null) {
        options.addition = 'null';
    }

    options.separator = options.separator || '+';
    options.addition = options.addition || '';

    let ad = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;
    return (str + ad + options.separator).repeat(options.repeatTimes - 1) + (str + ad);
    
    
    
};
  