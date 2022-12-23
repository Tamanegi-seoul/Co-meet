import React from "react";
import { useNavigate } from "react-router-dom";

const CommonTableRow = ({ children, props }) => {
  const navigate = useNavigate();
  return (
    <tr className="common-table-row" onClick={() => navigate("/post/" + props)}>
      {children}
    </tr>
  );
};

export default CommonTableRow;
