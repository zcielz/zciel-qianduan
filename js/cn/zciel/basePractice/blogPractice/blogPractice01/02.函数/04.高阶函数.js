function add(x, y, f) {
    return f(x) + f(y);
}

var x = add(-5, 6, Math.abs);
console.log(x);