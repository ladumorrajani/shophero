import React from "react";
import { Formik } from "formik";
import {
  Form,
  FormWrap,
  InputFieldRow,
  InputFieldCol,
  Input,
  Button,
  Label,
  ErrorMessage,
  BlockHeading,
  TextArea,
  RegisterFooter,
  ContactFormSection,
} from "./ContactForm.styles";
import "../../i18n";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

const ContactForm = () => {
  const { t } = useTranslation();

  const ContactSchema = Yup.object().shape({
    fname: Yup.string().required(t("contact_form.fname_validate")),
    lname: Yup.string().required(t("contact_form.lname_validate")),
    email: Yup.string()
      .email("Invalid email")
      .required(t("contact_form.email_validate")),
    pnumber: Yup.number(),
    subject: Yup.string().required(t("contact_form.subject_validate")),
    message: Yup.string(),
  });

  return (
    <ContactFormSection>
      <Formik
        initialValues={{
          fname: "",
          lname: "",
          email: "",
          pnumber: "",
          subject: "",
          message: "",
        }}
        validationSchema={ContactSchema}
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
            <FormWrap>
              <BlockHeading>{t("contact_form.title")}</BlockHeading>
              <InputFieldRow>
                <InputFieldCol className="col-2">
                  <Label htmlFor="orgname">{t("contact_form.f_name")}</Label>
                  <Input
                    type="text"
                    name="fname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fname}
                    placeholder={t("contact_form.f_name")}
                  />
                  {errors.fname && touched.fname && (
                    <ErrorMessage>{errors.fname}</ErrorMessage>
                  )}
                </InputFieldCol>
                <InputFieldCol className="col-2">
                  <Label htmlFor="lname">{t("contact_form.l_name")}</Label>
                  <Input
                    type="text"
                    name="lname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lname}
                    placeholder={t("contact_form.l_name")}
                  />
                  {errors.lname && touched.lname && (
                    <ErrorMessage>{errors.lname}</ErrorMessage>
                  )}
                </InputFieldCol>
              </InputFieldRow>
              <InputFieldRow>
                <InputFieldCol className="col-2">
                  <Label htmlFor="email">{t("contact_form.e_address")}</Label>
                  <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder={t("contact_form.e_address")}
                  />
                  {errors.email && touched.email && (
                    <ErrorMessage>{errors.email}</ErrorMessage>
                  )}
                </InputFieldCol>
                <InputFieldCol className="col-2">
                  <Label htmlFor="pnumber">{t("contact_form.p_number")}</Label>
                  <Input
                    type="number"
                    name="pnumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pnumber}
                    placeholder={t("contact_form.p_number")}
                  />
                </InputFieldCol>
              </InputFieldRow>
              <InputFieldRow>
                <InputFieldCol>
                  <Label htmlFor="subject">
                    {t("contact_form.subject_label")}
                  </Label>
                  <Input
                    type="text"
                    name="subject"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subject}
                    placeholder={t("contact_form.subject_placeholder")}
                  />
                  {errors.subject && touched.subject && (
                    <ErrorMessage>{errors.subject}</ErrorMessage>
                  )}
                </InputFieldCol>
              </InputFieldRow>
              <InputFieldRow>
                <InputFieldCol>
                  <Label htmlFor="message">
                    {t("contact_form.message_label")}
                  </Label>
                  <TextArea
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    placeholder={t("contact_form.message_label")}
                  />
                </InputFieldCol>
              </InputFieldRow>

              <RegisterFooter>
                <Button type="submit" disabled={isSubmitting}>
                  <span>{t("contact_form.submit_btn")}</span>
                </Button>
              </RegisterFooter>
            </FormWrap>
          </Form>
        )}
      </Formik>
    </ContactFormSection>
  );
};

export default ContactForm;
