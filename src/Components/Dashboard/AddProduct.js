import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import RouteConstants from '../../RoutesConstant';
import Logo from './Logo';

export default function AddProduct() {

    let navigate = useNavigate();

    let [title, setTitle] = useState("");

    let [price, setPrice] = useState("");

    let [description, setDescription] = useState("");

    let [category, setCategory] = useState("");

    let [image, setImage] = useState("");

    let [data, setData] = useState("");

    let [error, setError] = useState("");

    let [isPending, setIsPending] = useState(true);

    useEffect(() => {

        fetch("http://localhost:8000/categories")

            .then((response) => {

                if (!response.ok) {

                    throw new Error(response.status);

                };

                return response.json();

            })

            .then((data) => {

                setData(data);

                setIsPending(false);

            })

            .catch((error) => {

                setError(error);

                setIsPending(false);

            });

    }, []);

    let handleSubmit = (e) => {

        e.preventDefault();

        fetch(" http://localhost:8000/products", {

            method: "POST",

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
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="card-body bg-light">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Enter Your Product Title</label>
                            <input type="text"
                                className="form-control"
                                id="Text"
                                onChange={(e) => { setTitle(e.target.value) }}
                                placeholder="Enter Your Product Title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Enter Your Product Price</label>
                            <input type="number"
                                className="form-control"
                                id="Number"
                                onChange={(e) => { setPrice(e.target.value) }}
                                placeholder="Enter Your Product Price" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Enter Your Product Description</label>
                            <textarea
                                rows="8"
                                className="form-control"
                                id="exampleInputPassword1"
                                onChange={(e) => { setDescription(e.target.value) }}
                                placeholder="Enter Your Product Description" />
                        </div>
                        {isPending && <h1>Loading...</h1>}
                        {error && <h1>{error}</h1>}
                        <div className="form-group" onChange={(e) => { setCategory(e.target.value) }}>
                            <label htmlFor="exampleInputPassword1">Select Your Product Category</label>
                            <select className="form-control" placeholder="Enter Your Product Category">
                                {data && data.map((category) =>
                                (
                                    <option>{category.title}</option>
                                )
                                )}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputFile">Enter Your Product Image URL</label>
                            <input type="text"
                                onChange={(e) => { setImage(e.target.value) }}
                                className="form-control"
                                id="Text"
                                placeholder='Enter Your Product Image URL' />
                        </div>
                    </div>
                    <div className="card-footer" style={{ backgroundColor: "navy" }}>
                        <button type="submit" className="btn btn-outline-light">Add Product</button>
                    </div>
                </form>
            </div>
        </>
    )
}
