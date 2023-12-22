const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
const supportingValue = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
class VigenereCipheringMachine {
	constructor(direction) {
		if (direction === undefined || direction === true) {
			this.direction = true
		} else {
			this.direction = false
		}
	}

	encrypt(message, key) {
		if (!message || !key) {
			throw new Error('Incorrect arguments!')
		}

		message = message.toUpperCase()
		key = key.toUpperCase()

		let abcCount = supportingValue.length
		let res = []
		let pos = 0
		let kof = Math.ceil(message.length / key.length)
		key = key.repeat(kof)

		for (let i = 0; i < message.length; i++) {
			if (supportingValue.indexOf(message[i]) >= 0) {
				let letter = message[i]
				let shift = key[pos]

				res.push(supportingValue.charAt((supportingValue.indexOf(letter) + supportingValue.indexOf(shift)) % abcCount))
				pos++
			} else {
				res.push(message[i])
			}
		}

		return this.direction ? res.join('') : res.reverse().join('')
	}

	decrypt(message, key) {
		if (!message || !key) {
			throw new Error('Incorrect arguments!')
		}

		message = message.toUpperCase()
		key = key.toUpperCase()

		let abcCount = supportingValue.length
		let res = []
		let pos = 0
		let kof = Math.ceil(message.length / key.length)
		key = key.repeat(kof)

		for (let i = 0; i < message.length; i++) {
			if (supportingValue.indexOf(message[i]) >= 0) {
				let letter = message[i]
				let shift = key[pos]

				res.push(supportingValue.charAt((supportingValue.indexOf(letter) + abcCount - supportingValue.indexOf(shift)) % abcCount))
				pos++
			} else {
				res.push(message[i])
			}
		}

		return this.direction ? res.join('') : res.reverse().join('')
	}
}

module.exports = {
	VigenereCipheringMachine,
}
