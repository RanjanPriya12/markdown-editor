import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Preview = ({ html }) => {
    return (
        <div className="w-full p-4 border rounded bg-gray-100 h-96 overflow-auto">
            <h2>Live Preview</h2>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{html}</ReactMarkdown>
        </div>
    );
};

export default Preview;
