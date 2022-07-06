import React from "react";
import { Form, Button } from "react-bootstrap";

function Forms(props) {
  const { form } = props;
  return (
    <div className="text-light">
      <h3 className="mb-3 text-center">Form Add</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Username"
            value={form.username}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={form.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={form.password}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formExperience">
          <Form.Label>Experience</Form.Label>
          <Form.Control
            type="number"
            placeholder="Amount Experience"
            value={form.experience}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLevel">
          <Form.Label>Level</Form.Label>
          <Form.Control
            type="number"
            placeholder="Amount Level"
            value={form.lvl}
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
