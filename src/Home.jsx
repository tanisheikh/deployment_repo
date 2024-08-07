import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (!apiUrl) {
      console.error("API URL is not defined in environment variables.");
      return;
    }

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((_data) => {
        console.log("_data", _data);
        setData(_data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err);
      });
  }, [apiUrl]);

  return (
    <div>
      <h1>Deployment in Vercel</h1>
      {data && data.length > 0 ? (
        <div>
          {data.map((item) => {
            return (
              <>
                <p> Id: {item.id}</p>
                <p>Title:- {item.title}</p>
              </>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
