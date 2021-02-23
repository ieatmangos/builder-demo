import React, { useState, useEffect } from "react";
import {
  ContentState,
  convertFromHTML,
  Editor,
  EditorState,
  RichUtils,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { stateToHTML } from "draft-js-export-html";

let options = {
  inlineStyles: {
    // Override default element (`strong`).
    PRIMARY: { attributes: { class: "text-primary" } },
    SECONDARY: { attributes: { class: "text-secondary" } },
  },
};

const styleMap = {
  BOLD: {
    fontWeight: "bold",
  },
  ITALIC: {
    fontStyle: "italic",
  },
  UNDERLINE: {
    textDecoration: "underline",
  },
  PRIMARY: {},
  SECONDARY: {},
};

export default function Rte({ value, onChange }) {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const fromHtml = (arg) => {
    const blocksFromHTML = convertFromHTML(arg);
    const result = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    return EditorState.createWithContent(result);
  };

  useEffect(() => {
    let mounted = true
    
    if(mounted){
      console.log('effect')
      setEditorState(fromHtml(value));
    }
    mounted = false
  }, [value]);

  const editorChange = (arg) => {
    // let html = stateToHTML(arg.getCurrentContent(), options);
    setEditorState(arg);
    // onChange(html);
  };

  const toolbarChange = (inlineStyle) => {
    const result = RichUtils.toggleInlineStyle(editorState, inlineStyle);
    const html = stateToHTML(result.getCurrentContent(), options);
    onChange(html);
    setEditorState(result);
  };

  return (
    <div className='text-sb-textColor text-sm '>
      <ToolBar editorState={editorState} onToggle={toolbarChange} />
<div className='border  p-2'>
      <Editor
        customStyleMap={styleMap}
        editorState={editorState}
        onChange={editorChange}
      />
    </div>
    </div>
  );
}

const ColorButton = ({ label, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`bg-${label.toLowerCase()} border border-black h-6 w-6 rounded`}
    ></button>
  );
};
const ToolbarButton = ({ onToggle, style, label }) => {
  const isUnderline = label === "U";
  const isItatlic = label === "I";
  const isButton = label === "Secondary" || label === "Primary";
  const handleClick = () => {
    onToggle(style);
  };
  if (isButton) {
    return <ColorButton handleClick={handleClick} label={label} />;
  }
  return (
    <button
      className={`text-xs bg-sb-gray-100 border border-sb-gray rounded px-2 py-1
      ${isUnderline && "underline"}
      ${isItatlic && "italic"}
      `}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

var toolbarItems = [
  { label: "B", style: "BOLD" },
  { label: "I", style: "ITALIC" },
  { label: "U", style: "UNDERLINE" },
  { label: "Secondary", style: "SECONDARY" },
  { label: "Primary", style: "PRIMARY" },
];

const ToolBar = ({ editorState, onToggle }) => {
  var currentStyle = editorState.getCurrentInlineStyle();
  return (
    <div className="flex flex-wrap gap-1 mt-1 mb-2">
      {toolbarItems.map((toolbarItem) => (
        <ToolbarButton
          key={toolbarItem.label}
          active={currentStyle.has(toolbarItem.style)}
          label={toolbarItem.label}
          onToggle={onToggle}
          style={toolbarItem.style}
        />
      ))}
    </div>
  );
};
