import { Link } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import swal from "sweetalert";
import toast from "react-hot-toast";

const Login = () => {

    const { googleSignIn, emailPasswordLogIn } = useContext(AuthContext);

    const handleEmailPassLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        emailPasswordLogIn(email, password)
            .then(res => {
                console.log(res.message);
                swal("Good job!", "Login successful!", "success");
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message)
            })
    }

    const handleGoogleSignUp = () => {
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
                        <h1 className="font-bold text-5xl text-center py-8 text-black"><span className="">Log</span>in</h1>
                        <p className=" text-lg font-medium text-center text-[#FF9606] mb-9">Please Log In to recive our services.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                        <form onSubmit={handleEmailPassLogIn}  className="card-body">
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
                                <button className="btn bg-[#FF9606] text-white my-6">Log In</button>
                            </div>
                        </form>
                        <p className=" text-center">Or Sign Up using google</p>
                        <button onClick={handleGoogleSignUp} className="flex justify-center"><AiOutlineGoogle className="text-3xl mt-2"></AiOutlineGoogle></button>
                        <p className="text-center mt-2 mb-5">Do not have an account <Link className="text=blue-600 font-bold" to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;