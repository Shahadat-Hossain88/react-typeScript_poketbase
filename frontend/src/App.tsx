import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = () => {
    console.log(username);
    console.log(password);
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center ">
        <div className="grid grid-cols-1 gap-3 w-96 p-5 rounded-lg border border-gray-300 bg-red-100">
          <div className="text-xl font-semibold text-center">
            Welcome To SignIn{" "}
          </div>
          <input
            className="border border-gray-300 p-3 rounded  bg-gray-200"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border border-gray-300 p-3 rounded  bg-gray-200"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className=" bg-blue-400 rounded w-28  mx-auto py-3 "
            onClick={handlesubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
