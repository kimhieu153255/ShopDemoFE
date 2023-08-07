import SidebarUser from "../Components/Sidebar/SidebarUser";

const Information = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(JSON.parse(Cookies.get("user")?.toString() || "{}"));
  }, []);

  return <SidebarUser user=""></SidebarUser>;
};

export default Information;
