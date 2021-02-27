import {config} from './modules/config'
import App from './modules/app.component'
import './modules/header.component'

let app = new App('Hello')
app.log()

console.log(config.item)