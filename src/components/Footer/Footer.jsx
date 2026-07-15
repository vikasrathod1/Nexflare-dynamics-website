import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Container,
  Divider,
  Group,
  Image,
  Stack,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import {
  IconArrowUp,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSend,
  IconChevronRight,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoLight from "../../assets/images/logo.png";
import logoDark from "../../assets/images/logo1.png";
const quickLinks = [
  { label: "Blog", link: "/blogs" },
  { label: "Privacy Policy", link: "/privacy-policy" },
  { label: "About Us", link: "/about" },
  { label: "Contact Us", link: "/contact" },
  { label: "Terms & Conditions", link: "/terms-conditions" },
  { label: "Refund Policy", link: "/refund-policy" },
];
const services = [
  { label: "Custom Software", link: "/services/custom-software-development/custom-software" },
  { label: "API Development", link: "/services/custom-software-development/api-development" },
  { label: "Saas Development", link: "/services/custom-software-development/saas-development" },
  { label: "Software Testing & QA", link: "/services/custom-software-development/software-testing" },
  { label: "Maintenance & Support", link: "/services/custom-software-development/maintenance-support" },
  { label: "CRM Services", link: "/services/custom-software-development/crm-service" },
];
const digitalMarketingServices = [
  { label: "Search Engine Optimization", link: "/services/digital-marketing/seo" },
  { label: "Pay Per Click Advertising", link: "/services/digital-marketing/ppc-advertising" },
  { label: "Social Media Marketing", link: "/services/digital-marketing/social-media-marketing" },
  { label: "Email Marketing", link: "/services/digital-marketing/email-marketing" },
  { label: "Analytics & Reporting", link: "/services/digital-marketing/analytics-reporting" },
];
const webDevelopmentServices = [
  { label: "Website Design", link: "/services/website-development-design/web-design" },
  { label: "Website Development", link: "/services/website-development-design/web-development" },
  { label: "App Development", link: "/services/website-development-design/app-development" },
  { label: "eCommerce Development", link: "/services/website-development-design/ecommerce" },
  { label: "Landing Page Design", link: "/services/website-development-design/landing-page" },
];
const socialLinks = [
  { Icon: IconBrandFacebook, href: "https://www.facebook.com/NexflareDynamics", label: "Facebook", color: "#1877F2" },
  { Icon: IconBrandInstagram, href: "https://www.instagram.com/nexflare_dynamics/", label: "Instagram", color: "#E1306C" },
  { Icon: IconBrandLinkedin, href: "https://www.linkedin.com/company/nexflare-dynamics/", label: "LinkedIn", color: "#0A66C2" },
  { Icon: IconBrandX, href: "https://twitter.com/NexflareDynamics", label: "X", color: "#1DA1F2" },
  // { Icon:IconBrandGithub,    href:"https://github.com/NexflareDynamics", label:"GitHub",    color:"#7C3AED" },
];
const contacts = [
  { Icon: IconMapPin, text: "Global Business Hub, Eon Free Zone, Kharadi, Pune, Maharashtra 411014", color: "#3B82F6" },
  { Icon: IconPhone, text: "+91-8237525097", color: "#10B981" },
  { Icon: IconMail, text: "enquiry@nexflaredynamics.com", color: "#8B5CF6" },
];
const Footer = () => {
  const isDark = useComputedColorScheme("light") === "dark";
  const logoSrc = isDark ? logoDark : logoLight;
  const bg = isDark ? "#080E1C" : "#EEF4FF";
  const cardBg = isDark ? "rgba(255,255,255,0.04)" : "#ffffff";
  const cardBorder = isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(37,99,235,0.12)";
  const dimCol = isDark ? "rgba(255,255,255,0.50)" : "#64748b";
  const renderLinkColumn = (title, items, matchMissionFont = false) => (
    <Stack gap={0} className="f-col">
      <Text size="xs" fw={700} tt="uppercase"
        style={{ color: "#3B82F6", letterSpacing: 2 }} mb={14}>
        {title}
      </Text>
      {items.map(({ label, link }) => (
        <Anchor key={label} component={Link} to={link}
          underline="never"
          size={matchMissionFont ? "md" : "sm"}
          fw={matchMissionFont ? 500 : 400}
          mb={10} className="f-link"
          style={{ color: dimCol, display: "flex", alignItems: "flex-start", gap: 4 }}>
          <IconChevronRight size={12} style={{ opacity: 0.45, flexShrink: 0, marginTop: 4 }} />
          {label}
        </Anchor>
      ))}
    </Stack>
  );
  return (
    <Box style={{ background: bg, position: "relative", overflow: "hidden" }}>
      {/* ambient glows */}
      <Box style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        left: -220, top: -220, background: "rgba(37,99,235,0.12)",
        filter: "blur(160px)", pointerEvents: "none"
      }} />
      <Box style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        right: -180, bottom: -180, background: "rgba(56,189,248,0.09)",
        filter: "blur(140px)", pointerEvents: "none"
      }} />
      {/* animated top line */}
      <Box style={{
        height: 3,
        background: "linear-gradient(90deg,#2563EB,#8B5CF6,#38BDF8,#2563EB)",
        backgroundSize: "200% 100%",
        animation: "shimmer 4s linear infinite",
      }} />
      <Box size="xl" py={40} className="f-container">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <Box className="f-grid">
            {/* ── Brand ── */}
            <Stack gap={0} className="f-col f-col-brand">
              <Box className="f-logo-box" style={{ height: 90, display: "flex", alignItems: "center", overflow: "hidden", marginBottom: -10, marginLeft: -14 }}>
                <Image src={logoSrc} w={220} fit="contain" style={{ display: "block" }} />
              </Box>
              <Text size="md" fw={500} lh={1.75} style={{ color: dimCol }}>
                Our mission is to understand the unique challenges faced by our clients and deliver tailored solutions that drive efficiency, productivity, and growth.
              </Text>
              <Group gap={8} mt={10}>
                {socialLinks.map(({ Icon, href, label, color }) => (
                  <ActionIcon
                    key={label}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    size={38}
                    radius="xl"
                    className="f-social"
                    style={{
                      background: `${color}14`,
                      border: `1px solid ${color}28`,
                      color: color,
                    }}
                  >
                    <Icon size={17} />
                  </ActionIcon>
                ))}
              </Group>
            </Stack>
            {/* ── Company ── */}
            {renderLinkColumn("Company", quickLinks, true)}
            {/* ── Services ── */}
            {renderLinkColumn("Services", services, true)}
            {/* ── Digital Marketing ── */}
            {renderLinkColumn("Digital Marketing ", digitalMarketingServices, true)}
            {/* ── Web Development ── */}
            {renderLinkColumn("Web Development", webDevelopmentServices, true)}
            {/* ── Contact card ── */}
            <Box className="f-col f-col-contact" style={{
              background: cardBg, border: cardBorder,
              borderRadius: 20, padding: "26px 26px 22px",
              position: "relative", overflow: "hidden",
              boxShadow: isDark
                ? "0 10px 36px rgba(0,0,0,0.24)"
                : "0 10px 36px rgba(37,99,235,0.08)",
            }}>
              {/* top accent */}
              <Box style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: "linear-gradient(90deg,#2563EB,#8B5CF6,#38BDF8)",
              }} />
              <Text size="sm" fw={700} tt="uppercase"
                style={{ color: dimCol, letterSpacing: 2 }} mb={18}>
                Get in Touch
              </Text>
              <Stack gap={18}>
                {contacts.map(({ Icon, text, color }) => (
                  <Group
                    key={text}
                    gap={14}
                    wrap="nowrap"
                    align="flex-start"
                    style={{ minWidth: 0 }}
                  >
                    <Box style={{
                      width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                      background: `${color}14`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={18} color={color} />
                    </Box>
                    <Text
                      size="md"
                      fw={500}
                      style={{
                        color: dimCol,
                        lineHeight: 1.6,
                        paddingTop: 7,
                        minWidth: 0,
                        wordBreak: "break-word",
                        overflowWrap: "anywhere",
                      }}
                    >
                      {text}
                    </Text>
                  </Group>
                ))}
              </Stack>
              {/* <Button mt={18} radius="xl" size="sm" fullWidth
                variant="gradient" gradient={{ from: "blue", to: "cyan" }}
                rightSection={<IconSend size={14} />}
                fw={600} style={{ height: 40 }} className="f-btn">
                Request a Free Quote
              </Button> */}
            </Box>
          </Box>
        </motion.div>
        {/* bottom bar */}
        <Divider mt={32} mb={18} color={isDark ? "rgba(255,255,255,0.07)" : "#E2E8F0"} />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Box pos="relative" className="f-bottom">
            <Text
              ta="center"
              size="md"
              fw={600}
              style={{ color: dimCol }}
            >
              © {new Date().getFullYear()} Nexflare Dynamics. All rights reserved.
            </Text>
            <Group
              gap={10}
              align="center"
              className="f-back-to-top"
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              
              <ActionIcon
                radius="xl"
                size={40}
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
                aria-label="Back to top"
                className="f-social"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <IconArrowUp size={17} />
              </ActionIcon>
            </Group>
          </Box>
        </motion.div>
      </Box>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
        /* ── Container padding ── */
        .f-container {
          padding-left: 20px;
          padding-right: 20px;
          box-sizing: border-box;
          max-width: 100%;
        }
        /* ── Footer grid layout ── */
        .f-grid {
          display: grid;
          grid-template-columns: 1.35fr 0.85fr 0.95fr 1.1fr 1fr 1.7fr;
          gap: 20px;
          align-items: start;
        }
        .f-col-brand { min-width: 0; }
        .f-col-contact { min-width: 0; }
        /* Push brand column to the very left edge on desktop */
        @media (min-width: 1201px) {
          .f-container {
            padding: 40px !important;
          }
        }
        /* Large tablets / small desktops: 3 columns */
        @media (max-width: 1200px) {
          .f-grid {
            grid-template-columns: 1fr 1fr 1fr;
            row-gap: 32px;
          }
          .f-col-brand { grid-column: 1 / -1; }
          .f-col-contact { grid-column: 1 / -1; max-width: 420px; }
        }
        /* Tablets: 2 columns */
        @media (max-width: 768px) {
          .f-container {
            padding-left: 24px;
            padding-right: 24px;
          }
          .f-grid {
            grid-template-columns: 1fr 1fr;
            row-gap: 30px;
          }
          .f-col-brand { grid-column: 1 / -1; }
          .f-col-contact { grid-column: 1 / -1; max-width: 100%; }
        }
        /* Mobile: single column, everything stacked */
        @media (max-width: 480px) {
          .f-container {
            padding-left: 16px;
            padding-right: 16px;
          }
          .f-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .f-col-brand,
          .f-col-contact {
            grid-column: 1 / -1;
          }
          .f-logo-box {
            margin-left: 0 !important;
          }
          .f-col-contact {
            padding: 20px 18px 18px !important;
          }
          .f-bottom {
            display: flex;
            flex-direction: column;
            gap: 14px;
            align-items: center;
            text-align: center;
          }
          .f-back-to-top {
            position: static !important;
            transform: none !important;
          }
        }
        .f-link {
          transition: color .2s ease, transform .2s ease;
        }
        .f-link:hover {
          color: #2563EB !important;
          transform: translateX(4px);
        }
        .f-social {
          transition: transform .22s ease, box-shadow .22s ease !important;
        }
        .f-social:hover {
          transform: translateY(-4px) scale(1.12) !important;
          box-shadow: 0 8px 20px rgba(37,99,235,0.26) !important;
        }
        .f-btn {
          transition: transform .22s ease, box-shadow .22s ease !important;
        }
        .f-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(37,99,235,0.28) !important;
        }
        @media (max-width: 768px) {
          .f-btn { width: 100%; }
        }
      `}</style>
    </Box>
  );
};
export default Footer;