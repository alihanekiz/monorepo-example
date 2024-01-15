const { isEven }  = require('../dist/demo-is-even');

test('isEven', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(1)).toBe(false);
    expect(isEven(3)).toBe(false);
});