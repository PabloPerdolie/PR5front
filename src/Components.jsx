import axios from "./axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Components() {
    const [components, setComponents] = useState([])

    useEffect(() => {
        axios.get("")
        .then(result => setComponents(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete("/deleteComponent/" + id)
        .then(res => {
            console.log(res)
            window.location.reload()
        } )
        .catch(err => console.log(err))
    }
    return (
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className="btn btn-success">Add component</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            components.map((component) => {
                                return <tr key={component._id}>
                                    <td>{component.name}</td>
                                    <td>{component.price}</td>
                                    <td>{component.quantity}</td>
                                    <td>
                                        <Link to={`/update/${component._id}`} className="btn btn-success">Edit</Link>
                                        <button className="btn btn-danger" onClick={(e) => handleDelete(component._id)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Components;