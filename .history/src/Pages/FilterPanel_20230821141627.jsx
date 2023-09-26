import { useEffect, useState } from "react";
import MainList from "../Components/Card/MainList";
import SidebarFilter from "../Components/Sidebar/SidebarFilter";
import MainSortBar from "../Components/Layouts/MainSortBar";
import { useParams } from "react-router-dom";

const FilterPanel = () => {
  const [url, setUrl] = useState("");
  const { category } = useParams();

  useEffect(() => {
    console.log(url);
  }, [url]);

  return (
    <div className="my-5 flex gap-3 mx-auto w-4/5 justify-center">
      <SidebarFilter setUrl={setUrl} url={url}></SidebarFilter>
      <div className="flex flex-col">
        <MainSortBar setUrl={setUrl} url={url}></MainSortBar>
        <MainList></MainList>
      </div>
    </div>
  );
};

export default FilterPanel;
