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

export {
    login
}