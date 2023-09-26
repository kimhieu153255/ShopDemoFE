import { useEffect, useState } from "react";
import MainList from "../Components/Card/MainList";
import SidebarFilter from "../Components/Sidebar/SidebarFilter";
import MainSortBar from "../Components/Layouts/MainSortBar";

const FilterPanel = () => {
  const [url, setUrl] = useState();

  useEffect(() => {
    console.log(url);
  }, [url]);

  return (
    <div className="m-5 flex gap-3">
      <SidebarFilter setUrl={setUrl} url={url}></SidebarFilter>
      <div className="flex">
        <MainSortBar></MainSortBar>
        <MainList></MainList>
      </div>
    </div>
  );
};

export default FilterPanel;
