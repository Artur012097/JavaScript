import {config} from './modules/config'
import App from './modules/app.component'
import './modules/header.component'
import './css/index.css'
import './scss/index.scss'
import axios from 'axios'

let app = new App('Hello')
app.log()

console.log(config.item)

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.data)
    .then((data) => {console.log(data)})