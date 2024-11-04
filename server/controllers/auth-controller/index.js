const User = require ('../../models/User')
const bcrypt= require('bcryptjs')
const registerUser= async(req,res)=>{
    try{
        const {name,email, password,role}= req.body;

        const existingUser = await User.findOne({
            $or: [{name},{email}],
        });
        if(existingUser){
            
            return res.status(400).json({
                success:false,
                message: 'User already exists'
            });
        }

        const hashPassword = await bcrypt.hash(password,10);
        const newUser=new User({name,email, password:hashPassword,role});
        await newUser.save();
        return res.status(201).json({
            success: true,
            message: 'User registered successfully'
        });
    }catch(error){
        res.status(400).json({message:error.message});
    }
}

module.exports=registerUser;