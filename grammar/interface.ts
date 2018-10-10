const printLabel: any = (labelledObj: { label: string }) => {
    console.log(labelledObj.label)
}

let myObj = { size: 10, label: 'Size 10 Object!' }
printLabel(myObj)

// interface 接口
// 所谓的接口是更大范围的一个类型判断，对接口类型以及key都做了检验，只要存在并类型符合即可。
interface labelValue {
    label: string
}
const printLabel2 = (labelledObj: labelValue) => {
    console.log(labelledObj.label)
}
const Obj = { size: 10, labels: 'size 10' }
// printLabel2(Obj) // 转成js 不报错，输出undefined

//[ts]
// 类型“{ size: number; labels: string; }”的参数不能赋给类型“labelValue”的参数。
// 类型“{ size: number; labels: string; }”中缺少属性“label”。
// const Obj: {
//   size: number;
//   labels: string;
// }

// 可选属性 即有些接口属性不是必须的，用？表示：
interface SquareConfig {
    color?: string
    width?: number
}
const demo = (config: SquareConfig): { color: string; area: number } => {
    let newSquare = { color: 'white', area: 100 }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}
let mySquare = demo({ color: 'black' })
console.log(mySquare)

// 只读属性，类似于Object.freeze
// readonly

interface Point {
    readonly x: number
    readonly y: number
}
let changsha: Point = { x: 10, y: 20 }

// 数组在这里，将所有改变原数组的方法都去掉。
let arr: number[] = [1, 2, 3, 4, 5]
let arrFreeze: ReadonlyArray<number> = arr
// arrFreeze[0] = 2 // [ts] 类型“ReadonlyArray<number>”中的索引签名仅允许读取。

// 额外的属性检查
// 即前面的 line[19]error, 绕开检查
let mySquares = demo({ width: 100, opacity: 0.5 } as SquareConfig)

// better 添加签名索引
interface SquareConfig {
    color?: string
    width?: number
    [propName: string]: any //
}

// 函数类型

// 可索引签名
interface StringArray {
    [index: number]: string
}

let myArray: StringArray
myArray = ['Bob', 'Fred']

let myStr: string = myArray['1']
console.log(myStr)

class Animal {
    name: string
}
class Dog extends Animal {
    breed: string
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
    [x: string]: Animal
    [x: number]: Dog
}
