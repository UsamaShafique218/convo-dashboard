import React from "react";
import { 
  Input, 
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react"; 
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", api: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Frontend validation
  const validate = () => {
    const newErrors = { email: "", password: "", api: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try { 
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }); 

      const data = await response.json();
      console.log("API Response:", data); // Debug API response

      if (response.ok) {
        const token = data.token || data?.data?.token || "";
        const user = data.user || data?.data?.user || {};

        const userData = {
          token: token,
          id: user?.id || "",
          name: user?.name || "",
          email: user?.email || email,   
          role: user?.role || "",
          profileType: user?.profileType || "",
        };

        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/");
      }  else {
        setErrors((prev) => ({ ...prev, api: data?.message || "Login failed" }));
      }
    } catch (error) {
      setErrors((prev) => ({ ...prev, api: "Network error" }));
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="m-8 flex gap-4 sign_in_up_main">
      <div className="w-full lg:w-100">
        <div className="text-center">
          <Typography variant="h2" className="block antialiased tracking-normal font-sans text-4xl leading-[1.3] text-inherit font-bold mb-4">Conva</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
            Enter your email and password to Sign In.
          </Typography>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          
          {/* Email field */}
          <div className="form-row mb-3"> 
            <label variant="small" className="form-label">
              Email
            </label>
            <input
              size="lg"
              placeholder="name@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              labelprops={{ className: "before:content-none after:content-none" }}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>
          
          {/* Password field */}
          <div className="form-row mb-3"> 
            <label variant="small" className="form-label">
              Password
            </label>
            <input
              type="password"
              size="lg"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              labelprops={{ className: "before:content-none after:content-none" }}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
          </div> 

          {/* API error */}
          {errors.api && <span className="text-red-500 text-sm mb-3 block">{errors.api}</span>}

          {/* Submit button */}
          <div className="form-row">
            <Button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mt-6 cursor-pointer" fullWidth type="submit" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </div>

          {/* Forgot Password */}
          <div className="flex items-center justify-end gap-2 mt-6"> 
            <Typography variant="small" className="font-medium text-gray-900">
              <a href="#">Forgot Password</a>
            </Typography>
          </div> 
        </form>
      </div> 
    </section>
  );
}

export default SignIn;
