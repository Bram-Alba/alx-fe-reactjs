import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function FormikForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          alert(`Registered:\nUsername: ${values.username}\nEmail: ${values.email}`);
          resetForm();
        }}
      >
        <Form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">User Registration (Formik)</h2>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Username</label>
            <Field
              name="username"
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <ErrorMessage name="username" component="p" className="text-red-500 text-sm mt-1" />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email</label>
            <Field
              name="email"
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Password</label>
            <Field
              name="password"
              type="password"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;