import Admin from '../model/model.admin.js';

const login = async (req, res) => {
    try {
        const { name, password } = req.body;

        if (!name || !password){
            return res.status(200).json({message: 'Please enter name and password'});
        }
        
        const currentAdmin = await Admin.findOne(
            {
                name: name
            }
        );
        
        if(currentAdmin.password !== password){
            res.status(200).json({message: 'Password is not match'});
        } else {
            res.status(200).json({message: 'Login successfully'});
            res.json(currentAdmin);
        } 

    } catch (error) {
        res.status(200).json({message: error.message})
    }
}

const createAdmin = async (req, res) => {
    try {
        const { name, password } = req.body;  
        const admin = await Admin.findOne({
            name: name
        })

        if (admin != null){
            res.status(200).json({ message: "Admin already exists" });
        } else {
            const newUser = new Admin({
                name: name,
                password: password            
            })
    
            await newUser.save();
            res.status(200).json({ newUser })
        }


    } catch (error) {
        res.status(200).json({message : error.message});
    }
}
const deleteAdmin = async (req, res) => {
    try{
        const id = req.params.id;

        const deleteAdmin = await Admin.findOneAndDelete({
            _id: id
        })

        if (deleteAdmin == null){
            res.status(200).json({message: "Admin not found"});
        } else {
            res.status(200).json({
                message: "Admin deleted successfully",
                deleteAdmin
            });
        }

    } catch (error){
        res.status(200).json({message: error.message})
    }
}

const getAllAdmin = async (req, res) => {
    try {
        const allAdmin = await Admin.find({});
        
        res.status(200).json(allAdmin);

    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}


export {
    login,
    createAdmin,
    getAllAdmin,
    deleteAdmin
}