import { useState } from "react";
import MainList from "../Components/Card/MainList";
import SidebarFilter from "../Components/Sidebar/SidebarFilter";

const FilterPanel = () => {
  const [url, setUrl] = useState();

  return (
    <div className="m-5">
      <SidebarFilter setUrl={setUrl}></SidebarFilter>
      <MainList></MainList>
    </div>
  );
};

export default FilterPanel;
