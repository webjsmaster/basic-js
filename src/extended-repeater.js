const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	let separator = options.separator ? options.separator : '+'
	let repeatTimes = options.repeatTimes
	let additionSeparator = options.additionSeparator ? options.additionSeparator : '|'
	let additionRepeatTimes = options.additionRepeatTimes
	let addition = new Array(additionRepeatTimes)
		.fill('' + options.addition, 0, additionRepeatTimes)
		.join(additionSeparator)

	if (addition !== 'undefined') {
		return new Array(repeatTimes).fill(str + addition, 0, repeatTimes).join(separator)
	} else {
		return new Array(repeatTimes).fill(str, 0, repeatTimes).join(separator)
	}
}

module.exports = {
	repeater,
}
