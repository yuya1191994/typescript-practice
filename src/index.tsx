import { render } from "react-dom";
import { App } from "./components/App";

const rootElement = document.getElementById('root')
render(<App />, rootElement)

interface User {
  name: string
  sotial?: {
    facebook: boolean
    twitter: boolean
  }
}

let user: User

user = {name: 'Yuya', sotial: {facebook: true, twitter: true}}

console.log(user)

user = {name: 'Yuya'}

console.log(user.sotial?.facebook)