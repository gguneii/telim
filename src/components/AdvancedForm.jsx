import React from "react";
import { Field, Form, Formik } from "formik";
import { advancedSchema } from "../schemas/yup";

function AdvancedForm() {
  function submit(values, actions) {
    setTimeout(() => {
      actions.resetForm();
    }, 1000);
    // console.log(values, actions);
  }

  return (
    <Formik
      initialValues={{
        username: "",
        jobType: "",
        acceptedTerms: "",
      }}
      onSubmit={submit}
      validationSchema={advancedSchema}
    >
      {({values, errors, isSubmitting, handleChange }) => (
        <Form className="flex flex-col container mx-auto gap-2.5 mt-[40px] max-w-[350px] w-full ">
          <label
            htmlFor="job"
            className="cursor-pointer text-white font-semibold"
          >
            Select your Job
          </label>
          <Field
            as="select"
            name="select"
            id="job"
            value={values.jobType}
            onchange={handleChange}
            className={`w-full text-white cursor-pointer border rounded-[6px] pl-2 py-2 outline-none bg-[#29303f] ${
              errors.email && touched.email
                ? "border-red-500"
                : "border-[#ccc5c5]"
            }`}
          >
            <option value="designer">Designer</option>
            <option value="developer">Developer</option>
            <option value="manager">Manager</option>
            <option value="other">Other</option>
          </Field>

          {/* <button
            onClick={resetForm}
            className="w-full text-center font-semibold text-[#191c27] rounded-[6px] py-2 cursor-pointer bg-[#3072b0]"
            type="button"
          >
            Temizle
          </button> */}

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full text-center font-semibold text-[#191c27] rounded-[6px] py-2 cursor-pointer bg-[#3072b0]"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default AdvancedForm;
