import React, { Component } from "react";
import {Link} from 'react-router-dom'
import fetchApi from '../Utlis/apiFetch';
export default class PostWithSearchBar extends Component {
  state = {
    searchValue: "",
    apiValue: [],
  };
  componentDidMount = async () => {
    let apiValue = await fetchApi();

    this.setState({ apiValue: apiValue }, () => {
      console.log(apiValue);
    });
  };
  toSearch = (e) => {
    this.setState({ searchValue: e.target.value.toLowerCase().trim() });
  };

  render() {
    let filteredPost = this.state.apiValue.filter((post) => {
      return (
        post.title.indexOf(this.state.searchValue) !== -1 ||
        post.body.indexOf(this.state.searchValue) !== -1
      );
    });

    return (
      <div>
        <input
          className="input"
          type="text"
          value={this.state.searchValue}
          placeholder="Enter the keyword to search"
          onChange={this.toSearch}
        ></input>
        <div>
          {filteredPost.map((post, index) => (
            <ul className="posts" key={index}>
              <li className="list">
                <div className="post">
                  <Link
                    to={{
                      pathname: "/postDetailPage",
                      aboutProps: { title: post.title, body: post.body },
                    }}
                  >
                    <div className="post-title">{post.title}</div>
                  </Link>
                  <div className="post-body">{post.body}</div>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
