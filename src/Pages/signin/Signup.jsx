

import { Link } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import swal from "sweetalert";



const Signup = () => {

    const { emailPasswordSignIn, googleSignIn, handleUpdateProfile } = useContext(AuthContext);


    const handlSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);

        if (password.length < 6 ) {
            toast.error('password must be at least 6 characters')
            return;
        }
        if(!/^(?=.*[A-Z])(?=.*[@#$%^&+=!]).*$/.test(password)){
            toast.error('password must be have at least one capital letter and one special character')
            return;
        }

        emailPasswordSignIn(email, password)
        .then(res => {
            console.log(res);
            handleUpdateProfile(name, photo)
            .then(()=>{
                swal("Good job!", "register successful!", "success");
            })
            
        })
        .catch(err => {
            // console.log(err);
            toast.error(err.message)
        })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <div style={{ backgroundImage: 'url(https://i.ibb.co/d5bnJKD/background.jpg)' }} className="hero min-h-screen bg-base-200 font-poppins">
                <div className="hero-content max-w-full flex-col lg:flex-row-reverse gap-12 hero-overlay w-full">
                    <div className="text-center lg:text-left">
                        <h1 className="font-bold text-5xl text-center py-8 text-black"><span className="">Sign </span> Up</h1>
                        <p className=" text-lg font-medium text-center text-[#FF9606] mb-9">Please Sign Up to recive our services.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                        <form onSubmit={handlSignUp}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input name="name" type="text" placeholder="User Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#FF9606] text-white my-6">Sign up</button>
                            </div>
                        </form>
                        <p className=" text-center">Or Sign Up using google</p>
                        <button onClick={handleGoogleSignIn} className="flex justify-center"><AiOutlineGoogle className="text-3xl mt-2"></AiOutlineGoogle></button>
                        <p className="text-center mb-7 mt-2">Already have an account <Link className="text=blue-600 font-bold" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;

// style={{ backgroundImage: 'url(https://i.ibb.co/d5bnJKD/background.jpg)' }}