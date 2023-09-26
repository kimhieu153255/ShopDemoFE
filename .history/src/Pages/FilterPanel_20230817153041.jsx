import MainList from "../Components/Card/MainList";
import SidebarFilter from "../Components/Sidebar/SidebarFilter";

const FilterPanel = () => {
  return (
    <div>
      <SidebarFilter></SidebarFilter>
      <MainList></MainList>
    </div>
  );
};

export default FilterPanel;
