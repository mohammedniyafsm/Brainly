import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/User';
import { toast } from 'react-hot-toast';
import { AxiosError } from 'axios';

const loginSchema = z.object({
  email: z.string().email("Invalid Email Address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof loginSchema>;

export const Login = () => {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const loginSubmit = (data: FormData) => {
    login(data, {
      onSuccess: () => {
        toast.success("Login successful!");
        reset(); // clear the form
        navigate('/');
      },
      onError: (error) => {
        const axiosError = error as AxiosError<{ message?: string }>;
        toast.error(axiosError.response?.data?.message || "Login failed");
      },
    });
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[350px] bg-white rounded-xl shadow-sm py-6">
        {/* Header */}
        <div className="px-6 space-y-1">
          <h1 className="font-semibold text-lg">Login</h1>
          <p className="text-sm text-gray-500">Enter your credentials to access your account.</p>
        </div>

        {/* Form */}
        <div className="px-6">
          <form onSubmit={handleSubmit(loginSubmit)}>
            <div className="pt-6 space-y-4">
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
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center py-6">
              <button
                type="submit"
                disabled={isPending}
                className={`rounded-xl px-4 py-1.5 shadow-sm border transition-colors ${
                  isPending
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-white border-gray-200 hover:bg-gray-100"
                }`}
              >
                {isPending ? "Logging in..." : "Login"}
              </button>

              <button
                type="button"
                onClick={() => navigate('/signup')}
                className="rounded-xl shadow-sm bg-black text-white border border-gray-200 hover:bg-gray-900 px-4 py-1.5 cursor-pointer"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
