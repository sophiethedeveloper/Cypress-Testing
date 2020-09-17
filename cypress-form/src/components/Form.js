import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function FriendForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  console.log('submit', submit)
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name here"
          onChange={onChange}
          value={values.name}
        />
        <div className="error">{errors.name}</div>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email here"
          onChange={onChange}
          value={values.email}
        />
        <div className="error">{errors.email}</div>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          onChange={onChange}
          value={values.password}
        />
        <div className="error">{errors.password}</div>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="terms"
            checked={values.terms}
            onChange={onChange}
          />{" "}
          Do you accept the Terms and Conditions?
        </Label>
      </FormGroup>
      {/* 🔥 DISABLE THE BUTTON */}
      <Button color="primary" disabled={disabled}>Submit</Button>
    </Form>
  );
}

export default FriendForm;
