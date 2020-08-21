const express =require('express')


const app=express()

srv= app.listen(4000)
app.set('view engine','ejs')
app.use(express.static('public'))
app.use('/peerjs',require('peer').ExpressPeerServer(srv,{debug:true}))

app.get('/',(req,res)=>{
    res.render('room')
})

app.get('/:room',(req,res)=>{
    res.render('room',{roomId:req.params.room})
})