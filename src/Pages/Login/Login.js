import React, { useEffect } from "react";
import bg from "../../assets/images/rosebg.png";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (gUser || user) {
      navigate(from, { replace: true });
    }
  }, [user, gUser, navigate, from]);

  if (gLoading || loading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-700 font-bold text-xs">
        {error?.message || gError?.message}
      </p>
    );
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <section className="mt-20 justify-center flex items-center h-screen">
      <div
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
        className="card w-96"
      >
        <div className="card w-full max-w-5xl">
          <h1 className="text-center mt-7 text-2xl font-bold text-pink-700">
            LOGIN
          </h1>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* email */}
              <label className="label">
                <span className="label-text text-sm font-extrabold text-pink-700">
                  Email
                </span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-700">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-700">
                    {errors.email.message}
                  </span>
                )}
              </label>

              {/* password */}
              <label className="label">
                <span className="label-text text-sm font-extrabold text-pink-700">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password required",
                  },
                  minLength: {
                    value: 6,
                    message: "Provide at least 6 characters for password",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-700">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-700">
                    {errors.password.message}
                  </span>
                )}
              </label>
              {signInError}
              <input
                className="btn btn-md font-bold text-lg border-secondary border-2 uppercase text-pink-700 bg-gradient-to-l from-accent to-secondary mt-6 w-full max-w-xs"
                type="submit"
                value="Login"
              />
            </form>

            <p className="mt-3">
              <small className="font-medium">
                New to flower-bouquet shop?
                <Link className="text-pink-700 font-extrabold" to="/signup">
                  Create new account
                </Link>
              </small>
            </p>
            <div className="divider text-xl font-bold text-pink-900 mt-4">
              OR
            </div>
            <div className="form-control mt-6">
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-md font-bold text-lg border-secondary border-2 uppercase text-pink-700 bg-gradient-to-l from-accent to-secondary"
              >
                continue with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
