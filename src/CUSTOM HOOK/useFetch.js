import { useEffect, useState } from "react";

const useFetch = (url,methods) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const getApi = async () => {
      const response = await fetch(url, {
        method: `${methods}`,
      });
      let datas = await response.json();
      setData(datas);
    };
    getApi();

  }, [url,methods]);

  return { data };
};
export default useFetch;
