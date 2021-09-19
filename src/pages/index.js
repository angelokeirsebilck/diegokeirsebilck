import * as React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import Landing from '../components/Landing';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const {
    strapiHomebanner: { Title },
  } = data;

  return (
    <Layout>
      <SEO title='' />
      <Landing />
    </Layout>
  );
};

export const query = graphql`
  query HomeBanner {
    strapiHomebanner {
      Title
    }
  }
`;

export default IndexPage;
