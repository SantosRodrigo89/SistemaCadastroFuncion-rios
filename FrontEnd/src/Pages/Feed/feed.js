import React from "react";
import NewEmployee from "../../Components/NewEmployee/newEmployee";
import Table from "../../Components/Table/table";

const Feed = () => {
  return (
    <div>
      <div>
        <Table />
      </div>
      <div>
        <NewEmployee />
      </div>
    </div>
  );
};
export default Feed;
