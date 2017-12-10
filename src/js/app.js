const { sayHelloTo } = require('./hello.js');

const span = document.createElement('span');
span.innerText = sayHelloTo('Ingrid Medeiros');

document.body.appendChild(span);