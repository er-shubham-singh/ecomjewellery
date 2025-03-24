import { useState } from "react";
import { useSelector } from "react-redux";
import { setToken } from "../../slices/authSlice";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setUser } from "../../slices/profileSlice";
import toast from 'react-hot-toast';



export default function SignupForm() {
  const userEmail = useSelector((state) => state.otp.email)
  const otps = useSelector((state) => state.otp.otp)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  console.log(userEmail);
  console.log(otps);


  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    phoneNumber: "",
    email: userEmail,
  });

  const { title, fullName, phoneNumber, email } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const payload = { ...formData }; // Use formData to create the payload

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_HOST_URL;
      if (!backendUrl) {
        setError('Backend URL is not defined.');
        setLoading(false);
        return;
      }
      const response = await fetch(`${backendUrl}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to register user");

      const data = await response.json();
      console.log("Signup successful:", data);

      // Save Token to State and Local Storage
      dispatch(setToken(data.token));
      dispatch(setUser(data.user));
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      // localStorage.setItem("user", JSON.stringify(data.user));
      toast.success('Signup Successfully');
      navigate('/')

    } catch (error) {
      console.error("Error sending signup data:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-center text-gray-700">Almost there!</h2>
        <p className="text-center text-sm text-gray-500 mb-4">Welcome back, Please fill the missing fields.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            name="title"
            value={title}
            onChange={handleOnChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-orange-400"
          >
            <option value="">Title</option>
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Mrs">Mrs</option>
          </select>

          <input
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={handleOnChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-orange-400"
          />

          <div className="flex space-x-2">
            <input
              type="text"
              value="+91"
              disabled
              className="w-16 p-2 border border-gray-300 rounded-lg bg-gray-100"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter Mobile Number"
              value={phoneNumber}
              onChange={handleOnChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-orange-400"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Enter Email ID"
            value={email}
            onChange={handleOnChange}
            // readOnly
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-orange-400"
          />

          <button
            type="submit"
            className="w-full p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            Continue
          </button>
        </form>

        <p className="text-xs text-center text-gray-500 mt-2">
          By continuing, I agree to <span className="text-orange-500">Terms of Use</span> & <span className="text-orange-500">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}