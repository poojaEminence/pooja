import React from "react";
import UpdateForm from "./UpdateForm";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UserUpDate() {
  const navigate = useNavigate();
  useEffect(() => {
    getEditData();
  }, []);
  const { id } = useParams();
  const [user, setuser] = useState({});
  const [allData, setAllData] = useState([]);

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const getEditData = async () => {
    await axios.get(`http://localhost:4000/event//${id}`).then((res) => {
      console.log(res.data, "ppppp33333333pppp");
      setuser(res.data);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      await axios.put(`http://localhost:4000/event/${id}`, user).then((res) => {
        setuser(res.data);
      });
    }
    navigate("/");
  };
  return (
    <div>
      <UpdateForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        allData={allData}
        user={user}
      />
    </div>
  );
}

export default UserUpDate;
