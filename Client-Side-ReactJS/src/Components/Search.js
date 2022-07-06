import React from "react";
import { InputGroup, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <InputGroup className="mb-4">
      <InputGroup.Text id="addonIcon">
        <FontAwesomeIcon icon={faSearch} />
      </InputGroup.Text>
      <Form.Control
        placeholder="Enter Username, Email, Experience, and Level"
        aria-label="Search"
        aria-describedby="addonIcon"
      />
    </InputGroup>
  );
}

export default Search;
