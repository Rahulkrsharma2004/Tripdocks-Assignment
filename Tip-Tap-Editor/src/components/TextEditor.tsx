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
        placeholder: "Write your email here...",
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
    <div className="max-w-3xl mx-auto mt-10 p-4 border border-gray-300 rounded-lg bg-white">
      <h2 className="text-lg font-semibold mb-2">Email Template Editor</h2>
      <VariablePopover onSelect={insertVariable} />
      <EditorContent editor={editor} className="border p-3 rounded-md" />
    </div>
  );
};

export default TextEditor;
