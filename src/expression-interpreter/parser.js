import { BinaryOperator, Number, UnaryOperator } from './nodes';
import { tokenTypes } from './token';
import { Token } from './token';

export class Parser {
  constructor(lexer) {
    this.lexer = lexer;
    this.current_token = this.lexer.get_next_token();
  }

  token_error(text) {
    throw new Error(text);
  }

  eat(token_type) {
    if (this.current_token.type === token_type) {
      this.current_token = this.lexer.get_next_token();
    } else {
      this.token_error('Invalid token detected');
    }
  }

  factor() {
    const token = new Token(this.current_token.type, this.current_token.value);
    if (token.type === tokenTypes.PLUS) {
      this.eat(tokenTypes.PLUS);
      const node = new UnaryOperator(token, this.factor());
      return node;
    }
    if (token.type === tokenTypes.MINUS) {
      this.eat(tokenTypes.MINUS);
      const node = new UnaryOperator(token, this.factor());
      return node;
    }
    if (token.type === tokenTypes.INTEGER) {
      this.eat(tokenTypes.INTEGER);
      const node = new Number(token);
      return node;
    }
    if (token.type === tokenTypes.LPARAN) {
      this.eat(tokenTypes.LPARAN);
      const node = this.expr();
      this.eat(tokenTypes.RPARAN);
      return node;
    }
  }

  term() {
    let node = this.factor();
    while (
      this.current_token.type === tokenTypes.MULT ||
      this.current_token.type === tokenTypes.DIV
    ) {
      const token = new Token(this.current_token.type, this.current_token.value);
      if (token.type === tokenTypes.MULT) {
        this.eat(tokenTypes.MULT);
      } else if (token.type === tokenTypes.DIV) {
        this.eat(tokenTypes.DIV);
      }
      node = new BinaryOperator(node, token, this.factor());
    }
    return node;
  }

  expr() {
    let node = this.term();
    while (
      this.current_token.type === tokenTypes.PLUS ||
      this.current_token.type === tokenTypes.MINUS
    ) {
      const token = new Token(this.current_token.type, this.current_token.value);
      if (token.type === tokenTypes.PLUS) {
        this.eat(tokenTypes.PLUS);
      } else if (token.type === tokenTypes.MINUS) {
        this.eat(tokenTypes.MINUS);
      }
      node = new BinaryOperator(node, token, this.term());
    }
    return node;
  }

  parse() {
    const ast = this.expr();
    return ast;
  }
}
