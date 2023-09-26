const Pay = () => {
  const funcGetAddresses = async () => {
    const res = await axios.get(
      `https://localhost:5001/api/v1/addresses/${Cookies.get("userId")}`
    );
  };

  return (
    <div>
      <div>
        <div>Delivery Address</div>
        <div>{}</div>
      </div>
    </div>
  );
};

export default Pay;
