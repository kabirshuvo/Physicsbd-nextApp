import React from "react";

const UserProfile = ({ params }: any) => {
  return (
    <div>
      <h3>User Profile</h3>
      <hr />
      <p 
      className="text-3xl text-center"
            
      >
        User Profile page 
        <span className="text-red-500">{params.id}</span>
        
        </p>
    </div>
  );
};

export default UserProfile;
