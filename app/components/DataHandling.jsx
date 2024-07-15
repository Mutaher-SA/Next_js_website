import { useEffect, useState } from "react";

export const DataHandling = (theUrl) => {
  const [posts, setPosts] = useState(null);
  const [connServerError, setConnServerError] = useState(null);
  const [isWaitingData, setIsWaitingData] = useState(true);

  useEffect(() => {
    fetch(theUrl)
      .then((theResp) => {
        if (!theResp.ok) {
          throw Error("Cannot reach the data server!!!!");
        }
        return theResp.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
        setIsWaitingData(false);
      })
      .catch((theErr) => {
        console.log(theErr.message);
        setConnServerError(theErr.message);
        setIsWaitingData(false);
      });
  }, [theUrl]);

  return { isWaitingData, connServerError, posts };
};


