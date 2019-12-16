import React from 'react';
import './Table.css';

import TableRow from '../TableRow/TableRow';

function Table({data}) {
  
  return (
    <div className="Table">
      <ul>
        {data.map(item => {
          return (<li key={item.id}>
            <TableRow row={item}></TableRow>
            {item.children && <Table data={item.children} />}
          </li>);
        })}
      </ul>
    </div>
  );
}

export default Table;
