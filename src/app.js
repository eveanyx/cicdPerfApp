const express = require('express')
const app = express()
const version = process.env.VERSION || 'local'

let count = 0;
const errorRate =10;
const getMessage = () => {
    const message = `Hello World! \n Version ${version}`
    const goodMessage = message.startsWith("Hello")

    if (goodMessage){
        return message
    }
} 

app.get('/',(req,res)=>{

    const message = getMessage()
    if (count % errorRate != 0){
        res.send(message)
        count++
    }
    else{
        const errorMessage = "Oops";
        res.status(400).send(errorMessage)
        //count = 0;
        count++
    }

})

module.exports = app;