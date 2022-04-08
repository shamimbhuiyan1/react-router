import React from "react";
import { useNavigate } from "react-router-dom";

const SingleFriend = (props) => {
  const { name, username, id } = props.friend;
  const showFriendDetail = () => {
    const path = `/friend/${id}`;
    navigate(path);
  };
  const navigate = useNavigate();
  return (
    <div>
      <h2>Name:{name} </h2>
      <button onClick={showFriendDetail}>
        {username} Id:{id}{" "}
      </button>
    </div>
  );
};

export default SingleFriend;
