// @flow
import React from 'react'
import Head from 'next/head'

export default class Index extends React.Component {
  render() {
    return (
      <main>
        <Head>
          <title>Home page</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="next.jsを使った静的サイトです。" />

          <meta property="og:title" content="Home Page" />
          <meta
            property="og:url"
            content="https://akameco.github.io/demo-next-static-export"
          />
          <meta property="og:site_name" content="https://akameco.github.io" />
          <meta property="og:description" content="next.jsを使った静的サイトです。" />

          <meta property="fb:app_id" content="456581931407339" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@akameco" />
        </Head>
        Hello World
      </main>
    )
  }
}
