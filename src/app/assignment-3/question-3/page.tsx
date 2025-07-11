import Link from "next/link";

const HomeAbout = () => {
  return (
    <>
      <p className="question">
        Q3. creat pages: Home and About. Implement file routing. Create
        navigation links to switch between the Home and About pages. Display
        appropriate content on each page. Add a &quot;404 Not Found&quot; page for any
        invalid routes.
      </p>
      <div>
        <h1>This is question 3</h1>
        <div className="link">
          <Link href={"/assignment-3/question-3/Home"}>
            <button>Home</button>
          </Link>

          <Link href={"/assignment-3/question-3/About"}>
            <button>About</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
