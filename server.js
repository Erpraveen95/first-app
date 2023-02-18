
const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
   const url = req.url
   const method = req.method;
   if(url === '/'){
        fs.readFile("message.txt",{encoding:'utf-8'},(err,data)=>{
            console.log(err)
            res.write('<html>')
            res.write('<head><title>This is My webpage</title></head>')
        
            res.write('<body><h1>Welcome Home<h1>')
            res.write(`<span>${data}<span>`)
            res.write('<form action="/message" method="POST"><input type="text" name = "message"><button type"submit">go to about</button></form></body>')
            res.write('</html>')
            return res.end()
         //process.exit()
    })
   
} else if(url === '/message' && method==='POST'){
        const body =[]
        req.on('data',chunk =>{
            body.push(chunk)
        })
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            fs.writeFile('message.txt', message,err =>{
                console.log(err)
                res.statusCode = 302;
                res.setHeader('Location','/')
                return res.end()
            })
        })
    }
    else{
        res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>This is My webpage</title></head>')
    res.write('<body><h1>Welcome Home<h1>')
    res.write('</html>')
    res.end()
    }
})
server.listen(4000)




console.log("aaa")