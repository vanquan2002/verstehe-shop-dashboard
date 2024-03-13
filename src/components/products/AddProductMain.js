import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createProduct } from "./../../redux/actions/ProductActions";
import { PRODUCT_CREATE_RESET } from "./../../redux/constants/ProductConstants";
import Toast from "./../loadingError/Toast";
import Loading from "./../loadingError/Loading";
import Message from "./../loadingError/Error";
import useDrivePicker from "react-google-drive-picker";

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

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(createProduct(name, price, description, image, countInStock));
  };

  const [openPicker, authResponse] = useDrivePicker();
  const handleOpenPicker = () => {
    openPicker({
      clientId: process.env.REACT_APP_DRIVE_PICKER_CLIENT_ID,
      developerKey: process.env.REACT_APP_DRIVE_PICKER_DEVELOPER_KEY,
      viewId: "DOCS",
      token:
        "ya29.a0Ad52N38og2MIxJ89GOftNlw3r8YMKFdN6bjcZWOwd1k40KHgTss0y9Dv-A1Xgld47tfZ8Jl6Is0G7jLtiaGeUFtRLM2WlFPFbs-Hf8F-8IieiDpjihTSkMj8l63GFfcdgT5X9jJ521uELwfvc17FEgBAkOsPgBb2JixNaCgYKAfsSARMSFQHGX2MiU6TF-LlGynjXesdvaw7ojA0171",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      callbackFunction: (data) => {
        if (data.action === "picked") {
          let idImg = `https://lh3.googleusercontent.com/d/${data.docs[0].id}`;
          setImage(idImg);
        }
      },
    });
  };

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

          {image ? (
            <img width={"20%"} src={image} alt="loading img..." />
          ) : (
            <p>Chose image</p>
          )}

          <p onClick={() => handleOpenPicker()}>Open Picker</p>
        </form>
      </div>
    </>
  );
};

export default AddProductMain;
