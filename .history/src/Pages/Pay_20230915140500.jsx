import { useEffect, useState } from "react";
import AddressInput from "../Components/Address/AddressInput";

const Pay = () => {
  const [proChoice, setProChoice] = useState("");
  const [disChoice, setDisChoice] = useState("");
  const [wardChoice, setWardChoice] = useState("");

  useEffect(() => {
    console.log("proChoice", proChoice);
    console.log("disChoice", disChoice);
    console.log("wardChoice", wardChoice);
  }, [disChoice, proChoice, wardChoice]);

  return <></>;
};

export default Pay;
