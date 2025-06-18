// import image from '../assets/img.jpg'

export const UserCard = ({ name, email, avatarURL }) => {
  return (
    <div className="card">
      <div className="my-name">Name : {name}</div>
      <div className="my-email">Email : {email}</div>
      <img className="my-avatar" src={avatarURL} alt="User avtar" />
    </div>
  );
};
