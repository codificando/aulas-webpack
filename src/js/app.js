const { sayHelloTo } = require('./hello.js');

const span = document.creatElement('span');
span.innerText = sayHelloTo('Java Script Developer');

document.body.appendChild(span);