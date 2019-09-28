import React from 'react';
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class ReportDetail extends React.Component {
    state = {

    }

    render() {
        return (
            <div>
                <AppBarWithAvatar />
                <Container>
                    <Paper>
                        <form>
                            <TableRow>
                                <TableCell>Report ID:</TableCell>
                                <TableCell>R00001</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Type: </TableCell>
                                <TableCell>Post</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Reported Date: </TableCell>
                                <TableCell>10/08/2019</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description: </TableCell>
                                <TableCell>Illegal content</TableCell>
                            </TableRow>
                            <Button>Back</Button>
                        </form>
                    </Paper>
                </Container>
            </div>
        );
    };
}

export default ReportDetail;