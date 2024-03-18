const a = 'x';
const b = 'y';
const c = 'z';

function f<T>(a1: T, a2: T, a3: T): boolean {
    return a2 <= a1 && a1 <= a3;
}

export function x(t: string = a): string {
    return `Hello ${t}! `;
}


console.log('Hello world!' === x());
console.log('Hello world!' === x('world'));
console.log(f(1, 2, 3))
