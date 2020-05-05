import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { environment } from "../environment/environment";
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const row = [1, 2, 3, 4, 5, 6];

export default function SimpleTable() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TableContainer className={classes.table} component={Paper}>
            <Table aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell align="right">FULLNAME</TableCell>
                  <TableCell align="right">PRICE</TableCell>
                  <TableCell align="right">VOLUME24HOUR</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.map((coin) => (
                  <TableRow hover key={coin}>
                    <TableCell component="th" scope="row">
                      {coin}
                    </TableCell>
                    <TableCell align="right">{coin.FullName}</TableCell>
                    <TableCell align="right">{coin.Price}</TableCell>
                    <TableCell align="right">{coin.carbs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            component={Paper}
          >
            <TextField id="standard-basic" label="Standard" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}
