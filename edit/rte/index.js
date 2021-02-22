import React, { Component }  from "react";
// import { Component } from "react";
import { v4 as uuid } from "uuid";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
  convertFromHTML,
  ContentState,
} from "draft-js";
import { stateToHTML } from "draft-js-export-html";


let options = {
  inlineStyles: {
    // Override default element (`strong`).
    PRIMARY: { attributes: {class: 'text-primary'},},
    SECONDARY: { attributes: {class: 'text-secondary'},},

  },
};


export default class RteOld extends Component {
  constructor(props) {
    super(props);
 
    // const wrapped = `<div>${props.value}</div>`
    // const blocksFromHTML = convertFromHTML(wrapped)
    // const state = ContentState.createFromBlockArray(
    //   blocksFromHTML.contentBlocks,
    //   blocksFromHTML.entityMap,
    // );
    // const wrapped = `<div>${props.value}</div>` // 
    // const blocksFromHTML = convertFromHTML(wrapped)
    // const result = ContentState.createFromBlockArray(
    //   blocksFromHTML.contentBlocks,
    //   blocksFromHTML.entityMap,
    // );
   
    

    this.state = {
      editorState: EditorState.createEmpty(),
      // editorState: EditorState.createWithContent(result)
    };

    this.focus = () => this.editor.focus();
    this.updateState = this.updateState.bind(this);

  }
  componentDidMount(){
    // this.timer = setTimeout(() =>  this.updateState(),3000);
    this.updateState()
  }

  // componentWillUnmount(){
  //   clearInterval(this.timer);

  // }

//   componentDidUpdate(nextProps){
//     const current = stateToHTML(this.state.editorState.getCurrentContent(), options)
//     if(nextProps.value !== this.props.value){
//       console.log(this.props.value)
//       console.log(nextProps.value)
//       this.updateState(nextProps.value)
//     };
// }


  updateState(){
    // const wrapped = arg? arg : this.props.value // 
    const blocksFromHTML = convertFromHTML(this.props.value)
    const result = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap,
      );
      // console.log(stateToHTML(EditorState.createWithContent(result).getCurrentContent()))
    this.setState({
      // editorState: EditorState.createEmpty(),
      editorState: EditorState.createWithContent(result)
    });
    
  }
  // componentDidMount(){
  //   const wrapped = `<div>${this.props.value}</div>`
  //   const blocksFromHTML = convertFromHTML(wrapped)
  //   const state = ContentState.createFromBlockArray(
  //     blocksFromHTML.contentBlocks,
  //     blocksFromHTML.entityMap,
  //   );
  // console.log(wrapped)
  //   this.setState({ editorState: EditorState.createWithContent(state),})
  // }

  onChange = (editorState) => {

    let html = stateToHTML(editorState.getCurrentContent(), options);
    this.props.onChange&&this.props.onChange(html);
    
    this.setState({ editorState });

  }
  

  onClickEditor = () => {
    this.focus();
  };

  handleKeyCommand = (command) => {
    console.log('handle Key Command')
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  };

  toggleToolbar = (inlineStyle) => {
    console.log('Toggle Toolbar')
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  };

  render() {
    const { editorState } = this.state;

    return (
      <div className="relative">
        <ToolBar editorState={editorState} onToggle={this.toggleToolbar} />

        <div onClick={this.onClickEditor} >
          <Editor
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            placeholder=""
            editorKey={uuid()}
            spellCheck={false}
            ref={(element) => {
              this.editor = element;
            }}
          />
        </div>
      </div>
    );
  }
}

// Custom overrides for each style
const styleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 4,
  },
  BOLD: {
    color: "#395296",
    fontWeight: "bold",
  },
  ANYCUSTOMSTYLE: {
    color: "#00e400",
  },
  PRIMARY: {},
  SECONDARY: {},


};

class ToolbarButton extends Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    return (
      <button
        className="text-xs bg-sb-lightgray text-white border border-sb-gray rounded px-2 py-1"
        onClick={this.onToggle}
      >
        {this.props.label}
      </button>
    );
  }
}

var toolbarItems = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
  { label: "Code", style: "CODE" },
  { label: "Secondary", style: "SECONDARY" },
  { label: "Primary", style: 'PRIMARY' },
];

const ToolBar = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="flex flex-wrap gap-1">
      {toolbarItems.map((toolbarItem) => (
        <ToolbarButton
          key={toolbarItem.label}
          active={currentStyle.has(toolbarItem.style)}
          label={toolbarItem.label}
          onToggle={props.onToggle}
          style={toolbarItem.style}
        />
      ))}
    </div>
  );
};

const initialData = {
  blocks: [
    {
      key: "16d0k",
      text: "You can edit this text.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [{ offset: 0, length: 23, style: "BOLD" }],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
};
