import React, { ReactElement } from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-120125891-2" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', 'UA-120125891-2');

            window['_fs_debug'] = false;
            window['_fs_host'] = 'fullstory.com';
            window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
            window['_fs_org'] = 'TNK3H';
            window['_fs_namespace'] = 'FS';

            (function(m, n, e, t, l, o, g, y) {
              if (e in m) {
                if (m.console && m.console.log) {
                  m.console.log(
                    'FullStory namespace conflict. Please set window["_fs_namespace"].'
                  );
                }
                return;
              }
              g = m[e] = function(a, b, s) {
                g.q ? g.q.push([a, b, s]) : g._api(a, b, s);
              };
              g.q = [];
              o = n.createElement(t);
              o.async = 1;
              o.crossOrigin = 'anonymous';
              o.src = 'https://' + _fs_script;
              y = n.getElementsByTagName(t)[0];
              y.parentNode.insertBefore(o, y);
              g.identify = function(i, v, s) {
                g(l, { uid: i }, s);
                if (v) g(l, v, s);
              };
              g.setUserVars = function(v, s) {
                g(l, v, s);
              };
              g.event = function(i, v, s) {
                g('event', { n: i, p: v }, s);
              };
              g.anonymize = function() {
                g.identify(!!0);
              };
              g.shutdown = function() {
                g('rec', !1);
              };
              g.restart = function() {
                g('rec', !0);
              };
              g.log = function(a, b) {
                g('log', [a, b]);
              };
              g.consent = function(a) {
                g('consent', !arguments.length || a);
              };
              g.identifyAccount = function(i, v) {
                o = 'account';
                v = v || {};
                v.acctId = i;
                g(o, v);
              };
              g.clearUserCookie = function() {};
              g._w = {};
              y = 'XMLHttpRequest';
              g._w[y] = m[y];
              y = 'fetch';
              g._w[y] = m[y];
              if (m[y])
                m[y] = function() {
                  return g._w[y].apply(this, arguments);
                };
              g._v = '1.2.0';
            })(window, document, window['_fs_namespace'], 'script', 'user');
          `,
          }}
        />

        <Head />

        <title>SOLID Design and Development for Startups</title>
        <meta name="title" content="SOLID Design and Development for Startups" />
        <meta name="description" content="Get your MVP ready for the world in a few weeks through SOLIDs design and development processes focused on web or mobile applications." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mvp.solidsolutions.io/" />
        <meta property="og:title" content="SOLID Design and Development for Startups" />
        <meta property="og:description" content="Get your MVP ready for the world in a few weeks through SOLIDs design and development processes focused on web or mobile applications." />
        <meta property="og:image" content="/sharing-image.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mvp.solidsolutions.io/" />
        <meta property="twitter:title" content="SOLID Design and Development for Startups" />
        <meta property="twitter:description" content="Get your MVP ready for the world in a few weeks through SOLIDs design and development processes focused on web or mobile applications." />
        <meta property="twitter:image" content="/sharing-image.png" />

        <body id="root">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
