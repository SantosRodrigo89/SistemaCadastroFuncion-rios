import React from "react";
import NewEmployee from "../../Components/NewEmployee/newEmployee";
import Table from "../../Components/Table/table";
import { EmployeeButton } from "./styled";

const Feed = () => {
  return (
    <div>
      <div>
        <Table />
      </div>
      <EmployeeButton>
        <NewEmployee />
      </EmployeeButton>
    </div>
  );
};
export default Feed;
