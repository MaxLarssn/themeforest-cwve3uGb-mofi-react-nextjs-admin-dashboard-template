import * as Yup from "yup";

export const SamplePageData = [
    {
      text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit",
    },
  ];


  export const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  export const RegisterStepData = [
    { tittle: "personal", detail: "Add personal details" },
    { tittle: "Address", detail: "Add additional info" },
    { tittle: "Message", detail: "Add message(optional)" },
    { tittle: "Done", detail: "Complete.. !" },
  ];
  
  export const SAMPLE_DATA = [
    {
      text: "Prior to publishing content on social media",
    },
  ];
  