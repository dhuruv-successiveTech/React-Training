import {Slideshow} from "@/components/assignment-2";

const ImageSlideShow = () => {
  return (
    <>
      <p className="question">
        Q8. Use the useEffect hook to manage the current slide and transition.
        Add few images atleast 10 in public folder to populate the slideshow.
        Allow users to pause, play the slideshow. Include a time interval option
        to control the automatic slideshow progression.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <Slideshow />
      </div>
    </>
  );
};

export default ImageSlideShow;
