// __tests__/index.test.ts
import sayHello from '../src';

test('sayHello returns the correct greeting', () => {
    expect(sayHello('World')).toBe('Hello, World!');
    expect(sayHello('Alice')).toBe('Hello, Alice!');
});
