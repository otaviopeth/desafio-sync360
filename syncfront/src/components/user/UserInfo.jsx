import "./UserInfo.css";
import avatar from "../../assets/avatar.png";
import axios from "../../lib/axios/axios-instance";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import UserForm from "./UserForm";

const UserInfo = () => {
  const [userObj, setUserObj] = useState({
    name: "",
    age: "",
    biography: "",
    street: "",
    neighborhood: "",
    state: "",
  });

  const getUser = async () => {
    try {
      const { data } = await axios.get("/users");
      const user = data.data;
      setUserObj({
        name: user.name,
        age: user.age,
        biography: user.biography,
        street: user.street,
        neighborhood: user.neighborhood,
        state: user.state,
      });
    } catch (err) {
      console.log(console.err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="user-info-container" id="info">
          <div className="box-info box-info-1">
            <img id="profile-pic" src={avatar} alt="avatar" />
          </div>
          <div className="box-info box-info-2" id="teste">
            <p id="profile-username">{`${userObj.name}`}</p>
            <p id="profile-age">{`${userObj.age} anos`}</p>
            <p id="profile-address">
              <FaMapMarkerAlt size={30} />{" "}
              {`${userObj.street}, ${userObj.neighborhood} - ${userObj.state}`}
            </p>
            
            <textarea readOnly value={`"${userObj.biography}"`}/>
          </div>
        </div>
      </div>
      <UserForm handleInfo={getUser} />
    </>
  );
};

export default UserInfo;
