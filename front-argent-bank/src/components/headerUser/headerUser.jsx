import React, {  useEffect, useState } from "react";
import { PutUserName } from "../../app/slice/usersSlice";
import { useDispatch , useSelector } from 'react-redux';

const HeaderUser = () => {
    // Redux hooks
  const dispatch = useDispatch();
  let CurrentUser = useSelector((state) => state.usersReducer.currentUser); 

    // State variables
  const [editing, setEditing] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  
    // Set initial value for newUserName when CurrentUser.userName changes
  useEffect(() => {
    setNewUserName(CurrentUser.userName)
  }, [CurrentUser.userName]);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleSave = () => {
    dispatch(PutUserName( newUserName))
      .then(() => {        
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
              <div className="input-edit">
                <label htmlFor="userName">User name:</label>
                 {/* Input for new user name */}
                <input
                  type="text"
                  id="userName"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                />
              </div>
              <div className="input-edit disabled-bg">
                <label htmlFor="firstName">First name:</label>
                <input type="text" id="firstName" value={CurrentUser.firstName} disabled />
              </div>
              <div className="input-edit disabled-bg">
                <label htmlFor="lastName">Last name:</label>
                <input type="text" id="lastName" value={CurrentUser.lastName} disabled />
              </div>
              <div className="btn-edit">
              <button className="edit-button" type="button" onClick={handleSave}>Save</button>
              <button className="edit-button" type="button" onClick={handleCancel}>Cancel</button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h1>
              Welcome back <br/>{CurrentUser.userName}
            </h1>
            <button className="edit-button edit-name-button" onClick={handleEdit}>
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