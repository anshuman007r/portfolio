import  {auth}  from '../authentication/authData'

exports.checkAuth = (req, res) => {
    try{
        if(req.body && req.body.email && req.body.password){
            let reqEmail = req.body.email
            let reqPassword = req.body.password
            if(reqEmail === auth.email && reqPassword === auth.password){
                res.json('Login successfully')
            }else if( reqEmail !== auth.email){
                res.status(400).send(`${reqEmail} is invalid email id`)
            }else{  
                res.status(400).send('The password you have enter is incorrect. Please enter the valid password')
            }
        }else{
            res.status(400).send('Invalid request')
        }
    }catch(err){
        console.log(err)
    }
};