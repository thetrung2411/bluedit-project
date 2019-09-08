import React from "react";
import AppBar from "../appBar/appBar";
import ReactDOM from "react-dom";
import BookmarkItem from "../bookmark/BookmarkItem";
import axiosConfig from "../../axiosConfig";

ReactDOM.render(<BookmarkItem />, document.querySelector("#root"));

class BookmarkForm {
  componentDidMount() {
    axiosConfig
      .get("/getAllBookmarks")
      .then(res => {
        console.log(res.data);
        this.setState({
          Bookmark: res.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <AppBar />
        <BookmarkItem />
      </div>
    );
  }
}

export default BookmarkForm;
