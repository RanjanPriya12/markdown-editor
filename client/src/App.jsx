import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

const socket = io("http://localhost:5000");

function App() {
    const [markdown, setMarkdown] = useState("");
    const [html, setHtml] = useState("");

    useEffect(() => {
        socket.on("html-update", (html) => {
            setHtml(html);
        });

        return () => {
            socket.off("html-update");
        };
    }, []);

    const handleMarkdownChange = (newMarkdown) => {
        setMarkdown(newMarkdown);
        socket.emit("markdown-update", newMarkdown);
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Real-Time Markdown Editor</h1>
            <div className="grid grid-cols-2 gap-4">
                <Editor markdown={markdown} setMarkdown={handleMarkdownChange} />
                <Preview html={html} />
            </div>
        </div>
    );
}

export default App;

