import React, { useState } from "react";
import EditEmployee from "../../Components/EditEmployee/editEmployee";
import NewEmployee from "../../Components/NewEmployee/newEmployee";
import Table from "../../Components/Table/table";

const Feed = () => {
  return (
    <div>
      <div></div>
      <div>
        <Table />
      </div>
      <div>
        <NewEmployee />
        <EditEmployee/>
      </div>
      <div>
     
      </div>
    </div>
  );
};
export default Feed;
