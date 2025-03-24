import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setOtp, setEmail } from '../../slices/OTPSlice';
import { setToken } from '../../slices/authSlice';
import { setUser } from '../../slices/profileSlice';
import toast from 'react-hot-toast';

function LoginSignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
  console.log("Printing user", user);



  const [formData, setFormData] = useState({ email: '' });
  const { email } = formData;

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleOnChange = (e) => {
    const updatedEmail = e.target.value;
    setFormData({ email: updatedEmail });

    // Update email in Redux store
    dispatch(setEmail(updatedEmail));
  };

  // Handle form submission
  const handleOnSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();

    const payload = { ...formData };

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_HOST_URL;
      if (!backendUrl) {
        setError('Backend URL is not defined.');
        setLoading(false);
        return;
      }
      toast.success('Otp Sent Successfully');
      const response = await fetch(`${backendUrl}/api/auth/sendotp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to process request");

      const data = await response.json();
      console.log(data);

      if (data.token) {
        // If user already exists, redirect to home page
        dispatch(setToken(data.token));
        dispatch(setUser(data.user));
        console.log("Printing user", data.user);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } else {
        // If user does not exist, proceed with OTP verification
        dispatch(setOtp(data.otp));
        setLoading(false)
        navigate("/verifyEmail");
      }

      // Clear form
      setFormData({ email: '' });

    } catch (error) {
      console.error("Error processing signup:", error);
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#FCEFE3] p-4">
      {
        loading ? (
          <div className="h-[500px] flex justify-center items-center"><div className="spinner h-200"></div></div>
        ) :
          (
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-4xl flex flex-col md:flex-row gap-6">
              <div className="bg-[#FAE7D1] flex flex-col items-center justify-center p-8 rounded-xl w-full md:w-1/2 text-center">
                <div className="bg-[#C46A3A] text-white p-4 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-[#7D4C3D]">Personalized</h2>
                <h1 className="text-2xl font-bold text-[#7D4C3D]">Curations</h1>
                <p className="text-[#7D4C3D] mt-2">
                  Explore curations based on your interests
                </p>
              </div>

              <form onSubmit={handleOnSubmit} className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-xl font-bold text-[#3D2C2A]">
                  Welcome to LoginPage!
                </h2>
                <p className="text-sm text-[#6D5F5A]">
                  Login/Signup to get exclusive privileges
                </p>

                <div className="mt-4 flex items-center border rounded-lg overflow-hidden bg-gray-100">
                  <span className="p-3 bg-white border-r">
                    🇮🇳
                  </span>
                  <input
                    type="text"
                    onChange={handleOnChange}
                    value={email}
                    name='email'
                    placeholder="Enter Email ID"
                    className="p-3 flex-grow bg-transparent outline-none"
                  />
                </div>

                <button className="mt-4 bg-[#A02020] text-white py-2 rounded-lg w-full font-bold">
                  Request OTP
                </button>

                <p className="text-xs text-gray-500 mt-2 text-center">
                  By continuing, I agree to{" "}
                  <a href="#" className="text-red-500">
                    Terms of Use
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-red-500">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          )
      }
    </div>
  );
}

export default LoginSignUp;