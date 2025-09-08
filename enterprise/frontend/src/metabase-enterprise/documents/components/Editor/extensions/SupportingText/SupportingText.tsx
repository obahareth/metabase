import { Node, mergeAttributes } from "@tiptap/core";
import {
  NodeViewContent,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react";

export const SupportingText = Node.create<{
  HTMLAttributes: Record<string, any>;
}>({
  name: "supportingText",
  group: "block",
  content: "block+",
  draggable: false,
  selectable: true,

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="supportingText"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, {
        "data-type": "supportingText",
      }),
      0,
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(SupportingTextComponent);
  },
});

const SupportingTextComponent = () => {
  return (
    <NodeViewWrapper style={{ height: "100%", margin: "1rem 0" }}>
      <NodeViewContent
        style={{
          height: "100%",
          backgroundColor: "var(--mb-color-bg-light)",
          padding: "1rem",
        }}
      />
    </NodeViewWrapper>
  );
};
