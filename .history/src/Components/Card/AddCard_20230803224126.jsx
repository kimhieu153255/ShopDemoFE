import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
  const [err, setErr] = useState();
  const [product, setProduct] = useState();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    if (file.size > 1024 * 1024 * 5) setErr("File size cannot exceed 5MB");
    reader.onloadend = () => {
      setProduct({ ...product, imgSrc: reader.result });
    };
  };
  const navigate = useNavigate();

  useEffect(() => {
    console.log(product?.imgSrc);
  }, [product?.imgSrc]);

  return (
    <div className="w-full border bg-gray-100 py-2 rounded-md m-auto">
    {/* quay trở lại /shop/:category/:page */}
      <button
        className="absolute translate-x-0 -translate-y-1 right-5 top-5 bg-green-400 p-2 rounded-full hover:bg-green-500 transition-all text-white"
        onClick={() => navigate(`/shop/${category}/${page}`)}
      >
        <FaArrowLeft />
      </button>

      <div className="text-center font-bold text-2xl">Add Product</div>
      <form className="mx-auto w-3/4">
        <div className="flex w-full">
          <div className="px-16 min-w-max w-full">
            {/* form */}
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
                  required
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                />
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
                src={product?.imgSrc || "/avatar.avif"}
                alt="avatar"
                className="w-48 h-48 rounded-md object-cover  "
              ></img>
            </div>
            <div>
              <input
                type="file"
                accept="image/jpeg, image/png"
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
      </form>
      <div className="flex justify-center mt-2">
        <button className="border border-green-200 bg-green-500 p-2 rounded-md hover:bg-green-600 text-white">
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddCard;

// import { useState } from "react";

// const AddCard = () => {
//   const [selectedImages, setSelectedImages] = useState([]);

//   const handleImageChange = (e) => {
//     const files = e.target.files;
//     const imageArray = [];

//     // Convert FileList to an array and use FileReader to read each file and create a preview
//     Array.from(files).forEach((file) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onloadend = () => {
//         imageArray.push(reader.result);
//         setSelectedImages([...imageArray]);
//       };
//     });
//   };

//   return (
//     <div>
//       <input type="file" multiple onChange={handleImageChange} />
//       <div>
//         {selectedImages.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Image ${index + 1}`}
//             style={{
//               width: "150px",
//               height: "150px",
//               objectFit: "cover",
//               margin: "5px",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AddCard;
