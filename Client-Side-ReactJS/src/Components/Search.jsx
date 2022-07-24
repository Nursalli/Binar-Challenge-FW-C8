import React from "react";
import { InputGroup, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search(props) {
  const { searchPlayerHandler, searchKeyword } = props;
  return (
    <InputGroup className="mb-4">
      <InputGroup.Text id="addonIcon">
        <FontAwesomeIcon icon={faSearch} />
      </InputGroup.Text>
      <Form.Control
        placeholder="Enter Username, Email, Experience, or Level"
        aria-label="Search"
        aria-describedby="addonIcon"
        value={searchKeyword}
        onChange={(e) => searchPlayerHandler(e.target.value)}
      />
    </InputGroup>
  );
}

export default Search;
