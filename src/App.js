import React from 'react';
import './App.css';

import Table from './Table/Table';

function App() {
  const tableObj = [
    { 
      id: 1,
      header: 'C-001',
      value: 'Intra Urban',
      check: true,
      children: [
        {
          id: 12,
          header: '2019/12/01',
          value: 'Daily Report',
          check: false,
          children: [
            {
              id: 121,
              header: '',
              value: 'HSE Safety Checklist',
              check: false,
              children: []
            }
          ]   
        }
      ]
    },
    {
      id: 2,
      header: 'C-002',
      value: 'POCO Rec Center PH2',
      check: false,
      children: [
        {
          id: 21,
          header: '2019/12/01',
          value: 'Purchase Order',
          check: false,
          children: []
        }
      ]
    },
    {
      id: 3,
      header: 'C-003',
      value: 'Central City Brewery',
      check: false,
      children: [
        {
          id: 31,
          header: '2019/12/01',
          value: 'Purchase Order',
          check: false,
          children: []
        },
        {
          id: 32,
          header: '',
          value: 'Reoccuring Items',
          check: false,
          children: []
        }
      ]
    }
  ];
  
  return (
    <div className="App">
      <Table data={tableObj}></Table>
    </div>
  );
}

export default App;
