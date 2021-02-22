import React, {
	useState,
	useEffect,
	useRef,
} from "react";

const AutoTextArea = (props) => {
	const textAreaRef = useRef(null);
	const [text, setText] = useState("");
	const [textAreaHeight, setTextAreaHeight] = useState('auto');
	const [parentHeight, setParentHeight] = useState('auto');

	useEffect(() => {
		setParentHeight(`${textAreaRef.current.scrollHeight}px`);
		setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`);
	}, [text]);



	const onChangeHandler = (event) => {
		setTextAreaHeight("auto");
		setParentHeight(`${textAreaRef.current.scrollHeight}px`);
		event && setText(event.target.value);

		if (props.onChange && event ) {
			props.onChange(event);
		}
	};
React.useEffect(()=>{
	const unsubscribe = setTimeout(()=>{
		// onChangeHandler()
		setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`);
		setParentHeight(`${textAreaRef.current.scrollHeight}px`);

	},3000)
	return() => unsubscribe
},[])
	return (
		<div style={{
				minHeight: parentHeight,
			}} >
			<textarea
				{...props}
				ref={textAreaRef}
				rows={1}
				style={{
					height: textAreaHeight,
				}}
				onFocus={onChangeHandler}
				onChange={onChangeHandler}
			/>
		</div>
	);
};

export default AutoTextArea;