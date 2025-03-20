import { Node } from "@tiptap/core";

export const VariableExtension = Node.create({
  name: "variable",
  group: "inline",
  inline: true,
  atom: true,

  addAttributes() {
    return {
      variable: {
        default: "",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "span[data-variable]",
        getAttrs: (element) => ({
          variable: (element as HTMLElement).getAttribute("data-variable"),
        }),
      },
    ];
  },

  renderHTML({ node }) {
    return [
      "span",
      {
        "data-variable": node.attrs.variable,
        class: "bg-yellow-200 px-1 rounded-md",
      },
      `{{${node.attrs.variable}}}`,
    ];
  },

  addCommands() {
    return (editor) => ({
      insertVariable: (variable: string) => {
        return editor.chain().focus().insertContent({
          type: "variable",
          attrs: { variable },
        }).run();
      },
    });
  },
});
