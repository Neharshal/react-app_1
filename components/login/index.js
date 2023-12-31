import React from "react";
import HeadPage from "../Layout/headPage";
import HEAD_TITLES from "@/utils/constants/titleConstants";
import styles from "./styles.module.css";
import { Button, Form, Spinner } from "react-bootstrap";
//import { FaLock } from "react-icons/fa";
import { FaArrowLeft , FaArrowRight} from "react-icons/fa6";
import Link from "next/link";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Field, Formik } from "formik";
import * as yup from "yup";
import InputField from "../fields/inputField";

const defaultValues = {
  email: "",
  password: "",
};

 

function Login() {

  const handleFormSubmit = async (values) => {
    await axios
      .post("https://reqres.in/api/login", {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        localStorage.setItem("userAuthToken", response.data.token);
        window.location = "/users";
      })
      .catch(function (error) {
        if (error?.response?.status == 400) {
          alert(error.response?.data?.error);
        } else {
          alert(error.message);
        }
      });
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(20),
    // terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });
  return (
    <>
    
      <HeadPage title={HEAD_TITLES.login}>
        <section>
          <div className="container my-3 pt-5">
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-lg-5 col-md-7 col-12">
               
              <Formik
                  validationSchema={validationSchema}
                  onSubmit={handleFormSubmit}
                  initialValues={defaultValues}
                >
                  {({ handleSubmit, isSubmitting }) => {
                    return (
                      <Form noValidate onSubmit={handleSubmit}>

                  <div
                    className={`${styles.contactFormWrapper} bg-primary bg-opacity-10 p-md-5 p-2 pt-4 rounded`}
                  >
                    {/* <Image
                      src="./circle-pattern.png"
                      alt=""
                      className="img-fluid contact-form-img d-none d-md-block"
                    /> */}
                    <div className="row my-2">
                      <div className="col-12">
                        <h2
                          className={`${styles.contactFormHeading} text-center`}
                        >
                          Get In Touch
                        </h2>
                        <p
                          className={`${styles.contactFormParagh} text-center text-dark`}
                        >
                          faucibus ultrices facilisis odio amet, luctus
                          vehicula, turpis elit. Sed placerat.
                        </p>
                      </div>

                        <div className="col-12 my-2">
                              <Field
                                name="email"
                                placeholder="Email Address"
                                label="Email"
                                component={InputField}
                              />
                            </div>
                            <div className="col-12 my-2">
                              <Field
                                type="password"
                                name="password"
                                label="Password"
                                placeholder="Enter your password"
                                component={InputField}
                              />
                            </div>

                      <div className="col-12 mx-auto my-2 mt-4">
                        <Button
                          type="submit"
                          className={`btn w-100  ${isSubmitting ? "bg-secondary" : "bg-primary"} bg-opacity-50 py-3 text-white me-2 mb-4 mb-sm-0`}

                       > 
                       {/* {isSubmitting ? "Submitting..." : "Login >>"} */}
                       
                       {isSubmitting ? (
                                  <Spinner animation="border" role="status">
                                    <span className="visually-hidden">
                                      Loading...
                                    </span>
                                  </Spinner>
                                ) : (
                       
                                // <FaLock />
                          
                               Login

                                   )
                         }
                           
                        </Button>
                      </div>

                      <div className="col-12 mt-4 d-flex justify-content-between">
                        <Link href="/./home/">
                        <FaArrowLeft />  back
                        </Link>
                        <Link href="/./singUp">
                          {" "}
                          Singup <FaArrowRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Form>
                    );
                  }}
                  </Formik>
              </div>
            </div>
          </div>
        </section>
      </HeadPage>

      <ToastContainer />
    </>
  );
}

export default Login;
