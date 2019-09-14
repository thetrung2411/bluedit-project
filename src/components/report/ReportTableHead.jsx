import React from "react";
//material ui
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const ReportTableHead = props => {
  const head = props.reports.length ? (
    <TableHead>
      <TableRow>
        <TableCell onClick={() => props.handleSort("id")}>Report ID</TableCell>
        <TableCell onClick={() => props.handleSort("date")}>Date</TableCell>
        <TableCell onClick={() => props.handleSort("type")}>Type</TableCell>
        <TableCell onClick={() => props.handleSort("objectId")}>
          Object ID
        </TableCell>
        <TableCell onClick={() => props.handleSort("description")}>
          Description
        </TableCell>
        <TableCell onClick={() => props.handleSort("status")}>Status</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  ) : null;

  return head;
};

export default ReportTableHead;
