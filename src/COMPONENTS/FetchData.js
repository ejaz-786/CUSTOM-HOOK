import { Button, Select, TextField } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import useFetch from "../CUSTOM HOOK/useFetch";
import "../CSS/FetchData.css";
// https://jsonplaceholder.typicode.com/users

const FetchData = () => {
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState("selected");
  const { data } = useFetch(value, selected);

  const handleSelectChange = useCallback((value) => setSelected(value), []);
  const handleChange = useCallback((newValue) => setValue(newValue), []);
  const options = [
    { label: "choose method", value: 0 },
    { label: "GET", value: "GET" },
    { label: "POST", value: "POST" },
  ];

  const fetchdata = () => {
    // console.log(data);
    console.table(data)
  };

  return (
    <>
      <div className="wrapper">
        <div>
          <TextField
            label="URL:"
            value={value}
            onChange={handleChange}
            placeholder="WRITE URL HERE..."
            autoComplete="off"
          />
        </div>
        <div>
          <Select
            label="CHOOSE METHOD"
            options={options}
            onChange={handleSelectChange}
            value={selected}
          />
        </div>

        <div>
          <Button primary onClick={fetchdata}>
            FetchData
          </Button>
        </div>
      </div>
    </>
  );
};

export default FetchData;
