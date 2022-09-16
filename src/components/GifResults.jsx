import './gifResults.css'

const GifResults = ({ results }) => {
  return (
    <main className="main">
      {results.length<=0 ? (
        <>
          <p className="main__text">No haz realizado ninguna búsqueda</p>
        </>
      ) : (
        <>
          {results.map((item) => (
            // <div key={item.id}>
              <iframe
                key={item.id}
                className="main__gif"
                src={item.embed_url}
              ></iframe>
            // </div>
          ))}
        </>
      )}
    </main>
  );
};

export default GifResults;
