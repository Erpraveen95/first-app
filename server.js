
const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('My name is Praveen')
})
server.listen(4000)

setTimeout(()=>{    
    console.log(`Stopping server...`)
    server.close()
},10000)
ad