import "./Cockpit.css";
//import classNames from "classnames";
const cockpit = (props) => {
  const isOperator = (val) => !isNaN(val) || val === "." || val === "=";
  //classname= {classNames("Button", {
  //   " operator": !isOperator(props.children) === true,
  // })}
  const style = () => {
    const classes = ["Button"];

    if (!isOperator(props.children)) {
      classes.push("operator");
      return classes.join(" ");
    }
    return classes;
  };

  return (
    <div className={style()} onClick={() => props.handleClick(props.children)}>
      {props.children}
    </div>
  );
};
export default cockpit;
