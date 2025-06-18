import { UserCard } from "@/component/UserCard";
import './page.module.css'
const UserDetails = () => {
  return (
    <>
      <p>
        Q2. Create a functional component named UserCard that accepts the
        following props: name, email, and avatarURL. Use the props to display
        the user's name, email, and an image (avatar) in the UserCard component.
        Create multiple instances of the UserCard component with different user
        data.
      </p>
      <div className="usercard">
        <UserCard
          name={"Manoj Doe"}
          email={"manojDoe@gmail.com"}
          avatarURL={"/assets/img1.jpg"}
        />
        <UserCard
          name={"Dhuruv"}
          email={"dhruvdk02@gmail.com"}
          avatarURL={"/assets/img2.jpg"}
        />
        <UserCard
          name={"Abhijeet"}
          email={"abhijeetkk@gmail.com"}
          avatarURL={"/assets/img3.jpg"}
        />
        <UserCard
          name={"yash"}
          email={"yash@gmail.com"}
          avatarURL={"/assets/img4.jpg"}
        />
      </div>
    </>
  );
};

export default UserDetails;