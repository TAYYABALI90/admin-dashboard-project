import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import RouteConstants from '../../RoutesConstant';
import Logo from './Logo';
import Spinner from './Spinner';

export default function EditProduct() {

    let { id } = useParams();

    let navigate = useNavigate();

    let [data, setData] = useState("");

    let [isPending, setIsPending] = useState(true);

    let [error, setError] = useState("");

    let [title, setTitle] = useState("");

    let [price, setPrice] = useState("");

    let [description, setDescription] = useState("");

    let [category, setCategory] = useState("");

    let [image, setImage] = useState("");

    useEffect(() => {

        fetch(`http://localhost:8000/products/${id}`)

            .then((response) => {

                if (!response.ok) {

                    throw new Error(response.status);

                }

                return response.json();

            })

            .then((data) => {

                setData(data);

                setIsPending(false);

            })

            .catch((error) => {

                setError(error);

                setIsPending(false);

            })

    });

    let handleSubmit = (e) => {

        e.preventDefault();

        fetch(`http://localhost:8000/products/${id}`, {

            method: "PATCH",

            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({ title, price, description, category, image })

        })

            .then((response) => {

                navigate(`/dashboard${RouteConstants.viewProduct}`);

            })

            .catch((error) => {

                setError(error.message);

            });

    };

    return (
        <>
            <div className="card">
                <div className="card-header" style={{ backgroundColor: "navy" }}>
                    <h3 className="card-title"><Logo></Logo></h3>
                </div>
                {isPending && <Spinner></Spinner>}
                {error && <h1>{error}</h1>}
                {data && <form onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Edit Your Product Title</label>
                            <input type="text"
                                className="form-control"
                                defaultValue={data.title}
                                id="Text"
                                onChange={(e) => { setTitle(e.target.value) }}
                                placeholder="Edit Your Product Title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Edit Your Product Price</label>
                            <input type="number"
                                className="form-control"
                                defaultValue={data.price}
                                id="Number"
                                onChange={(e) => { setPrice(e.target.value) }}
                                placeholder="Edit Your Product Price" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Edit Your Product Description</label>
                            <textarea
                                rows="8"
                                className="form-control"
                                defaultValue={data.description}
                                id="exampleInputPassword1"
                                onChange={(e) => { setDescription(e.target.value) }}
                                placeholder="Edit Your Product Description" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Edit Your Product Category</label>
                            <input type="text"
                                className="form-control"
                                defaultValue={data.category}
                                id="Text"
                                onChange={(e) => { setCategory(e.target.value) }}
                                placeholder="Edit Your Product Category" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputFile">Edit Your Product Image URL</label>
                            <input type="text"
                                className="form-control"
                                defaultValue={data.image}
                                id="Text"
                                onChange={(e) => { setImage(e.target.value) }}
                                placeholder='Edit Your Product Image URL' />
                        </div>
                    </div>
                    <div className="card-footer" style={{ backgroundColor: "navy" }}>
                        <button type="submit" className="btn btn-outline-light">Edit Product</button>
                    </div>
                </form>}
            </div>
        </>
    )
}
