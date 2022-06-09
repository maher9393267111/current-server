require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()






// routes paths
const userRouter = require('./routes/userRouter')
const categoryRouter = require('./routes/categoryRouter')
const uploadRouter = require('./routes/upload')




app.use(express.json())
// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));


app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))


//app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));


// Routes
 app.use('/user', userRouter)
 app.use('/api', categoryRouter)
  app.use('/api', uploadRouter)
// app.use('/api', require('./routes/productRouter'))
// app.use('/api', require('./routes/paymentRouter'))




// connect to mongoose



mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
     
    })
    .then(() => console.log('DB Connected'));






//PORT 

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})