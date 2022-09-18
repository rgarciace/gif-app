import './gifResults.css'

const GifResults = ({ results, loading }) => {
  return (
    <main className="main">
      {loading ? (
        <>
          <p className="main__text">Cargando...</p>
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
