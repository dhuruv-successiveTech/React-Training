// pages/404.js
import Link from "next/link";

const Custom404 = () => {
  return (
    <div>
      <div className="container">
        <div className="errorContainer">
          <h1 className="errorCode">404</h1>
          <p className="errorMessage">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link href="/">Go back to Home</Link>
        </div>
        <div className="illustration"></div>
      </div>

      <style>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #f7f7f7;
          color: #333;
        }

        .errorContainer {
          text-align: center;
          margin-bottom: 40px;
        }

        .errorCode {
          font-size: 100px;
          font-weight: bold;
          color: #ff6f61;
        }

        .errorMessage {
          font-size: 20px;
          margin-top: 10px;
        }

        .homeButton {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 24px;
          background-color: #0070f3;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-size: 18px;
          transition: background-color 0.2s ease;
        }

        .homeButton:hover {
          background-color: #005bb5;
        }

        .illustration {
          margin-top: 40px;
        }

        .image {
          width: 300px;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default Custom404;
