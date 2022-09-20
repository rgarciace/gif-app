import "./gifResults.css";
import Lottie from "lottie-react";
import loader from "../../assets/loader.json";

const GifResults = ({ results, loading }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <main className="main">
      {loading ? (
        <>
          <div className="main__loader">
            <Lottie
              className="loader"
              animationData={loader}
              height={10}
              width={10}
            />
          </div>
        </>
      ) : (
        <>
          {results.map((item) => (
            <iframe
              key={item.id}
              className="main__gif"
              src={item.embed_url}
            ></iframe>
          ))}
        </>
      )}
    </main>
  );
};

export default GifResults;
