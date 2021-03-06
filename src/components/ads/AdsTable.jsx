import React from "react";
import dayjs from "dayjs";

//Components
import AdDialog from "./AdDialog";

//MUI
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

const head = (
  <TableHead>
    <TableRow>
      <TableCell>Advertisement ID</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Uploaded At</TableCell>
      <TableCell></TableCell>
    </TableRow>
  </TableHead>
);

const AdTable = props => {
  const allAds = props.ads.length ? (
    props.ads.map(ad => {
      return (
        <TableBody>
          <TableRow>
            <TableCell align="left">{ad.adId}</TableCell>
            <TableCell align="left">{ad.name}</TableCell>
            <TableCell align="left">
              {dayjs(ad.uploadAt).format("DD-MM-YYYY")}
            </TableCell>
            <TableCell>
              <AdDialog
                ad={ad}
                handleChangeStateOnEdit={props.handleChangeStateOnEdit}
              />
              <Tooltip title="Delete" placement="top">
                <Button
                  id={`${ad.name}DeleteBtn`}
                  onClick={() => {
                    if (window.confirm("Are you sure to delete this item? "))
                      props.handleDelete(ad);
                  }}
                >
                  <DeleteForeverOutlinedIcon />
                </Button>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableBody>
      );
    })
  ) : (
    <TableBody>
      <TableRow>
        <TableCell>No advertisement found at the moment</TableCell>
      </TableRow>
    </TableBody>
  );
  return (
    <div
      style={{
        width: "80%",
        margin: "auto"
      }}
    >
      <Table>
        {head}
        {allAds}
      </Table>
    </div>
  );
};

export default AdTable;
