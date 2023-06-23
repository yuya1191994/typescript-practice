import { render } from "react-dom";
import { App } from "./components/App";
import { Fuga, Hoge } from "./types/Types";

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