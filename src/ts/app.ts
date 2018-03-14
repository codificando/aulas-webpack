import { sayHelloTo } from './hello.ts'

var module : any;
debugger;
const span = document.createElement('span');
span.innerText = sayHelloTo('Ingrid!');

document.body.appendChild(span);

if (module.hot) {
	module.hot.accept();
	module.hot.dispose(() => span.parentNode.removeChild(span));
}