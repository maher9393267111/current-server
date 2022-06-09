const Users = require('../models/userModal')

const authAdmin = async (req, res, next) =>{
    try {
        // Get user information by id
        const user = await Users.findOne({
            _id: req.user.id
        })
        console.log(user.role)
        if(user.role === 0)
     
          { 
            console.log('admin not allowed' , user.role)
              
            return res.status(400).json({msg: "Admin resources access denied"})
     
          
    }

   
         if (user.role === 1) {
             console.log('admin allowed' , user.role)
            next()
        }
    
      
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = authAdmin