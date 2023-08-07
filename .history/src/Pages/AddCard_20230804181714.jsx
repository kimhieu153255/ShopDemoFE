import axios from "axios";
import { useContext, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/Contexts/AuthContext";

const AddCard = () => {
  const [err, setErr] = useState();
  const { user, token } = useContext(AuthContext);
  const [tempImage, setTempImage] = useState();

  const [product, setProduct] = useState();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setTempImage(URL.createObjectURL(file));
    setProduct({ ...product, image: file });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("product", product);
    try {
      // upload image
      if (tempImage) {
        console.log("có ảnh");
        console.log(product.image);
        if (product.image.originalname === "avatar.avif") {
          console.log("có ảnh và đã có ảnh");
        } else {
          const uploadRes = await axios.post(
            "http://localhost:20474/store/api/uploadImg",
            { image: product.image },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );
          if (uploadRes.data) {
            console.log(uploadRes.data.imgSrc);
            setProduct((product) => ({
              ...product,
              imgSrc: uploadRes.data.imgSrc,
            }));
          }
        }
      }
      // add product to mongodb
      const res = await axios.post(
        "http://localhost:20474/store/api/addProduct",
        { ...product, userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data) {
        console.log(res.data);
        window.location.href = `/shop/a/1`;
      }
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="w-full border bg-gray-100 py-2 rounded-md m-auto relative">
      {/* comeback button */}
      <button
        className="absolute translate-x-0 -translate-y-1 right-5 top-5 bg-green-400 p-2 rounded-full hover:bg-green-500 transition-all text-white"
        onClick={() => navigate(`/shop/a/1`)}
      >
        <FaArrowLeft />
      </button>
      <div className="text-center font-bold text-2xl">Add Product</div>
      {/* form */}
      <form className="mx-auto w-3/4" onSubmit={handleSubmit}>
        <div className="flex w-full">
          <div className="px-16 min-w-max w-full">
            <div className="flex flex-col justify-center self-center w-3/4">
              {/* name product */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-semibold ml-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="flex">
                {/* color product */}
                <div className="flex flex-col w-1/2 mr-1">
                  <label htmlFor="color" className="font-semibold ml-2">
                    Color
                  </label>
                  <input
                    type="text"
                    name="color"
                    id="color"
                    className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
                    onChange={(e) =>
                      setProduct({ ...product, color: e.target.value })
                    }
                    required
                  />
                </div>
                {/* size product */}
                <div className="flex flex-col w-1/2 ml-1">
                  <label htmlFor="size" className="font-semibold ml-2">
                    Size
                  </label>
                  <input
                    type="text"
                    name="size"
                    id="size"
                    className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
                    onChange={(e) =>
                      setProduct({ ...product, size: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              {/* price product */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="price" className="font-semibold ml-2">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
                  min={1}
                  required
                  onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                  }
                />
              </div>
              {/* quantity product */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="quantity" className="font-semibold ml-2">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
                  min={1}
                  required
                  onChange={(e) =>
                    setProduct({ ...product, quantity: e.target.value })
                  }
                />
              </div>
              {/* category product */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="category" className="font-semibold ml-2">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
                  required
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                />
              </div>
              {/* description product */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="description" className="font-semibold ml-2">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  cols={30}
                  rows={4}
                  className="border-2 border-gray-400 rounded-md p-2 focus:border-green-500 focus:outline-none focus:ring-green-300 transition-all"
                  required
                  onChange={(e) =>
                    setProduct({ ...product, description: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
          </div>
          {/* add img */}
          <div className="w-1/3 flex flex-col justify-center items-center gap-2 border-l-2 border-gray-300 px-5 min-w-max">
            <div className="w-48 h-48 rounded-full">
              <img
                src={tempImage || "/avatar.avif"}
                alt="avatar"
                className="w-48 h-48 rounded-md object-cover  "
              ></img>
            </div>
            <div>
              <input
                type="file"
                name="image"
                accept="image/jpeg, image/png"
                multiple={false}
                className="inline-block border w-fit border-green-200 bg-green-500 p-1.5 rounded-md hover:bg-green-600 text-white"
                onChange={handleImageChange}
              />
            </div>
            {err && (
              <div className="text-red-500 text-sm font-semibold">{err}</div>
            )}
            <div>
              Maximum file size 1 MB <br /> Format: .JPEG, .PNG
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <input
            type="submit"
            value="Add product"
            className="border border-green-200 bg-green-500 p-2 rounded-md hover:bg-green-600 text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCard;
