import React from "react";
import AppBar from "../appBar/appBar";
import ReactDOM from "react-dom";
import BookmarkItem from "../bookmark/BookmarkItem";

ReactDOM.render(<BookmarkItem />, document.querySelector("#root"));

function BookmarkForm(props) {
  return (
    <div>
      <AppBar />
      <BookmarkItem />
    </div>
  );
}
export default BookmarkForm;
