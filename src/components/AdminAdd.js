import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveAdmin } from '../services/ApiService';

const AdminAdd = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const saveAdmin = async (e) => {
        try {
            e.preventDefault();
            await axios.post("http://localhost:3007/admin", {
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
                <form onSubmit={ saveAdmin }>
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

export default AdminAdd;