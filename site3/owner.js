function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min
}

console.log(getRandomBetween(10, 42))