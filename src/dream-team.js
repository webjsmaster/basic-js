const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	if (!Array.isArray(members)) {
		return false
	}

	let str = ''
	members.forEach((element) => {
		if (typeof element == 'string') {
			element = element.replace(/\s+/g, '')
			return (str += element[0].toUpperCase())
		}
	})

	return str.split('').sort().join('')
}

module.exports = {
	createDreamTeam,
}
