// import React from "react";
// import TextField from "@mui/material/TextField";
// import { ErrorMessage, useField } from "formik";

// const CustomTextField = ({ formik, label, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <>
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         className={`form-control shadow-none ${
//           meta.touched && meta.error && "is-invalid"
//         }`}
//         // type={type}
//         // id={id}
//         label={label}
//         // name={name}
//         autoComplete={props.name}
//         onChange={formik.handleChange}
//         {...field}
//         {...props}
//         autoFocus
//         // error={formik.touched.email && Boolean(formik.errors.email)}
//         // helperText={formik.touched.email && formik.errors.email}
//       />
//       <ErrorMessage component="div" name={field.name}></ErrorMessage>
//     </>
//   );
// };

// export default CustomTextField;


// import React from 'react';
// import { ErrorMessage, useField } from 'formik';

//  const CustomTextField = ({ label, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <div className="mb-2">
//       <label htmlFor={field.name}>{label}</label>
//       <input
//         className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
//         {...field} {...props}
//         autoComplete="off"
//       >
  
//       </input>
//       <ErrorMessage component="div" name={field.name} className="error" />
//     </div>
//   )
// }

// export default CustomTextField;