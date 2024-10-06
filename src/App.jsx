import React from "react";
const Button = (props) => {
  const { children = "default", variant = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-3">
        <Button variant="bg-blue-700">Login</Button>
        <Button variant="bg-slate-700">Logout</Button>
        <Button>Guruh Fajar Ashari</Button>
        <Button variant="bg-pink-700">anif black pink</Button>
      </div>
    </div>
  );
}

export default App;
