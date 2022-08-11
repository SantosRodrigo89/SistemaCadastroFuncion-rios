import React, { useState } from "react";
import Filter from "../../Components/Filter/filter";
import NewEmployee from "../../Components/NewEmployee/newEmployee";
import Table from "../../Components/Table/table";

const Feed = () => {

  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        <Filter/>
      </div>
      <div>
      <Table/>
      </div>
      <div>
      <NewEmployee/>
      </div>
    </div>
  );
};
export default Feed;
