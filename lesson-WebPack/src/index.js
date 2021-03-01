import {config} from './modules/config'
import App from './modules/app.component'
import './modules/header.component'
import './css/index.css'
import './scss/index.scss'

let app = new App('Hello')
app.log()

console.log(config.item)