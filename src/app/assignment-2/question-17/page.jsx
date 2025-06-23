import CopyClipboard from "@/components/assignment-2/CopyClipboard";

const ClipboardCopy = () => {
  return (
    <>
      <p className="question">
        Q17. Build a custom hook named useClipboard for copying text to the
        clipboard. Implement a useClipboard hook that takes a text value as a
        parameter. Use the document.execCommand API to copy the provided text to
        the clipboard. Return a success status and methods to trigger the
        copying action. Develop a component that uses the useClipboard hook to
        provide a copy button for text.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <CopyClipboard/>
      </div>
    </>
  );
};

export default ClipboardCopy;
