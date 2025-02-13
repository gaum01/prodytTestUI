import React from "react"
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
const TableHeader = ({ columns }) => {
  return (
    <TableHead>
      <TableHeaderPart columns={columns} />
    </TableHead>
  )
}

export default TableHeader;

/**
 *  React Virtualized Header Supports This formate without TableHead and Normal Table Support With TableHead 
 */
export const TableHeaderPart = ({columns, sx=null}) => {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.id}
          align={column.align}
          width={column.width ? column.width : undefined}
          sx={sx}
          style={{ minWidth: `${column.minWidth ? column.minWidth : ""}` }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>)
}
