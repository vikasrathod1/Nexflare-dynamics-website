import { useState } from "react";
import {
  Box,
  Container,
  Text,
  Title,
  Stack,
  SimpleGrid,
  TextInput,
  Textarea,
  Select,
  useComputedColorScheme,
} from "@mantine/core";
import { Phone, ArrowRight } from "lucide-react";
import axios from "axios";

const teal = "#06b6d4";

const expectations = [
  {
    number: "01",
    title: "Prompt Response",
    description:
      "We aim to respond to all inquiries within 24 hours, every working day.",
  },
  {
    number: "02",
    title: "Personalized Attention",
    description:
      "Your needs are unique, and we tailor our solutions accordingly.",
  },
  {
    number: "03",
    title: "Expert Guidance",
    description:
      "Our experienced team provides insights and recommendations for your goals.",
  },
  {
    number: "04",
    title: "Transparent Communication",
    description:
      "From discussions to delivery, we keep you informed every step.",
  },
];

const ContactFormScreen = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // const [query, setQuery] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [company, setCompany] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const headingColor = isDark ? "#f8fafc" : "#0b1326";
  const bodyColor = isDark ? "rgba(226,232,240,0.6)" : "rgba(11,19,38,0.65)";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.7)";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)";
  const labelColor = isDark ? "rgba(226,232,240,0.85)" : "rgba(15,23,42,0.85)";
  const inputBg = isDark ? "rgba(255,255,255,0.03)" : "#ffffff";
  const inputBorder = isDark ? "rgba(255,255,255,0.1)" : "rgba(15,23,42,0.15)";

  const inputStyles = {
    label: {
      color: labelColor,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 0.5,
      marginBottom: 6,
      textTransform: "uppercase",
    },
    input: {
      backgroundColor: inputBg,
      borderColor: inputBorder,
      color: headingColor,
      height: 44,
    },
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("service", service);
      formData.append("company", company);
      formData.append("query", query);

      const response = await axios.post(
        "https://nexflaredynamics.com/wp-content/themes/nexflaredynamics/submit-contact.php",
        formData,
      );

      console.log(response.data);

      alert("Message Sent Successfully");

      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setCompany("");
      setQuery("");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="section" pt={130}>
      <Container size="lg">
        <SimpleGrid
          cols={{ base: 1, lg: 2 }}
          spacing={{ base: 40, lg: 48 }}
          style={{ alignItems: "start" }}
        >
          {/* Left column */}
          <Stack gap={0}>
            <Text
              fw={700}
              size="xs"
              mb={14}
              style={{
                color: teal,
                letterSpacing: 1.4,
                textTransform: "uppercase",
              }}
            >
              Why Contact Us
            </Text>

            <Title
              order={2}
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 600,
                fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                lineHeight: 1.25,
                color: headingColor,
              }}
            >
              What to Expect When
              <br />
              You Reach Us
            </Title>

            <Text
              mt={16}
              size="sm"
              maw={420}
              style={{ color: bodyColor, lineHeight: 1.7 }}
            >
              Our experienced team will respond quickly with personalized
              attention and expert guidance to meet your goals.
            </Text>

            <Stack gap={14} mt={30}>
              {expectations.map(({ number, title, description }) => (
                <Box
                  key={number}
                  style={{
                    display: "flex",
                    gap: 16,
                    background: cardBg,
                    border: `1px solid ${cardBorder}`,
                    borderRadius: 12,
                    padding: "18px 20px",
                  }}
                >
                  <Text
                    fw={700}
                    size="xs"
                    style={{ color: teal, minWidth: 20, paddingTop: 2 }}
                  >
                    {number}
                  </Text>
                  <Text size="sm" style={{ color: bodyColor, lineHeight: 1.6 }}>
                    <Text
                      component="span"
                      fw={700}
                      style={{ color: headingColor }}
                    >
                      {title}
                    </Text>{" "}
                    — {description}
                  </Text>
                </Box>
              ))}
            </Stack>
          </Stack>

          {/* Right column — form */}
          <Box
            style={{
              background: isDark ? "rgba(255,255,255,0.02)" : "#ffffff",
              border: `1px solid ${cardBorder}`,
              borderRadius: 18,
              padding: "32px",
            }}
          >
            <Title
              order={3}
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 600,
                fontSize: "1.5rem",
                color: headingColor,
              }}
            >
              Send Us a Message
            </Title>
            <Text
              mt={8}
              size="sm"
              style={{ color: bodyColor, lineHeight: 1.6 }}
            >
              Have questions or need assistance? Fill out the form below and our
              team will get back to you promptly.
            </Text>

            <Stack gap={18} mt={26}>
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={16}>
                <TextInput
                  label="Full Name *"
                  placeholder="e.g. Rahul Sharma"
                  styles={inputStyles}
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
                <TextInput
                  label="Email Address *"
                  placeholder="you@company.com"
                  styles={inputStyles}
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </SimpleGrid>

              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={16}>
                <TextInput
                  label="Phone Number *"
                  placeholder="+91 98765 43210"
                  styles={inputStyles}
                  value={phone}
                  onChange={(e) => setPhone(e.currentTarget.value)}
                />
                <Select
                  label="Service Interested In"
                  placeholder="Select a service"
                  data={[
                    "HRM Software",
                    "ERP Software",
                    "CRM Software",
                    "Project Manager",
                    "Mobile Apps",
                    "Appointment Booking",
                    "Accounting & Finance",
                    "Not sure yet",
                  ]}
                  styles={inputStyles}
                  value={service}
                  onChange={setService}
                />
              </SimpleGrid>

              <TextInput
                label="Company / Organisation"
                placeholder="Your company name (optional)"
                styles={inputStyles}
                value={company}
                onChange={(e) => setCompany(e.currentTarget.value)}
              />

              <Box>
                <Textarea
                  label="Your Query *"
                  placeholder="Tell us about your project, requirements, or any questions you have..."
                  minRows={4}
                  maxLength={500}
                  value={query}
                  onChange={(e) => setQuery(e.currentTarget.value)}
                  styles={inputStyles}
                />
                <Text size="xs" ta="right" mt={4} style={{ color: bodyColor }}>
                  {query.length} / 500
                </Text>
              </Box>

              <Box
                component="button"
                type="button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  width: "100%",
                  padding: "14px 0",
                  borderRadius: 10,
                  border: "none",
                  background: "linear-gradient(135deg,#0891b2,#06b6d4)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: "pointer",
                }}
                onClick={handleSubmit}
              >
                Send Message <ArrowRight size={16} />
              </Box>

              <Text size="xs" ta="center" style={{ color: bodyColor }}>
                We typically respond within{" "}
                <Text component="span" fw={700} style={{ color: teal }}>
                  24 hours
                </Text>{" "}
                on business days.
              </Text>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ContactFormScreen;
