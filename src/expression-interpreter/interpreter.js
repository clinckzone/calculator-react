import { tokenTypes } from './token';

export class Interpreter {
	constructor(parser) {
		this.parser = parser;
	}

	interpret() {
		const result = this.nodeVisitor(this.parser.parse());
		return result;
	}

	nodeVisitor(node) {
		const visitor = `visit_${node.constructor.name}`;
		if (this[visitor]) {
			return this[visitor](node);
		} else {
			throw new Error(`No method found for type ${node.constructor.name}`);
		}
	}

	visit_BinaryOperator(node) {
		if (node.op.type === tokenTypes.PLUS) {
			return this.nodeVisitor(node.left) + this.nodeVisitor(node.right);
		}
		if (node.op.type === tokenTypes.MINUS) {
			return this.nodeVisitor(node.left) - this.nodeVisitor(node.right);
		}
		if (node.op.type === tokenTypes.MULT) {
			return this.nodeVisitor(node.left) * this.nodeVisitor(node.right);
		}
		if (node.op.type === tokenTypes.DIV) {
			return this.nodeVisitor(node.left) / this.nodeVisitor(node.right);
		}
	}

	visit_Number(node) {
		return node.value;
	}

	visit_UnaryOperator(node) {
		if (node.op.type === tokenTypes.PLUS) {
			return this.nodeVisitor(node.expr);
		}
		if (node.op.type === tokenTypes.MINUS) {
			return -1 * this.nodeVisitor(node.expr);
		}
	}
}
