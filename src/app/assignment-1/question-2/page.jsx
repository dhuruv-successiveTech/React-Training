import { UserCard } from "@/components";
import data from "./data";
const UserDetails = () => {
  return (
    <>
      <p className="question">
        Q2. Create a functional component named UserCard that accepts the
        following props: name, email, and avatarURL. Use the props to display
        the user's name, email, and an image (avatar) in the UserCard component.
        Create multiple instances of the UserCard component with different user
        data.
      </p>
      <div className="usercard">
        {data.map((item, index) => (
          <UserCard
            key={index}
            name={item.name}
            email={item.email}
            avatarURL={item.url}
          ></UserCard>
        ))}
      </div>
    </>
  );
};

export default UserDetails;
