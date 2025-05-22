const User = require('../models/user');

exports.createAdmin = async (req,res)=>{
    try{
        const {name, email, password, role } = req.body;
        const user = new User({name, email, password, role});
        await user.save();
        res.status(201).json({message: 'Admin created succesfully', user})
    }
    catch{
        res.status(500).json({error: 'Failed to create admin', details: err.message})
    }
};