import React from "react";
import TextEditor from "./components/TextEditor";

const App: React.FC = () => {
  return (
    <div className="min-h-screen p-6 flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg backdrop-blur-lg">
        <h1 className="text-center text-2xl font-bold mb-4 text-gray-800">
          ✨ RICH TEXT EDITOR ✨
        </h1>
        <TextEditor />
      </div>
    </div>
  );
};

export default App;
