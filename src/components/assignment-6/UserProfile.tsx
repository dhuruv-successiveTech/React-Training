"use client";
import React from "react";

interface PropInterface {
  name:string;
  email:string;
  phone:number
} 

function UserProfile(props:PropInterface) {
  const { name, email, phone } = props;
  return (
    <div className="">
      <p>Name : {name}</p>
      <p>Email : {email}</p>
      <p> Phone number : {phone}</p>
    </div>
  );
}

export default UserProfile;
