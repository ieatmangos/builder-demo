// import React from "react";
// import RichTextEditor from "react-rte/lib/RichTextEditor";
// import { v4 as uuid } from "uuid";


// const toolbarConfig = {
//   // Find more config options at -> https://www.npmjs.com/package/react-rte
//   display: ["INLINE_STYLE_BUTTONS"],
//   INLINE_STYLE_BUTTONS: [
//     { label: "Bold", style: "BOLD" },
//     { label: "Italic", style: "ITALIC" },
//     { label: "Underline", style: "UNDERLINE" }
//   ]
// };


// class Rte extends React.PureComponent {
//   state = {
//     value: RichTextEditor.createEmptyValue()
//   };
//   timer = {}
  
  
//   hydrate = () => {
//     this.timer = setTimeout(() => {
//       this.setState({
//         value: RichTextEditor.createValueFromString(this.props.value, "html")
//       });
//     }, 300);
//   }
//   componentDidMount() {
//     this.hydrate();
//   }
//   // componentDidUpdate(){
//     //   clearTimeout(this.timer)
//     // }
    
    
//     onChange = (value) => {
//       this.setState({ value });
//       if (this.props.onChange) {
//         this.props.onChange(value);
//       }
//     };
    
//     render() {
//       const styleMap = {
//         STRIKETHROUGH: {
//           textDecoration: "line-through"
//         }
//       };
//       const {setFocus} = this.props
//       return (
//         <div  className="border text-sb-textColor animation-dropdown-child">
//         <RichTextEditor
//           onBlur={()=>setFocus('')}
//           onFocus={()=>{
//             setFocus(this.state.value)}}
//           customStyleMap={styleMap}
//           toolbarConfig={toolbarConfig}
//           key={uuid()}
//           value={this.state.value}
//           onChange={this.onChange}
//         />
    
//       </div>
//     );
//   }
// }

// // const Rte = () => {
// //   return <p>rte</p>
// // }

// export default Rte;

