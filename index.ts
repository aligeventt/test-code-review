const world = 'world';

function f<T>(a1: T, a2: T, a3: T): boolean {
    return a2 <= a1 && a1 <= a3;
}

export function x(who: string = world): string {
    return `Hello ${who}! `;
}


console.log('Hello world!' === x());
console.log('Hello world!' === x('world'));
console.log(f(1, 2, 3))
