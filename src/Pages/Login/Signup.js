import React from 'react';
import bg from '../../assets/images/purple-bg.png'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Signup = () => {
        const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
        const { register, formState: { errors }, handleSubmit } = useForm();
        const [
                createUserWithEmailAndPassword,
                user,
                loading,
                error,
        ] = useCreateUserWithEmailAndPassword(auth);
        const [updateProfile, updating, updateError] = useUpdateProfile(auth);
        const navigate = useNavigate();

        const [token] = useToken(gUser || user);

        let signInError;

        if (token) {
                navigate('/appointment');
        }

        if (gLoading || loading || updating) {
                return <Loading></Loading>
        }

        if (error || gError || updateError) {
                signInError = <p className='text-red-700 font-bold text-xs'>{error?.message || gError?.message || updateError?.message}</p>
        }

        const onSubmit = async data => {
                await createUserWithEmailAndPassword(data.email, data.password);
                await updateProfile({ displayName: data.name });
        }

        return (
                <section className='mt-20 justify-center flex items-center h-screen'>
                        <div
                                style={{
                                        background: `url(${bg})`,
                                        backgroundSize: 'cover'
                                }} className="card w-96">
                                <div className="card w-full max-w-5xl">
                                        <h1 className='text-center mt-7 text-2xl font-bold text-pink-700'>SIGNUP</h1>
                                        <div className="card-body">
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                        {/* name */}
                                                        <label className="label">
                                                                <span className="label-text text-sm font-extrabold text-pink-700">Name</span>
                                                        </label>
                                                        <input
                                                                type="text"
                                                                placeholder="Your name"
                                                                className="input input-bordered w-full max-w-xs"
                                                                {...register("name", {
                                                                        required: {
                                                                                value: true,
                                                                                message: 'Name is required'
                                                                        }
                                                                })}
                                                        />
                                                        <label className='label'>
                                                                {errors.name?.type === 'required' && <span className='label-text-alt text-red-700'>{errors.name.message}</span>}
                                                        </label>
                                                        {/* email */}
                                                        <label className="label">
                                                                <span className="label-text text-sm font-extrabold text-pink-700">Email</span>
                                                        </label>
                                                        <input
                                                                type="text"
                                                                placeholder="email"
                                                                className="input input-bordered w-full max-w-xs"
                                                                {...register("email", {
                                                                        required: {
                                                                                value: true,
                                                                                message: 'Email is required'
                                                                        },
                                                                        pattern: {
                                                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                                                message: 'Provide a valid email'
                                                                        }
                                                                })}
                                                        />
                                                        <label className='label'>
                                                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-700'>{errors.email.message}</span>}
                                                                {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-700'>{errors.email.message}</span>}
                                                        </label>

                                                        {/* password */}
                                                        <label className="label">
                                                                <span className="label-text text-sm font-extrabold text-pink-700">Password</span>
                                                        </label>
                                                        <input
                                                                type="password"
                                                                placeholder="password"
                                                                className="input input-bordered w-full max-w-xs"
                                                                {...register("password", {
                                                                        required: {
                                                                                value: true,
                                                                                message: 'password required'
                                                                        },
                                                                        minLength: {
                                                                                value: 6,
                                                                                message: 'Provide at least 6 characters for password'
                                                                        }
                                                                })}
                                                        />
                                                        <label className='label'>
                                                                {errors.password?.type === 'required' && <span className='label-text-alt text-red-700'>{errors.password.message}</span>}
                                                                {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-700'>{errors.password.message}</span>}
                                                        </label>
                                                        {signInError}
                                                        <input
                                                                className="btn btn-md font-bold text-lg border-secondary border-2 uppercase text-pink-700 bg-gradient-to-l from-accent to-secondary mt-6 w-full max-w-xs"
                                                                type="submit"
                                                                value="Signup" />
                                                </form>

                                                <p className='mt-3'><small className='font-medium'>Already have an account? <Link className='text-pink-900 font-bold' to="/login">Login to account</Link></small></p>
                                                <div className="divider text-xl font-bold text-pink-900">OR</div>
                                                <div className="form-control mt-6">
                                                        <button
                                                                onClick={() => signInWithGoogle()}
                                                                className="btn btn-md font-bold text-lg border-secondary border-2 uppercase text-pink-700 bg-gradient-to-l from-accent to-secondary">continue with google</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        );
};

export default Signup;