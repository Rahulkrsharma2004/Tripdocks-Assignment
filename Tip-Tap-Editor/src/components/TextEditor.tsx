import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { VariableExtension } from "../extensions/VariableExtension";
import VariablePopover from "./VariablePopover";

const TextEditor: React.FC = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "✍️ Start typing your email here...",
      }),
      VariableExtension,
    ],
    content: "<p>Hello {{fullname}}, welcome!</p>",
  });

  const insertVariable = (variable: string) => {
    if (!editor) return;
    editor.commands.insertVariable(variable);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 border border-gray-300 rounded-xl bg-white shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-700">📧 Email Template Editor</h2>
      
      <div className="mb-3">
        <VariablePopover onSelect={insertVariable} />
      </div>

      <div className="border border-gray-300 p-4 rounded-lg bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400 transition">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TextEditor;
