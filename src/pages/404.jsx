import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import errordog from '../images/error-dog.svg';
import './404.scss';

class NotFoundPage extends React.Component {
  componentDidMount() {
    /* eslint-disable no-console */
    console.log('pathname is', window.location.pathname);
    /* eslint-enaable */
    if (window.location.pathname !== '/404/') {
      window.location.pathname = '/404/';
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="404: Not found" slug="/404/" />
        <div className="container">
          <div className="row error-row">
            <div className="col">
              <img className="error-img" src={errordog} alt="a cute dog letting you know that you're on the 404 page" />
            </div>
            <div className="col text-col">
              <div className="error-text">
                <h1>404</h1>
                <p>糟糕! 我们找不到此页面. 它可能已被移动或删除.</p>
                <a href="/docs/" className="btn btn__primary">返回文档</a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;
