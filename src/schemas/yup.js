import * as yup from "yup";

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;

//Basic

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

//Advanced

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  jobType: yup
    .string()
    .oneOf(
      ["designer", "developer", "manager", "other"],
      "Please select a job type"
    )
    .required("Required"),
  language: yup.string().when("jobType", {
    is: "developer",
    then: (schema) => schema.required("Programming language is required"),
  }),
  teamSize: yup.string().when("jobType", {
    is: "manager",
    then: (schema) => schema.required("Team size is required"),
  }),
  designTool: yup.string().when("jobType", {
    is: "designer",
    then: (schema) => schema.required("Design tool is required"),
  }),
  acceptedTerms: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
  file: yup
    .mixed()
    .required("File is required")
    .test("filesize", "File too large", (value) =>
      value ? value.size <= 2 * 1024 * 1024 : false
    )
    .test("filetype", "Unsupported File Format", (value) =>
      value
        ? ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
        : false
    ),
  user: yup.object().shape({
    address: yup.object().shape({
      city: yup.string().required("City is required"),
    }),
  }),
  phones: yup
    .array()
    .of(
      yup
        .string()
        .matches(/^\d+$/, "Only numbers")
        .required("Phone is required")
    )
    .min(1, "At least one phone number required"),
});
