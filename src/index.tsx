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

function processUser(user?: User) {
  console.log(user!.name)
}


processUser(undefined)