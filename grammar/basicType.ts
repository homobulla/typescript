// boolean
let idDone: Boolean = true

// number
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744

// strgin
let Str: string = 'feng'

// array
let list: number[] = [1, 2, 3]
let otherList: Array<any> = [1, 2, {}]

// tuple
let tup: [string, number, string]

// 枚举 枚举是为一组数据赋予有好的名字。
enum Color {
    Red = 1,
    Green,
    Blue = 66
}
let colorName: string = Color[2] //可以由枚举的值得到它的名字。
console.log(colorName, list)
//any //去除类型检测
let a: any
let notSure: any = 4
notSure.ifItExists() // okay, ifItExists might exist at runtime
notSure.toFixed() // okay, toFixed exists (but the compiler doesn't check)

// Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法
let prettySure: Object = 4

let list2: any[] = [1, '2', {}]

// 空值 void undefined null
const warnUser = (param: string) => {
    console.log('demo')
}

let unusable: void = undefined

// Object
declare function create(o: object | null): void
create({ prop: 0 }) // OK
create(null) // OK

// 类型断言
// 类型断言是在我比ts更知道变量类型时使用，直接告诉ts跨过类型检查
// 没有运行时的影响，所以有啥意义？？？？？？？

let someValue: string = 'this is a string!'
// 尖括号法
let strLength: number = (<string>someValue).length
// as
let strLengthAs: number = (someValue as string).length
