// Simple implementation of pipe from: https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d
export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
