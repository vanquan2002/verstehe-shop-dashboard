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
  const [images, setImages] = useState([]);
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [sizes, setSizes] = useState([]);
  const [color, setColor] = useState("");
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
    dispatch(
      createProduct(
        name,
        price,
        description,
        countInStock,
        images,
        sizes,
        color
      )
    );
  };
  console.log(color);
  const [openPicker, authResponse] = useDrivePicker();
  const handleOpenPicker = () => {
    openPicker({
      clientId: process.env.REACT_APP_DRIVE_PICKER_CLIENT_ID,
      developerKey: process.env.REACT_APP_DRIVE_PICKER_DEVELOPER_KEY,
      viewId: "DOCS",
      token:
        "ya29.a0Ad52N3_GFwr2diHo_EgVTxSbNow2qkCMJK8ap9y_6CColQaBNItfAUBr0b_RGr192ZON6wZQp3Smo8pexO2IYmQFnqw6-v_OuzxrOOtBQOtEGMiC8GW6m09UGD_hjjjRtoeyo3-_s325-T-mkyPqDnF73MhP2-5fNWJyaCgYKAeMSARMSFQHGX2Mic0nahRWdy8hbp749I0ccgA0171",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      callbackFunction: (data) => {
        if (data.action === "picked") {
          let idImg = `https://lh3.googleusercontent.com/d/${data.docs[0].id}`;
          setImages((prev) => [...prev, idImg]);
        }
      },
    });
  };

  const setSizeHandle = (text) => {
    const sizes = text.split(",");
    setSizes(sizes);
  };

  useEffect(() => {
    if (product) {
      toast.success("Product Added!", toastObject);
      dispatch({ type: PRODUCT_CREATE_RESET });
      setName("");
      setPrice(0);
      setCountInStock(0);
      setDescription("");
      setImages([]);
      setSizes([]);
      setColor("");
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
          <p>Sizes:</p>
          <input
            className="border-2 border-indigo-600 m-2 p-2"
            type="text"
            placeholder="Type here"
            required
            value={sizes}
            onChange={(e) => setSizeHandle(e.target.value)}
          />
          <p>Color:</p>
          <input
            className="border-2 border-indigo-600 m-2 p-2"
            type="text"
            placeholder="Type here"
            required
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <p>Images:</p>
          {images.length > 0 &&
            images.map((img, i) => (
              <img key={i} width={"20%"} src={img} alt="loading img..." />
            ))}
          <p onClick={() => handleOpenPicker()}>Chose images</p>
        </form>
      </div>
    </>
  );
};

export default AddProductMain;
