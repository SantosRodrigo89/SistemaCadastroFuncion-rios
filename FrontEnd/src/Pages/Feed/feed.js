import React, { useState } from "react";
import Filter from "../../Components/Filter/filter";
import Table from "../../Components/Table/table";

const Feed = () => {

  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        <Filter/>
      </div>
      <Table/>
    </div>
  );
};
export default Feed;
