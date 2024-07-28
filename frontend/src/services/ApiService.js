import axios from 'axios';

const API_URL = 'http://localhost:3007';

const getAdmin = async() => {
    try{ 
        const response = await axios.get(`${API_URL}/admin`);
        console.log(response.data);
        return response.data;
    }catch(error){
        console.log(error);
    }
}

const deleteAdmin = async(id) => {
    try{ 
        const response = await axios.delete(`${API_URL}/${id}`);
        console.log(response.data);
        return response.data;
    }catch(error){
        console.log(error);
    }
}



export {
    getAdmin,
    deleteAdmin
}