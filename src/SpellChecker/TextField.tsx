import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./spellCkecker.css";
import * as pageimges from "../assets/PageIcons/PageIcons";

function TextField() {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };
  return (
    <form className="editor-wrapper ">
      <div className="editor-container">
        <ReactQuill
          value={editorContent}
          onChange={handleEditorChange}
          modules={quillModules}
          formats={quillFormats}
          placeholder="Type or paste (⌘+V) something here"
        />
      </div>
      <hr style={{ width: "87%", color: "#d3d3d3", height: "3px" }} />

      <div className="right_cont">
        <div className="word_count">
          {" "}
          {editorContent.length} characters{"   "}
          {editorContent.length
            ? editorContent.trim().split(/\s+/).length
            : 0}{" "}
          words
        </div>
        <img src={pageimges.owl} className="logo" alt="logo" />
      </div>
    </form>
  );
}

const quillModules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    [{ list: "bullet" }, { list: "ordered" }],
    [{ header: 1 }, { header: 2 }],
    ["link"],
    ["clean"],
  ],
};

const quillFormats = [
  "bold",
  "italic",
  "underline",
  "strike",
  "bullet",
  "list",
  "header",
  "link",
];

export default TextField;
