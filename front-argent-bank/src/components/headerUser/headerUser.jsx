import React, {  useState } from "react";
import { PutUserName } from "../../app/slice/usersSlice";
import { useDispatch , useSelector } from 'react-redux';

const HeaderUser = () => {
  const dispatch = useDispatch();
  let CurrentUser = useSelector((state) => state.usersReducer.currentUser); 
  const [editing, setEditing] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  

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
              <label htmlFor="userName">User name:</label>
              <input
                type="text"
                id="userName"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" value={CurrentUser.firstName} disabled />
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" value={CurrentUser.lastName} disabled />
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
              Welcome back <br/>{CurrentUser.userName}
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