import React from 'react';
import { useSortBy, useTable, useFilters } from 'react-table';
import data from '../../data/variable.json';
import '../table.css'
import ColumnFilter from './ColumnFilter';
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
        Filter: {ColumnFilter}
           
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
        Header: 'd_10',
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
        Header: 'd_9',
        accessor: 'd_09',
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
        Header: 'd_8',
        accessor: 'd_08',
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
        Header: 'd_7',
        accessor: 'd_07',
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
        Header: 'd_6',
        accessor: 'd_06',
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
        Header: 'd_5',
        accessor: 'd_05',
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
        Header: 'd_4',
        accessor: 'd_04',
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
        Header: 'd_3',
        accessor: 'd_03',
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
        Header: 'd_2',
        accessor: 'd_02',
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
        Header: 'D_1',
        accessor: 'd_01',
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
        Header: 'Calcul',
        accessor: row => {
          let count = 0;
          let sum = 0;
          let max = 0;
          for (const key in row) {
            if (/^d_\d+$/.test(key)) {
              count++;
              sum += Number(row[key]) || 0;
              max = Math.max(max, Number(row[key]) || 0);
            }
          }
          return (sum/(count*max));
        }
      }
      
      
    ],
    []
  );

  const tableInstance = useTable({ columns, data }, useFilters ,useSortBy);
      const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      tableInstance;
  console.log(headerGroups[0].headers.length-4);
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