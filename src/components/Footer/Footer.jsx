import {
  ActionIcon,
  Anchor,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
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
  IconSparkles,
} from "@tabler/icons-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logoLight from "../../assets/images/logo.png";
import logoDarkLogo from "../../assets/images/logo1.png";

const quickLinks = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Services", link: "/services" },
  // { label: "Portfolio", link: "/portfolio" },
  { label: "Careers", link: "/careers" },
  { label: "Contact", link: "/contact" },
];

const services = [
  { label: "Web Development", link: "/services" },
  { label: "Mobile Apps", link: "/services" },
  { label: "Custom Software", link: "/services" },
  { label: "UI/UX Design", link: "/services" },
  { label: "Cloud Solutions", link: "/services" },
  { label: "AI Solutions", link: "/services" },
];

const socialLinks = [
  { Icon: IconBrandFacebook, href: "#", label: "Facebook" },
  { Icon: IconBrandInstagram, href: "#", label: "Instagram" },
  { Icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
  { Icon: IconBrandX, href: "#", label: "X (Twitter)" },
  { Icon: IconBrandGithub, href: "#", label: "GitHub" },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Expert Engineers" },
  { value: "98%", label: "Client Satisfaction" },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: "easeOut" },
};

const Footer = () => {
  const isDark = useComputedColorScheme("light") === "dark";

  const bg = isDark ? "#080E1C" : "#F0F4FF";
  const cardBg = isDark ? "rgba(255,255,255,0.035)" : "#ffffff";
  const cardBorder = isDark
    ? "1px solid rgba(255,255,255,0.07)"
    : "1px solid rgba(37,99,235,0.10)";
  const textCol = isDark ? "rgba(255,255,255,0.88)" : "#1e293b";
  const dimCol = isDark ? "rgba(255,255,255,0.46)" : "#64748b";

  const isDarkLogo = useComputedColorScheme("light") === "dark";

  const logoSrc = isDark ? logoDarkLogo : logoLight;

  return (
    <Box
      style={{
        background: bg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── ambient glows ── */}
      {[
        { left: -200, top: -200, color: "rgba(37,99,235,0.14)" },
        { right: -200, bottom: -200, color: "rgba(56,189,248,0.10)" },
        { left: "40%", top: "30%", color: "rgba(99,102,241,0.07)" },
      ].map((g, i) => (
        <Box
          key={i}
          style={{
            position: "absolute",
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: g.color,
            filter: "blur(160px)",
            pointerEvents: "none",
            ...g,
          }}
        />
      ))}

      {/* ══════════════════════════════════════════
          NEWSLETTER BANNER  (moved to top)
      ══════════════════════════════════════════ */}
      {/* <Box
        style={{
          background: isDark
            ? "linear-gradient(120deg,#0F1E4A 0%,#1D3FAA 50%,#0F2260 100%)"
            : "linear-gradient(120deg,#1D4ED8 0%,#2563EB 55%,#0EA5E9 100%)",
          borderBottom: isDark
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid rgba(37,99,235,0.18)",
        }}
      >
        <Container size="xl" py={52}>
          <motion.div {...fadeUp}>
            <Grid align="center" gutter={40}>
              <Grid.Col span={{ base: 12, md: 7 }}>
                <Group gap={10} mb={14} wrap="nowrap">
                  <ThemeIcon
                    radius="xl"
                    size={30}
                    color="white"
                    variant="subtle"
                    style={{ color: "#fff" }}
                  >
                    <IconSparkles size={17} />
                  </ThemeIcon>
                  <Text
                    size="xs"
                    fw={700}
                    tt="uppercase"
                    style={{ color: "rgba(255,255,255,0.8)", letterSpacing: 2 }}
                  >
                    Newsletter
                  </Text>
                </Group>

                <Title
                  order={2}
                  c="white"
                  style={{ fontWeight: 800, lineHeight: 1.25 }}
                >
                  Stay ahead of the curve.
                </Title>

                <Text
                  mt={12}
                  style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.75 }}
                  maw={520}
                >
                  Dev insights, AI trends, cloud updates, and product news —
                  delivered straight to your inbox. No noise, just signal.
                </Text>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 5 }}>
                <Stack gap={12}>
                  <TextInput
                    radius="xl"
                    size="lg"
                    placeholder="your@email.com"
                    styles={{
                      input: {
                        height: 54,
                        background: "rgba(255,255,255,0.11)",
                        border: "1.5px solid rgba(255,255,255,0.20)",
                        color: "#fff",
                        fontSize: 15,
                      },
                    }}
                  />
                  <Button
                    radius="xl"
                    size="lg"
                    color="white"
                    c="blue"
                    fw={700}
                    leftSection={<IconSend size={17} />}
                  >
                    Subscribe — it's free
                  </Button>
                  <Text
                    size="xs"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                    ta="center"
                  >
                    No spam. Unsubscribe anytime.
                  </Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </motion.div>
        </Container>
      </Box> */}

      {/* ══════════════════════════════════════════
          MAIN FOOTER BODY
      ══════════════════════════════════════════ */}
      <Container size="xl" py={80}>
        {/* ── Stats row ── */}
        {/* <motion.div {...fadeUp}>
          <Grid gutter={20} mb={70}>
            {stats.map(({ value, label }) => (
              <Grid.Col key={label} span={{ base: 12, xs: 4 }}>
                <Paper
                  radius="xl"
                  p="xl"
                  style={{
                    background: cardBg,
                    border: cardBorder,
                    textAlign: "center",
                  }}
                >
                  <Title
                    order={2}
                    style={{
                      background: "linear-gradient(135deg,#2563EB,#38BDF8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: 38,
                      fontWeight: 900,
                    }}
                  >
                    {value}
                  </Title>
                  <Text size="sm" c="dimmed" mt={4} fw={500}>
                    {label}
                  </Text>
                </Paper>
              </Grid.Col>
            ))}
          </Grid>
        </motion.div> */}

        {/* ── Main links grid ── */}
        <motion.div {...fadeUp}>
          <Grid gutter={{ base: 40, md: 60 }}>
            {/* Brand column */}
            <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
              <Stack gap={20}>
                <Image src={logoSrc} w={200} />

                <Text
                  size="sm"
                  lh={1.85}
                  style={{ color: dimCol, maxWidth: 320 }}
                >
                  We craft enterprise software, AI-powered platforms, and
                  end-to-end digital products that help modern businesses scale
                  with confidence.
                </Text>

                {/* Social row */}
                <Group gap={8} mt={4}>
                  {socialLinks.map(({ Icon, href, label }) => (
                    <ActionIcon
                      key={label}
                      component="a"
                      href={href}
                      aria-label={label}
                      size={42}
                      radius="xl"
                      variant="light"
                      color="blue"
                    >
                      <Icon size={19} />
                    </ActionIcon>
                  ))}
                </Group>
              </Stack>
            </Grid.Col>

            {/* Quick Links */}
            <Grid.Col span={{ base: 6, sm: 3, lg: 2 }}>
              <Stack gap={0}>
                <Text
                  size="xs"
                  fw={700}
                  tt="uppercase"
                  style={{ color: dimCol, letterSpacing: 1.6 }}
                  mb={18}
                >
                  Company
                </Text>
                {quickLinks.map(({ label, link }) => (
                  <Anchor
                    key={label}
                    component={Link}
                    to={link}
                    underline="never"
                    style={{
                      color: dimCol,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                    mb={13}
                    size="sm"
                    className="footer-link"
                  >
                    <IconChevronRight
                      size={13}
                      style={{ opacity: 0.5, flexShrink: 0 }}
                    />
                    {label}
                  </Anchor>
                ))}
              </Stack>
            </Grid.Col>

            {/* Services */}
            <Grid.Col span={{ base: 6, sm: 3, lg: 2 }}>
              <Stack gap={0}>
                <Text
                  size="xs"
                  fw={700}
                  tt="uppercase"
                  style={{ color: dimCol, letterSpacing: 1.6 }}
                  mb={18}
                >
                  Services
                </Text>
                {services.map(({ label, link }) => (
                  <Anchor
                    key={label}
                    component={Link}
                    to={link}
                    underline="never"
                    style={{
                      color: dimCol,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                    mb={13}
                    size="sm"
                    className="footer-link"
                  >
                    <IconChevronRight
                      size={13}
                      style={{ opacity: 0.5, flexShrink: 0 }}
                    />
                    {label}
                  </Anchor>
                ))}
              </Stack>
            </Grid.Col>

            {/* Contact card */}
            <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
              <Paper
                radius="xl"
                p="xl"
                style={{ background: cardBg, border: cardBorder }}
              >
                <Text
                  size="xs"
                  fw={700}
                  tt="uppercase"
                  style={{ color: dimCol, letterSpacing: 1.6 }}
                  mb={20}
                >
                  Get in Touch
                </Text>

                <Stack gap={16}>
                  {[
                    { Icon: IconMapPin, text: "Pune, Maharashtra, India" },
                    { Icon: IconPhone, text: "+91 8237525097" },
                    { Icon: IconMail, text: "support@nexflaredynamics.com" },
                  ].map(({ Icon, text }) => (
                    <Group key={text} gap={12} wrap="nowrap" align="flex-start">
                      <ThemeIcon
                        color="blue"
                        variant="light"
                        radius="xl"
                        size={36}
                        style={{ flexShrink: 0 }}
                      >
                        <Icon size={17} />
                      </ThemeIcon>
                      <Text
                        size="sm"
                        style={{ color: dimCol, lineHeight: 1.6 }}
                      >
                        {text}
                      </Text>
                    </Group>
                  ))}
                </Stack>

                <Button
                  mt={24}
                  radius="xl"
                  size="md"
                  fullWidth
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan" }}
                  rightSection={<IconSend size={16} />}
                  fw={600}
                >
                  Request a Free Quote
                </Button>
              </Paper>
            </Grid.Col>
          </Grid>
        </motion.div>

        {/* ── CTA banner ── */}
        {/* <motion.div
          {...{ ...fadeUp, transition: { ...fadeUp.transition, delay: 0.1 } }}
        >
          <Paper
            mt={70}
            radius="2rem"
            p={{ base: 28, md: 40 }}
            style={{
              background: isDark ? "rgba(255,255,255,0.04)" : "#ffffff",
              border: cardBorder,
              boxShadow: isDark
                ? "0 20px 50px rgba(0,0,0,0.30)"
                : "0 12px 40px rgba(37,99,235,0.09)",
            }}
          >
            <Grid align="center" gutter={20}>
              <Grid.Col span={{ base: 12, md: 8 }}>
                <Badge variant="light" color="blue" radius="xl" mb={12}>
                  Let's build together
                </Badge>
                <Title
                  order={2}
                  style={{ color: textCol, fontWeight: 800, lineHeight: 1.3 }}
                >
                  Have an idea? Let's make it real.
                </Title>
                <Text mt={8} c="dimmed" size="sm" maw={480}>
                  From MVP to enterprise scale — Nexflare Dynamics turns your
                  vision into a product your users will love.
                </Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Group
                  justify={{ base: "flex-start", md: "flex-end" }}
                  mt={{ base: 16, md: 0 }}
                >
                  <Button
                    radius="xl"
                    size="lg"
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan" }}
                    rightSection={<IconSend size={17} />}
                    fw={700}
                    component={Link}
                    to="/contact"
                  >
                    Start a Project
                  </Button>
                </Group>
              </Grid.Col>
            </Grid>
          </Paper>
        </motion.div> */}

        {/* ── Bottom bar ── */}
        <Divider
          mt={60}
          mb={32}
          color={isDark ? "rgba(255,255,255,0.07)" : "#E2E8F0"}
        />

        <motion.div
          {...{ ...fadeUp, transition: { ...fadeUp.transition, delay: 0.15 } }}
        >
          <Group justify="space-between" align="center" wrap="wrap" gap={20}>
            <Stack gap={6}>
              <Text size="sm" style={{ color: dimCol }}>
                © {new Date().getFullYear()} Nexflare Dynamics. All rights
                reserved.
              </Text>
              <Group gap={16}>
                {[
                  { label: "Privacy Policy", to: "/privacy-policy" },
                  { label: "Terms of Service", to: "/terms" },
                  { label: "Cookie Policy", to: "/cookies" },
                ].map(({ label, to }) => (
                  <Anchor
                    key={label}
                    component={Link}
                    to={to}
                    underline="never"
                    size="xs"
                    style={{ color: dimCol }}
                    className="footer-link"
                  >
                    {label}
                  </Anchor>
                ))}
              </Group>
            </Stack>

            <Group gap={16} align="center">
              <Text size="sm" style={{ color: dimCol }}>
                Made with ❤️ in India
              </Text>

              <ActionIcon
                radius="xl"
                size={48}
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
                aria-label="Back to top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <IconArrowUp size={20} />
              </ActionIcon>
            </Group>
          </Group>
        </motion.div>
      </Container>

      {/* ── Scoped styles ── */}
      <style>{`
        .footer-link {
          transition: color 0.22s ease, transform 0.22s ease;
          display: inline-flex;
          align-items: center;
        }
        .footer-link:hover {
          color: #2563EB !important;
          transform: translateX(3px);
        }
        .mantine-ActionIcon-root {
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }
        .mantine-ActionIcon-root:hover {
          transform: translateY(-4px) scale(1.08);
          box-shadow: 0 8px 24px rgba(37,99,235,0.30);
        }
        .mantine-Button-root {
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }
        .mantine-Button-root:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(37,99,235,0.28);
        }
        .mantine-TextInput-input::placeholder {
          color: rgba(255,255,255,0.55);
        }
        @media (max-width: 768px) {
          .mantine-Button-root { width: 100%; }
        }
      `}</style>
    </Box>
  );
};

export default Footer;
