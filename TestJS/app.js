const express = require('express')
const app = express()

app.get('/html', (req, res)=> {
    res.send('<h1>Test</h1>');
})

app.get('/json', (req, res)=> {
    res.json({success:200 , message: 'test'});
})

app.listen(5000, ()=>{
})