// Constructor
var RegExpParser = module.exports = {};

/**
 * parse
 * Parses a string input
 *
 * @name parse
 * @function
 * @param {String} input the string input that should be parsed as regular
 * expression
 * @return {RegExp} The parsed regular expression
 */
RegExpParser.parse = function(input) {

    // Validate input
    if (typeof input !== "string") {
        throw new Error("Invalid input. Input must be a string");
    }

    // Parse input
    var m = input.match(/(\/?)(.+)\1([a-z]*)/i);

    // Invalid flags
    if (m[2] && !/^(?!.*?(.).*?\1)[gmixXsuUAJ]+$/.test(m[2])) {
        return RegExp(input);
    }

    // Create the regular expression
    return new RegExp(m[2], m[3]);
};
