import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


  

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};

const SignupForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('Submitted values:', values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field type="text" name="firstName" placeholder="First Name" />
                    {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}
                    <Field type="text" name="lastName" placeholder="Last Name" />
                    {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}
                    <Field type="email" name="email" placeholder="Email" />
                    {errors.email && touched.email && <div>{errors.email}</div>}
                    <Field type="password" name="password" placeholder="Password" />
                    {errors.password && touched.password && <div>{errors.password}</div>}
                    <button type="submit">Sign Up</button>
                </Form>
            )}
        </Formik>
    );
};

export default SignupForm;





// import React from 'react';
// import { Formik } from 'formik';

// const BasicExample = () => (
//   <div>
//     <h1>My Form</h1>
//     <Formik
//       initialValues={{ name: 'jared' }}
//       onSubmit={(values, actions) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           actions.setSubmitting(false);
//         }, 1000);
//       }}
//     >
//       {props => (
//         <form onSubmit={props.handleSubmit}>
//           <input
//             type="text"
//             onChange={props.handleChange}
//             onBlur={props.handleBlur}
//             value={props.values.name}
//             name="name"
//           />
//           {props.errors.name && <div id="feedback">{props.errors.name}</div>}
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </Formik>
//   </div>
// );