import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { advancedSchema } from "../schemas/yup";

function Advanced() {
  const submit = (values, actions) => {
    setTimeout(() => {
      actions.resetForm();
    }, 1000);
    // console.log(values);
  };
  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptedTerms: false }}
      validationSchema={advancedSchema}
      onSubmit={submit}
    >
      {(params) => (
        <Form className="max-w-[350px] w-full mx-auto flex flex-col gap-2.5 mt-[20px]">
          <label
            htmlFor="username"
            className="cursor-pointer text-white font-semibold"
          >
            Username
            <Field
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              className={`w-full text-white border mt-2 rounded-[6px] pl-2 py-2 outline-none bg-[#29303f] ${
                params.errors.username && params.touched.username
                  ? "border-red-500"
                  : "border-[#ccc5c5]"
              }`}
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </label>
          <label
            htmlFor="job"
            className="cursor-pointer text-white font-semibold"
          >
            Select your Job
            <Field
              as="select"
              name="jobType"
              id="job"
              className={`w-full text-white cursor-pointer mt-2 border rounded-[6px] pl-2 py-2 outline-none bg-[#29303f] ${
                params.errors.jobType && params.touched.jobType
                  ? "border-red-500"
                  : "border-[#ccc5c5]"
              }`}
            >
              <option value="" disabled>
                Select a job
              </option>
              <option value="designer">Designer</option>
              <option value="developer">Developer</option>
              <option value="manager">Manager</option>
              <option value="other">Other</option>
            </Field>
            <ErrorMessage
              name="jobType"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </label>

          <label htmlFor="acceptedTerms" className="flex items-center">
            <Field
              type="checkbox"
              name="acceptedTerms"
              id="acceptedTerms"
              className="cursor-pointer text-white font-semibold"
            />
            <span className="text-white font-semibold  pl-2">
              I accept the terms and conditions
            </span>
          </label>
          <ErrorMessage
            name="acceptedTerms"
            component="p"
            className="text-red-500 text-sm mt-1"
          />
          <button
            disabled={params.isSubmitting}
            className="w-full text-center font-semibold mt-2 text-[#191c27] rounded-[6px] py-2 cursor-pointer bg-[#3072b0]"
            type="submit"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default Advanced;
