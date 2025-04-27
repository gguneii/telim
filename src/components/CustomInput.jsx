import { useField } from "formik";

function CustomInput({ label, ...props }) {
  const { field, meta } = useField(props);
  return (
    <>
      <label>{label}</label>
      <input
        {...props}
        {...field}
        className={`w-full text-white border rounded-[6px] pl-2 py-2 outline-none bg-[#29303f] ${
          meta.touched && meta.error ? "border-red-500" : "border-[#ccc5c5]"
        }`}
      />
    </>
  );
}

export default CustomInput;
