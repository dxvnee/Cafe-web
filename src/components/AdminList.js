import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getAdmin } from '../services/ApiService'

const AdminList = () => {

    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        try{ 
            const data = await getAdmin();
            console.log(data);
            setAdmin(data);
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className="columns">
            <div className="column is-half">
                <Link to="add" className="button is-success">Add New</Link>
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>Name </th>  
                            <th>Password </th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        { admin.map((user) => (
                            <tr key = { user._id }>
                                <td>{ user.name }</td>
                                <td>{ user.password }</td>
                                <td>
                                    <Link to = {`edit/${user._id}`}className="button is-info is-small">Edit</Link>
                                    <button className="button is-danger is-small">Delete</button>
                                </td>
                            </tr>
                        ))}
                    
                    </tbody>
                </table>      
        </div>
            AdminList
        </div>
    )
}

export default AdminList;