// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: boolean[]

let d = {age: number};
// A: This should technically be d: {age: number} = {age: 10};, right?

let e = [3]
// A: number[]

let f;
// A: any

let g = []
// A: any[]



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: Didn't include releaseYear in the actual declaration of values, or you didn't make releaseYear optional by doing releaseYear?: number

let prices = [100, 200, 300];
prices[0] = '$100';
// A: Attempting to reassign an index in an array with a type of number to a type of string

function myFunc(a: number, b: number): number {}
// A: Says that a number will be returned for the function, but no return is included in the function