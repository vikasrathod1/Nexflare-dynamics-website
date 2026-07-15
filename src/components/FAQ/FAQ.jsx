import { useState } from "react";

import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useComputedColorScheme,
} from "@mantine/core";

import {
  IconArrowRight,
  IconBrandWhatsapp,
  IconChevronDown,
  IconClock,
  IconMail,
  IconMessageCircle2,
  IconQuestionMark,
  IconSearch,
  IconShieldCheck,
  IconCode,
  IconDeviceMobile,
  IconCloud,
  IconBuildingStore,
} from "@tabler/icons-react";

import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ── Category tabs ──────────────────────────────────────────
const categories = [
  { id: "all",      label: "All",         Icon: IconSearch },
  { id: "services", label: "Services",    Icon: IconBuildingStore },
  { id: "process",  label: "Process",     Icon: IconCode },
  { id: "mobile",   label: "Mobile",      Icon: IconDeviceMobile },
  { id: "cloud",    label: "Cloud & AI",  Icon: IconCloud },
  { id: "legal",    label: "Legal",       Icon: IconShieldCheck },
];

const faqs = [
  {
    cat: "services",
    question: "What industries do you specialize in for IT solutions?",
    answer:
      "We cater to healthcare, finance, e-commerce, education, and logistics. Our versatile team tailors solutions to meet sector-specific challenges and goals across all verticals.",
  },
  {
    cat: "process",
    question: "How do you ensure security of the applications you provide?",
    answer:
      "Security is a top priority. We implement encryption, secure coding practices, and compliance with global standards like GDPR, SOC 2, and ISO 27001.",
  },
  {
    cat: "process",
    question: "Can you handle large-scale enterprise cloud migrations?",
    answer:
      "Yes. We specialize in seamless enterprise-grade cloud migrations with thorough assessments, phased transitions, and minimal downtime to ensure a smooth experience.",
  },
  {
    cat: "process",
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Absolutely. Our services include continuous monitoring, updates, feature enhancements, and 24/7 support to ensure optimal performance after launch.",
  },
  {
    cat: "services",
    question: "What sets your cloud solutions apart from competitors?",
    answer:
      "Our solutions are uniquely tailored to client needs, focusing on scalability, automation, and cost-efficiency using Kubernetes, Terraform, and serverless architectures.",
  },
  {
    cat: "legal",
    question: "Can you handle end-to-end IT product development?",
    answer:
      "Yes. We manage the entire lifecycle — from ideation and design to development, deployment, and maintenance — delivering turnkey solutions for your business.",
  },
  {
    cat: "mobile",
    question: "Do you build for both iOS and Android?",
    answer:
      "Yes. We build cross-platform apps with React Native (one codebase, both stores) or native Swift/Kotlin when peak performance is critical. We handle App Store and Play Store submissions too.",
  },
  {
    cat: "cloud",
    question: "Which technologies and cloud platforms do you use?",
    answer:
      "Frontend: React, Next.js, Vue. Backend: Node.js, Java Spring Boot, Python. Databases: PostgreSQL, MongoDB, MySQL. Cloud: AWS, GCP, DigitalOcean, Docker, Kubernetes. AI: OpenAI, LangChain, custom model pipelines.",
  },
  {
    cat: "process",
    question: "How do we get started?",
    answer:
      "Book a free 30-minute discovery call through our Contact page. We'll listen to your idea, ask the right questions, and send a no-obligation proposal within 48 hours. No sales pressure — just honest advice.",
  },
];

// ── Stagger helpers ────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// ── Single FAQ row ─────────────────────────────────────────
// NOTE: `open` and `onToggle` now come from the PARENT (accordion pattern).
// This is what makes only ONE item open at a time, and stops the page
// from "jumping" when a second item is opened while the first is still open.
const FAQItem = ({ faq, index, isDark, open, onToggle }) => {
  const cardBg     = isDark ? "rgba(255,255,255,0.04)" : "#ffffff";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(37,99,235,0.10)";
  const activeBorder = "#2563EB";

  return (
    <motion.div variants={itemVariants}>
      <Paper
        radius="xl"
        mb={14}
        style={{
          background: open
            ? isDark
              ? "rgba(37,99,235,0.10)"
              : "rgba(37,99,235,0.04)"
            : cardBg,
          border: `1.5px solid ${open ? activeBorder : cardBorder}`,
          boxShadow: open
            ? "0 12px 36px rgba(37,99,235,0.14)"
            : isDark
            ? "0 4px 20px rgba(0,0,0,0.20)"
            : "0 4px 20px rgba(37,99,235,0.05)",
          cursor: "pointer",
          transition: "all 0.28s ease",
          overflow: "hidden",
        }}
        onClick={onToggle}
      >
        {/* Question row */}
        <Group
          p={{ base: 18, md: 24 }}
          justify="space-between"
          wrap="nowrap"
          gap={16}
        >
          <Group gap={16} wrap="nowrap" style={{ flex: 1, minWidth: 0 }}>
            {/* Number badge */}
            <Box
              style={{
                minWidth: 36,
                height: 36,
                borderRadius: "50%",
                background: open
                  ? "linear-gradient(135deg,#2563EB,#38BDF8)"
                  : isDark
                  ? "rgba(255,255,255,0.07)"
                  : "rgba(37,99,235,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "background 0.28s ease",
              }}
            >
              <Text
                size="xs"
                fw={800}
                style={{
                  color: open ? "#fff" : isDark ? "rgba(255,255,255,0.5)" : "#2563EB",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </Text>
            </Box>

            <Text
              fw={700}
              size="md"
              style={{
                color: isDark ? "#fff" : "#111827",
                lineHeight: 1.45,
              }}
            >
              {faq.question}
            </Text>
          </Group>

          {/* Chevron */}
          <Box
            style={{
              minWidth: 34,
              height: 34,
              borderRadius: "50%",
              background: open
                ? "linear-gradient(135deg,#2563EB,#38BDF8)"
                : isDark
                ? "rgba(255,255,255,0.07)"
                : "rgba(37,99,235,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "background 0.28s ease",
            }}
          >
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: "flex" }}
            >
              <IconChevronDown
                size={17}
                color={open ? "#fff" : isDark ? "rgba(255,255,255,0.55)" : "#2563EB"}
              />
            </motion.div>
          </Box>
        </Group>

        {/* Answer panel — pure CSS grid-rows animation (blink-free, no JS height measurement) */}
        <Box
          style={{
            display: "grid",
            gridTemplateRows: open ? "1fr" : "0fr",
            transition: "grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Box style={{ overflow: "hidden", minHeight: 0 }}>
            <Box
              px={{ base: 18, md: 24 }}
              pb={24}
              pt={0}
              style={{
                borderTop: `1px solid ${
                  isDark ? "rgba(255,255,255,0.06)" : "rgba(37,99,235,0.08)"
                }`,
                paddingTop: 18,
                marginLeft: 0,
                opacity: open ? 1 : 0,
                transition: "opacity 0.28s ease",
                transitionDelay: open ? "0.08s" : "0s",
              }}
            >
              {/* indent to align with question text */}
              <Box ml={{ base: 0, md: 52 }}>
                <Text
                  size="sm"
                  c="dimmed"
                  style={{ lineHeight: 1.85 }}
                >
                  {faq.answer}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

// ── Main component ─────────────────────────────────────────
const FAQ = () => {

  const navigate = useNavigate();

  const isDark = useComputedColorScheme("light") === "dark";
  const [activeTab, setActiveTab] = useState("all");

  // Accordion state lives HERE now — only one question (by its unique
  // text) can be "open" across the whole list at any time.
  const [openQuestion, setOpenQuestion] = useState(null);

  const filtered =
    activeTab === "all" ? faqs : faqs.filter((f) => f.cat === activeTab);

  const handleToggle = (question) => {
    setOpenQuestion((prev) => (prev === question ? null : question));
  };

  const bg = isDark
    ? "linear-gradient(180deg,#040816 0%,#081120 60%,#0F172A 100%)"
    : "linear-gradient(180deg,#ffffff 0%,#F3F7FF 60%,#EBF1FF 100%)";

  const cardBg     = isDark ? "rgba(255,255,255,0.04)" : "#ffffff";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(37,99,235,0.10)";
  const textCol    = isDark ? "#ffffff" : "#111827";
  const dimCol     = isDark ? "rgba(255,255,255,0.50)" : "#64748b";

  return (
    <Box
      py={{ base: 90, md: 60 }}
      style={{ position: "relative", overflow: "hidden", background: bg }}
    >
      {/* ambient glows */}
      {[
        { top: -180, left: -150, color: "rgba(37,99,235,0.15)" },
        { bottom: -180, right: -180, color: "rgba(56,189,248,0.12)" },
        { top: "45%", left: "50%", color: "rgba(99,102,241,0.07)" },
      ].map((g, i) => (
        <Box
          key={i}
          style={{
            position: "absolute", pointerEvents: "none",
            width: 500, height: 500, borderRadius: "50%",
            filter: "blur(160px)", background: g.color, ...g,
          }}
        />
      ))}

      <Container size="xl" style={{ position: "relative", zIndex: 5 }}>

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <Stack align="center" mb={16}>
            <Badge
              radius="xl"
              size="lg"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
            >
              FAQ
            </Badge>

            <Title
              ta="center"
              style={{
                fontWeight: 900,
                fontSize: "clamp(2rem,5vw,3.6rem)",
                color: textCol,
                lineHeight: 1.2,
              }}
            >
              Questions we get{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#2563EB,#38BDF8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                all the time
              </span>
            </Title>

            <Text
              ta="center"
              maw={620}
              size="lg"
              c="dimmed"
              mt={8}
              style={{ lineHeight: 1.8 }}
            >
              Straight answers about our services, process, pricing, and
              everything in between — no filler.
            </Text>
          </Stack>
        </motion.div>

        {/* ── Category filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <Group justify="center" gap={10} mb={56} wrap="wrap">
            {categories.map(({ id, label, Icon }) => {
              const active = activeTab === id;
              return (
                <Button
                  key={id}
                  size="sm"
                  radius="xl"
                  variant={active ? "gradient" : "light"}
                  gradient={active ? { from: "blue", to: "cyan" } : undefined}
                  color={active ? undefined : "blue"}
                  leftSection={<Icon size={15} />}
                  onClick={() => {
                    setActiveTab(id);
                    setOpenQuestion(null); // close any open answer when switching category
                  }}
                  style={{
                    transition: "all 0.22s ease",
                    transform: active ? "translateY(-2px)" : undefined,
                    boxShadow: active ? "0 6px 20px rgba(37,99,235,0.28)" : undefined,
                    fontWeight: active ? 700 : 500,
                  }}
                >
                  {label}
                </Button>
              );
            })}
          </Group>
        </motion.div>

        {/* ── Two-column layout ── */}
        <Grid gutter={{ base: 40, md: 56 }} align="flex-start">

          {/* ── LEFT: FAQ list ── */}
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {filtered.length === 0 ? (
                  <Text ta="center" c="dimmed" py={60}>
                    No questions in this category yet.
                  </Text>
                ) : (
                  filtered.map((faq, i) => (
                    <FAQItem
                      key={faq.question}
                      faq={faq}
                      index={i}
                      isDark={isDark}
                      open={openQuestion === faq.question}
                      onToggle={() => handleToggle(faq.question)}
                    />
                  ))
                )}
              </motion.div>
            </AnimatePresence>
          </Grid.Col>

          {/* ── RIGHT: contact card (sticky) ── */}
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <Box style={{ position: "sticky", top: 110 }}>

                {/* Main card */}
                <Paper
                  radius="2rem"
                  p={32}
                  mb={20}
                  style={{
                    background: isDark
                      ? "linear-gradient(145deg,rgba(37,99,235,0.18),rgba(14,165,233,0.12))"
                      : "linear-gradient(145deg,#EFF6FF,#E0F2FE)",
                    border: `1.5px solid ${
                      isDark ? "rgba(37,99,235,0.35)" : "rgba(37,99,235,0.18)"
                    }`,
                  }}
                >
                  <ThemeIcon
                    size={64}
                    radius="xl"
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan" }}
                    mb={20}
                  >
                    <IconQuestionMark size={32} />
                  </ThemeIcon>

                  <Title
                    order={3}
                    style={{ color: textCol, fontWeight: 800 }}
                  >
                    Didn't find your answer?
                  </Title>

                  <Text mt={10} c="dimmed" size="sm" style={{ lineHeight: 1.8 }}>
                    Our engineers respond to every query personally — not with
                    an auto-responder. Ask us anything.
                  </Text>

                  <Button
                    mt={24}
                    fullWidth
                    size="md"
                    radius="xl"
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan" }}
                    rightSection={<IconArrowRight size={16} />}
                    fw={700}
                    onClick={() => navigate("/contact")}
                  >
                    Ask Our Team
                  </Button>
                </Paper>

                {/* Contact methods */}
                <Stack gap={12}>
                  {[
                    {
                      Icon: IconMail,
                      title: "Email us",
                      sub: "enquiry@nexflaredynamics.com",
                      color: "blue",
                    },
                    {
                      Icon: IconBrandWhatsapp,
                      title: "WhatsApp",
                      sub: "+91 8237525097",
                      color: "green",
                    },
                    {
                      Icon: IconClock,
                      title: "Response time",
                      sub: "Usually within 2–4 hours",
                      color: "orange",
                    },
                  ].map(({ Icon, title, sub, color }) => (
                    <Paper
                      key={title}
                      radius="xl"
                      p={18}
                      style={{
                        background: cardBg,
                        border: `1px solid ${cardBorder}`,
                        transition: "transform 0.22s ease, box-shadow 0.22s ease",
                        cursor: "default",
                      }}
                      className="faq-contact-card"
                    >
                      <Group gap={14} wrap="nowrap">
                        <ThemeIcon
                          color={color}
                          variant="light"
                          radius="xl"
                          size={40}
                          style={{ flexShrink: 0 }}
                        >
                          <Icon size={19} />
                        </ThemeIcon>
                        <Stack gap={2}>
                          <Text
                            size="sm"
                            fw={700}
                            style={{ color: textCol }}
                          >
                            {title}
                          </Text>
                          <Text size="xs" c="dimmed">
                            {sub}
                          </Text>
                        </Stack>
                      </Group>
                    </Paper>
                  ))}
                </Stack>

              </Box>
            </motion.div>
          </Grid.Col>
        </Grid>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Paper
            mt={90}
            radius="2rem"
            p={{ base: 32, md: 56 }}
            style={{
              position: "relative",
              overflow: "hidden",
              background: isDark
                ? "linear-gradient(130deg,#0F1E4A 0%,#1D3FAA 55%,#0A2260 100%)"
                : "linear-gradient(130deg,#1D4ED8 0%,#2563EB 55%,#0EA5E9 100%)",
            }}
          >
            {/* decorative circles */}
            {[
              { width: 340, height: 340, right: -130, top: -130 },
              { width: 200, height: 200, left: -80, bottom: -80 },
            ].map((s, i) => (
              <Box
                key={i}
                style={{
                  position: "absolute", pointerEvents: "none",
                  borderRadius: "50%", background: "rgba(255,255,255,0.07)",
                  ...s,
                }}
              />
            ))}

            <Grid align="center" style={{ position: "relative", zIndex: 2 }}>
              <Grid.Col span={{ base: 12, md: 7 }}>
                <Badge radius="xl" color="white" c="blue" mb={16}>
                  Free Consultation
                </Badge>

                <Title
                  c="white"
                  style={{
                    fontWeight: 900,
                    fontSize: "clamp(1.7rem,3.5vw,3rem)",
                    lineHeight: 1.25,
                  }}
                >
                  Ready to build something
                  <br />people actually use?
                </Title>

                <Text
                  mt={14}
                  style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.8 }}
                  maw={500}
                >
                  Book a free 30-min call. We'll scope your idea, suggest the
                  right stack, and send a clear proposal — no commitment needed.
                </Text>

                {/* trust signals */}
                <Group mt={28} gap={24} wrap="wrap">
                  {[
                    { Icon: IconShieldCheck, text: "NDA signed before we talk" },
                    { Icon: IconClock,        text: "Proposal within 48 hours" },
                    { Icon: IconMessageCircle2, text: "No sales pressure" },
                  ].map(({ Icon, text }) => (
                    <Group key={text} gap={8} wrap="nowrap">
                      <Icon size={16} color="rgba(255,255,255,0.75)" />
                      <Text size="sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                        {text}
                      </Text>
                    </Group>
                  ))}
                </Group>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 5 }}>
                <Group
                  justify={{ base: "flex-start", md: "flex-end" }}
                  mt={{ base: 30, md: 0 }}
                >
                  <Button
                    size="xl"
                    radius="xl"
                    color="white"
                    c="blue"
                    fw={800}
                    rightSection={<IconArrowRight size={20} />}
                    styles={{ root: { height: 58, paddingInline: 36 } }}
                     onClick={() => navigate("/contact")}
                  >
                    Book Free Call
                  </Button>
                </Group>
              </Grid.Col>
            </Grid>
          </Paper>
        </motion.div>

      </Container>

      {/* Scoped styles */}
      <style>{`
        .faq-contact-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(37,99,235,0.12) !important;
        }
        .mantine-Button-root {
          transition: transform 0.24s ease, box-shadow 0.24s ease;
        }
        .mantine-Button-root:hover {
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .mantine-Button-root { width: 100%; }
        }
      `}</style>
    </Box>
  );
};

export default FAQ;