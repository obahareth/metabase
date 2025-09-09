import { Node, mergeAttributes } from "@tiptap/core";
import {
  NodeViewContent,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react";

import S from "./SupportingText.module.css";

export const SupportingText = Node.create<{
  HTMLAttributes: Record<string, any>;
}>({
  name: "supportingText",
  group: "block",
  content: "block+",
  draggable: false,
  selectable: true,
  isolating: true,

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
    <NodeViewWrapper className={S.wrapper}>
      <NodeViewContent className={S.content} />
    </NodeViewWrapper>
  );
};
