import React from "react";
import { Formik } from "formik";
import { Form, InputFieldRow, Input, Button } from "./SearchForm.styles";

const SearchForm = () => {
  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <InputFieldRow>
            <Input
              type="text"
              name="search"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.search}
              placeholder="Search a Question"
            />
            <Button type="submit" disabled={isSubmitting}>
              Search
            </Button>
          </InputFieldRow>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
