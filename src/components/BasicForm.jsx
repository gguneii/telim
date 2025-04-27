import { useFormik } from "formik";
import { basicSchema } from "../schemas/yup";

const onSubmit = (values, actions) => {
  setTimeout(() => {
    actions.resetForm();
  }, 1000);
  // console.log(actions);
//   console.log("submitted!");
};

const BasicForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });
console.log(values);

  //   console.log(formik);
//   console.log(errors);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-[350px] w-full mx-auto">
      <div className="flex flex-col gap-1 max-w-[350px]">
        <label className="text-white font-semibold" htmlFor="email">
          Email
        </label>
        <input
          className={`w-full text-white border rounded-[6px] pl-2 py-2 outline-none bg-[#29303f] ${
            errors.email && touched.email
              ? "border-red-500"
              : "border-[#ccc5c5]"
          }`}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          type="email"
          placeholder="Enter your email"
        />
        {errors.email && touched.email && (
          <p className="text-red-500">{errors.email}</p>
        )}
      </div>

      <div className="flex flex-col gap-1 ">
        <label className="text-white font-semibold" htmlFor="age">
          Age
        </label>
        <input
          className={`w-full text-white border rounded-[6px] pl-2 py-2 outline-none bg-[#29303f] ${
            errors.age && touched.age ? "border-red-500" : "border-[#ccc5c5]"
          }`}
          id="age"
          type="number"
          placeholder="Enter your age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.age && touched.age && (
          <p className="text-red-500">{errors.age}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-white font-semibold" htmlFor="password">
          Password
        </label>
        <input
          className={`w-full text-white border rounded-[6px] pl-2 py-2 outline-none bg-[#29303f] ${
            errors.password && touched.password
              ? "border-red-500"
              : "border-[#ccc5c5]"
          }`}
          id="password"
          type="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <p className="text-red-500">{errors.password}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-white font-semibold" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          className={`w-full text-white border rounded-[6px] pl-2 py-2 outline-none bg-[#29303f] ${
            errors.confirmPassword && touched.confirmPassword
              ? "border-red-500"
              : "border-[#ccc5c5]"
          }`}
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword}</p>
        )}
      </div>
      <button disabled ={isSubmitting} type="submit" className="w-full text-center font-semibold text-[#191c27] rounded-[6px] py-2 cursor-pointer bg-[#3072b0]" >Submit</button>
    </form>
  );
};

export default BasicForm;
