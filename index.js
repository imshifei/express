const express=require('express')
const http=require('http')
const app=express()

// app.use('/',(req,res)=>{
// 	res.end('hello my express demo')
// })

app.use((req,res,next)=>{
	req.duang=1;
	console.log('oh you got middleware no.1')
	next()
})
app.use((req,res)=>{
	console.log(`req.duang: ${req.duang}`)
	res.end('hello my express demo2')
})

const server=http.createServer(app)
server.listen('8888')