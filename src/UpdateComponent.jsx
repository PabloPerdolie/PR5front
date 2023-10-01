import axios from "./axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function UpdateComponent() {
    const { id } = useParams()
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [quantity, setQuantity] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("/getComponent/" + id)
            .then(result => {
                // console.log(result)
                setName(result.data.name)
                setPrice(result.data.price)
                setQuantity(result.data.quantity)
            })
            .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault()
        axios.put("/updateComponent/" + id, { name, price, quantity })
            .then(result => {
                console.log(result)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update component</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter name"
                            className="form-control" defaultValue={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Price</label>
                        <input type="number" placeholder="Enter price"
                            className="form-control" defaultValue={price}
                            onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Quantity</label>
                        <input type="number" placeholder="Enter quantity"
                            className="form-control" defaultValue={quantity}
                            onChange={(e) => setQuantity(e.target.value)} />
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateComponent;