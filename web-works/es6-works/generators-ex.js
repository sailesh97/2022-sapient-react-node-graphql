function* generator(val) {
    yield val;
    yield val +1; 
}

const gen = generator(100); 
console.log(gen);

console.log(gen.next().value);
console.log(gen.next().value);