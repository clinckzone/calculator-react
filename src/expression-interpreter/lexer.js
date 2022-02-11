import { Token } from './token';
import { tokenTypes } from './token';

export class Lexer {
	constructor(text) {
		this.text = text;
		this.pos = 0;
		this.current_char = this.text[this.pos];
	}

	char_error(text) {
		throw new Error(text);
	}

	advance_pointer() {
		this.pos++;
		if (this.pos > this.text.length - 1) {
			this.current_char = null;
		} else {
			this.current_char = this.text[this.pos];
		}
	}

	get_digit() {
		let number = '';
		while (this.current_char != null && !isNaN(this.current_char)) {
			number += this.current_char;
			this.advance_pointer();
		}
		return parseInt(number);
	}

	skip_whitespace() {
		while (this.current_char != null && this.current_char === ' ') {
			this.advance_pointer();
		}
	}

	get_next_token() {
		while (this.current_char != null) {
			if (this.current_char === ' ') {
				this.skip_whitespace();
				continue;
			}
			if (!isNaN(this.current_char)) {
				const token = new Token(tokenTypes.INTEGER, this.get_digit());
				return token;
			}
			if (this.current_char === '+') {
				const token = new Token(tokenTypes.PLUS, '+');
				this.advance_pointer();
				return token;
			}
			if (this.current_char === '-') {
				const token = new Token(tokenTypes.MINUS, '-');
				this.advance_pointer();
				return token;
			}
			if (this.current_char === '×') {
				const token = new Token(tokenTypes.MULT, '×');
				this.advance_pointer();
				return token;
			}
			if (this.current_char === '÷') {
				const token = new Token(tokenTypes.DIV, '÷');
				this.advance_pointer();
				return token;
			}
			if (this.current_char === '(') {
				const token = new Token(tokenTypes.LPARAN, '(');
				this.advance_pointer();
				return token;
			}
			if (this.current_char === ')') {
				const token = new Token(tokenTypes.RPARAN, ')');
				this.advance_pointer();
				return token;
			}
			this.char_error('Invalid character found');
		}
		return new Token(tokenTypes.EOF, this.current_char);
	}
}
