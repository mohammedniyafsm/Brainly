import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignup } from "../hooks/User";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";

const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof signupSchema>;

export const Signup = () => {
  const navigate = useNavigate();
  const { mutate: signup, isPending } = useSignup();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signupSchema),
  });

  const signupSubmit = (data: FormData) => {
    signup(data, {
      onSuccess: () => {
        toast.success("Signup successful!");
        reset();
        navigate("/login");
      },
      onError: (error) => {
        const axiosError = error as AxiosError<{ message?: string }>;
        toast.error(axiosError.response?.data?.message || "Signup failed");
      },
    });
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[350px] bg-white rounded-xl shadow-sm py-6">
        {/* Header */}
        <div className="px-6 space-y-1">
          <h1 className="font-semibold text-lg">Signup</h1>
          <p className="text-sm text-[#737373]">
            Enter your credentials to create your account.
          </p>
        </div>

        {/* Form */}
        <div className="px-6">
          <form onSubmit={handleSubmit(signupSubmit)} className="pt-6 space-y-4">
            {/* Username */}
            <div className="space-y-1">
              <label htmlFor="username" className="text-sm font-medium">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                {...register("username")}
                className="w-full h-10 px-2 rounded-md border border-gray-200 shadow-sm focus:ring-4 focus:ring-gray-200 focus:outline-none"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className="w-full h-10 px-2 rounded-md border border-gray-200 shadow-sm focus:ring-4 focus:ring-gray-200 focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                className="w-full h-10 px-2 rounded-md border border-gray-200 shadow-sm focus:ring-4 focus:ring-gray-200 focus:outline-none"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center pt-4">
              <button
                type="submit"
                disabled={isPending}
                className={`rounded-xl px-4 py-1 shadow-sm border transition-colors ${
                  isPending
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-white border-gray-200 hover:bg-gray-100"
                }`}
              >
                {isPending ? "Registering..." : "Register"}
              </button>

              <button
                type="button"
                onClick={() => navigate("/login")}
                className="rounded-xl shadow-sm bg-black text-white border border-gray-200 hover:bg-gray-900 px-4 py-1.5 cursor-pointer"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
