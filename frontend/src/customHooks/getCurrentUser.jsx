import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUserData } from "../redux/userSlice";
import { serverUrl } from "../main"; // or wherever you defined serverUrl

// ✅ Custom hook to fetch current user
const useCurrentUser = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(`${serverUrl}/api/user/current`, {
          withCredentials: true,
        });
        dispatch(setUserData(result.data)); // ✅ correct dispatch
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [dispatch]);

  return { userData };
};

export default useCurrentUser;