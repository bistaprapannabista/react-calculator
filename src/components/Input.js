import "./Input.css";

const Input = (props) => {
  return (
    <>
      <input
      disabled
        type="text"
        id="input-area"
        name="input-area"
        className="input-area"
        value={props.input}
        onChange={(event)=>props.setInput(event.target.value)}
      />
    </>
  );
};

export default Input;
