import React, { useState, useEffect, useRef, useCallback } from "react";
import { useComputedColorScheme } from "@mantine/core";
import PageTitle from "../../components/PageTitle";

const SECTIONS = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <>
        <p className="policy-lead">
          At Nexflare Dynamics Pvt. Ltd., we are committed to delivering
          high-quality software development, digital marketing, and technology
          services. Because our work is service-based and involves significant
          time, expertise, and resources from project kickoff, refunds are
          handled differently from typical product purchases.
        </p>
        <p className="policy-lead">
          This policy sets out when a refund may be issued, how much of a
          payment is refundable at each stage of a project, and how to raise a
          refund request.
        </p>
      </>
    ),
  },
  {
    id: "nature-of-services",
    title: "Nature of Our Services",
    body: (
      <>
        <p className="policy-lead">
          Our services are delivered on a project or retainer basis and
          typically involve custom work tailored to each client's requirements.
          Because of this:
        </p>
        <ul className="policy-list">
          <li>
            Work often begins as soon as an advance or deposit is received
          </li>
          <li>
            Time, planning, and resources are allocated to your project from day
            one
          </li>
          <li>
            Deliverables are frequently custom-built and cannot be resold or
            reused for another client
          </li>
          <li>
            Third-party costs (licenses, ad spend, hosting, tools) may be
            incurred on your behalf and are non-refundable once spent
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "advance-deposit-payments",
    title: "Advance / Deposit Payments",
    body: (
      <>
        <p className="policy-lead">
          Most engagements require an advance or deposit payment before work
          begins. This covers initial planning, resource allocation, and project
          setup.
        </p>
        <ul className="policy-list">
          <li>
            <span className="hl-green">Full refund</span> — if you cancel before
            any work has started and before the advance has been utilised
          </li>
          <li>
            <span className="hl-orange">Partial refund</span> — if you cancel
            after work has started; the amount corresponding to work already
            completed and resources committed will be deducted
          </li>
          <li>
            No refund of the advance is issued once discovery, design, or
            development work is underway, except as required by law
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "milestone-payments",
    title: "Milestone Payments",
    body: (
      <>
        <p className="policy-lead">
          For projects billed in milestones, each payment corresponds to a
          defined phase of work (e.g. design, development, testing, deployment).
        </p>
        <ul className="policy-list">
          <li>
            Payments for milestones that have been completed and delivered are
            non-refundable
          </li>
          <li>
            If a milestone is cancelled before work on it begins, that
            milestone's payment is refundable in full
          </li>
          <li>
            If a milestone is cancelled while in progress, you will be refunded
            for the unworked portion, calculated on a pro-rata basis
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "refund-eligibility",
    title: "Refund Eligibility",
    body: (
      <>
        <p className="policy-lead">
          You may be eligible for a refund in the following circumstances:
        </p>
        <ul className="policy-list">
          <li>
            We fail to deliver the agreed scope of work within a reasonable time
            and do not remedy this after being notified
          </li>
          <li>
            Services delivered materially differ from what was agreed in the
            project proposal or contract
          </li>
          <li>A duplicate or erroneous payment was made</li>
          <li>We are unable to begin the project after accepting payment</li>
        </ul>
        <p className="policy-subhead orange">
          Refunds are generally not issued for:
        </p>
        <ul className="policy-list">
          <li>Change of mind after work has commenced</li>
          <li>
            Delays caused by the client's failure to provide timely feedback,
            content, or approvals
          </li>
          <li>
            Dissatisfaction with subjective creative choices that were approved
            during the project
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "non-refundable-items",
    title: "Non-Refundable Items",
    body: (
      <>
        <p className="policy-lead">
          The following are non-refundable under all circumstances:
        </p>
        <ul className="policy-list">
          <li>
            Third-party costs already incurred on your behalf (domains, hosting,
            licenses, ad spend, plugins, stock assets)
          </li>
          <li>
            Consulting, strategy, or discovery sessions that have already taken
            place
          </li>
          <li>
            Custom deliverables that have been completed, delivered, and
            approved by you
          </li>
          <li>Payment gateway or bank transaction fees</li>
        </ul>
      </>
    ),
  },
  {
    id: "refund-process",
    title: "Refund Process & Timeline",
    body: (
      <>
        <p className="policy-lead">
          To request a refund, please contact us with your project or invoice
          details.
        </p>
        <ul className="policy-list">
          <li>
            Submit your request in writing to{" "}
            <a
              className="inline-link"
              href="mailto:enquiry@nexflaredynamics.com"
            >
              enquiry@nexflaredynamics.com
            </a>
          </li>
          <li>
            We will review your request and respond within 7 business days
          </li>
          <li>
            If approved, refunds are processed to the original payment method
            within 14 business days
          </li>
          <li>
            Bank or gateway processing times may add a few additional days
            before funds reflect in your account
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cancellations",
    title: "Cancellations",
    body: (
      <>
        <p className="policy-subhead blue">Cancellation by you:</p>
        <ul className="policy-list">
          <li>
            You may cancel a project at any time by notifying us in writing
          </li>
          <li>
            Refunds, if any, will be calculated per the Milestone Payments and
            Refund Eligibility sections above
          </li>
        </ul>
        <p className="policy-subhead orange">Cancellation by us:</p>
        <ul className="policy-list">
          <li>
            If we are unable to continue a project for reasons within our
            control, you will receive a full refund for undelivered work
          </li>
          <li>
            If cancellation is due to circumstances beyond our control (force
            majeure), refunds will be assessed on a case-by-case basis
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "dispute-resolution",
    title: "Dispute Resolution",
    body: (
      <p className="policy-lead">
        If you disagree with a refund decision, please raise this with us in
        writing so we can review the matter further. We aim to resolve disputes
        amicably through direct discussion. If a resolution cannot be reached,
        either party may pursue remedies available under applicable law, subject
        to the jurisdiction stated in this policy.
      </p>
    ),
  },
  {
    id: "changes-to-policy",
    title: "Changes to This Policy",
    body: (
      <p className="policy-lead">
        We may update this Refund Policy from time to time to reflect changes in
        our practices or legal requirements. When we make material changes, we
        will update the "Last Updated" date at the top of this page. Continued
        use of our services following any changes constitutes your acceptance of
        the updated policy.
      </p>
    ),
  },
  {
    id: "contact-us",
    title: "Contact Us",
    body: (
      <>
        <p className="policy-lead">
          If you have any questions about this Refund Policy or wish to request
          a refund, please contact us:
        </p>
        <div className="contact-card">
          <p className="company">Nexflare Dynamics Pvt. Ltd.</p>
          <p className="addr">
            <b>Global Business Hub</b>, EON Free Zone,
            <br />
            Kharadi, Pune, Maharashtra 411014, India
          </p>
          <p>
            ✉️{" "}
            <a
              className="inline-link"
              href="mailto:enquiry@nexflaredynamics.com"
            >
              enquiry@nexflaredynamics.com
            </a>
          </p>
          <p>📞 +91-8237525097</p>
        </div>
      </>
    ),
  },
];

const CSS = `
  .rp-root{
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    transition: background 0.25s ease, color 0.25s ease;
  }
  .rp-root *{ box-sizing: border-box; }
  .rp-root a{ color: inherit; }

  .hero{
    max-width: 760px;
    margin: 0 auto;
    padding: 40px 24px 40px;
    text-align: center;
    clear: both;
    margin-top: 90px;
  }
  .badge{
    display: inline-block;
    font-size: 11px;
    letter-spacing: 0.08em;
    font-weight: 600;
    color: var(--accent);
    background: var(--accent-soft);
    border: 1px solid var(--accent-border);
    padding: 5px 14px;
    border-radius: 999px;
    margin-bottom: 22px;
  }
  .rp-title{
    font-size: 44px;
    line-height: 1.15;
    font-weight: 800;
    margin: 0 0 16px;
    letter-spacing: -0.02em;
  }
  .rp-title .accent{ color: var(--accent); }
  .hero-desc{
    color: var(--text-secondary);
    font-size: 15px;
    line-height: 1.6;
    max-width: 560px;
    margin: 0 auto 26px;
  }
  .meta-row{
    display: flex;
    justify-content: center;
    gap: 34px;
    flex-wrap: wrap;
    font-size: 12.5px;
  }
  .meta-row .label{ color: var(--accent); font-weight: 600; }
  .meta-row .value{ color: var(--text-secondary); }

  .layout{
    max-width: 1180px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 260px 1fr;
    gap: 48px;
    padding: 10px 24px 100px;
    align-items: start;
  }

  .sidebar{ position: sticky; top: 32px; }
  .toc-label{
    font-size: 11px;
    letter-spacing: 0.1em;
    font-weight: 700;
    color: var(--accent);
    margin: 0 0 14px 4px;
    text-transform: uppercase;
  }
  .toc-list{ list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; }
  .toc-item{
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    text-align: left;
    text-decoration: none;
    font-size: 13.5px;
    color: var(--text-secondary);
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px solid transparent;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  }
  .toc-num{
    width: 20px; height: 20px;
    flex: none;
    margin-top: 1px;
    border-radius: 6px;
    background: var(--border-soft);
    color: var(--text-muted);
    font-size: 10.5px;
    font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.15s ease, color 0.15s ease;
  }
  .toc-item:hover{ background: var(--border-soft); color: var(--text-primary); }
  .toc-item.active{
    color: var(--accent);
    background: var(--accent-soft);
    border-color: var(--accent-border);
  }
  .toc-item.active .toc-num{ background: var(--accent); color: var(--bg); }

  .notice{
    background: var(--notice-bg);
    border: 1px solid var(--accent-border);
    border-radius: 10px;
    padding: 16px 20px;
    font-size: 13.5px;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 30px;
  }
  .notice b{ color: var(--text-primary); }

  .policy-section{
    padding: 30px 0;
    border-bottom: 1px solid var(--border-soft);
    scroll-margin-top: 30px;
  }
  .policy-section:last-child{ border-bottom: none; }

  .section-head{ display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
  .section-num{
    width: 26px; height: 26px;
    border-radius: 7px;
    background: var(--accent-soft);
    color: var(--accent);
    font-size: 12px;
    font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    flex: none;
  }
  .section-head h2{ font-size: 18px; margin: 0; font-weight: 700; }

  .policy-lead{ font-size: 13.5px; line-height: 1.75; color: var(--text-secondary); margin: 0 0 14px; }
  .policy-subhead{ font-size: 12.5px; font-weight: 700; letter-spacing: 0.02em; margin: 18px 0 10px; }
  .policy-subhead.blue{ color: var(--blue); }
  .policy-subhead.orange{ color: var(--orange); }

  .policy-list{ list-style: none; margin: 0 0 4px; padding: 0; display: flex; flex-direction: column; gap: 9px; }
  .policy-list li{ position: relative; padding-left: 18px; font-size: 13.5px; line-height: 1.65; color: var(--text-secondary); }
  .policy-list li::before{ content: "\\203A"; position: absolute; left: 0; color: var(--text-muted); font-size: 13px; }
  .policy-list li b{ color: var(--text-primary); font-weight: 700; }
  .hl-green{ color: var(--green); font-weight: 600; }
  .hl-orange{ color: var(--orange); font-weight: 600; }

  .contact-card{
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 22px 24px;
    margin-top: 8px;
  }
  .contact-card .company{ color: var(--accent); font-weight: 700; font-size: 14px; margin-bottom: 10px; }
  .contact-card p{ margin: 4px 0; font-size: 13.5px; color: var(--text-secondary); line-height: 1.6; }
  .contact-card .addr b{ color: var(--text-primary); }

  .inline-link{ color: var(--accent); text-decoration: none; }
  .inline-link:hover{ text-decoration: underline; }

  @media (max-width: 860px){
    .layout{ grid-template-columns: 1fr; }
    .sidebar{ position: static; order: 2; }
    .rp-title{ font-size: 32px; }
  }
`;

const THEME_VARS = {
  dark: {
    "--bg": "#060d18",
    "--bg-elevated": "#0d1730",
    "--border": "#1e2b45",
    "--border-soft": "#16213a",
    "--text-primary": "#f2f5f4",
    "--text-secondary": "#9aa8ab",
    "--text-muted": "#64707c",
    "--accent": "#3b9dff",
    "--accent-soft": "rgba(37,99,235,0.16)",
    "--accent-border": "rgba(37,99,235,0.35)",
    "--blue": "#6fa8ff",
    "--orange": "#f0a860",
    "--green": "#4fd18b",
    "--card-bg": "rgba(255,255,255,0.03)",
    "--notice-bg": "rgba(6,182,212,0.08)",
    "--toggle-bg": "rgba(255,255,255,0.05)",
    background: `
      radial-gradient(circle at top left, rgba(37,99,235,.18), transparent 35%),
      radial-gradient(circle at top right, rgba(6,182,212,.15), transparent 35%),
      linear-gradient(180deg,#08111f 0%,#0b1326 45%,#060d18 100%)
    `,
    color: "#f2f5f4",
  },
  light: {
    "--bg": "#eef7ff",
    "--bg-elevated": "#ffffff",
    "--border": "#dbe6f0",
    "--border-soft": "#e6eef5",
    "--text-primary": "#101827",
    "--text-secondary": "#51606f",
    "--text-muted": "#8a97a3",
    "--accent": "#2563eb",
    "--accent-soft": "rgba(37,99,235,0.1)",
    "--accent-border": "rgba(37,99,235,0.3)",
    "--blue": "#2266cc",
    "--orange": "#b5721c",
    "--green": "#1f9d5c",
    "--card-bg": "#ffffff",
    "--notice-bg": "rgba(6,182,212,0.07)",
    "--toggle-bg": "#ffffff",
    background: `
      radial-gradient(circle at top left, rgba(37,99,235,.08), transparent 35%),
      radial-gradient(circle at top right, rgba(6,182,212,.06), transparent 35%),
      linear-gradient(180deg,#ffffff 0%,#f7fbff 45%,#eef7ff 100%)
    `,
    color: "#101827",
  },
};

export default function RefundPolicy() {
  // Reads the theme straight from Mantine's context — the same value your
  // Navbar's toggleTheme() button changes via setColorScheme(). No prop
  // wiring needed: whenever the navbar toggle is clicked, this re-renders
  // with the new value automatically since it shares the same MantineProvider.
  const theme = useComputedColorScheme("light");

  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const sectionRefs = useRef({});
  const isClickScrolling = useRef(false);
  const clickTimeout = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );
    Object.values(sectionRefs.current).forEach(
      (el) => el && observer.observe(el),
    );
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const initialId = window.location.hash?.slice(1);
    if (initialId && sectionRefs.current[initialId]) {
      setActiveId(initialId);
      sectionRefs.current[initialId].scrollIntoView({ block: "start" });
    }
  }, []);

  const goToSection = useCallback((id) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    setActiveId(id);
    isClickScrolling.current = true;

    const url = new URL(window.location.href);
    url.hash = id;
    window.history.replaceState(null, "", url.toString());

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 700);
  }, []);

  return (
    <>
      <PageTitle title="Refund Policy" />
      <div className="rp-root" style={THEME_VARS[theme]} data-theme={theme}>
        <style>{CSS}</style>

        <header className="hero">
          <span className="badge">◆ LEGAL</span>
          <h1 className="rp-title">
            Refund <span className="accent">Policy</span>
          </h1>
          <p className="hero-desc">
            We strive to deliver exceptional results on every engagement. This
            policy explains the conditions under which refunds may be issued for
            our services.
          </p>
          <div className="meta-row">
            <div>
              <span className="label">Effective Date:</span>{" "}
              <span className="value">1 January 2025</span>
            </div>
            <div>
              <span className="label">Last Updated:</span>{" "}
              <span className="value">30 May 2026</span>
            </div>
            <div>
              <span className="label">Jurisdiction:</span>{" "}
              <span className="value">Pune, Maharashtra, India</span>
            </div>
          </div>
        </header>

        <div className="layout">
          <aside className="sidebar">
            <p className="toc-label">Table of Contents</p>
            <ul className="toc-list">
              {SECTIONS.map((s, i) => (
                <li key={s.id}>
                  <button
                    type="button"
                    className={`toc-item${activeId === s.id ? " active" : ""}`}
                    onClick={() => goToSection(s.id)}
                  >
                    <span className="toc-num">{i + 1}</span>
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <main className="content">
            <div className="notice">
              By engaging <b>Nexflare Dynamics Pvt. Ltd.</b> and making any
              payment, you acknowledge that you have read and agree to this
              Refund Policy. We recommend reviewing this policy before
              initiating any project.
            </div>

            {SECTIONS.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                ref={(el) => (sectionRefs.current[s.id] = el)}
                className="policy-section"
              >
                <div className="section-head">
                  <span className="section-num">{i + 1}</span>
                  <h2>{s.title}</h2>
                </div>
                {s.body}
              </section>
            ))}
          </main>
        </div>
      </div>
    </>
  );
}
