class Person {
    Constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    say() {
        return '我是' + ${this.name}', 我今年' + ${this.age} +'岁了.';
    }
}

export default Person;