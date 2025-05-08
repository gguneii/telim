import React, { useRef } from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { advancedSchema } from "../schemas/yup";
import { dynamicFields } from "./register/const";

function Advanced() {
  const fileInputRef = useRef(null);

  const submit = (values, actions) => {
    // console.log(values.file);

    setTimeout(() => {
      actions.resetForm();
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // file input təmizlənir
      }
    }, 1000);
    // console.log(values);
  };

  return (
    <Formik
      initialValues={{
        username: "",
        jobType: "",
        acceptedTerms: false,
        file: "",
        user: {
          address: {
            city: "",
          },
        },
        phones: [""],
      }}
      validationSchema={advancedSchema}
      onSubmit={submit}
    >
      {(params) => {
        const selectedField = dynamicFields[params.values.jobType];

        return (
          <Form className="max-w-[350px] w-full mx-auto flex flex-col gap-2.5 ">
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

            {selectedField && (
              <label
                htmlFor={selectedField.name}
                className="text-white font-semibold"
              >
                {selectedField.label}
                <Field
                  name={selectedField.name}
                  placeholder={selectedField.placeholder}
                  className="form-style  w-full text-white mt-2 border rounded-[6px] pl-2 py-2 outline-none bg-[#29303f]"
                />
                <ErrorMessage
                  name={selectedField.name}
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </label>
            )}

            <label htmlFor="file" className="text-white font-semibold">
              Upload file
              <input
                type="file"
                name="file"
                id="file"
                ref={fileInputRef}
                className={`w-full text-white cursor-pointer mt-2 border rounded-[6px] pl-2 py-2 outline-none bg-[#29303f] ${
                  params.errors.file && params.touched.file
                    ? "border-red-500"
                    : "border-[#ccc5c5]"
                }`}
                onChange={(event) => {
                  params.setFieldValue("file", event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage
                name="file"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </label>

            <label htmlFor="city" className="text-white font-semibold">
              City
              <Field
                type="text"
                name="user.address.city"
                id="city"
                placeholder="Enter your city"
                className={`w-full text-white border mt-2 rounded-[6px] pl-2 py-2 outline-none bg-[#29303f] ${
                  params.errors.user && params.touched.user
                    ? "border-red-500"
                    : "border-[#ccc5c5]"
                }`}
              />
              <ErrorMessage
                name="user.address.city"
                component="div"
                className="text-red-500 text-sm"
              />
            </label>

            <FieldArray name="phones">
              {({ push, remove }) => (
                <>
                  {params.values.phones.map((phone, index) => (
                    <div key={index} className="mb-2">
                     <label htmlFor="phone" className="text-white font-semibold" > Phone</label>
                      <Field
                        className={`w-full text-white mt-2 border rounded-[6px] pl-2 py-2 outline-none bg-[#29303f] ${
                          params.errors.phones && params.touched.phones
                            ? "border-red-500"
                            : "border-[#ccc5c5]"
                        }`}
                        name={`phones[${index}]`}
                        placeholder="Enter phone number"
                      />
                      <ErrorMessage
                        name={`phones[${index}]`}
                        component="div"
                        className="text-red-500"
                      />
                      {index > 0 && (
                        <button
                          className="w-[100px] bg-[#06192c] text-white py-2 rounded-[6px] cursor-pointer"
                          type="button"
                          onClick={() => remove(index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    className="w-[200px] bg-[#052c50] text-white py-2 rounded-[6px] cursor-pointer"
                    type="button"
                    onClick={() => push("")}
                  >
                    Add Phone
                  </button>
                </>
              )}
            </FieldArray>

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
              className="text-red-500 text-sm"
            />
            <button
              disabled={params.isSubmitting}
              className="w-full text-center font-semibold mt-2 text-[#191c27] rounded-[6px] py-2 cursor-pointer bg-[#3072b0]"
              type="submit"
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Advanced;
