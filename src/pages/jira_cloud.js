import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageContainer from "../components/PageContainer"
import { H2 } from "../components/headers"

const JiraPage = () => (
  <Layout>
    <SEO title="Npm"/>
    <PageContainer>
      <img src="/jira.png" width={150} alt={"Jira logo"}/>
      <H2>Jira Cloud</H2>
      <p>To get started with Jira Cloud, send an email to gm_toolbox@equinor.com with the following information:</p>
      <ul>
        <li>The name of your project</li>
        <li>The project template you want, choosing <a href="/templates.png">from this list</a></li>
      </ul>
      <p>And...</p>
      <ul>
        <li>Order or renew your Jira Software access at <a
          href="https://accessit.equinor.no/Home/Search?term=JIRA+SOFTWARE">AccessIT</a></li>
      </ul>
    </PageContainer>
  </Layout>
)

export default JiraPage
