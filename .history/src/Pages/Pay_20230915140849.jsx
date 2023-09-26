const Pay = () => {
  const funcGetAddresses = async () => {
    const res = await axios.get(`https://localhost:20474/product/api/get`);
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
