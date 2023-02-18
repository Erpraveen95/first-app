
const http = require('http')

const server = http.createServer((req,res)=>{
   const url = req.url
   
   if(url === '/home'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>This is My webpage</title></head>')
        res.write('<body><h1>Welcome Home<h1>')
        res.write('<form action="/about" method="POST"><input type="text"><button type"submit">go to about</button></form></body>')
        res.write('<form action="/node" method="POST"><input type="text"><button type"submit">go to node</button></form></body>')
        res.write('<form action="/home" method="POST"><input type="text"><button type"submit">go to Home</button></form></body>')

        res.write('</html>')
        res.end()
        //process.exit()
   }else if(url === '/about'){
            res.setHeader('Content-Type','text/html')
            res.write('<html>')
            res.write('<head><title>This is My webpage</title></head>')
            res.write('<body><h1>Welcome to About Us page<h1>')
            res.write('<form action="/about" method="POST"><input type="text"><button type"submit">go to about</button></form></body>')
             res.write('<form action="/node" method="POST"><input type="text"><button type"submit">go to node</button></form></body>')
             res.write('<form action="/home" method="POST"><input type="text"><button type"submit">go to home</button></form></body>')
            res.write('</html>')
            res.end()
   }else if(url === '/node'){
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>This is My webpage</title></head>')
    res.write('<body><h1>Welcome to my Node Js project<h1>')
    res.write('<form action="/node" method="POST"><input type="text"><button type"submit">go to node</button></form></body>')
    res.write('<form action="/home" method="POST"><input type="text"><button type"submit">go to home</button></form></body>')
    res.write('<form action="/about" method="POST"><input type="text"><button type"submit">go to about</button></form></body>')
    res.write('</html>')
    res.write('</html>')
    res.end()
   }

})
server.listen(4000)



