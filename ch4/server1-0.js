const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('<h1>Hello Node!<h1/>');
    res.end('<p>Hello Server!</p>');
});
server.listen(4330);
server.on('listening',()=> {
    console.log('4330 포트에서 대기중입니다.');
});
server.on('error',(error) => {
    console.error(error);
})