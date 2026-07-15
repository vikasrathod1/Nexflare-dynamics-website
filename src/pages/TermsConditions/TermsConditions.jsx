import React, { useState, useEffect, useRef, useCallback } from "react";
import { useComputedColorScheme } from "@mantine/core";
import PageTitle from "../../components/PageTitle";

const SECTIONS = [
  {
    id: "acceptance-of-terms",
    title: "Acceptance of Terms",
    body: (
      <>
        <p className="policy-lead">
          These Terms &amp; Conditions ("Terms") constitute a legally binding
          agreement between you ("Client" or "User") and Nexflare Dynamics Pvt.
          Ltd. ("Company", "we", "us", or "our"), a company incorporated in
          India with its registered office at Global Bussiness Hub, EON Free
          Zone, Kharadi, Pune, Maharashtra 411014.
        </p>
        <p className="policy-lead">
          By using our website, submitting an enquiry, signing a project
          agreement, or making any payment to the Company, you confirm that you
          are at least 18 years of age and have the legal authority to enter
          into this agreement on behalf of yourself or your organisation.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "Services",
    body: (
      <>
        <p className="policy-lead">
          Nexflare Dynamics Pvt. Ltd. provides custom software development, web
          and app development, digital marketing, CRM services, and related
          technology solutions as described on our website and in individual
          project proposals or statements of work ("SOW").
        </p>
        <p className="policy-lead">
          The scope, deliverables, timelines, and pricing for each engagement
          are defined in a separate SOW or project agreement signed by both
          parties. In the event of any conflict between these Terms and a signed
          SOW, the SOW shall prevail.
        </p>
        <ul className="policy-list">
          <li>
            We reserve the right to decline any project enquiry at our sole
            discretion
          </li>
          <li>
            Project timelines stated in proposals are estimates and may vary
            based on client responsiveness and scope changes
          </li>
          <li>
            Scope changes requested by the client after project commencement may
            result in revised timelines and additional charges
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "client-obligations",
    title: "Client Obligations",
    body: (
      <>
        <p className="policy-lead">
          To enable timely and quality delivery of services, the Client agrees
          to:
        </p>
        <ul className="policy-list">
          <li>
            Provide accurate, complete, and timely information, content, and
            access required for the project
          </li>
          <li>
            Designate a point of contact authorised to provide feedback,
            approvals, and sign-offs
          </li>
          <li>
            Review and respond to deliverables, questions, and approval requests
            within agreed timeframes
          </li>
          <li>Make payments in accordance with the agreed payment schedule</li>
          <li>
            Ensure any third-party accounts, licenses, or credentials provided
            to us are valid and properly authorised
          </li>
        </ul>
        <p className="policy-lead mt">
          Delays caused by the Client in fulfilling these obligations may result
          in revised project timelines and are not attributable to the Company.
        </p>
      </>
    ),
  },
  {
    id: "payment-terms",
    title: "Payment Terms",
    body: (
      <>
        <p className="policy-lead">
          Unless otherwise agreed in a signed SOW or project agreement, the
          following payment terms apply:
        </p>
        <ul className="policy-list">
          <li>
            An advance or deposit payment is required before work commences on
            any project
          </li>
          <li>
            Remaining payments are due as per the milestone or billing schedule
            set out in the SOW
          </li>
          <li>
            Invoices are payable within 7 days of the invoice date unless a
            different term is specified
          </li>
          <li>
            Late payments may attract interest and may result in suspension of
            work until the outstanding amount is settled
          </li>
          <li>
            All fees are exclusive of applicable taxes, which will be added
            where required by law
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: (
      <>
        <p className="policy-lead">
          Unless otherwise agreed in writing, ownership of intellectual property
          is governed as follows:
        </p>
        <ul className="policy-list">
          <li>
            Upon full and final payment, ownership of custom deliverables
            created specifically for the Client's project transfers to the
            Client
          </li>
          <li>
            The Company retains ownership of all pre-existing tools, frameworks,
            libraries, and know-how used to deliver the project, and grants the
            Client a licence to use them as part of the delivered solution
          </li>
          <li>
            Third-party components, plugins, or licensed software remain subject
            to their respective owners' licence terms
          </li>
          <li>
            The Company may reference completed projects in its portfolio, case
            studies, and marketing materials unless the Client requests
            confidentiality in writing
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    body: (
      <>
        <p className="policy-lead">
          Both parties agree to keep confidential all non-public information
          disclosed by the other party in connection with the project
          ("Confidential Information"). Confidential Information shall not be
          disclosed to any third party without the prior written consent of the
          disclosing party, except:
        </p>
        <ul className="policy-list">
          <li>As required by law or court order</li>
          <li>
            To employees or contractors who need access to perform their duties
            and are bound by equivalent confidentiality obligations
          </li>
          <li>
            Where the information becomes publicly available through no fault of
            the receiving party
          </li>
        </ul>
        <p className="policy-lead mt">
          This confidentiality obligation survives the termination of any
          project engagement for a period of 2 years. Where a separate
          Non-Disclosure Agreement (NDA) is signed, the NDA shall take
          precedence over this clause.
        </p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    body: (
      <>
        <p className="policy-lead">
          To the maximum extent permitted by applicable law, Nexflare Dynamics
          Pvt. Ltd. shall not be liable for:
        </p>
        <ul className="policy-list">
          <li>
            Any indirect, incidental, special, consequential, or punitive
            damages
          </li>
          <li>Loss of profits, revenue, data, business, or goodwill</li>
          <li>
            Damages arising from third-party services, integrations, or APIs
            outside our control
          </li>
          <li>
            Business losses resulting from downtime, bugs, or performance issues
            beyond agreed SLAs
          </li>
        </ul>
        <p className="policy-lead mt">
          Our total aggregate liability to the Client for any claim arising out
          of or in connection with a project shall not exceed the total fees
          paid by the Client to the Company for that specific project in the 6
          months preceding the claim.
        </p>
      </>
    ),
  },
  {
    id: "warranties-disclaimers",
    title: "Warranties & Disclaimers",
    body: (
      <>
        <p className="policy-lead">
          We warrant that our services will be performed with reasonable skill
          and care by qualified professionals, and that deliverables will
          substantially conform to the agreed specifications.
        </p>
        <p className="policy-lead">We do not warrant that:</p>
        <ul className="policy-list">
          <li>
            Our website will be uninterrupted, error-free, or free from viruses
            or harmful components
          </li>
          <li>
            Any software delivered will be entirely free of defects (we provide
            a warranty period as specified in the SOW to address post-launch
            bugs)
          </li>
          <li>
            Results or outcomes from digital marketing campaigns will meet
            specific targets, as these depend on third-party platforms and
            market conditions
          </li>
        </ul>
        <p className="policy-lead mt">
          All warranties not expressly stated herein are disclaimed to the
          fullest extent permitted by law.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    body: (
      <>
        <p className="policy-lead">
          <b>Termination by Client:</b> The Client may terminate a project
          engagement by providing 30 days' written notice. All work completed
          and expenses incurred up to the termination date will be invoiced and
          are payable by the Client. The advance payment is non-refundable.
        </p>
        <p className="policy-lead">
          <b>Termination by Company:</b> We reserve the right to suspend or
          terminate services immediately if the Client:
        </p>
        <ul className="policy-list">
          <li>Fails to make payment within 14 days of the due date</li>
          <li>
            Breaches any material term of these Terms or the project agreement
          </li>
          <li>Engages in conduct that is abusive, threatening, or unlawful</li>
        </ul>
        <p className="policy-lead mt">
          Upon termination, all outstanding invoices become immediately due and
          payable. Ownership of work-in-progress deliverables remains with the
          Company until all outstanding amounts are settled in full.
        </p>
      </>
    ),
  },
  {
    id: "governing-law-dispute-resolution",
    title: "Governing Law & Dispute Resolution",
    body: (
      <>
        <p className="policy-lead">
          These Terms shall be governed by and construed in accordance with the
          laws of India. Any disputes arising out of or in connection with these
          Terms or any project engagement shall be subject to the exclusive
          jurisdiction of the courts in Pune, Maharashtra, India.
        </p>
        <p className="policy-lead">
          Prior to initiating any legal proceedings, both parties agree to
          attempt in good faith to resolve any dispute through direct
          negotiation for a period of 30 days from written notice of the
          dispute.
        </p>
      </>
    ),
  },
  {
    id: "changes-to-these-terms",
    title: "Changes to These Terms",
    body: (
      <p className="policy-lead">
        We reserve the right to update or modify these Terms at any time.
        Material changes will be notified by updating the "Last Updated" date at
        the top of this page. For ongoing project engagements, material changes
        will be communicated directly. Continued use of our services after any
        changes constitutes acceptance of the updated Terms.
      </p>
    ),
  },
  {
    id: "contact-us",
    title: "Contact Us",
    body: (
      <>
        <p className="policy-lead">
          For any questions regarding these Terms &amp; Conditions, please
          contact our team:
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
  .tc-root{
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    transition: background 0.25s ease, color 0.25s ease;
  }
  .tc-root *{ box-sizing: border-box; }
  .tc-root a{ color: inherit; }

  .hero{
    max-width: 760px;
    margin: 0 auto;
    padding: 40px 24px 40px;
    text-align: center;
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
  .tc-title{
    font-size: 44px;
    line-height: 1.15;
    font-weight: 800;
    margin: 0 0 16px;
    letter-spacing: -0.02em;
  }
  .tc-title .accent{ color: var(--accent); }
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
  .toc-list{ list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; }
  .toc-item{
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    text-align: left;
    text-decoration: none;
    font-size: 13.5px;
    color: var(--text-secondary);
    padding: 9px 10px;
    border-radius: 10px;
    border: 1px solid transparent;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  }
  .toc-num{
    width: 19px; height: 19px;
    flex: none;
    margin-top: 1px;
    border-radius: 5px;
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

  .sidebar-footer{
    margin-top: 22px;
    padding-top: 16px;
    border-top: 1px solid var(--border-soft);
    font-size: 11.5px;
    line-height: 1.6;
    color: var(--text-muted);
  }

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
  .policy-lead.mt{ margin-top: 14px; }
  .policy-lead b{ color: var(--text-primary); }

  .policy-list{ list-style: none; margin: 0 0 4px; padding: 0; display: flex; flex-direction: column; gap: 9px; }
  .policy-list li{ position: relative; padding-left: 18px; font-size: 13.5px; line-height: 1.65; color: var(--text-secondary); }
  .policy-list li::before{ content: "\\203A"; position: absolute; left: 0; color: var(--text-muted); font-size: 13px; }
  .policy-list li b{ color: var(--text-primary); font-weight: 700; }

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
    .tc-title{ font-size: 32px; }
  }
`;

const THEME_VARS = {
  dark: {
    "--bg": "#05080a",
    "--bg-elevated": "#0b1013",
    "--border": "#1c2428",
    "--border-soft": "#161d21",
    "--text-primary": "#f2f5f4",
    "--text-secondary": "#9aa8ab",
    "--text-muted": "#647074",
    "--accent": "#2dd4a7",
    "--accent-soft": "rgba(45,212,167,0.12)",
    "--accent-border": "rgba(45,212,167,0.3)",
    "--card-bg": "#0d1316",
    "--notice-bg": "rgba(45,212,167,0.06)",
    background: "#05080a",
    color: "#f2f5f4",
  },
  light: {
    "--bg": "#f7f8f6",
    "--bg-elevated": "#ffffff",
    "--border": "#e3e6e2",
    "--border-soft": "#ebede9",
    "--text-primary": "#16201e",
    "--text-secondary": "#556360",
    "--text-muted": "#8a9491",
    "--accent": "#159172",
    "--accent-soft": "rgba(21,145,114,0.09)",
    "--accent-border": "rgba(21,145,114,0.28)",
    "--card-bg": "#ffffff",
    "--notice-bg": "rgba(21,145,114,0.06)",
    background: "#f7f8f6",
    color: "#16201e",
  },
};

export default function TermsConditions() {
  // Reads the theme straight from Mantine's context — the same value your
  // Navbar's toggleTheme() button changes via setColorScheme(). No prop
  // wiring needed: this re-renders automatically when the navbar toggle is
  // clicked, since it shares the same MantineProvider.
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
      <PageTitle title="Terms & Conditions" />
      <div
        className="tc-root"
        style={{
          ...THEME_VARS[theme],
          paddingTop: "100px",
        }}
        data-theme={theme}
      >
        <style>{CSS}</style>

        <header className="hero">
          <span className="badge">● LEGAL</span>
          <h1 className="tc-title">
            Terms &amp; <span className="accent">Conditions</span>
          </h1>
          <p className="hero-desc">
            These Terms &amp; Conditions govern your use of the Nexflare
            Dynamics website and your engagement with our services. Please read
            them carefully before proceeding.
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
            <p className="sidebar-footer">
              By using our services you agree to these terms.
            </p>
          </aside>

          <main className="content">
            <div className="notice">
              By accessing <b>nexflaredynamics.com</b> or engaging Nexflare
              Dynamics Pvt. Ltd. for any service, you acknowledge that you have
              read, understood, and agree to be bound by these Terms &amp;
              Conditions.
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
