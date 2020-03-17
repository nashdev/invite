import Head from "next/head";

import Header from "../components/header";
import Hero from "../components/hero";

function ConductPage() {
  return (
    <React.Fragment>
      <Head>
        <title>NashDev Slack - Code of Conduct</title>
      </Head>

      <Header />
      <Hero
        title="Code of Conduct"
        subtitle="All participants in the NashDev Slack are required to comply with the following Code of Conduct."
      />

      <main>
        <section className="section">
          <div className="container">
            <h2 className="title is-size-2">
              <a name="tldr" className="anchor"></a>The Short Version
            </h2>

            <p>
              Be respectful of other people, respectfully ask people to stop if
              you are bothered; respect privacy; admins are not paid and have
              day jobs, so please be respectful of their time; and if you can’t
              resolve an issue with someone else you should contact the admins.
              If you are being a problem, it will be made clear to you, and you
              may be asked to leave the NashDev Slack.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h1 className="title is-size-1">
              <a name="1.0" className="anchor"></a>1.0 The Code of Conduct
            </h1>

            <section className="section">
              <div className="container">
                <h2 className="title is-size-2">
                  <a name="1.1" className="anchor"></a>1.1 Respect
                </h2>
                <div className="content">
                  <p>
                    NashDev is an internet-based community space for
                    professionals in the middle Tennessee area who are actively
                    learning, practicing, and working in technology. We
                    recognize and celebrate the creativity and collaboration of
                    our independent members and the diversity of skills,
                    talents, experiences, cultures, and opinions that they bring
                    to your community.
                  </p>
                  <p>
                    NashDev Slack desires to be an inclusive environment and
                    believes in treating all individuals respectfully,
                    regardless of gender or gender identity (including
                    transgender status), sexual orientation, age, disability,
                    nationality, race, ethnicity, religion (or lack thereof),
                    political affiliation, or career path.
                  </p>
                  <p>We value respectful behavior above individual opinions.</p>
                  <p>Respectful behavior includes but is not limited to:</p>
                  <ul>
                    <li>Be considerate, kind, constructive, and helpful.</li>
                    <li>
                      Avoid demeaning, discriminatory, harassing, hateful, or
                      physically threatening behavior, speech, and imagery.
                    </li>
                    <li>
                      If you’re not sure, ask someone instead of assuming. No,
                      really. Just ask the admins. We’d rather hear from you
                      than hear about something you said or did after the fact,
                      and we are here to help.
                    </li>
                    <li>
                      Don’t be a bystander. Role model respectful behaviour, but
                      also help to address disrespect when you see it.
                    </li>
                    <li>
                      Disrespectful behavior outside this community may be
                      considered a violation of this code of conduct at the
                      discretion of the admins.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="container">
                <h2 className="title is-size-2">
                  <a name="1.2" className="anchor"></a>1.2 Privacy
                </h2>
                <div className="content">
                  <p>
                    This community is not a public space. However, no one has
                    signed an non-disclosure agreement (“NDA”) to participate,
                    and you should not presume anything you say here will remain
                    private, so act accordingly. Protect IP and
                    legally-protected information.
                  </p>
                  <p>
                    For attribution of specific content found on this Slack, we
                    ask that you ask the originator of the content for
                    permission.
                  </p>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="container">
                <h2 className="title is-size-2">
                  <a name="1.3" className="anchor"></a>1.3 Not For Profit
                </h2>
                <div className="content">
                  <p>
                    While this slack is designed to help our local programming
                    community, and that frequently benefits whatever company or
                    individual a member is currently working for, this is not a
                    place for obvious commercial activities such as recruiting,
                    marketing, or other solicitation, except in channels
                    dedicated to that purpose.
                  </p>
                  <p>
                    Channels for commercial purposes include, but are not
                    necessarily limited to:
                  </p>
                  <ul>
                    <li>#jobs (job postings)</li>
                    <li>#freelance (freelance / contract postings)</li>
                    <li>#classifieds (person to person sales)</li>
                    <li>#keyboards (keyboard specific sales)</li>
                    <li>
                      #boardgames (person to person board game specific sales)
                    </li>
                    <li>
                      #cars (person to person car and autoparts specific sales)
                    </li>
                  </ul>
                  <p>
                    All job postings must be in Nashville, the greater middle
                    Tennessee area, or 100% remote. The goal of this channel is
                    to grow our local community, not to take talent from the
                    area.
                  </p>
                  <p>
                    Non-obvious commercial activity includes things such as
                    well-intentioned user surveys of a specific channel or
                    responding to a request for tools or services with
                    information about what your company provides. In these
                    situations, we ask that you:
                  </p>
                  <ul>
                    <li>
                      Ask permission of the channel before posting the
                      solicitation or information
                    </li>
                    <li>State clear intent for the purpose</li>
                    <li>Listen to the response of your peers</li>
                  </ul>
                  <p>
                    We believe the above protocol is generally useful and should
                    be used when there are any doubts.
                  </p>
                  <p>
                    If you join this community simply to take value rather than
                    contribute, the community will quickly notice and react. If
                    you are wondering whether a specific action is commercial or
                    not, please ask and calibrate in <code>#meta</code>.
                  </p>
                </div>
              </div>
            </section>

            <section className="section">
              <div className="container">
                <h2 className="title is-size-2">
                  <a name="1.4" className="anchor"></a>1.4 Resolve Peacefully
                </h2>
                <div className="content">
                  <p>
                    We believe peer-to-peer discussions, feedback, and
                    corrections can help build a stronger, safer, and more
                    welcoming community.
                  </p>
                  <p>
                    If you see someone violating any part of this Code of
                    Conduct, we urge you to respectfully dissuade them from such
                    behavior. Expect that others in the community wish to help
                    keep the community respectful, and welcome your input in
                    doing so.
                  </p>
                  <p>
                    If you experience disrespectful behavior toward yourself or
                    anyone else and feel in any way unable or unwilling to
                    respond or resolve it respectfully (for any reason), please
                    immediately bring it to the attention of an admin. We want
                    to hear from you about anything that you feel is
                    disrespectful, threatening, or just something that could
                    make someone feel distressed in any way. We will listen and
                    work to resolve the matter.
                  </p>
                </div>
              </div>
            </section>

            <section className="section">
              <div className="container">
                <h2 className="title is-size-2">
                  <a name="1.5" className="anchor"></a>1.5 Apologize for
                  Mistakes
                </h2>
                <div className="content">
                  <p>
                    Should you catch yourself behaving disrespectfully, or be
                    confronted as such, listen intently, own up to your words
                    and actions, and apologize accordingly. No one is perfect,
                    and even well-intentioned people make mistakes. What matters
                    is how you handle them and that you avoid repeating them in
                    the future.
                  </p>
                </div>
              </div>
            </section>

            <section className="section">
              <div className="container">
                <h2 className="title is-size-2">
                  <a name="1.6" className="anchor"></a>1.6 Consequences
                </h2>
                <div className="content">
                  <p>
                    If you feel a message should be deleted, please refer to the
                    Deleting Content section below.
                  </p>
                  <p>
                    If you are unable to resolve a situation peacefully, please
                    refer to our “Incidence Process” section below and choose a
                    course of action that suits the situation.
                  </p>
                  <p>
                    If the admins determine that anyone is violating any part of
                    this Code of Conduct, the admins may take any action they
                    deem appropriate within this Slack team, up to and including
                    expulsion and exclusion from NashDev Slack.
                  </p>
                  <p>
                    As admins, we will seek to resolve conflicts peacefully and
                    in a manner that is positive for the community. We can’t
                    foresee every situation, and thus if in the admin team’s
                    judgment that the best thing to do is to ask a disrespectful
                    individual to leave, we will do so.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="title is-size-1">
              <a name="2.0" className="anchor"></a>2.0 Deleting Content
            </h2>
            <div className="content">
              <p>
                Admins may delete messages that violate the Code of Conduct
                <br />
                The authors of those messages will be notified and may be given
                a chance to modify the message themselves.
              </p>
            </div>

            <section className="section">
              <div className="container">
                <h2 className="title is-size-2">
                  <a name="2." className="anchor"></a>2.1 What, When, and How
                </h2>
                <div className="content">
                  <p>
                    Admins may come across or be notified of content on NashDev
                    that violates the Code of Conduct. In some situations, this
                    may lead to an admin deleting the message (or messages) that
                    violate the CoC. Messages that are most likely to be deleted
                    are commercial solicitations, disrespectful messages to
                    other members, or links to disturbing or distressing content
                    without appropriate measures to warn of or hide the content
                    (including image uploads and unfurls).
                  </p>
                  <p>
                    Ideally, another NashDev member notices this content and
                    contacts the original poster, who then modifies or deletes
                    the message so that it is no longer problematic. In this
                    case, no further admin action is required. If admin action
                    is desired, due to lack of response or any other reason, an
                    admin will notify the original poster of the violation and
                    the need to reword or remove the problematic message. The
                    admin will also specify a time after which admin action will
                    be taken to delete the content if it is not addressed. This
                    time may be as little as a few minutes, or as much as 24
                    hours.
                  </p>
                  <p>
                    The determination of how much time is allowed is up to the
                    admin team, but the following context will be used to help
                    determine the time before admin action:
                  </p>
                  <ul>
                    <li>How blatant the violation is</li>
                    <li>
                      How likely it is to be seen by others (higher-volume
                      channels get less time)
                    </li>
                    <li>
                      How likely it is to trigger negative reactions in others
                    </li>
                  </ul>
                  <p>
                    Additional consequences beyond the removal of content are up
                    to the admin team, per the same incident process found in
                    the following section “Incident Process”.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h1 className="title is-size-1">
              <a name="3.0" className="anchor"></a>3.0 Incident Process
            </h1>
            <div className="content">
              <p>Our brief governing philosophy:</p>

              <p>
                Please strive to resolve a non-heinous situation by yourself; if
                it’s a heinous situation, please contact an admin immediately.
              </p>
            </div>

            <section className="section">
              <div className="container">
                <h2 className="title is-size-2">
                  <a name="3.1" className="anchor"></a>3.1 Something is Off
                </h2>
                <div className="content">
                  <p>
                    A significant part of the admin job is the management of
                    incidents on the NashDev Slack, but ideally the community
                    (that’s you) has both the tools and the desire to resolve
                    many situations without admin support.
                  </p>
                  <p>
                    The Code of Conduct exists to give members a model idea of
                    what is and isn’t acceptable in NashDev including behavior,
                    marketing activity, and etiquette. If you experience strange
                    behavior in a channel and are wondering if it’s acceptable,
                    please first consult the CoC.
                  </p>
                  <p>
                    With CoC clarity in hand, please contact the member(s) and
                    explain:
                  </p>
                  <ul>
                    <li>
                      This is the activity I saw which I have an issue with,
                    </li>
                    <li>It’s not allowed by the CoC, and,</li>
                    <li>
                      Let’s figure out how to resolve it. We ask in non-heinous
                      cases to start with member-driven resolution. If you are
                      not comfortable with this approach, go ahead and jump to
                      “It’s Admin O’Clock”.
                    </li>
                  </ul>
                  <p>
                    Ideally, the above discussion can help resolve the
                    situation. It often does. If it doesn’t, if you are not
                    comfortable contacting the member(s), or if this is an
                    obvious heinous situation, jump to "It’s Admin O’Clock".
                  </p>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="container">
                <h3 className="title is-size-3">
                  <a name="3.2" className="anchor"></a>3.2 It’s Admin O’Clock
                </h3>
                <div className="content">
                  <p>
                    Administrators can be contacted directly, in the{" "}
                    <code>#support</code> channel by typing <code>!help</code>.
                    You may also contact an admin directly, they are listed at
                    the bottom of this document. Please choose the path most
                    comfortable for you.
                  </p>
                  <p>When you contact an admin(s), provide the following:</p>
                  <ul>
                    <li>The activity you saw that you have an issue with,</li>
                    <li>If applicable, the CoC violation.</li>
                  </ul>
                </div>
                <section className="section">
                  <div className="container">
                    <h3 className="title is-size-3">
                      <a name="3.2.1" className="anchor"></a>3.2.1 Things to
                      know:
                    </h3>
                    <div className="content">
                      <ul>
                        <li>
                          If you need to contact an admin directly and are not
                          sure who is available, please type <code>!help</code>{" "}
                          in <code>#support</code> and directly contact the
                          admin that responds.
                        </li>
                        <li>
                          Admins are committed to a first response within 24
                          hours. Usually faster. If you directly contact a
                          single admin, it could be longer depending on their
                          availability and work schedules.
                        </li>
                        <li>
                          We will strive to keep your concerns private where
                          possible. If an incident involved only 2 people, this
                          is not possible. If people demand to know who has
                          complained, we will not divulge this information as we
                          want people to feel comfortable bringing concerns to
                          the admin team.
                        </li>
                        <li>
                          Once you’ve contacted an admin, they’ll help you
                          triage the incident.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="section">
                  <div className="container">
                    <h3 className="title is-size-3">
                      <a name="3.2.2" className="anchor"></a>
                      3.2.2 Formal Incident Process
                    </h3>
                    <div className="content">
                      <p>
                        In the case of a formal incident being reported, there
                        are two possible resolution paths:
                      </p>
                      <ol>
                        <li>
                          Raising a concern to the admin to give them context,
                          or,
                        </li>
                        <li>
                          Filing a formal complaint that will result in
                          administrative action.
                        </li>
                      </ol>
                      <p>
                        In both cases, the reporter needs to provide the
                        following information to the admin:
                      </p>
                      <ul>
                        <li>
                          What’s the nature of the incident or Code of Conduct
                          violation?
                        </li>
                        <li>Who is involved in this incident?</li>
                        <li>What material supports this situation?</li>
                        <li>
                          Any privacy concerns? (Reporter consent is required
                          before sharing any information regarding the incident)
                        </li>
                      </ul>
                      <p>With this information in hand, the admin will:</p>
                      <ul>
                        <li>
                          Work to determine whether this is a raised concern or
                          a formal complaint with the reporter. In the case of a
                          raised concern, the understanding is there may be no
                          action other than administrative awareness.
                        </li>
                        <li>
                          Ask clarifying questions of the reporter because every
                          incident is different.
                        </li>
                        <li>
                          Work with publicly available content to confirm the
                          report.
                        </li>
                        <li>
                          Talk with their fellow administrators to gather
                          perspective.
                        </li>
                      </ul>
                      <p>
                        The admin may deem it necessary to talk to the accused
                        member(s) to gather additional perspective.
                      </p>
                      <p>
                        With this information in hand, the admin will determine
                        a consequence. Consequences include but are not limited
                        to:
                      </p>
                      <ul>
                        <li>
                          <strong>A Strike</strong>
                          <ul>
                            <li>
                              NashDev operates on a three strike system whereby
                              non-suspending CoC violations can result in one or
                              more strikes. Admins will use their judgement and
                              historical precedent in determining what
                              constitutes a strike.
                            </li>
                            <li>
                              When a member receives three strikes, they will be
                              suspended from NashDev for a period of time or
                              permanently depending on the violation. Multiple
                              strikes can be assessed depending on the
                              violation.
                            </li>
                            <li>
                              We do not have a definition of what does and does
                              not constitute a strike. As of March 11, 2020 we
                              are keeping a record of all administrative
                              activity to help calibrate strikes.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>Do Not Contact</strong>
                          <ul>
                            <li>
                              A member may not contact (in any fashion, messages
                              or emoji) either publicly or privately, designated
                              members of the Slack for a predetermined period of
                              time.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>Temporary suspension</strong>
                          <ul>
                            <li>
                              A member is suspended from NashDev Slack for a
                              predetermined period of time.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>Permanent suspension</strong>
                          <ul>
                            <li>
                              A member is permanently banned from NashDev Slack
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <p>
                        For any type of suspension, the admins will conduct a
                        private vote based on the incident. Majority wins. With
                        the defined incident and consequence in hand, the admin
                        will present the following to the accused member:
                      </p>
                      <ul>
                        <li>This is what occurred.</li>
                        <li>This incident is confidential.</li>
                        <li>This is how I confirmed what occurred.</li>
                        <li>
                          This is what I decided in terms of consequence. In the
                          case of a non-ban action, explain the terms of Do Not
                          Contact, Strikes, Etc.
                        </li>
                      </ul>
                      <p>
                        For <strong>Strikes</strong>, members will be alerted to
                        the strike policy and the number of current strikes they
                        have.
                      </p>
                      <p>
                        For <strong>Do Not Contact</strong>, members will
                        receive the time period when they can not contact other
                        member(s)
                      </p>
                      <p>
                        For <strong>Temporary Suspension</strong>, members will
                        receive the time period when they can not be a part of
                        NashDev Slack.
                      </p>
                      <p>
                        For <strong>Permanent Suspension</strong>, members will
                        receive the content above and then permanently removed
                        from NashDev Slack.
                      </p>
                      <p>
                        The Administrators are committed to resolve incidents
                        within five working days.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="title is-size-1">
              <a name="4.0" className="anchor"></a>4.0 Appeals Process
            </h2>
            <div className="content">
              <p>Under development.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="title is-size-1">
              <a name="5.0" className="anchor"></a>5.0 Updates
            </h2>
            <div className="content">
              <p>
                When we make updates to the code of conduct or incident process
                we will make an announcement in the <code>#announcements</code>{" "}
                channel. Discussion about the changes can happen in{" "}
                <code>#meta</code>.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="title is-size-1">
              <a name="6.0" className="anchor"></a>6.0 Thanks
            </h2>
            <div className="content">
              <p>
                Thank you to everyone in our community for helping to make our
                home the respectful and inclusive community that it is.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="title is-size-1">
              <a name="7.0" className="anchor"></a>7.0 Administrators
            </h2>
            <div className="content">
              <p>The admin team:</p>
              <ul>
                <li>
                  @wgolden
                  <br />
                </li>
                <li>
                  @jasonmyers
                  <br />
                </li>
                <li>
                  @jorendorff
                  <br />
                </li>
                <li>
                  @rodney_norris
                  <br />
                </li>
                <li>
                  @harold
                  <br />
                </li>
                <li>
                  @courey
                  <br />
                </li>
                <li>
                  @realrealruss
                  <br />
                </li>
                <li>
                  @bill
                  <br />
                </li>
                <li>
                  @andrewpthorp
                  <br />
                </li>
                <li>@byeliad</li>
              </ul>
              <p>
                You can also contact them by posting in <code>#support</code>.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="content">
              <h2 className="title is-size-1">
                <a name="attribution" className="anchor"></a>Attribution
              </h2>
              <p>
                After reviewing several COC options, this version was adapted
                from the{" "}
                <a href="https://github.com/randsleadershipslack/documents-and-resources/blob/master/code-of-conduct.md">
                  Rand Leadership Slack COC.
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default ConductPage;
