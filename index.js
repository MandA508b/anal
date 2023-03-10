require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./routers/index')
const errorMiddleware = require('./middlewares/errorHandlingMidlleware')
const ApiError = require('./errors/api.error')
const userService = require('./services/user.service')
const PORT = 5000 || process.env.PORT

const app = express()

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(cookieParser())
app.use('/', router)
app.use(errorMiddleware)

async function start(){
    try{
        app.listen(PORT, ()=>{
            console.log(`server started on PORT: ${PORT}`)
        })
    }catch (e){
        throw  ApiError.internal('Непередбачувана помилка!')
    }
}

start()

let CronJob = require('cron').CronJob,
    job = new CronJob(// cron options + func
        '00 00 00 * * *',
        async function() {//func to null pageLimit everyday
            await userService.nullPageLimit()
        },
        null,
        true
    )