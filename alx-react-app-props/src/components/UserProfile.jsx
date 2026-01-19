import { useContext } from "react";
import UserContext from "../UserContext";

function UserInfo() {
  const user = useContext(UserContext);

  return <p>{user.name}</p>;
}

export default UserInfo;
