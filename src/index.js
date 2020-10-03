// // Hello World sin react (vanilla js)
// const element = document.createElement('h1');

// element.innerText = 'Hello World! with Vanilla JavaScript';

// // div con id 'root' ubicado en el archivo index.html
// const container = document.getElementById('root');

// container.appendChild(element);


// Hello world con React
// Importando librería React
import React from 'react';
// ReactDOM proporciona los métodos específicos que permiten controlar el dom
import ReactDOM from 'react-dom';
// Importar Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

import App from './components/App'

// const name = 'Raul'

// const user = {
//   firstName: 'Raul',
//   lastName: 'Palacios',
//   avatar: 'https://cdn4.iconfinder.com//data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'
// }

// function getName(user) {
//   return `${user.firstName} ${user.lastName}`
// }

// function getGreeting(user) {
//   if(user) {
//     return <h2>Hello {getName(user)}</h2>
//   }
//   return <h2>Hello stranger</h2>
// }

// Sintaxis JSx
// Renderizando variable name
// const element = <h1>Hello {name}</h1>

// Renderizando función getName(user)
// const element = <div>{getName(user)}</div>

// Renderizando función getGreeting(user)
// const element = <div>{getGreeting(user)}</div>

// Renderizando propiedad avatar del objeto user
// const element = <img src={user.avatar}/>

// Utilizando elementos hijos con JSx
// const element = (
//   <div>
//     <h1>{getGreeting(user)}</h1>
//     <img src={user.avatar}/>
//   </div>
// )

const container = document.getElementById('root')
// ReactDOM.render(element, container)


// Mandar propiedades a un componente a través de props
ReactDOM.render(<App/>, container)


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
