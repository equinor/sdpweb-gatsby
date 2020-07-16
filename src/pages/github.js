import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageContainer from "../components/PageContainer"

const GithubPage = () => (
  <Layout>
    <SEO title="Github" />
    <PageContainer>
      <img src="/github.png" width={150} alt="github logo" />
      <h3>Github</h3>
      <div>
        <p>
          In order to apply for access to Github you need to have a user on
          github.com which has 2FA enabled.
        </p>
        <p>
          Requests for access in{" "}
          <a href="https://accessit.equinor.no/Home/Search?term=GITHUB">
            AccessIT
          </a>{" "}
          should then include your pre-existing github.com user in the Equinor
          organization on github.com. If you'd like to get access to an existing
          Equinor repository or become member of an existing Equinor team, you
          need an admin for the repo or team to invite you.
        </p>
        <p>
          Make sure you fill out your public profile (name, email, company and
          location) under user menu settings.
        </p>
      </div>
    </PageContainer>
  </Layout>
)

export default GithubPage
