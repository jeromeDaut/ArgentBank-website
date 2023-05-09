import React, { useEffect, useState } from "react";
import { getProfile } from "../../app/services/getProfile";

const HeaderUser = () => {
  const [userName, setUserName] = useState("");
  const [editing, setEditing] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getProfile(token)
        .then((data) => {
          setUserName(data.userName);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const handleEdit = () => {
    setNewUserName(userName);
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleSave = () => {
    // TODO: Save new user name to backend
    setUserName(newUserName);
    setEditing(false);
  };

  return (
    <>
      <div className="header">
        {editing ? (
          <>
            <h2>Edit User Info</h2>
            <form>
              <label htmlFor="userName">User name:</label>
              <input
                type="text"
                id="userName"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" value="John" disabled />
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" value="Doe" disabled />
              <button className="edit-button" type="button" onClick={handleSave}>
                Save
              </button>
              <button className="edit-button" type="button" onClick={handleCancel}>
                Cancel
              </button>
            </form>
          </>
        ) : (
          <>
            <h1>
              Welcome back
              <br />
              {userName}
            </h1>
            <button className="edit-button" onClick={handleEdit}>
              Edit Name
            </button>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
    </>
  );
};

export default HeaderUser;
