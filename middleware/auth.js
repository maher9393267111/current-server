const jwt = require('jsonwebtoken')

const auth = (req, res, next) =>{
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];
        if (token == null) return res.sendStatus(401);
        
       
        if(!token) return res.status(400).json({msg: "Invalid Authentication"})
//console.log('token:------> ', token)
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
            if(err) return res.status(400).json({msg: "Invalid Authentication"})

            req.user = user
            console.log('user:------> ', user)
            next()
        })
    } catch (err) {
        console.log('err:------> ', err)
        return res.status(500).json({msg: err.message})
    }
}

module.exports = auth