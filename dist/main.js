"use strict";
// function identity<T>(arg: T): T {
//     return arg;
// }
// const myHobbies = identity<string[]>(["suzish", "kitob o'qish"])
// function findMaxEl<T extends string | number>(arr: T[]): T | null {
//     if(arr.length) {
//         let maxEl: T = arr[0];
//         for(const item of arr) {
//             if(maxEl < item) {
//                 maxEl = item
//             }
//         }
//         return maxEl
//     }
//     return null
// }
// const numberArr = identity<number[]>([11, 11, 90, 1, 2])
// const stringArr = identity<string[]>(["suzish", "kitob o'qish", "dam olish"])
// const plainVal = identity<number[]>([])
// // console.log(findMaxEl(stringArr), '1-holat')
// // const car {brand: "Toyota", model: }
// type MyLiteral = "car" | true | 56;
// interface Tree {
//     name: string
//     type: string
//     height: number
// }
// type TreeKeysType = keyof Tree | "olma";
// const myTreeKeys: TreeKeysType = "olma";
// funciton getCarPrototype<T, K extends keyof T> (obj: Text, key: K): T[K] (
//     return obj[key]
// )
// fibonaci
// // 2 masala
// type odam = {
//     ismi: string;
//     yoshi: number;
//     kasbi: string;
// };
// const inson: odam = {
//     ismi: "eshmat",
//     yoshi: 89,
//     kasbi: "shafyor"
// };
// function getInfo<T extends odam>(odam: T) {
//     return (`Ism: ${odam.ismi}, Yosh: ${odam.yoshi}, Kasb: ${odam.kasbi}`);
// }
// console.log(getInfo(inson));
// interface Car {
//     title: string;
//     model: string;
//     year: number;
// }
// function getInfo(car: Car): void {
//     console.log(`title${car.title} ${car.model} year ${car.year}.`);
// }
// const myCar: Car = {
//     title: 'porsche',
//     model: '911',
//     year: 2018
// };
// getInfo(myCar);
// 4 masala
// type Sum = (x:number, y:number) => number;
// const sum: Sum = (x, y) => {
//     return x + y;
// };
// let natija = sum(34, 43);
// console.log(`Natija : ${natija}`);
// type Id<T> = {
//     value T;
// }
// let text: Id<string> = {
//     value: "hellooo"
// }
