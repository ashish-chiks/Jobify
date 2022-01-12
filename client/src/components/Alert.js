import React from "react";
import { useGlobalContext } from "../context/AppContext";

function Alert() {
  const { alertType, alertText } = useGlobalContext();
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
}

export default Alert;
