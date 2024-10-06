import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        className="h-10 px-6 font-semibold rounded-md bg-red-700 text-white"
        type="submit"
      >
        Beli Sekarang
      </button>
    );
  }
}
function ButtonBlack() {
  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-black text-white"
      type="submit"
    >
      Beli Sekarang
    </button>
  );
}
function ButtonPink() {
  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-pink-700 text-white"
      type="submit"
    >
      Beli Sekarang
    </button>
  );
}

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div>
        <Button></Button>
        <Button></Button>
        <ButtonPink></ButtonPink>
        <Button></Button>
        <ButtonBlack></ButtonBlack>
      </div>
    </div>
  );
}

export default App;
