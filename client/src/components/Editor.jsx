import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import "../index.css";

const Editor = ({ markdownValue, setMarkdown }) => {
    const applyFormat = (format) => {
        const textarea = document.querySelector(".cm-content"); 
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);

        if (!selection || range.startOffset === range.endOffset) return;

        const selectedText = selection.toString();
        let formattedText = "";

        switch (format) {
            case "bold":
                formattedText = `**${selectedText}**`;
                break;
            case "italic":
                formattedText = `*${selectedText}*`;
                break;
            case "highlight":
                formattedText = `<mark>${selectedText}</mark>`; 
                break;
            default:
                formattedText = selectedText;
        }

        document.execCommand("insertText", false, formattedText); 
    };

    return (
        <div className="editor-container">
            <div className="toolbar">
                <button onClick={() => applyFormat("bold")} className="btn">Bold</button>
                <button onClick={() => applyFormat("italic")} className="btn">Italic</button>
                <button onClick={() => applyFormat("highlight")} className="btn highlight-btn">Highlight</button>
            </div>
            <CodeMirror
                value={markdownValue}
                height="400px"
                extensions={[markdown()]}
                onChange={setMarkdown}
                className="custom-editor"
            />
        </div>
    );
};

export default Editor;
