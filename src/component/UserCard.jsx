// import image from '../assets/img.jpg'

export const UserCard = ({ name, email, avatarURL }) => {
  return( 
    <div className="card">
        <div className="my-name">name : {name}</div>
        <div className="my-email">email : {email}</div>
        <img className="my-avatar" src={avatarURL} alt="User avtar" />
    </div>
  );
};
