import "./Input.css";

const Input = (props) => {
  // const isOperator = (val) => !isNaN(val) || val === "." || val === "=";

  return (
    <div className="input">
      {props.children}
      {/* {props.handleDecimal} */}
    </div>
  );
};
export default Input;
