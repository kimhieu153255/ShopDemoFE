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
    <div className="w-1/2 mx-auto bg-gray-100 p-5 border rounded-lg shadow-md">
      <div className="font-bold text-lg text-center mb-3">changeEmail</div>
      <form className="flex flex-col gap-2">
        <div className="p-1.5">
          <div className="inline-block w-40 text-right font-semibold p-1.5">
            Email:
          </div>
          <input
            type="email"
            name="email"
            id="email"
            className="p-1.5 border rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            defaultValue={userRef.current.email}
          />
        </div>
        <div>
          <label className="inline-block w-40 text-right font-semibold p-1.5">
            New Email:
          </label>
          <input
            type="email"
            name="newEmail"
            id="newEmail"
            className="p-1.5 border rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
          />
        </div>
        <div>
          <label className="inline-block w-40 text-right font-semibold p-1.5">
            Confirm New Email:
          </label>
          <input
            type="email"
            name="confirmNewEmail"
            id="confirmNewEmail"
            className="p-1.5 border rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
          />
        </div>
        <div className="px-1.5 w-50">
          <button type="submit" className="w-full bg-green-500">
            Change
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeEmail;
