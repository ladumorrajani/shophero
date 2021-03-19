import React from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Layout from "../../Layout";
import {
  RegisterNgoStyle,
  RegisterFormWrap,
  MainHeading,
} from "./RegisterNgo.styles";
import "../../i18n";
import { useTranslation } from "react-i18next";

const RegisterNgo = (props) => {
  const { t } = useTranslation();
  return (
    <Layout mainClass="register-ngo-page shape-bg">
      <RegisterNgoStyle>
        <div className="container">
          <RegisterFormWrap>
            <MainHeading>{t("register_ngo_form.form_title")}</MainHeading>
            <RegisterForm />
          </RegisterFormWrap>
        </div>
      </RegisterNgoStyle>
    </Layout>
  );
};

export default RegisterNgo;
