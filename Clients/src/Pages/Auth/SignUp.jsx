import React from "react";
import img from "./../../assets/img/signin-CCgA2CDV.svg";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../hooks/useAuth";
import logo from "./../../assets/img/logob.png";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaGithub } from "react-icons/fa";
function SignUp() {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {
    createUser,
    createGoogleUser,
    updateUserProfile,
    createGitUser,
    loading,
    setLoading,
  } = useAuth();

  const handleSocialLogin = async (socialProvider) => {
    try {
      await socialProvider();

      navigate("/");
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  // save user
  const saveUserONDB = async (user) => {
    //  console.log(user.displayName);
    //console.log(saveUser);
    try {
      const { data } = await axiosSecure.put(`/user`, user);
      console.log(data, "user");
      return data;
      
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);
      // 1. Upload image and get image url
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
      );
      //  console.log(data.data.display_url)

      //2. User Registration
      const result = await createUser(email, password);
      // console.log(result)

      // 3. Save username and photo in firebase
      await updateUserProfile(name, data.data.display_url);
      const user = {
        name,
        image: data.data.display_url,
        email,
        role: "student",
        status: "verified",
      };
      console.table(user);
      saveUserONDB(user);

      navigate("/");

      form.reset();
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <div className="container ">
      <div className="row justify-content-center align-items-center m-auto">
        <div className="col-12">
          <div className="d-flex-lg shadow bg-mode rounded-3 overflow-hidden">
            <div className="col-lg-6 d-flex align-items-center order-2 order-lg-1">
              <div className="p-3 p-lg-5">
                <img src={img} alt="" />
              </div>
              <div className="vr opacity-1 d-none d-lg-block" />
            </div>

            <div className="col-lg-6 order-1">
              <div className="p-4 p-sm-7">
                <NavLink href="/" className="">
                  <img className="h-40px mb-4" src={logo} alt="logo" />
                </NavLink>
                <h1 className="mb-2 h3">Welcome</h1>
                <p className="mb-0">
                  {" "}
                  Already have Account?{" "}
                  <NavLink to="/login" className="">
                    {" "}
                    Sign in
                  </NavLink>
                </p>
                <form className="mt-4 text-start" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <fieldset className="">
                      <legend className="form-label bv-no-focus-ring col-form-label pt-0">
                        Enter Name
                      </legend>
                      <div className="">
                        <input
                          className="form-control"
                          name="name"
                          type="text"
                          placeholder="Enter Name"
                        />{" "}
                      </div>
                    </fieldset>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image" className="block mb-2 text-sm">
                      Select Image:
                    </label>
                    <input
                      required
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                    />
                  </div>
                  <div className="mb-3">
                    <fieldset className="" id="__BVID__745902___BV___">
                      <legend
                        id="__BVID__118706___BV__BV_label___"
                        tabindex="-1"
                        className="form-label bv-no-focus-ring col-form-label pt-0"
                      >
                        Enter email
                      </legend>
                      <div className="">
                        <input
                          id="__BVID__077948___BV_input__"
                          className="form-control"
                          name="email"
                          type="email"
                        />{" "}
                      </div>
                    </fieldset>
                  </div>

                  <div className="mb-3">
                    <div
                      className="position-relative"
                      name="password"
                      autocomplete=""
                    >
                      <label className="form-label" for="form-password">
                        Enter password
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        id="form-password"
                        placeholder=""
                        name="password"
                        autocomplete=""
                      />
                      <span className="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
                        <svg
                          className="svg-inline--fa fa-eye cursor-pointer pe-2 mt-1"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="eye"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            className=""
                            fill="currentColor"
                            d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div>
                    <button
                      className="btn btn-md btn-primary w-100 mb-0"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <TbFidgetSpinner className="animate-spin m-auto" />
                      ) : (
                        "Sign Up"
                      )}
                    </button>
                  </div>
                  <div className="position-relative my-4">
                    <hr />
                    <p className="small bg-mode position-absolute top-50 start-50 translate-middle px-2">
                      {" "}
                      Or sign Up with{" "}
                    </p>
                  </div>
                  <div
                    className="vstack gap-3"
                    onClick={() => handleSocialLogin(createGoogleUser)}
                  >
                    <a href="#" className="btn btn-light mb-0">
                      <svg
                        className="ov-icon fa-fw text-google-icon me-1"
                        aria-hidden="true"
                        width="19.2"
                        height="19.2"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        style={{ fontSize: "1.2em" }}
                      >
                        <path
                          fill="#FFC107"
                          d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                        ></path>
                        <path
                          fill="#FF3D00"
                          d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                        ></path>
                        <path
                          fill="#4CAF50"
                          d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                        ></path>
                        <path
                          fill="#1976D2"
                          d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                        ></path>
                      </svg>{" "}
                      Sign Up with Google{" "}
                    </a>
                    <div className="btn btn-light mb-0 ml-4"   onClick={() => handleSocialLogin(createGitUser)}>
                      <FaGithub/>
                      Sign Up with Github{" "}
                    </div>
                  </div>
                  <div className="text-primary-hover text-body mt-3 text-center">
                    {" "}
                    Copyrights ©2024 StudySync. Build by{" "}
                    <a href="" className="text-body">
                      rareTechIt
                    </a>
                    .
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
