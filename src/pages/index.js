import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { H2 } from "../components/headers"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"

const CardsWrapper = styled.div`
  border: black solid;
  border-width: 2px 0px;
  padding: 15px 0;
  display: flex;
  flex-flow: wrap;
`

const InfoCard = styled.div`
    background: #f8f8f8;
    padding: 2em;
    display: flex;
    flex-direction: column;
    border: #d5dada solid 1px;
    margin: 10px;
    height: fit-content;
    max-width: 600px;
    font-family: Equinor-Regular, sans-serif;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <InfoCard>
      <p>
        We're here to make your day as a developer or researcher in Equinor
        better. We provide software development tools which you can use with
        your project to work better and more efficient. Below you'll find the
        tools and services we provide.
      </p>
    </InfoCard>
    <CardsWrapper>
      <Card title="Github" image="/github.png">
        <p>
          A web-based <strong>cloud service</strong> for version control using
          git. It is mostly used for computer code. It offers all of the
          distributed version control and source code management functionality
          of Git as well as adding its own features. It provides access control
          and several collaboration features such as bug tracking, feature
          requests, task management, and wikis for every project.
          <Link to="/github/"> Follow the instructions here</Link> to get started
          with GitHub.
        </p>
      </Card>
      <Card title="Gitlab" image="/gitlab.png">
        <p>
          An online Git repository manager with a wiki, issue tracking, CI and
          CD. It is a great way to manage git repositories on a centralized
          server. Gitlab gives you complete control over your repositories or
          projects. This Gitlab server is hosted <strong>internally</strong> and
          is based on the community edition.
          <a target="_blank" href="https://docs.gitlab.com/ce/user/index.html">
            Read the user documentation for Gitlab here
          </a>
        </p>
      </Card>
      <Card title="Jenkins" image="/jenkins.png">
        <p>
          Jenkins helps to automate the non-human part of software development
          process, with continuous integration and facilitating technical
          aspects of continuous delivery. It supports version control tools such
          as Git, Subversion, etc. We offer various instances of Jenkins.
          <Link to="/jenkins/"> Read more about Jenkins instances here</Link>
        </p>
      </Card>
      <Card title="NPM Repository" image="/npm.png">
        <p>
          The Equinor internal NPM repository. Mostly meant for closed source
          packages, but can also work as a cache/proxy.
        </p>
        <p>
          The repository is hosted in Azure at
          <a href="https://npm.equinor.com"> https://npm.equinor.com </a>
        </p>
        <p>
          To get started with Equinors internal NPM repository you should follow
          the instructions <Link to="/npm">here</Link>
        </p>
      </Card>
      <Card title="Jira Cloud" image="/jira.png">
        <p>
          Jira is a proprietary issue tracking product, developed by Atlassian.
          It provides bug tracking, issue tracking, and project management
          functions. <Link to="/jira_cloud">Follow the instructions here </Link>
          to get started with Jira Cloud
        </p>
      </Card>
      <Card title="SDPSoft" image="/sdp.png">
        <p>
          SDPSoft is a collection of compiled software available for all
          Linux-servers that have Equinors network share mounted
          (/prog/sdpsoft). Here you'll find different versions of python, jdk,
          gcc, qt-x11, etc. Contact us for any questions regarding SDPSoft.
          <a href="/sdpsoft">
            Here you'll find documentation on how to use SDPSoft
          </a>
        </p>
      </Card>
      <Card title="Wikidocs" image="/wiki.png">
        <p>
          Wikidocs is a network-share to host files too big for the mediawiki
          serving 'wiki.statoil.no'. To upload files to this share, apply for
          the /project/sdpdocs - sdpusers (MidtNorge) at accessIT. The wikidocs
          area can be accessed like this;
          <p>Linux server:<br/>
            <code>cd /project/sdpdocs</code></p>
          <p> Windows:<br/>
            <ol>
              <li>Start <i>Windows Explorer</i><br/></li>
              <li>Navigate to <code>\\statoil.net\unix_tr\Project\sdpdocs\</code></li>
            </ol>
          </p>
        </p>
      </Card>
    </CardsWrapper>
    <InfoCard>
      <H2>Contact Us</H2>
      <p>Need to order some IT related services for Equinor R&T?</p>
      <p>Compile stuff? Software development? Infrastructure? Advisory? And more...</p>
      <p>We prefer being contacted on Slack in the <a target="_blank"
                                                       href="https://statoil.slack.com/messages/C02JJGV05">#sdpteam </a>
        channel</p>
      <p>You can also send us an email: <a href="mailto:gm_sds_rdi@equinor.com">gm_sds_rdi@equinor.com</a></p>
      <p>ServiceNow can also be used: <a target="_blank"
                                         href="https://statoil.service-now.com/selfservice?id=sc_cat_item&sys_id=78bfbbce6fb455001f6446916e3ee453">Services@Equinor
        Equinor's R&T Toolbox</a></p>
    </InfoCard>
  </Layout>
)

export default IndexPage
