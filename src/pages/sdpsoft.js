import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageContainer from "../components/PageContainer"
import { H2, H3 } from "../components/headers"
import styled from "styled-components"

const Code = styled.div`
 border: gray solid 1px;
 border-radius: 5px;
 background: #f1efef;
 font-family: monospace;
 padding: 7px;
 font-size: 15px;
 margin-bottom: 10px;
`

const SDPPage = () => (
  <Layout>
    <SEO title="SDP"/>
    <PageContainer>
      <img src="/sdp.png" width={150}/>
      <H2>SDPSoft</H2>
      <div>
        <H3>What is SDPSoft</H3>
        <p>SDPSoft is a collection of compiled software stored under <strong>/prog/sdpsoft</strong> for all Equinor
          Linux servers that have the "official" NFS-share mounted. SDPSoft exists because people need various types
          of software and new versions of software which is neither available in RedHat's yum repos nor Equinor yum
          repos. Also, instead of having to deal with yum repos and packages that needs to be installed and/or
          updated on all servers in Equinor (which SDPTeam have no responsiblity for), we use the NFS-share as an
          easy alternative to provide our compiled software to the people. SDPSoft is available on all the Equinor
          offices around the world.</p>
        <p>SDPSoft is a collection of compiled software stored under <strong>/prog/sdpsoft</strong> for all Statoil
          Linux servers that have the "official" NFS-share mounted. SDPSoft exists because people need various types
          of software and new versions of software which is neither available in RedHat's yum repos nor Statoil yum
          repos. Also, instead of having to deal with yum repos and packages that needs to be installed and/or
          updated on all servers in Statoil (which SDPTeam have no responsiblity for), we use the NFS-share as an
          easy alternative to provide our compiled software to the people. SDPSoft is available on all the Statoil
          offices around the world.</p>
        <Code>
          Only use SDPSoft in development environment. Do not use in production! For production use <a
          href="https://github.com/equinor/komodo">Komodo</a>.
        </Code>
        <H3>How to use SDPSoft</H3>
        <p>
          SDPSoft recently got redesigned to only give you software you ask for. You ask for software by defining a
          set of environment variables before you <em>source</em> the <em>env</em> script. Let's say you wanted
          Python version 3.6.4 and QT version 5.9.1, in <strong>bash</strong>, you would do:
        </p>
        <Code>
          export PYTHON_VERSION="3.6.4"<br/>
          export QT_VERSION="5.9.1"<br/>
          source /prog/sdpsoft/env.sh
        </Code>
        <p>And in <strong>csh</strong>, you would've done:</p>
        <Code>
          setenv PYTHON_VERSION "3.6.4"<br/>
          setenv QT_VERSION "5.9.1"<br/>
          source /prog/sdpsoft/env.csh
        </Code>
        <p >This will update all the necessary PATH varialbes specific to the software you
          asked for.</p>
        <p>The env-scripts also supports:</p>
        <Code>
          For Python we are not including packages anymore, only virutalenv is included. For more information about
          how to use virtualenv, please see <a href="https://virtualenv.pypa.io/en/latest/userguide/">here</a>.
        </Code>
        <ul >
          <li>Searching for software in SDPSoft</li>
          <li>The output from the script can be silenced</li>
          <li>You can use the word <em>latest</em> as a version when sourcing</li>
        </ul>
        <p>All of these features and how to use SDPSoft can be found in the env-scripts help function,
          for <strong>bash</strong> that is:</p>
        <Code>
          source /prog/sdpsoft/env.sh --help
        </Code>
        <p>And for <strong>csh</strong> it is:</p>
        <Code>
          source /prog/sdpsoft/env.csh --help
        </Code>
        <H3>Deprecation note</H3>
        <p>Before the new env-scripts were created, sourcing SDPSoft was done
          with <strong>environment.sh</strong> and <strong>environment.csh</strong>. You can to some degree specify
          what software you want with these scripts, but they also do some assumptions to what software you might
          want as well. If you don't specify anything, you'll get the latest version of various software.</p>
        <p>This design made maintainance of SDPSoft hard. New distributed software had to be just right and perfectly
          compiled without any breaking changes. Due to limited time for testing new software, we're now moving away
          from these scripts.</p>
      </div>
    </PageContainer>
  </Layout>
)

export default SDPPage
