import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postComment } from "../../redux/actions/commentActions";
import Button from "@material-ui/core/Button";
export class CommentField extends Component {
  state = {
    body: "",
    errors: {}
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ body: "  " });
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.postComment(this.props.postId, { body: this.state.body });
  };
  render() {
    const { classes, authenticated } = this.props;
    const errors = this.state.errors;
    const commentFieldMarkUp = authenticated ? (
      <form onSubmit={this.handleSubmit}>
        <TextField
          rowsMax="1000"
          fullWidth="true"
          variant="outlined"
          label="Comment here"
          multiline
          onChange={this.handleChange}
          name="body"
          error={errors.body ? true : false}
          value={this.state.body}
          helperText={errors.body}
        ></TextField>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={this.handleSubmit}
        >
          Submit
        </Button>
      </form>
    ) : null;
    return commentFieldMarkUp;
  }
}
CommentField.propTypes = {
  postComment: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  authenticated: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  UI: state.UI,
  authenticated: state.user.authenticated
});
const mapActionsToProps = {
  postComment
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(CommentField);
