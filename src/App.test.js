import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';

const tableObj = [
  { 
    id: 1,
    header: 'C-001',
    value: 'Intra Urban',
    check: true,
    children: [
      {
        id: 2,
        header: '2019/12/01',
        value: 'Daily Report',
        check: false,
        children: [
          {
            id: 3,
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
    id: 4,
    header: 'C-002',
    value: 'POCO Rec Center PH2',
    check: false,
    children: [
      {
        id: 5,
        header: '2019/12/01',
        value: 'Purchase Order',
        check: false,
        children: []
      }
    ]
  },
  {
    id: 6,
    header: 'C-003',
    value: 'Central City Brewery',
    check: false,
    children: [
      {
        id: 7,
        header: '2019/12/01',
        value: 'Purchase Order',
        check: false,
        children: []
      },
      {
        id: 8,
        header: '',
        value: 'Reoccuring Items',
        check: false,
        children: []
      }
    ]
  }
];

test('renders ventana table', () => {
  const app = render(<App data={tableObj}/>);
  expect(app.queryByText('C-001')).not.toBe(null);
});
