import React, { useState } from "react";
import Footer from "../../Components/Footer/footer";
import Form from "../../Components/Form/form";
import Header from "../../Components/Header/header";
import Table from "../../Components/Table/table";

const Feed = () => {

  return (
    <div>
      <div>
        <div>
        
          <Header />
        </div>
        <div id="cadastro">
          <Form />
        </div>
        <div id="lista">
          <Table />
        </div>
        <div id="sobre">
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Feed;
