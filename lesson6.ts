import {IUser} from "./someInterface.interface";

const user: IUser = {name: 'Max',age: 18,gender: 'male'}

const sum = (a: number, b: number): number => {
    return a + b;
}

const showSum = (a: number, b: number): void => {
    console.log(a + b)
}

const incAge = (someUser: IUser, inc: number): IUser => {
    someUser.age += inc;
    return someUser;
}

console.log(sum(1, 2));
showSum(2, 3);
console.log(incAge(user, 2));
