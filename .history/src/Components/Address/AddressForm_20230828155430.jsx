import React from "react";
import PropTypes from "prop-types";

const AddressForm = (
  name,
  setName,
  phone,
  setPhone,
  province,
  setProvince,
  district,
  setDistrict,
  ward,
  setWard,
  specific,
  setSpecific
) => {
  return <div></div>;
};

AddressForm.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
  phone: PropTypes.string,
  setPhone: PropTypes.func,
  province: PropTypes.string,
  setProvince: PropTypes.func,
  district: PropTypes.string,
  setDistrict: PropTypes.func,
  ward: PropTypes.string,
  setWard: PropTypes.func,
  specific: PropTypes.string,
  setSpecific: PropTypes.func,
};

export default AddressForm;
