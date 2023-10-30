import { Lexer } from './lexer';
import { Parser } from './parser';
import { Interpreter } from './interpreter';

export function computeResult(expr) {
  const lexer = new Lexer(expr);
  const parser = new Parser(lexer);
  const interpreter = new Interpreter(parser);
  return interpreter.interpret();
}
