const http = require('http');

http.createServer((req,res)=>{
    res.write('<h1>Hello Node!<h1/>');
    res.end('<p>Hello Server!</p>');
}).listen(4330,()=> {
    console.log('4330 포트에서 대기중입니다.');
});