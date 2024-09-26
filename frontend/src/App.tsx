import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlesubmit = () => {
    // API endpoint for creating a new user
    const apiUrl = "http://127.0.0.1:8090/api/collections/users/records";

    // Form data to be sent in the request body
    const formData = {
      email: email,
      password: password,
      passwordConfirm: password,
    };

    // Make a POST request using the Fetch API
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((newUserData) => {
        // Process the newly created user data
        setEmail("")
        setPassword("")
        setMessage("Account has been created")
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <div>{message}</div>
        </div>
      </div>
    </>
  );
}

export default App;
