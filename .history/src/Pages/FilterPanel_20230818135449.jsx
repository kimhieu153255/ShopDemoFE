import { useEffect, useState } from "react";
import MainList from "../Components/Card/MainList";
import SidebarFilter from "../Components/Sidebar/SidebarFilter";

const FilterPanel = () => {
  const [url, setUrl] = useState();

  useEffect(() => {
    console.log(url);
  }, [url]);

  return (
    <div className="m-5">
      <SidebarFilter setUrl={setUrl} url={url}></SidebarFilter>
      <div>
        <MainList></MainList>
      </div>
    </div>
  );
};

export default FilterPanel;
