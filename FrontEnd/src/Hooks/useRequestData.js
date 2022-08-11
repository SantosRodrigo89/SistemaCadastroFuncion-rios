import axios from "axios";
import { useEffect, useState } from "react";

export const useRequestData = (initialState, url) => {
  const [data, setData] = useState(initialState);

  const getData = async () => {
    await axios
      .get(url,)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return [data];
};
