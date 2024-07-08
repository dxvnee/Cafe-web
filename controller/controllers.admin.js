import Admin from '../model/model.admin.js';

const login = async (req, res) => {
    try {
        const { name, password } = req.body;

        if (!name || !password){
            return res.send(200).json({message: 'Please enter name and password'});
        }
        
        const currentAdmin = await Admin.findOne(
            {
                name: name
            }
        );
        
        if(currentAdmin.password !== password){
            res.send(200).json({message: 'Password is not match'});
        } else {
            res.send(200).json({message: 'Login successfully'});
            res.json(currentAdmin);
        } 

    } catch (error) {
        res.send(200).json({message: error.message})
    }
}

const createAdmin = async (req, res) => {
    try {
        const { name, password } = req.body;  
        const admin = await Admin.findOne({
            name: name
        })

        if (admin != null){
            res.send(200).json({ message: "Admin already exists" });
        }

        const newUser = new Admin({
            name: name,
            password: password            
        })

        await newUser.save();
        res.send(200).json({ newUser })

    } catch (error) {
        res.send(200).json({message : error.message});
    }
}

const getAllAdmin = async (req, res) => {
    try {
        const allAdmin = await Admin.find();
        
        res.senda(200).json(allAdmin);

    } catch (error) {
        res.send(200).json({ message: error.message})
    }
}


export {
    login,
    createAdmin,
    getAllAdmin
}