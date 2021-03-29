import "./Clear.css";

const Clear = (props) => {
  // const isOperator = (val) => !isNaN(val) || val === "." || val === "=";

  return (
    <div className="clear" onClick={props.handleClear}>
      {props.children}
    </div>
  );
};
export default Clear;
