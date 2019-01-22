import App, { Container } from "next/app";
import Router from "next/router";
import withGA from "next-ga";
import React from "react";

//TODO: REMOVE THIS
// Workaround for this bug: https://github.com/zeit/next-plugins/issues/282
// FIX: Import a css file in the top level app component so that subsequent components that import css will work.
import css from "./_app.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default withGA("UA-103830543-2", Router)(MyApp);
