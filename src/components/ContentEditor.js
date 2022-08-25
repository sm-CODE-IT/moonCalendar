import React, { Component, useContext } from "react";
/* components */
import MyHeader from "./MyHeader";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromRaw,
  SelectionState,
} from "draft-js";
import DraftPasteProcessor from "draft-js/lib/DraftPasteProcessor";
import { Editor } from "react-draft-wysiwyg";
import { stateToHTML } from "draft-js-export-html";
import { stateFromHTML } from "draft-js-import-html";
import htmlToDraft from "html-to-draftjs";
import { DiaryDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";

// const uploadCallback = (file, callback) => {
//   console.log(file);
//   return new Promise((resolve, reject) => {
//     const reader = new window.FileReader();
//     console.log(reader);
//     reader.onloadend = async () => {
//       const form_data = new FormData();
//       form_data.append("file", file);
//       const res = await uploadFile(form_data);
//       setValue("thumbnail", res.data);
//       resolve({ data: { link: process.env.REACT_APP_API + res.data } });
//     };
//     reader.readAsDataURL(file);
//   });
// };
//
// const config = {
//   image: { uploadCallback: uploadCallback },
// };

class ContentEditor extends Component {
  constructor(props) {
    super(props);
    let editorState;
    if (!this.props.isEdit) {
      editorState = EditorState.createEmpty();
    } else {
      const rawContentFromStore = convertFromRaw(
        this.props.originData.contentRaw
      );
      editorState = EditorState.createWithContent(rawContentFromStore);
    }
    this.state = {
      editorState: editorState,
    };
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState,
    });

    /* set new State */
    const editingContent = stateToHTML(editorState.getCurrentContent());
    this.props.setContent(editingContent);
    const editingContentRaw = convertToRaw(editorState.getCurrentContent());
    this.props.setContentRaw(editingContentRaw);
  }

  render() {
    return (
      <div className="EditorContainer">
        <div className="editor">
          <Editor
            editorState={this.state.editorState}
            onEditorStateChange={this.onEditorStateChange.bind(this)}
            placeholder="content"
            toolbar={{
              options: [
                "blockType",
                "fontSize",
                "inline",
                "list",
                "textAlign",
                "history",
                "image",
              ],
              list: { inDropdown: true },
              textAlign: { inDropdown: false },
              link: { inDropdown: true },
              history: { inDropdown: false },
              image: {
                // uploadCallback: uploadImageCallBack,
                alt: { present: true, mandatory: true },
              },
            }}
            wrapperClassName="wrapper_class"
            editorClassName="editor_class"
            toolbarClassName="toolbar_class"
          />
        </div>
      </div>
    );
  }
}

export default ContentEditor;
