const jsonServer = require('json-server');
const server = jsonServer.create();
const router1 = jsonServer.router('bodyPartList.json');
const router2 = jsonServer.router('equipmentList.json');
const router3 = jsonServer.router('exercises.json');
const router4 = jsonServer.router('exercisesInRussian.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router1);
server.use(router2);
server.use(router3);
server.use(router4);

server.listen(port);