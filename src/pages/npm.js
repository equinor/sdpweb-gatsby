import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageContainer from "../components/PageContainer"
import { H2, H3, H4 } from "../components/headers"

const NpmPage = () => (
  <Layout>
    <SEO title="Npm"/>
    <PageContainer>
      <img src="/npm.png" width={150}/>
      <H2>NPM Repository</H2>
      <div>
        <H3>How to: Equinor private NPM registry</H3>
        <p>Disclamer: This is just an example on how to do these tasks. You can configure npm/yarn in many ways to make
          life easier.
          Feel free to experiment.
        </p>

        <H3>Login</H3>

        <H4>CLI</H4>
        <p>Requirements: <strong>Have a Github account that is a member of the Github organization
           <i> Equinor</i></strong></p>
        <ol>
          <li>Create a <strong>personal access token</strong> on <a
            href="https://github.com/settings/tokens">Github</a> with the <strong>read:org</strong> scope
          </li>
          <li>Run <code>npm login --registry https://npm.equinor.com</code><br />
            Username: "Your Github username"<br />
            Password: "The personal access token"<br />
            Email: "Whichever you prefer"<br />
          </li>
        </ol>

        <H4>Web</H4>
        <p>You can browse the registry on <a href="https://npm.equinor.com">https://npm.equinor.com</a>. Use you Github
          username, and the <strong>access token as password</strong>.</p>

        <H3>Install</H3>
        <p>To install a package from this registry;<br />
          <code>npm install @equinor-internal/myPrivatePackage --registry https://npm.equinor.com</code></p>

        <H3>Publish</H3>
        <H4>Private</H4>
        <p>To publish a private package, set the <em>scope</em> of the package
          to <strong>@equinor-internal</strong>.
          So the name of the package becomes; <em>@equinor-internal/myPrivatePackage</em>
          <strong>NB!</strong> Packages with no scope, OR a different scope, are readable by the world.</p>
        <H4>Public</H4>
        <p>You can also publish a public package to this registry.
          Simply ommit the “@equinor-internal” scope.
          You have to login with a valid Equinor account to publish, but they can be accessed by everyone.</p>
        <H3>Tips and Tricks</H3>

        <ul>
          <li>You can set the default registry with;
            <code>npm set registry https://npm.equinor.com</code>
            The registry acts as a proxy, so requests for packages not in this registry will be forwarded to <em><a
              href="http://registry.npmjs.org">registry.npmjs.org</a></em></li>
          <li>You can browse the registry on <a href="https://npm.equinor.com">https://npm.equinor.com</a>. Use you
            Github username, and the <strong>access token as password</strong>.
          </li>
        </ul>
      </div>

    </PageContainer>
  </Layout>
)

export default NpmPage
