
import React from 'react';
import { useSortBy, useTable } from 'react-table';
import data from '../../data/variable.json';
import '../table.css'
function Table() {
 
    function colorGradient(value, minValue) {
        
            const redValue = Math.max(Math.min(255 - (value - minValue) * 10, 255), 0);
            const greenValue = Math.min((value - minValue) * 11, 255);
            const cellStyle = {
              backgroundColor: `rgb(${redValue}, ${greenValue}, 0)`,
              color: '#fff',
              textAlign: 'center',
            };
            
          return cellStyle
      }


  const columns = React.useMemo(
    () => [
      {
        Header: 'Variable ID',
        accessor: 'var_id',
      },
      {
        Header: 'Variable Name',
        accessor: 'var_name',
      },
      {
        Header: 'Location',
        accessor: 'location',
      },
      {
        Header: 'D_10',
        accessor: 'd_10',
        Cell: ({ value }) => {
          const cellStyle = colorGradient(value, 80)
          return <div style={cellStyle}>{value}</div>;
        },
        sortType: (a, b, column) => {
            const aNum = parseFloat(a.original[column.accessor]);
            const bNum = parseFloat(b.original[column.accessor]);
            return aNum > bNum ? 1 : aNum < bNum ? -1 : 0;
          },
      },
      
      
      
      {
        Header: 'D_9',
        accessor: 'd_09',
        Cell: ({ value }) => {
            const cellStyle = colorGradient(value, 80)
            return <div style={cellStyle}>{value}</div>;
          },
          sortType: 'basic', 
        sorted: true, 
        sortedDesc: false,
      },
      {
        Header: 'D_8',
        accessor: 'd_08',
        Cell: ({ value }) => {
            const cellStyle = colorGradient(value, 80)
            return <div style={cellStyle}>{value}</div>;
          },
          sortType: 'basic', 
        sorted: true, 
        sortedDesc: false,
      },
      {
        Header: 'D_7',
        accessor: 'd_07',
        Cell: ({ value }) => {
            const cellStyle = colorGradient(value, 80)
            return <div style={cellStyle}>{value}</div>;
          },
          sortType: 'basic', 
        sorted: true, 
        sortedDesc: false,
      },
      {
        Header: 'D_6',
        accessor: 'd_06',
        Cell: ({ value }) => {
            const cellStyle = colorGradient(value, 80)
            return <div style={cellStyle}>{value}</div>;
          },
          sortType: 'basic', 
        sorted: true, 
        sortedDesc: false,
      },
      {
        Header: 'D_5',
        accessor: 'd_05',
        Cell: ({ value }) => {
            const cellStyle = colorGradient(value, 80)
            return <div style={cellStyle}>{value}</div>;
          },
          sortType: 'basic', 
        sorted: true, 
        sortedDesc: false,
      },
      {
        Header: 'D_4',
        accessor: 'd_04',
        Cell: ({ value }) => {
            const cellStyle = colorGradient(value, 80)
            return <div style={cellStyle}>{value}</div>;
          },
        sortType: 'basic', 
        sorted: true, 
        sortedDesc: false,
      },
      {
        Header: 'D_3',
        accessor: 'd_03',
        Cell: ({ value }) => {
            const cellStyle = colorGradient(value, 80)
            return <div style={cellStyle}>{value}</div>;
          },
          sortType: 'basic', 
        sorted: true, 
        sortedDesc: false,
      },
      {
        Header: 'D_2',
        accessor: 'd_02',
        Cell: ({ value }) => {
          const cellStyle = colorGradient(value, 80)
          return <div style={cellStyle}>{value}</div>;
        },
        sortType: 'basic', 
        sorted: true, 
        sortedDesc: false, 
      },
      {
        Header: 'D_1',
        accessor: 'd_01',
        Cell: ({ value }) => {
          const cellStyle = colorGradient(value, 80)
          return <div style={cellStyle}>{value}</div>;
        },
        sortType: 'basic', 
        sorted: true, 
        sortedDesc: false, 
      },
    ],
    []
  );

 
  const tableInstance = useTable({ columns, data }, useSortBy);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
              {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;