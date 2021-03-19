import React, { useEffect } from "react";
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
  Select,
  FileInput,
  FileName,
  FileWrap,
  FileLabel,
  BlockGroup,
  RegisterFooter,
} from "./RegisterForm.styles";
import "../../i18n";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

const RegisterForm = () => {
  const { t } = useTranslation();

  const RegisterSchema = Yup.object().shape({
    orgname: Yup.string().required(t("register_ngo_form.org_name_valid")),
    orgid: Yup.string().required(t("register_ngo_form.org_id_valid")),
    description: Yup.string(),
    langauge: Yup.string(),
    category: Yup.string(),
    members: Yup.number(),
    street: Yup.string(),
    pcode: Yup.number(),
    city: Yup.string(),
    country: Yup.string(),
    rname: Yup.string().required(
      t("register_ngo_form.representative_name_valid")
    ),
    email: Yup.string()
      .email("Invalid email")
      .required(t("register_ngo_form.representative_email_valid")),
    mobile: Yup.number(),
    ophone: Yup.number(),
    bname: Yup.string(),
    anumber: Yup.number(),
    scode: Yup.string(),
    bic: Yup.string(),
  });

  useEffect(() => {
    const fileInput = document.getElementById("fileInput");
    fileInput.onchange = () => {
      if (fileInput.files.length > 0) {
        const fileName = document.querySelector(".file-name");
        fileName.textContent = fileInput.files[0].name;
      }
    };
  });

  return (
    <Formik
      initialValues={{
        orgname: "",
        orgid: "",
        description: "",
        langauge: "",
        file: null,
        category: "",
        members: "",
        street: "",
        pcode: "",
        city: "",
        country: "",
        rname: "",
        email: "",
        mobile: "",
        ophone: "",
        bname: "",
        anumber: "",
        scode: "",
        bic: "",
      }}
      validationSchema={RegisterSchema}
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
        setFieldValue,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <FormWrap>
            <BlockGroup>
              <BlockHeading>{t("register_ngo_form.general_info")}</BlockHeading>
              <InputFieldRow>
                <InputFieldCol className="col-2">
                  <Label htmlFor="orgname">
                    {t("register_ngo_form.org_name")}
                  </Label>
                  <Input
                    type="text"
                    name="orgname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.orgname}
                    placeholder={t("register_ngo_form.org_name")}
                  />
                  {errors.orgname && touched.orgname && (
                    <ErrorMessage>{errors.orgname}</ErrorMessage>
                  )}
                </InputFieldCol>
                <InputFieldCol className="col-2">
                  <Label htmlFor="orgid">{t("register_ngo_form.org_id")}</Label>
                  <Input
                    type="text"
                    name="orgid"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.orgid}
                    placeholder={t("register_ngo_form.org_id")}
                  />
                  {errors.orgid && touched.orgid && (
                    <ErrorMessage>{errors.orgid}</ErrorMessage>
                  )}
                </InputFieldCol>
              </InputFieldRow>
              <InputFieldRow>
                <InputFieldCol>
                  <Label htmlFor="description">
                    {t("register_ngo_form.description")}
                  </Label>
                  <TextArea
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    placeholder={t("register_ngo_form.description_place")}
                  />
                  {errors.description && touched.description && (
                    <ErrorMessage>{errors.description}</ErrorMessage>
                  )}
                </InputFieldCol>
              </InputFieldRow>
              <InputFieldRow>
                <InputFieldCol className="col-2">
                  <Label htmlFor="langauge">
                    {t("register_ngo_form.langauge_label")}
                  </Label>
                  <Select
                    label="Langauge"
                    name="langauge"
                    value={values.langauge}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Select Language</option>
                    <option value="designer">English</option>
                    <option value="development">French</option>
                    <option value="product">Spanish</option>
                    <option value="other">Other</option>
                  </Select>
                  {errors.langauge && touched.langauge && (
                    <ErrorMessage>{errors.langauge}</ErrorMessage>
                  )}
                </InputFieldCol>
                <InputFieldCol className="col-2">
                  <Label htmlFor="file">
                    {t("register_ngo_form.upload_label")}
                  </Label>
                  <FileWrap>
                    <FileInput
                      type="file"
                      name="file"
                      id="fileInput"
                      onChange={(event) => {
                        setFieldValue("file", event.currentTarget.files[0]);
                      }}
                      onBlur={handleBlur}
                    />
                    <FileName className="file-name">
                      {t("register_ngo_form.no_file_txt")}
                    </FileName>
                    <FileLabel htmlFor="file">
                      {t("register_ngo_form.upload_btn")}
                    </FileLabel>
                  </FileWrap>
                  {errors.file && touched.file && (
                    <ErrorMessage>{errors.file}</ErrorMessage>
                  )}
                </InputFieldCol>
              </InputFieldRow>
              <InputFieldRow>
                <InputFieldCol className="col-2">
                  <Label htmlFor="category">
                    {t("register_ngo_form.cat_label")}
                  </Label>
                  <Select
                    label="Category"
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Select Category</option>
                    <option value="designer">Health</option>
                    <option value="development">Medical</option>
                    <option value="product">Finance</option>
                    <option value="other">Other</option>
                  </Select>
                  {errors.category && touched.category && (
                    <ErrorMessage>{errors.category}</ErrorMessage>
                  )}
                </InputFieldCol>
                <InputFieldCol className="col-2">
                  <Label htmlFor="langauge">
                    {t("register_ngo_form.member_label")}
                  </Label>
                  <Select
                    label="Number of Members"
                    name="members"
                    value={values.members}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Select Number of Members</option>
                    <option value="designer">10</option>
                    <option value="development">20</option>
                    <option value="product">30</option>
                    <option value="other">Other</option>
                  </Select>
                  {errors.members && touched.members && (
                    <ErrorMessage>{errors.members}</ErrorMessage>
                  )}
                </InputFieldCol>
              </InputFieldRow>
            </BlockGroup>
            <BlockGroup>
              <BlockHeading>{t("register_ngo_form.address_info")}</BlockHeading>
              <InputFieldRow>
                <InputFieldCol>
                  <Label htmlFor="street">
                    {t("register_ngo_form.org_street")}
                  </Label>
                  <Input
                    type="text"
                    name="street"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.street}
                    placeholder={t("register_ngo_form.org_street")}
                  />
                  {errors.street && touched.street && (
                    <ErrorMessage>{errors.street}</ErrorMessage>
                  )}
                </InputFieldCol>
              </InputFieldRow>
              <InputFieldRow>
                <InputFieldCol className="col-3">
                  <Label htmlFor="pcode">
                    {t("register_ngo_form.stree_name")}
                  </Label>
                  <Input
                    type="text"
                    name="pcode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.orgid}
                    placeholder={t("register_ngo_form.stree_name")}
                  />
                  {errors.pcode && touched.pcode && (
                    <ErrorMessage>{errors.pcode}</ErrorMessage>
                  )}
                </InputFieldCol>
                <InputFieldCol className="col-3">
                  <Label htmlFor="city">
                    {t("register_ngo_form.city_label")}
                  </Label>
                  <Select
                    label="Langauge"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Select City</option>
                    <option value="designer">Newyourk</option>
                    <option value="development">London</option>
                    <option value="other">Other</option>
                  </Select>
                  {errors.city && touched.city && (
                    <ErrorMessage>{errors.city}</ErrorMessage>
                  )}
                </InputFieldCol>
                <InputFieldCol className="col-3">
                  <Label htmlFor="country">
                    {t("register_ngo_form.country_label")}
                  </Label>
                  <Select
                    label="country"
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Select Country</option>
                    <option value="designer">India</option>
                    <option value="development">Canada</option>
                    <option value="product">Germany</option>
                    <option value="other">Other</option>
                  </Select>
                  {errors.country && touched.country && (
                    <ErrorMessage>{errors.country}</ErrorMessage>
                  )}
                </InputFieldCol>
              </InputFieldRow>
            </BlockGroup>
            <BlockGroup>
              <BlockHeading>
                {t("register_ngo_form.representative")}
              </BlockHeading>
              <InputFieldRow>
                <InputFieldCol className="col-2">
                  <Label htmlFor="rname">
                    {t("register_ngo_form.representative_name")}
                  </Label>
                  <Input
                    type="text"
                    name="rname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.rname}
                    placeholder={t("register_ngo_form.representative_name")}
                  />
                  {errors.rname && touched.rname && (
                    <ErrorMessage>{errors.rname}</ErrorMessage>
                  )}
                </InputFieldCol>
                <InputFieldCol className="col-2">
                  <Label htmlFor="email">
                    {t("register_ngo_form.representative_email")}
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder={t("register_ngo_form.representative_email")}
                  />
                  {errors.email && touched.email && (
                    <ErrorMessage>{errors.email}</ErrorMessage>
                  )}
                </InputFieldCol>
              </InputFieldRow>
              <InputFieldRow>
                <InputFieldCol className="col-2">
                  <Label htmlFor="mobile">
                    {t("register_ngo_form.representative_phone")}
                  </Label>
                  <Input
                    type="number"
                    name="mobile"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mobile}
                    placeholder={t("register_ngo_form.representative_phone")}
                  />
                  {errors.mobile && touched.mobile && (
                    <ErrorMessage>{errors.mobile}</ErrorMessage>
                  )}
                </InputFieldCol>
                <InputFieldCol className="col-2">
                  <Label htmlFor="ophone">
                    {t("register_ngo_form.representative_ofc_phone")}
                  </Label>
                  <Input
                    type="number"
                    name="ophone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.ophone}
                    placeholder={t(
                      "register_ngo_form.representative_ofc_phone"
                    )}
                  />
                  {errors.ophone && touched.ophone && (
                    <ErrorMessage>{errors.ophone}</ErrorMessage>
                  )}
                </InputFieldCol>
              </InputFieldRow>
            </BlockGroup>
            <BlockGroup>
              <BlockHeading>{t("register_ngo_form.bank_detail")}</BlockHeading>
              <InputFieldRow>
                <InputFieldCol className="col-2">
                  <Label htmlFor="bname">
                    {t("register_ngo_form.acc_name")}
                  </Label>
                  <Input
                    type="text"
                    name="bname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bname}
                    placeholder={t("register_ngo_form.acc_name")}
                  />
                  {errors.bname && touched.bname && (
                    <ErrorMessage>{errors.bname}</ErrorMessage>
                  )}
                </InputFieldCol>
                <InputFieldCol className="col-2">
                  <Label htmlFor="anumber">
                    {t("register_ngo_form.acc_num")}
                  </Label>
                  <Input
                    type="number"
                    name="anumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.anumber}
                    placeholder={t("register_ngo_form.acc_num")}
                  />
                  {errors.anumber && touched.anumber && (
                    <ErrorMessage>{errors.anumber}</ErrorMessage>
                  )}
                </InputFieldCol>
              </InputFieldRow>
              <InputFieldRow>
                <InputFieldCol className="col-2">
                  <Label htmlFor="scode">
                    {t("register_ngo_form.swift_code")}
                  </Label>
                  <Input
                    type="number"
                    name="scode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.scode}
                    placeholder={t("register_ngo_form.swift_code")}
                  />
                  {errors.scode && touched.scode && (
                    <ErrorMessage>{errors.scode}</ErrorMessage>
                  )}
                </InputFieldCol>
                <InputFieldCol className="col-2">
                  <Label htmlFor="bic">{t("register_ngo_form.bic")}</Label>
                  <Input
                    type="number"
                    name="bic"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bic}
                    placeholder={t("register_ngo_form.bic")}
                  />
                  {errors.bic && touched.bic && (
                    <ErrorMessage>{errors.bic}</ErrorMessage>
                  )}
                </InputFieldCol>
              </InputFieldRow>
            </BlockGroup>
            <RegisterFooter>
              <Button type="submit" disabled={isSubmitting}>
                <span>{t("register_ngo_form.submit_btn")}</span>
              </Button>
            </RegisterFooter>
          </FormWrap>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
