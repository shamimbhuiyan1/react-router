import React, { useEffect, useState } from "react";
import SingleFriend from "../../SingleFriend/SingleFriend";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div>
      <h2>Hello Friends.How Are you?</h2>
      <p>
        I would get 500tk from nazrul. <mark>{friends.length}</mark> persons
      </p>
      {friends.map((friend) => (
        <SingleFriend key={friend.id} friend={friend}></SingleFriend>
      ))}
    </div>
  );
};

export default Friends;
