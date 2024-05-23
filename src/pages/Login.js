import React from "react";

const Login = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-white flex justify-center items-center">
      <div className="w-[40%] flex justify-center items-center flex-col gap-5 max-[550px]:w-[80%]">
        <div className="head-part flex justify-center items-center flex-col gap-3">
          <h1 className="text-[black] font-bold text-2xl">Sign in</h1>
          <span>
            New to Untitled ?{" "}
            <a href="#" className="text-[#434ce7] font-bold">
              Create an account
            </a>
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div> */}
              <input
                type="text"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="rose@yopmail.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div> */}
              <input
                type="password"
                name="password"
                id="password"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="rose@yopmail.com"
              />
            </div>
          </div>

          <div className="flex items-center justify-between flex-row gap-5">
            <div className="">
              <label className="peer max-[550px]:text-xs">
                <input
                  type="checkbox"
                  name=""
                  className="checked:bg-blue-500 max-[400px]:text-xs max-[550px]:text-[10px]"
                />{" "}
                Remember for 30 days
              </label>
            </div>
            <div>
              <a href="#" className="text-[#434ce7] font-bold text-right max-[550px]:text-xs">
                Forgot Password
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button
              type="button"
              className="bg-indigo-500 px-4 py-2 rounded-lg focus:outline-none text-white w-[100%] font-bold"
            >
              Sign in
            </button>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="bg-white px-4 py-2 rounded-lg focus:outline-none border-solid border-2 border-gray w-[45%] flex items-center justify-center"
              >
                <img src={"/search.png"} alt={"Google"} className="w-6 h-6 " />
              </button>
              <button
                type="button"
                className="bg-white px-4 py-2 rounded-lg focus:outline-none border-solid border-2 border-gray w-[45%] flex items-center justify-center"
              >
                <img src={"/apple.png"} alt={"Google"} className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <span>
            Don't have an account ?{" "}
            <a href="#" className="text-[#434ce7] font-bold">
              Sign up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
