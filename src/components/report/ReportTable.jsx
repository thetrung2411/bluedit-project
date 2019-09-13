import React from "react";
import ReportTableHead from "../report/ReportTableHead";
import ReportDialog from "../report/ReportDialog";
//material ui
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
//import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

const ReportTable = props => {
  const allReports = props.reports.length ? (
    props.reports.map((report, index) => {
      return (
        <TableBody>
          <TableRow>
            <TableCell align="left">{report.reportId}</TableCell>
            <TableCell align="left">{report.reportedAt}</TableCell>
            <TableCell align="left">{report.type}</TableCell>
            <TableCell align="left">{report.objectId}</TableCell>
            <TableCell align="left">{report.description}</TableCell>
            <TableCell align="left">{report.status}</TableCell>
            <TableCell align="left">
              <ReportDialog report={report} />
              <Button onClick={() => props.handleDelete(index)}>
                <DeleteForeverOutlinedIcon />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      );
    })
  ) : (
    <p className="canter">No report found at the moment</p>
  );
  return (
    <Table>
      <ReportTableHead reports={props.reports} handleSort={props.handleSort} />
      {allReports}
    </Table>
  );
};

export default ReportTable;
