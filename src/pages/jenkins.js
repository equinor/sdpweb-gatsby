import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageContainer from "../components/PageContainer"


const JenkinsPage = () => (
  <Layout>
    <SEO title="Jenkins"/>
    <PageContainer style={{alignItems: "left"}}>
      <img src="/jenkins.png" width={150} alt={"Jenkins logo"}/>
      <h3>Jenkins</h3>
      <b>We offer various instances</b>
      <div>
        <p>One gigantic Jenkins instance which everyone use is a security problem, so we have different offerings.</p>
      <h3>Your very own instance</h3>
      <a>ci.equinor.no/$whatever_you_want</a>
      <p>
        This instance type is for teams and/or projects that want their very own instance.
      </p>
      <p>
        We have some terms for these instances:
      </p>
      <ol>
        <li>We own the servers where Jenkins is running.</li>
        <li>We keep the Jenkins version updated, you keep the plugins updated.</li>
        <li>You get to become admin for the Jenkins instance and you decide who gets access and what plugins to
          install.
        </li>
        <li>To help with configuration and troubleshooting, we in the SDPTeam will also be admins on the instances.
        </li>
        <li>When we upgrade Jenkins, we'll have an announcement about which instances will be affected.</li>
        <li>If some plugins stops working after upgrade, it's up to you to update/fix/replace that plugin. You can of
          course ask us for help.
        </li>
        <li>Instances will be available under ci.equinor.no/$whatever_you_want</li>
        <li>Servers will be backed up with virtual machine snapshots at first, but later we'll have file-level backup
          in place as well.
        </li>
        <li>Servers will be placed in AWS unless you ask for something else.</li>
        <li>Instances run in docker, meaning they are very good at running Jenkins, nothing else. In other words, you
          should add build slaves if you want things done. Unable to find any good way to serve Jenkins ssh-pub-key
          automatically (used when setting up slaves), you'll get this key when your instance is ready. After this, you
          can always just ask us for it.
        </li>
      </ol>
      <p>What do we need from you to create a Jenkins instance?</p>
      <ol>
        <li>Your uri-prefix, typically your team/project name (see #7 above)</li>
        <li>Equinor shortname for one of the admins. This admin will decide further who gets access.</li>
        <li>A little bit of patience since this service is not very mature yet.</li>

      </ol>
      <p>If this sounds interesting, send the order to gm_sds_rdi@equinor.com</p>
      <h2>Jenkins Trondheim</h2>
      <a href="https://ci.equinor.com/tr">ci.equinor.com/tr</a>
      <p>
        This instance is for teams and/or projects where it makes sense to store the pipeline in Trondheim (this is
        just a guideline, and no strict policy). Contact us for access.
      </p>
      <h2>Jenkins Stavanger</h2>
      <a href="https://ci.equinor.com/st">ci.equinor.com/st</a>
      <p>
        This instance is for teams and/or projects where it makes sense to store the pipeline in Stavanger (this is
        just a guideline, and no strict policy). Contact us for access.
      </p>
      <h2>Jenkins Bergen</h2>
      <a href="https://ci.equinor.com/be">ci.equinor.com/be</a>
      <p>
        This instance is for teams and/or projects where it makes sense to store the pipeline in Bergen (this is just a
        guideline, and no strict policy). Contact us for access.
      </p>
      <h2>Jenkins Others</h2>
      <a href="https://ci.equinor.com/others">ci.equinor.com/others</a>
      <p>
        This instance is for teams and/or projects where none of the other location specific Jenkins instances made
        sense to use. Contact us for access.
      </p>
      <h2>Jenkins Public</h2>
      <a href="https://ci.equinor.com/public">ci.equinor.com/public</a>
      <p>
        This Jenkins instance is to be used for <strong>non-sensitive</strong> projects only. Everyone in Equinor can
        read and change all information on this instance.
      </p>
      </div>
    </PageContainer>
  </Layout>
)

export default JenkinsPage
