export const tokenTypes = {
  INTEGER: 'INTEGER',
  PLUS: 'PLUS',
  MINUS: 'MINUS',
  MULT: 'MULT',
  DIV: 'DIV',
  LPARAN: 'LPARAN',
  RPARAN: 'RPARAN',
  EOF: 'EOF',
};

export function Token(type, value) {
  this.type = type;
  this.value = value;
}
