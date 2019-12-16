import React from 'react';
import './TableRow.css';

function TableRow(props) {
  const [row, setRow] = React.useState(props.row);
  const { header, value, check} = row;

  function checkboxOnChange() {
    let newRow = {...row};
    newRow.check = !newRow.check;
    setRow(newRow);

    console.log(newRow);
  }

  return (
    <div className="table-row table-row-container">
      <div className="row">
        <div className="header">{header}</div>
        <div className="value">{value}</div>
        <div className="checkbox">
          <label>
            <input 
              type="checkbox"
              checked={check}
              onChange={checkboxOnChange}
            />
            <span></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default TableRow;
