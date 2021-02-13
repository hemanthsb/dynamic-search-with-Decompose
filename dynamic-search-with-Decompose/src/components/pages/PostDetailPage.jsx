import React, { Component } from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";

class Postdetailpage extends Component {
  render() {
    let title = this.props.history.location.aboutProps.title;
    let body = this.props.history.location.aboutProps.body;

    return (
      <div>
        <Link to="/">
          <Button className="btn">Back To Posts </Button>
        </Link>
        <div className="site-card-border-less-wrapper">
          <Card title={title} bordered={false} style={{ width: 600 }}>
            <p>{body}</p>
          </Card>
        </div>
        ,
      </div>
    );
  }
}
export default Postdetailpage;
