import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  TextInput,
  Textarea,
  ThemeIcon,
  Title,
  useComputedColorScheme,
} from "@mantine/core";

import {
  IconArrowRight,
  IconCode,
  IconDeviceLaptop,
  IconRocket,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandDocker,
  IconBrandJavascript,
  IconCloud,
  IconBrandMongodb,
  IconMail,
  IconUser,
  IconMessageCircle,
  IconSend,
  IconPhone,
} from "@tabler/icons-react";

import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import WhyChooseUs from "../../components/Sections/WhyChooseUs";
import DevelopmentProcess from "../../components/Sections/DevelopmentProcess";
import IndustriesWeServe from "../../components/Partners/IndustriesWeServe";
import ClientTestimonials from "../../components/Testimonials/ClientTestimonials";
import FAQ from "../../components/FAQ/FAQ";
import OurServices from "../../services/OurServices";
import PageTitle from "../../components/PageTitle";

const technologies = [
  { name: "React", icon: IconBrandReact, color: "#61DAFB" },
  { name: "Next.js", icon: IconBrandNextjs, color: "#000000" },
  { name: "Node.js", icon: IconBrandNodejs, color: "#3C873A" },
  { name: "Spring Boot", icon: IconBrandJavascript, color: "#6DB33F" },
  { name: "MongoDB", icon: IconBrandMongodb, color: "#13AA52" },
  { name: "DigitalOcean", icon: IconCloud, color: "#0080FF" },
  { name: "Docker", icon: IconBrandDocker, color: "#2496ED" },
];

const Home = () => {

  const navigate = useNavigate();

  const colorScheme = useComputedColorScheme("light");
  const isDark = colorScheme === "dark";

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/contact/send",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.data.success) {
        setSubmitted(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <PageTitle title="Home" />
      <Box
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          background: isDark
            ? "linear-gradient(135deg,#050816 0%,#081120 45%,#0F172A 100%)"
            : "linear-gradient(135deg,#ffffff 0%,#eef5ff 45%,#f8fbff 100%)",
        }}
      >
        {/* ================= BACKGROUND GLOW ================= */}
        <Box
          style={{
            position: "absolute",
            width: 550,
            height: 550,
            borderRadius: "50%",
            left: -220,
            top: -120,
            filter: "blur(120px)",
            background: isDark ? "rgba(37,99,235,.28)" : "rgba(37,99,235,.15)",
          }}
        />
        <Box
          style={{
            position: "absolute",
            width: 450,
            height: 450,
            borderRadius: "50%",
            right: -100,
            bottom: -120,
            filter: "blur(120px)",
            background: isDark
              ? "rgba(14,165,233,.22)"
              : "rgba(56,189,248,.18)",
          }}
        />

        {/* Grid Pattern */}
        <Box
          style={{
            position: "absolute",
            inset: 0,
            opacity: isDark ? 0.06 : 0.04,
            backgroundImage: `
            linear-gradient(to right,#80808018 1px,transparent 1px),
            linear-gradient(to bottom,#80808018 1px,transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />

        <Container
          size="xl"
          pt={{ base: 100, sm: 110, lg: 120 }}
          pb={{ base: 60, sm: 80, lg: 20 }}
          style={{ position: "relative", zIndex: 5, width: "100%" }}
        >
          <Grid align="center" gutter={{ base: 30, sm: 40, lg: 60 }}>
            {/* ================= LEFT ================= */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ width: "100%" }}
              >
                <Stack
                  gap={{ base: 20, sm: 28, lg: 35 }}
                  style={{ width: "100%", textAlign: "inherit" }}
                >
                  {/* Small Badge */}
                  <Group
                    gap={10}
                    wrap="wrap"
                    style={{ justifyContent: "var(--content-align, center)" }}
                    className="responsive-group"
                  >
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        justifyContent: "inherit",
                        width: "100%",
                      }}
                    >
                      <ThemeIcon
                        size={38}
                        radius="xl"
                        variant="gradient"
                        gradient={{ from: "blue", to: "cyan" }}
                        style={{ flexShrink: 0 }}
                      >
                        <IconRocket size={20} />
                      </ThemeIcon>
                      <Text
                        fw={700}
                        style={{
                          letterSpacing: 1,
                          color: "#339AF0",
                          textTransform: "uppercase",
                          fontSize: "clamp(0.7rem, 2vw, 0.875rem)",
                        }}
                      >
                        Welcome to Nexflare Dynamics
                      </Text>
                    </Box>
                  </Group>

                  {/* Main Heading */}
                  <Title
                    order={1}
                    ta={{ base: "center", lg: "left" }}
                    style={{
                      fontSize: "clamp(2rem,4vw,5.5rem)",
                      lineHeight: 1.05,
                      fontWeight: 900,
                      color: isDark ? "#fff" : "#0F172A",
                      width: "100%",
                    }}
                  >
                    Software
                    <br />
                    <span
                      style={{
                        background: "linear-gradient(90deg,#2563EB,#38BDF8)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Development
                    </span>
                    <br />
                    Company
                  </Title>

                  {/* Description */}
                  <Text
                    size="lg"
                    ta={{ base: "center", lg: "left" }}
                    style={{
                      lineHeight: 1.9,
                      color: isDark ? "#CBD5E1" : "#475569",
                      fontSize: "clamp(0.9rem, 2vw, 1.125rem)",
                      width: "100%",
                      maxWidth: "100%",
                    }}
                  >
                    Revolutionizing software solutions with innovative digital
                    technologies to maximize productivity, ease business
                    operations, and deliver seamless user interactions.
                  </Text>

                  {/* Feature Pills */}
                  <Box
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 16,
                      justifyContent: "center",
                      width: "100%",
                    }}
                    className="feature-pills"
                  >
                    <Group gap={8}>
                      <ThemeIcon color="blue" radius="xl" variant="light">
                        <IconCode size={18} />
                      </ThemeIcon>
                      <Text fw={600}>Web Development</Text>
                    </Group>
                    <Group gap={8}>
                      <ThemeIcon color="cyan" radius="xl" variant="light">
                        <IconDeviceLaptop size={18} />
                      </ThemeIcon>
                      <Text fw={600}>UI / UX Design</Text>
                    </Group>
                  </Box>

                  {/* CTA Buttons */}
                  <Box
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 16,
                      justifyContent: "center",
                      marginTop: 10,
                      width: "100%",
                    }}
                    className="cta-buttons"
                  >
                    <Button
                      size="xl"
                      radius="xl"
                      rightSection={<IconArrowRight size={20} />}
                      variant="gradient"
                      gradient={{ from: "blue", to: "cyan" }}
                      style={{ fontSize: "clamp(0.85rem, 2vw, 1.125rem)" }}
                      onClick={() => navigate("/contact")}
                    >
                      Get Started
                    </Button>
                    {/* <Button
                      size="xl"
                      radius="xl"
                      variant={isDark ? "white" : "outline"}
                      color={isDark ? "dark" : "blue"}
                      style={{ fontSize: "clamp(0.85rem, 2vw, 1.125rem)" }}
                    >
                      View Portfolio
                    </Button> */}

                    <Button
                      size="xl"
                      radius="xl"
                      variant={isDark ? "white" : "outline"}
                      color={isDark ? "dark" : "blue"}
                      style={{ fontSize: "clamp(0.85rem, 2vw, 1.125rem)" }}
                      onClick={() => {
                        document
                          .getElementById("our-services")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }}
                    >
                      Our Services
                    </Button>
                  </Box>

                  <style>{`
                  @media (min-width: 992px) {
                    .feature-pills,
                    .cta-buttons {
                      justify-content: flex-start !important;
                    }
                    .responsive-group > div {
                      justify-content: flex-start !important;
                    }
                  }
                `}</style>
                </Stack>
              </motion.div>
            </Grid.Col>

            {/* ================= RIGHT — CONTACT FORM ================= */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px 0",
                  }}
                >
                  <motion.div
                    // animate={{ y: [0, -10, 0] }}
                    // transition={{ duration: 6, repeat: Infinity }}
                    style={{ width: "100%", maxWidth: 520 }}
                  >
                    <Box
                      className="contact-glass-card"
                      style={{
                        width: "100%",
                        borderRadius: 30,
                        backdropFilter: "blur(25px)",
                        background: isDark
                          ? "rgba(255,255,255,.06)"
                          : "rgba(255,255,255,.85)",
                        border: isDark
                          ? "1px solid rgba(255,255,255,.12)"
                          : "1px solid rgba(37,99,235,.14)",
                        boxShadow: isDark
                          ? "0 30px 70px rgba(0,0,0,.45)"
                          : "0 30px 70px rgba(37,99,235,.12)",
                        padding: "clamp(20px, 5vw, 36px)",
                        position: "relative",
                        overflow: "hidden",
                        transition: "box-shadow 0.3s ease",
                      }}
                    >
                      {/* Accent stripe top */}
                      <Box
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 4,
                          background: "linear-gradient(90deg,#2563EB,#38BDF8)",
                          borderRadius: "30px 30px 0 0",
                        }}
                      />

                      {/* Header */}
                      <Group
                        justify="space-between"
                        mb={6}
                        mt={6}
                        wrap="nowrap"
                      >
                        <Box>
                          <Text
                            fw={800}
                            size="xl"
                            c={isDark ? "white" : "dark"}
                            lh={1.2}
                          >
                            Get in Touch
                          </Text>
                          <Text size="sm" c="dimmed" mt={4}>
                            We'll get back to you within 24 hours.
                          </Text>
                        </Box>
                        <ThemeIcon
                          radius="xl"
                          size="lg"
                          variant="gradient"
                          gradient={{ from: "blue", to: "cyan" }}
                          style={{ flexShrink: 0 }}
                        >
                          <IconMail size={18} />
                        </ThemeIcon>
                      </Group>

                      {submitted ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.92 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Box
                            mt={32}
                            mb={16}
                            style={{
                              textAlign: "center",
                              padding: "32px 16px",
                              borderRadius: 18,
                              background: isDark
                                ? "rgba(37,99,235,.12)"
                                : "#EFF6FF",
                              border: "1px solid rgba(37,99,235,.2)",
                            }}
                          >
                            <ThemeIcon
                              size={52}
                              radius="xl"
                              variant="gradient"
                              gradient={{ from: "blue", to: "cyan" }}
                              mx="auto"
                              mb={16}
                            >
                              <IconSend size={26} />
                            </ThemeIcon>
                            <Text
                              fw={700}
                              size="lg"
                              c={isDark ? "white" : "dark"}
                            >
                              Message sent!
                            </Text>
                            <Text size="sm" c="dimmed" mt={6}>
                              Thanks, {formData.name}. Our team will reach out
                              to {formData.email} shortly.
                            </Text>
                            <Button
                              mt={20}
                              size="sm"
                              radius="xl"
                              variant="light"
                              color="blue"
                              onClick={() => {
                                setSubmitted(false);
                                setFormData({
                                  name: "",
                                  email: "",
                                  phone: "",
                                  message: "",
                                });
                              }}
                            >
                              Send another message
                            </Button>
                          </Box>
                        </motion.div>
                      ) : (
                        <Stack gap={14} mt={24}>
                          <TextInput
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleChange("name")}
                            leftSection={<IconUser size={16} />}
                            radius="xl"
                            size="md"
                            styles={{
                              input: {
                                background: isDark
                                  ? "rgba(255,255,255,.06)"
                                  : "#F8FAFF",
                                border: isDark
                                  ? "1px solid rgba(255,255,255,.1)"
                                  : "1px solid #DBEAFE",
                                color: isDark ? "#fff" : "#0F172A",
                                "&::placeholder": {
                                  color: isDark ? "#64748B" : "#94A3B8",
                                },
                              },
                            }}
                          />

                          <TextInput
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange("email")}
                            leftSection={<IconMail size={16} />}
                            radius="xl"
                            size="md"
                            styles={{
                              input: {
                                background: isDark
                                  ? "rgba(255,255,255,.06)"
                                  : "#F8FAFF",
                                border: isDark
                                  ? "1px solid rgba(255,255,255,.1)"
                                  : "1px solid #DBEAFE",
                                color: isDark ? "#fff" : "#0F172A",
                              },
                            }}
                          />

                          <TextInput
                            placeholder="Phone number (optional)"
                            value={formData.phone}
                            onChange={handleChange("phone")}
                            leftSection={<IconPhone size={16} />}
                            radius="xl"
                            size="md"
                            styles={{
                              input: {
                                background: isDark
                                  ? "rgba(255,255,255,.06)"
                                  : "#F8FAFF",
                                border: isDark
                                  ? "1px solid rgba(255,255,255,.1)"
                                  : "1px solid #DBEAFE",
                                color: isDark ? "#fff" : "#0F172A",
                              },
                            }}
                          />

                          <Textarea
                            placeholder="Tell us about your project..."
                            value={formData.message}
                            onChange={handleChange("message")}
                            leftSection={<IconMessageCircle size={16} />}
                            radius="xl"
                            size="md"
                            rows={4}
                            styles={{
                              input: {
                                background: isDark
                                  ? "rgba(255,255,255,.06)"
                                  : "#F8FAFF",
                                border: isDark
                                  ? "1px solid rgba(255,255,255,.1)"
                                  : "1px solid #DBEAFE",
                                color: isDark ? "#fff" : "#0F172A",
                                resize: "none",
                                overflowY: "auto",
                              },
                            }}
                          />

                          {/* <Button
                            size="lg"
                            radius="xl"
                            fullWidth
                            rightSection={<IconSend size={18} />}
                            variant="gradient"
                            gradient={{ from: "blue", to: "cyan" }}
                            mt={6}
                            onClick={handleSubmit}
                            style={{ fontWeight: 700 }}
                          >
                            Send Message
                          </Button> */}

                          <Button
                            size="lg"
                            radius="xl"
                            fullWidth
                            loading={loading}
                            loaderProps={{
                              type: "oval",
                            }}
                            rightSection={!loading && <IconSend size={18} />}
                            variant="gradient"
                            gradient={{ from: "blue", to: "cyan" }}
                            mt={6}
                            onClick={handleSubmit}
                            style={{ fontWeight: 700 }}
                          >
                            {loading ? "Sending..." : "Send Message"}
                          </Button>

                          <Text size="xs" c="dimmed" ta="center">
                            No spam, ever. Your info stays private.
                          </Text>
                        </Stack>
                      )}

                      <style>{`
                      .contact-glass-card::before,
                      .contact-glass-card::after {
                        content: '';
                        position: absolute;
                        border-radius: 30px;
                        pointer-events: none;
                        transition: opacity 0.4s ease;
                        opacity: 0;
                      }
                      .contact-glass-card::before {
                        top: -2px; left: -2px;
                        width: 60%; height: 60%;
                        border-top: 2px solid #2563EB;
                        border-left: 2px solid #2563EB;
                        border-bottom: none; border-right: none;
                        border-radius: 30px 0 0 0;
                      }
                      .contact-glass-card::after {
                        bottom: -2px; right: -2px;
                        width: 60%; height: 60%;
                        border-bottom: 2px solid #38BDF8;
                        border-right: 2px solid #38BDF8;
                        border-top: none; border-left: none;
                        border-radius: 0 0 30px 0;
                      }
                      .contact-glass-card:hover::before,
                      .contact-glass-card:hover::after { opacity: 1; }
                      .contact-glass-card:hover {
                        box-shadow: 0 40px 90px rgba(37,99,235,.28) !important;
                      }
                    `}</style>
                    </Box>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid.Col>
            {/* ================= END GRID ================= */}
          </Grid>

          {/* ================= TECH SCROLL ================= */}
          <Box mt={{ base: 30, sm: 40, lg: 50 }}>
            <Stack align="center" mb={40}>
              <Text
                fw={800}
                fz={14}
                tt="uppercase"
                c="blue"
                style={{ letterSpacing: 3, textAlign: "center" }}
              >
                Technologies We've Mastered and Integrated
              </Text>
            </Stack>

            <Box
              style={{
                overflow: "hidden",
                width: "100%",
                position: "relative",
                padding: "15px 0",
              }}
            >
              <motion.div
                style={{ display: "flex", gap: 25, width: "max-content" }}
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
              >
                {[...technologies, ...technologies].map(
                  ({ name, icon: Icon, color }, index) => (
                    <Box
                      key={index}
                      px={{ base: 16, sm: 22, md: 28 }}
                      py={{ base: 12, sm: 16, md: 18 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 15,
                        borderRadius: 18,
                        minWidth: 170,
                        backdropFilter: "blur(18px)",
                        background: isDark
                          ? "rgba(255,255,255,.05)"
                          : "#ffffff",
                        border: isDark
                          ? "1px solid rgba(255,255,255,.08)"
                          : "1px solid #E5E7EB",
                        boxShadow: isDark
                          ? "0 10px 35px rgba(0,0,0,.35)"
                          : "0 10px 35px rgba(0,0,0,.08)",
                      }}
                    >
                      <Icon size={28} color={color} />
                      <Text fw={700} size="md">
                        {name}
                      </Text>
                    </Box>
                  ),
                )}
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* <WhyChooseUs /> */}
      {/* <OurServices /> */}
      <div id="our-services">
        <OurServices />
      </div>
      <DevelopmentProcess />
      <IndustriesWeServe />
      <ClientTestimonials />
      <FAQ />
    </>
  );
};

export default Home;
