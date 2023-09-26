import { useState } from "react";
import MainList from "../Components/Card/MainList";
import SidebarFilter from "../Components/Sidebar/SidebarFilter";
import MainSortBar from "../Components/Layouts/MainSortBar";
import { useParams } from "react-router-dom";

const FilterPanel = () => {
  const { category } = useParams();
  const [url, setUrl] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  return (
    <div className="my-5 flex gap-3 mx-auto w-4/5 justify-center">
      <SidebarFilter setUrl={setUrl} url={url}></SidebarFilter>
      <div className="flex flex-col">
        <MainSortBar
          setUrl={setUrl}
          url={url}
          setPage={setPage}
          totalPage={totalPage}
          page={page}
        ></MainSortBar>
        <MainList page={page} setTotalPage={setTotalPage} url={url}></MainList>
      </div>
    </div>
  );
};

export default FilterPanel;
