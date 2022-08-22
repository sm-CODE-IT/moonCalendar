import React, { Component, useContext } from "react";
/* components */
import MyHeader from "./MyHeader";
import { EditorState, ContentState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { stateToHTML } from "draft-js-export-html";
import { stateFromHTML } from "draft-js-import-html";
import { DiaryDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";

function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.imgur.com/3/image");
    xhr.setRequestHeader("Authorization", "Client-ID XXXXX");
    const data = new FormData();
    data.append("image", file);
    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

class ContentEditor extends Component {
  constructor(props) {
    super(props);
    if (!this.props.isEdit) {
      this.state = {
        editorState: EditorState.createEmpty(),
      };
    } else {
      this.state = {
        editorState: EditorState.createWithContent(
          ContentState.createFromText(this.props.content)
        ),
      };
    }
  }

  onEditorStateChange: Function = (editorState) => {
    // console.log(editorState)
    this.setState({
      editorState,
    });
  };

  // default
  // exportHTML = () => {
  //   this.setState({
  //     convertedContent: stateToHTML(this.state.editorState.getCurrentContent()),
  //   });
  // };

  // updateHTML = (e) => {
  //   e.preventDefault();
  //   this.setState({ convertedContent: e.target.value });
  // };

  // importHTML = () => {
  //   const { editorState } = this.state;
  //   this.onChange(
  //     EditorState.push(editorState, stateFromHTML(this.state.convertedContent))
  //   );
  // };

  useEffect = (() => {
    let contentState;
    if (!this.props.isEdit) {
      console.log(this.props.content);
      contentState = stateToHTML(this.state.editorState.getCurrentContent());
    }
    else {
      contentState = stateToHTML(this.state.editorState.)
    }
    this.props.setContent(contentState);
  }, [this.props.isEdit])
  

  render() {
    // const { editorState } = this.state;
    
    
    const currentBlockKey = this.state.editorState.getSelection().getStartKey();
    const currentBlockIndex = this.state.editorState
      .getCurrentContent()
      .getBlockMap()
      .keySeq()
      .findIndex((k) => k === currentBlockKey);
    // console.log(currentBlockIndex);
    console.log(this.props.content);
    return (
      <div className="EditorContainer">
        <div className="editor">
          <Editor
            editorState={this.state.editorState}
            onEditorStateChange={this.onEditorStateChange}
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
                uploadCallback: uploadImageCallBack,
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
