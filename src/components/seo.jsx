/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  lang, meta, title, slug,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'google-site-verification',
          content: '58TM3lGyGn6c2Bj0PvPQSNzrd9_yBsHs2BjJ6KMHlRU',
        },
        {
          property: 'og:url',
          content: 'https://learning.postman.com',
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:site_name',
          content: 'Postman学习中心',
        },
        {
          property: 'og:image',
          content: 'https://www.postman.com/img/v2/logo-glyph.png',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          property: 'twitter:domain',
          content: 'https://learning.postman.com',
        },
        {
          property: 'og:image',
          content: 'https://www.postman.com/img/v2/logo-glyph.png',
        },
        {
          property: 'twitter:site',
          content: '@getpostman',
        },
      ].concat(meta)}
    >
      {/* OneTrust */}
      {/* <script type="text/javascript" src="https://cdn.cookielaw.org/consent/1cef3369-6d07-4928-b977-2d877eb670c4/OtAutoBlock.js" /> */}

      {/* <script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" type="text/javascript" charset="UTF-8" data-domain-script="1cef3369-6d07-4928-b977-2d877eb670c4" />* /}
      {/* fonts */}
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link crossOrigin rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
      {/* Bootstrap */}
      <link rel="dns-prefetch" href="https://stackpath.bootstrapcdn.com" />
      <link crossOrigin rel="preconnect" href="https://stackpath.bootstrapcdn.com" />
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
      <link rel="canonical" href={`https://learning.postman.com${slug}`} />
      {/* Algolia Instantsearch IE11 support v3 */}
      {/* <script src="https://polyfill.io/v3/polyfill.min.js?features=default,Array.prototype.find,Array.prototype.includes" /> */}
      {/*  */}
      {/* Algolia Instantsearch IE11 support v4 */}
      <link rel="dns-prefetch" href="https://polyfill.io" />
      <link crossOrigin rel="preconnect" href="https://polyfill.io" />
      <script src="https://polyfill.io/v3/polyfill.min.js?features=default%2CArray.prototype.find%2CArray.prototype.includes%2CPromise%2CObject.assign%2CObject.entries" />
      {/* Algolia API v4 IE11 support  */}
      <script src="https://polyfill.io/v3/polyfill.min.js?features=Promise%2CObject.entries%2CObject.assign" />

    </Helmet>
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
};

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
