import PropTypes from "prop-types";
import { useRef } from "react";

const EditAddress = ({isHiddenEdit,setIsHiddenEdit,name,phone,}) => {
  const formRef = useRef();

  const handleClickOutside = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      props.setIsHidden(true);
    }
  };

  return (
    <div className={isHiddenEdit === true ? "hidden" : ""}>
      <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
      <div
        className="fixed inset-0 flex justify-center items-center"
        onClick={(e) => handleClickOutside(e)}
      >
        <div className="absolute bg-gray-100 p-5 rounded-md" ref={formRef}>
          <div className="font-bold text-2xl text-center mb-5">New Address</div>
          <div className="flex gap-2 ">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="fullname" className="font-semibold text-lg">
                Fullname
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                ref={nameRef}
                placeholder="Fullname"
                className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
                onChange={debounce((e) => setName(e.target.value), 500)}
              ></input>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="phone" className="font-semibold text-lg">
                Phone number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                ref={phoneRef}
                placeholder="Phone number"
                className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
                onChange={debounce((e) => setPhone(e.target.value), 500)}
              ></input>
            </div>
          </div>
          <div className="my-3">
            <div className="font-semibold text-lg mb-2">Address</div>
            <AddressInput
              setDisChoice={setDisChoice}
              setProChoice={setProChoice}
              setWardChoice={setWardChoice}
            ></AddressInput>
          </div>
          <div className="my-3 flex flex-col gap-2">
            <label htmlFor="specificAddress" className="font-semibold text-lg">
              Specific address
            </label>
            <input
              type="text"
              id="specificAddress"
              name="specificAddress"
              placeholder="Specific Address"
              ref={specificRef}
              className="px-3 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
              onChange={debounce(
                (e) => setSpecificAddress(e.target.value),
                300
              )}
            ></input>
          </div>
          <button
            className="mt-10 w-full py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-md border transition-all"
            onClick={handleSubmit}
          >
            Add
          </button>

          <span
            className="absolute right-1 top-1 bg-gray-100 border translate-x-1/2 -translate-y-1/2 w-fit h-fit p-1 rounded-full border-gray-400 hover:bg-green-500 hover:text-black text-gray-400"
            onClick={() => {
              setIsHidden(true);
            }}
          >
            <FaTimes />
          </span>
        </div>
      </div>
    </div>
  );
};

EditAddress.propTypes = {
  props: PropTypes.any,
};

export default EditAddress;
