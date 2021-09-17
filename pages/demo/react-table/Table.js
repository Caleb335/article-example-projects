import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";

// the styled component that serves as a
// wrapper for the table component goes here
const TableContainer = styled.div`
  table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.08);
  }

  thead {
    height: 64px;
    color: #fff;
    background: #3c1742;
  }

  thead th {
    font-size: 14px;
    color: #fff;
    text-align: left;
    padding: 0 30px;
  }

  tr {
    height: 64px;
  }

  tr td {
    padding: 0 30px;
    border-bottom: 1px solid #3c1742;
  }

  @media only screen and (max-width: 992px) {
    table {
      white-space: nowrap;
    }
  }
`;
const Table = ({ columns, data }) => {
  // react-table hooks will go here
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    // Table's JSX will go here

    <TableContainer>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <th key={index} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} key={index}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default Table;
