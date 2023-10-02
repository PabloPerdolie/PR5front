import axios from "./axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateComponent() {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [quantity, setQuantity] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault()
        axios.post("/createComponent", { name, price, quantity })
            .then(result => {
                console.log(result)
                navigate("/")
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Add component</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter name" className="form-control"
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Price</label>
                        <input type="number" placeholder="Enter price" className="form-control"
                            onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Quantity</label>
                        <input type="number" placeholder="Enter quantity" className="form-control"
                            onChange={(e) => setQuantity(e.target.value)} />
                    </div>

                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateComponent;