import { Button } from "antd";
import React, { Component } from "react";

import {Link} from 'react-router-dom'
export default class PageNotFound extends Component {
  render() {
    return (
      <div>
        <div>
          <header>404
            Page Not Found
          </header>
          <Link to="/">
            <Button>Back To Home</Button>
          </Link>
          </div>
      </div>
    );
  }
}
