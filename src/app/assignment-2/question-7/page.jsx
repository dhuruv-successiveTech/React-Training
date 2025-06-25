import { Notification } from "@/components/assignment-2";

const MessageTimer = () => {
  return (
    <>
      <p className="question">
        Q7. Create a functional component called Notification. Use the useState
        hook to manage a state variable named message initialized to an empty
        string. Use the useEffect hook to show a notification message for 5
        seconds whenever the message state changes. Render the notification
        message in a div element. After 5 seconds, clear the message to hide the
        notification.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <Notification />
      </div>
    </>
  );
};

export default MessageTimer;
