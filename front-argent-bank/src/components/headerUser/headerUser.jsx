import React, { useEffect, useState } from "react";
import { getProfile } from "../../app/services/getProfile";
import { updateUserProfile } from "../../app/services/PutUserName";

const HeaderUser = () => {
  const [userName, setUserName] = useState("");
  const [editing, setEditing] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const [token, setToken] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      getProfile(storedToken)
        .then((data) => {
        setUserName(data.userName);
        setFirstName(data.firstName);
        setLastName(data.lastName);
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
    updateUserProfile(token, newUserName)
      .then(() => {
        setUserName(newUserName);
        setEditing(false);
      })
      .catch((error) => {
        console.log(error);
      });
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
              <input type="text" id="firstName" value={firstName} disabled />
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" value={lastName} disabled />
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
