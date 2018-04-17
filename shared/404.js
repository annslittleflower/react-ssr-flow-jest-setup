//@flow
import React from "react";

type props = {
  data: string,
}

function NotFound(props: props) {
  return (<div data={props.data} >oops</div>)
}

export default NotFound;
