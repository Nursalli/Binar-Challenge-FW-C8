import React from "react";
import { Form, Button } from "react-bootstrap";

function Forms(props) {
  const { form, changeFormHandler, submitAddHandler } = props;
  return (
    <div className="text-light">
      <h3 className="mb-3 text-center">Form Add</h3>
      <Form onSubmit={submitAddHandler} method="POST">
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="username"
            value={form.username}
            onChange={(e) => changeFormHandler(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
            value={form.email}
            onChange={(e) => changeFormHandler(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={(e) => changeFormHandler(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formExperience">
          <Form.Label>Experience</Form.Label>
          <Form.Control
            type="number"
            placeholder="Amount Experience"
            name="experience"
            value={form.experience}
            onChange={(e) => changeFormHandler(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLevel">
          <Form.Label>Level</Form.Label>
          <Form.Control
            type="number"
            placeholder="Amount Level"
            name="lvl"
            value={form.lvl}
            onChange={(e) => changeFormHandler(e)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Forms;
