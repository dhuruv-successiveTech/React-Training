import Image from "next/image";
import styles from "./page.module.css";
import { Greeting } from "@/component/Greeting";
import { UserCard } from "@/component/UserCard";
import { Weather } from "@/component/Weather";
import { Counter } from "@/component/Counter";
import { TaskList } from "@/component/TaskList";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="quest1">
        <p>
          Q1. Create a functional component named Greeting that displays a
          simple "Hello, Next.js!" message on the screen. Import and render the
          Greeting component in the App component.
        </p>
        <div>
          <Greeting />
        </div>
      </div>
      <hr className="line" />
      <div className="quest2">
        <p>
          Q2. Create a functional component named UserCard that accepts the
          following props: name, email, and avatarURL. Use the props to display
          the user's name, email, and an image (avatar) in the UserCard
          component. Create multiple instances of the UserCard component with
          different user data.
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
      </div>
      <hr className="line" />
      <div className="quest3">
        <p>
          Q3. Create a functional component named Weather that accepts a prop
          called temperature (a number). Display a message like "It's sunny
          today!" if the temperature is above 25°C and "It's cold today!" if the
          temperature is below 10°C. Import and render the Weather component in
          the App component with different temperature values.
        </p>
        <div>
          <Weather temperature={30}></Weather>
        </div>
      </div>
      <hr className="line" />
      <div className="quest4">
        <p>
          Q4. Create a functional component named Counter that displays a count
          and two buttons: "Increment" and "Decrement". Implement event handlers
          for the "Increment" and "Decrement" buttons to increase and decrease
          the count. Display the updated count on the screen.
        </p>
        <div>
          <Counter />
        </div>
      </div>
      <hr className="line" />
      <div className="quest5">
        <p>
          Q5. Create a functional component named TaskList that accepts an array
          of task names as a prop. Use the map function to render each task name
          as a list item. Import and render the TaskList component in the App
          component with an array of tasks.
        </p>

        <TaskList
          tasks={[
            "Attending react session",
            "Comleting assignment",
            "Raise Pull Request",
            "Get your PR reviewed",
          ]}
        />
      </div>
      <hr className="line" />
      <div className="quest6">
        <p>
          Q6 .Create a functional component named Button that accepts props for
          text and color. Style the button using inline styles or CSS classes
          based on the color prop. Import and render the Button component in the
          App component with different text and color props.
        </p>
        <div>
         
        </div>
      </div>
      <hr className="line" />
    </div>
  );
}
