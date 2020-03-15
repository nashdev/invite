import { useState, useRef } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

import Header from "../components/header";
import Hero from "../components/hero";

function InvitePage() {
  const emailEl = useRef(null);
  const nameEl = useRef(null);
  const cocEl = useRef(null);
  const reasonEl = useRef(null);
  const [flash, setFlash] = useState({
    title: null,
    message: null,
    status: null,
    reason: null
  });

  const onFormSubmit = async e => {
    e.preventDefault();

    const email = emailEl.current.value;
    const name = nameEl.current.value;
    const coc = cocEl.current.checked;
    const reason = reasonEl.current.value;

    if (
      !coc &&
      !confirm(
        "You must abide by the code of conduct to continue. Do you agree?"
      )
    ) {
      return;
    }

    try {
      setFlash({
        title: "One sec",
        message: "Submitting invite request...",
        status: "info"
      });

      const req = await fetch("/api/invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          coc,
          reason
        })
      });

      const { status, errors } = await req.json();
      emailEl.current.value = "";
      nameEl.current.value = "";
      reasonEl.current.value = "";

      if (errors) {
        return setFlash({
          title: "Something went wrong",
          message: errors.map(e => e.msg).join(", "),
          status: "error"
        });
      }

      return setFlash({
        title: "Success",
        message: status,
        status: "success"
      });
    } catch (error) {
      return setFlash({
        title: "Something went wrong",
        message: error,
        status: "error"
      });
    }
  };

  return (
    <React.Fragment>
      <Head>
        <title>NashDev Slack Invite</title>
      </Head>

      <Header />
      <Hero
        title="Invite"
        subtitle="Join over 5,900+ other Nashville Developers."
        flash={flash}
      />

      <main>
        <section className="section">
          <div className="container">
            <p>
              <strong>Hello!</strong> You may request an invitation below to be
              approved by our moderators. This will typically take a few hours,
              but we'll get you in as soon as possible!
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <form>
              <div className="field">
                <label className="label is-large" htmlFor="name">
                  Name
                </label>
                <div className="control">
                  <input
                    id="name"
                    className="input is-large"
                    type="text"
                    ref={nameEl}
                    name="name"
                    placeholder="e.g Alex Smith"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label is-large" htmlFor="email">
                  Email
                </label>
                <div className="control">
                  <input
                    id="email"
                    className="input is-large"
                    name="email"
                    type="email"
                    ref={emailEl}
                    placeholder="e.g. alexsmith@gmail.com"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label is-large" htmlFor="reason">
                  Why do you want to join the NashDev Slack Channel?
                </label>
                <div className="control">
                  <textarea
                    id="reason"
                    className="textarea is-large"
                    name="reason"
                    type="reason"
                    ref={reasonEl}
                    required
                  />
                </div>
                <p className="help">
                  If you're not local to Nashville, please tell us in a few
                  words why you want to join this community.{" "}
                </p>
              </div>

              <div className="field">
                <div className="control">
                  <label className="checkbox">
                    <input type="checkbox" name="coc" id="coc" ref={cocEl} /> I
                    agree to abide by the{" "}
                    <a href="/conduct" target="_blank">
                      code of conduct
                    </a>
                    .
                  </label>
                </div>
              </div>

              <div className="control">
                <button
                  className="button is-primary is-large"
                  onClick={onFormSubmit}
                >
                  Request Invitation
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default InvitePage;
