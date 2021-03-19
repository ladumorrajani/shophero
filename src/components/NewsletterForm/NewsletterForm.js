import React from "react";
import { Formik } from "formik";
import {
  Form,
  InputFieldRow,
  Input,
  Button,
  ErrorMessage,
} from "./NewsletterForm.styles";
import "../../i18n";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

const NewsletterForm = () => {
  const { t } = useTranslation();

  const NewsletterSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("newsletter_form.email_imvalidate"))
      .required(t("newsletter_form.email_validate")),
  });

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={NewsletterSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <InputFieldRow>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder={t("newsletter_form.placeholder")}
            />
            {errors.email && touched.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
            <Button type="submit" disabled={isSubmitting} />
          </InputFieldRow>
        </Form>
      )}
    </Formik>
  );
};

export default NewsletterForm;
