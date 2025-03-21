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
        getAttrs: (element: unknown) => {
          if (element instanceof HTMLElement) {
            return { variable: element.getAttribute("data-variable") };
          }
          return false;
        },
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
    return {
      insertVariable:
        (variable: string) =>
        ({ chain }) => {
          return chain().focus().insertContent(`<span data-variable="${variable}">{{${variable}}}</span>`).run();
        },
    };
  },
});
