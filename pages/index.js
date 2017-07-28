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

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            rel="mask-icon"
            href="/static/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        Hello World
      </main>
    )
  }
}
