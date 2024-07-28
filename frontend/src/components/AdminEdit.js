import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { saveAdmin } from '../services/ApiService';

const AdminEdit = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        getAdminById();
    }, []);

    const getAdminById = async() => {
        const response = await axios.get(`http://localhost:3007/admin/${id}`);
        setName(response.data.name);
        setPassword(response.data.password);
    } 

    const updateAdmin = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3007/admin/${id}`, {
                name,
                password
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        } 
    }

    return (
        <div className="Columns"> 
            <div className="column is-half">
                <form onSubmit={ updateAdmin }>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input
                                type="text" 
                                className="input" 
                                value={ name }
                                onChange={ (e) => setName(e.target.value) } 
                                placeholder='Name'
                            /> 
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input
                                type="password" 
                                className="input" 
                                value={ password }
                                onChange={ (e) => setPassword(e.target.value) } 
                                placeholder='Password'
                            /> 
                        </div>
                    </div>

                    <div className="field">
                        <div className = "control">
                            <button className="button is-success">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminEdit;