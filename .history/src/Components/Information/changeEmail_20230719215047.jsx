import Cookies from "js-cookie";
import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const ChangeEmail = () => {
  console.log("changeEmail");
  const userRef = useRef();
  // const [isMouted, setIsMouted] = useState(false);
  useEffect(() => {
    userRef.current = JSON.parse(Cookies.get("user") || "{}");
    // setIsMouted(true);
    return () => {
      userRef.current = null;
      // setIsMouted(false);
    };
  }, [userRef]);
  return (
    <div>
      <h1 className="font-bold">changeEmail</h1>
      <form className="flex flex-col gap-2">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="p-1.5 border rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            defaultValue={userRef.current.email}
          />
        </div>
        <div>
          <label htmlFor="newEmail">New Email</label>
          <input type="email" name="newEmail" id="newEmail" />
        </div>
        <div>
          <label htmlFor="confirmNewEmail">Confirm New Email</label>
          <input type="email" name="confirmNewEmail" id="confirmNewEmail" />
        </div>
        <div>
          <button type="submit">Change Email</button>
        </div>
      </form>
    </div>
  );
};

export default ChangeEmail;
