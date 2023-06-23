import { render } from "react-dom";
import { App } from "./components/App";
import type { Fuga, Hoge } from "./types/Types";

const rootElement = document.getElementById('root')
render(<App />, rootElement)

type User = {
  name: string
  age: number
  email: string
}

type UserKey = keyof User

const key1: UserKey =  'name'
const key2: UserKey =  'age'
const key3: UserKey =  'email'
// compile error
// const key4: UserKey =  'hoge'

function getProperty<T, K extends keyof T>(obj: T, key:K): T[K] {
  return obj[key]
}

const user: User = {
  name: 'Takuya',
  age: 36,
  email: 'test@example.com'
}

const userName = getProperty(user, 'name')
console.log(userName)

// compile error
// const userGender = getPropety(user, 'gender')
// console.log(userGender)

let hoge: Hoge = {name: "aaa"}
let fuga: Fuga = {index: 1}

let piyo: Readonly<User> = {name: "piyo", age:20, email:"piyo@piyo"}
// compile error
// piyo.name = "piyopiyo"

type ReadonlyUser = {
  readonly name: string
}
let piyopiyo: ReadonlyUser = {name: "piyopiyo"}
// compile error
// piyopiyo.name = "hoge"

function promiseFunc(msg: string): Promise<{success: string}> {
  console.log("promiseFunc")
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({success: msg})
    }, 3000)
  })
}

async function asyncFunc(msg: string): Promise<string> {
  console.log("asyncFunc")
  const result = await promiseFunc(msg)
  return `result: ${result.success}`
}

(async () => {
  const result = await asyncFunc("asyncFunc()で呼び出し")
  console.log(result)
})()

asyncFunc(".then()構文で呼び出し").then(result => console.log(result))