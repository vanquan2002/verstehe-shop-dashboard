import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createProduct } from "./../../redux/actions/ProductActions";
import { PRODUCT_CREATE_RESET } from "./../../redux/constants/ProductConstants";
import Toast from "./../loadingError/Toast";
import Loading from "./../loadingError/Loading";
import Message from "./../loadingError/Error";

const AddProductMain = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const toastObject = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  const dispatch = useDispatch();
  const productCreate = useSelector((state) => state.productCreate);
  const { loading, product, error } = productCreate;

  useEffect(() => {
    if (product) {
      toast.success("Product Added!", toastObject);
      dispatch({ type: PRODUCT_CREATE_RESET });
      setName("");
      setPrice(0);
      setImage("");
      setCountInStock(0);
      setDescription("");
    }
  }, [product, dispatch]);

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(createProduct(name, price, description, image, countInStock));
  };

  return (
    <>
      <Toast />
      <div>
        <form
          onSubmit={submitHandle}
          className="border-2 border-indigo-600 m-2 p-2"
        >
          <div className="flex gap-36">
            <p className="border-2 border-indigo-600 m-2 p-2">Go to product</p>
            <p>Add product</p>
            <button
              type="submit"
              className="border-2 border-indigo-600 m-2 p-2"
            >
              Publish now
            </button>
          </div>
          {loading && <Loading />}
          {error && <Message variant="alert-danger">{error}</Message>}
          <p>Product title:</p>
          <input
            className="border-2 border-indigo-600 m-2 p-2"
            type="text"
            placeholder="Type here"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>Price:</p>
          <input
            className="border-2 border-indigo-600 m-2 p-2"
            type="text"
            placeholder="Type here"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <p>Count In Stock:</p>
          <input
            className="border-2 border-indigo-600 m-2 p-2"
            type="text"
            placeholder="Type here"
            required
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
          />
          <p>Description:</p>
          <input
            className="border-2 border-indigo-600 m-2 p-2"
            type="text"
            placeholder="Type here"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <p>Images:</p>
          <input
            className="border-2 border-indigo-600 m-2 p-2"
            type="text"
            placeholder="Enter Image URL "
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input className="border-2 border-indigo-600 m-2 p-2" type="file" />
        </form>
      </div>
    </>
  );
};

export default AddProductMain;
