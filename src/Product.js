import React from "react";

export default class Product extends React.Component {
  handleUpVote = (id, vote) => {
    return this.props.onVote(id, vote);
  };

  render() {
    const {
      id,
      votes,
      url,
      title,
      description,
      submitterAvatarUrl,
      productImageUrl
    } = this.props;
    return (
      <div className="item">
        <div className="image">
          <img src={productImageUrl} alt="product" />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <button
              className="c-vote"
              onClick={() => this.handleUpVote(id, votes)}
            >
              <i className="large caret up icon" />
            </button>
            {votes}
          </div>
          <div className="description">
            <a href={url}>{title}</a>
            <p>{description}</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img
              className="ui avatar image"
              src={submitterAvatarUrl}
              alt="avatar"
            />
          </div>
        </div>
      </div>
    );
  }
}
