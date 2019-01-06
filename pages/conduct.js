import { useState, useRef } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import cx from "classnames";

import Header from "../components/header";
import Section from "../components/section";
import Hero from "../components/hero";

function ConductPage() {
  return (
    <React.Fragment>
      <Head>
        <title>NashDev Slack - Code of Conduct</title>
      </Head>

      <Header />
      <Hero title="Code of Conduct" />

      <main>
        <section className="section">
          <div className="container">
            <p>
              <strong>Coming soon. Please be nice to each other.</strong>
            </p>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default ConductPage;
