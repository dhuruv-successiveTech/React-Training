import Image from "next/image";
import React from "react";

interface UserCardProps {
  name: string;
  email: string;
  avatarURL: string;
}
const UserCard = ({ name, email, avatarURL }: UserCardProps) => {
  return (
    <div className="card">
      <div className="my-name">Name : {name}</div>
      <div className="my-email">Email : {email}</div>
      <Image
        height={200}
        width={200}
        className="my-avatar"
        src={avatarURL}
        alt="User avtar"
      />
    </div>
  );
};

export default UserCard;
