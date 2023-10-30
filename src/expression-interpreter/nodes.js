export class Number {
  constructor(token) {
    this.token = token;
    this.value = token.value;
  }
}

export class BinaryOperator {
  constructor(left, op, right) {
    this.left = left; //Left Node
    this.op = op; //Operator Token
    this.right = right; //Right Node
  }
}

export class UnaryOperator {
  constructor(op, expr) {
    this.op = op; //Operator Token
    this.expr = expr; //Connected node
  }
}
