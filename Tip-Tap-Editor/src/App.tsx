import React from "react";
import TextEditor from "./components/TextEditor";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl p-4 bg-white shadow-md rounded-md">
        <h1 className="text-center text-xl font-bold mb-4">RICH TEXT EDITOR</h1>
        <TextEditor />
      </div>
    </div>
  );
};

export default App;
