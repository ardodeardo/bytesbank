import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import axios from "axios";
import { toast } from "react-toastify";

import { Google } from "@/components/Icon";
import AuthLayout from "@/components/Layout/auth";
import { API_ROUTES, APP_ROUTES } from "@/constants/path";
import {
  getAuthenticatedUser,
  storeTokenInLocalStorage,
} from "@/helper/common";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const redirectIfAuthenticated = async () => {
    const isUserAuthenticated = await getAuthenticatedUser();

    if (isUserAuthenticated?.authenticated) {
      router.push(APP_ROUTES.upload);
    }
  };

  useEffect(() => {
    redirectIfAuthenticated();
  }, []);

  const signIn = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: API_ROUTES.signIn,
        data: {
          email,
          password,
        },
      });

      if (!response?.data?.token) {
        console.log("something went wrong on sign in", response);
        toast.error('Failed to sign in');

        return;
      }

      storeTokenInLocalStorage(response.data.token);

      router.push(APP_ROUTES.upload);
    } catch (error) {
      console.log("something went wrong on sign in", error);
      toast.error('Failed to sign in');
    }
  };

  return (
    <AuthLayout>
      <div className="text-center">
        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
          Sign in
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Don't have an account yet?{" "}
          <Link
            className="text-blue-600 decoration-2 hover:underline font-medium"
            href="/signup"
          >
            Sign up here
          </Link>
        </p>
      </div>

      <div className="mt-5">
        {/* <button
                  type="button"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                >
                  <Google />
                  Sign in with Google
                </button>

                <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                  Or
                </div> */}

        {/* Form */}
        <form onSubmit={(e) => signIn(e)}>
          <div className="grid gap-y-4">
            {/* Form Group */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm mb-2 dark:text-white"
              >
                Email address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  required
                  aria-describedby="email-error"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                  <svg
                    className="h-5 w-5 text-red-500"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </div>
              </div>
              <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                Please include a valid email address so we can get back to you
              </p>
            </div>
            {/* End Form Group */}

            {/* Form Group */}
            <div>
              <div className="flex justify-between items-center">
                <label
                  htmlFor="password"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Password
                </label>
                {/* <a
                          className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                          href="../examples/html/recover-account.html"
                        >
                          Forgot password?
                        </a> */}
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  required
                  aria-describedby="password-error"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                  <svg
                    className="h-5 w-5 text-red-500"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </div>
              </div>
              <p
                className="hidden text-xs text-red-600 mt-2"
                id="password-error"
              >
                8+ characters required
              </p>
            </div>
            {/*End Form Group */}

            {/*Checkbox */}
            <div className="flex items-center">
              <div className="flex">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                />
              </div>
              <div className="ml-3">
                <label
                  htmlFor="remember-me"
                  className="text-sm dark:text-white"
                >
                  Remember me
                </label>
              </div>
            </div>
            {/*End Checkbox */}

            <button
              type="submit"
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Sign in
            </button>
          </div>
        </form>
        {/*End Form */}
      </div>
    </AuthLayout>
  );
}
