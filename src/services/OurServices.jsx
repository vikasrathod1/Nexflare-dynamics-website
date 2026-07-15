import React from "react";
import { useComputedColorScheme } from "@mantine/core";
import {
  IconRefresh,
  IconWorld,
  IconUsers,
  IconCode,
  IconArrowRight,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    id: "devops",
    // number: "01",
    category: "DevOps",
    icon: IconRefresh,
    title: "Dev Ops",
    description:
      "Streamline your software lifecycle by integrating development and operations. We leverage CI/CD pipelines, infrastructure as code, and automated monitoring for seamless deployments, scalability, and reliability.",
  },
  {
    id: "software-outsourcing",
    // number: "02",
    category: "Outsourcing",
    icon: IconWorld,
    title: "Software Outsourcing",
    description:
      "End-to-end development solutions tailored to your business needs. High-quality, scalable, and cost-effective solutions using a global talent pool — from custom application development to maintenance and support.",
  },
  {
    id: "consulting",
    // number: "03",
    category: "Consulting",
    icon: IconUsers,
    title: "Project & Resource Consulting",
    description:
      "Expert guidance and skilled professionals tailored to your needs. We specialize in resource planning, project management, and team augmentation to ensure efficient execution and optimal outcomes.",
  },
  {
    id: "custom-software",
    // number: "04",
    category: "Development",
    icon: IconCode,
    title: "Custom Software Development",
    description:
      "Tailored solutions that align perfectly with your unique business goals — web, mobile, or enterprise. Our expert team leverages agile methodologies to deliver high-quality, innovative products that drive success.",
  },
];

const CSS = `
  .svc-root{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    transition: background 0.25s ease, color 0.25s ease;
    padding: 64px 24px;
  }
  .svc-root *{ box-sizing: border-box; }
  .svc-root a{ color: inherit; text-decoration: none; }

  .svc-inner{
    max-width: 1280px;
    margin: 0 auto;
  }

  .svc-top{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: end;
    margin-bottom: 44px;
  }

  .svc-eyebrow{
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    color: var(--accent);
    margin-bottom: 14px;
    text-transform: uppercase;
  }
  // .svc-eyebrow::before{
  //   content: "";
  //   width: 22px;
  //   height: 1.5px;
  //   background: var(--accent);
  //   display: inline-block;
  // }

  .svc-heading{
    font-size: 38px;
    line-height: 1.15;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    margin: 0;
  }

  .svc-right{
    text-align: left;
  }
  .svc-desc{
    font-size: 14px;
    line-height: 1.7;
    color: var(--text-secondary);
    margin: 0 0 18px;
    max-width: 420px;
  }
  .svc-view-all{
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    padding-bottom: 2px;
    border-bottom: 1px solid var(--border);
    transition: border-color 0.2s ease, color 0.2s ease, gap 0.2s ease;
  }
  .svc-view-all:hover{
    color: var(--accent);
    border-color: var(--accent);
    gap: 12px;
  }
  .svc-view-all svg{ width: 15px; height: 15px; flex: none; }

  .svc-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  .svc-card{
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 32px;
    transition: border-color 0.25s ease, transform 0.25s ease, background 0.25s ease;
  }
  .svc-card:hover{
    border-color: var(--accent-border);
    transform: translateY(-3px);
  }

  .svc-card-meta{
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: var(--text-muted);
    margin-bottom: 22px;
    text-transform: uppercase;
  }

  .svc-icon{
    width: 44px;
    height: 44px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-primary);
    background: var(--icon-bg);
    margin-bottom: 22px;
  }
  .svc-icon svg{ width: 22px; height: 22px; }

  .svc-card-title{
    font-size: 17px;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 10px;
  }

  .svc-card-desc{
    font-size: 13.5px;
    line-height: 1.7;
    color: var(--text-secondary);
    margin: 0 0 20px;
  }

  .svc-learn-more{
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    transition: gap 0.2s ease, color 0.2s ease;
  }
  .svc-learn-more:hover{
    color: var(--accent);
    gap: 10px;
  }
  .svc-learn-more svg{ width: 14px; height: 14px; flex: none; }

  @media (max-width: 900px){
    .svc-top{ grid-template-columns: 1fr; gap: 20px; align-items: start; }
    .svc-heading{ font-size: 30px; }
    .svc-grid{ grid-template-columns: 1fr; }
    .svc-root{ padding: 48px 20px; }
  }

  @media (max-width: 480px){
    .svc-heading{ font-size: 26px; }
    .svc-card{ padding: 24px; }
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

export default function OurServices() {
  // Reads the theme straight from Mantine's context — the same value your
  // Navbar's toggleTheme() button changes via setColorScheme(). No prop
  // wiring needed: this re-renders automatically when the navbar toggle
  // is clicked, since it shares the same MantineProvider.
  const theme = useComputedColorScheme("light");
  const vars = THEME_VARS[theme];

  return (
    <section className="svc-root" style={vars} data-theme={theme}>
      <style>{CSS}</style>

      <div className="svc-inner">
        <div className="svc-top">
          <div>
            <div className="svc-eyebrow">Our Services</div>
            <h2 className="svc-heading">
              High-Quality
              <br />
              Software Services
            </h2>
          </div>

          <div className="svc-right">
            <p className="svc-desc">
              Dedicated to delivering excellence through advanced technologies
              and expert craftsmanship, ensuring every solution drives real
              business value.
            </p>
            <Link to="/services" className="svc-view-all">
              View All Services <IconArrowRight />
            </Link>
          </div>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div className="svc-card" key={s.id}>
                <div className="svc-card-meta">
                  {s.number} {s.category}
                </div>
                <div className="svc-icon">
                  <Icon stroke={1.5} />
                </div>
                <h3 className="svc-card-title">{s.title}</h3>
                <p className="svc-card-desc">{s.description}</p>
                {/* <a href="#" className="svc-learn-more">
                  Learn more <IconArrowRight />
                </a> */}
                {/* <Link to="/services#devops" className="svc-learn-more">
                  Learn more <IconArrowRight />
                </Link> */}

                <Link to={`/services#${s.id}`} className="svc-learn-more">
                  Learn more <IconArrowRight />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
