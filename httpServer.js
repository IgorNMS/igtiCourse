import http from "http";

//iniciar um servidor http.
http.createServer((req, res)=>{
    if((req.method === "GET")&&(req.url === "/teste")){
        res.write("Get /teste sucesso");
    }else {
        res.write("Hello World!");
    }
    res.statusCode = 200;
    res.end();
}).listen(8080);