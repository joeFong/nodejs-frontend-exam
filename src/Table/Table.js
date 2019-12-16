import React from 'react';
import './Table.css';

import TableRow from '../TableRow/TableRow';

function Table({data}) {
  return (
      <ul className="table-list">
        {data.map(item => {
          return (<li key={item.id}>
            <TableRow row={item}></TableRow>
            {item.children && <Table data={item.children} />}
          </li>);
        })}
      </ul>
  );
}

export default Table;
