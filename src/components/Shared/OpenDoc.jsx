// import { Link } from 'gatsby';
import React, { Component } from 'react';

class OpenDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pathRoute: '',
    };
  }

  componentDidMount() {
    this.setState({
      pathRoute: window.location.pathname.slice(0, -1),
    });
  }

  render() {
    const { className } = this.props;
    const classes = className ? `${className}` : '';
    const { pathRoute } = this.state;
    return (
      <a id="EN-LG-id" className={classes} href={`https://learning.postman.com${pathRoute}`} target="_blank" rel="noopener noreferrer nofollow">
        English
      </a>
    );
  }
}

export default OpenDoc;
