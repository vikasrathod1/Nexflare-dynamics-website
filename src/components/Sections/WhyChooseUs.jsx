import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Paper,
  Stack,
  ThemeIcon,
  Box,
} from "@mantine/core";

import {
  IconBulb,
  IconUsers,
  IconRocket,
  IconShieldCheck,
  IconCloudComputing,
  IconHeadset,
} from "@tabler/icons-react";

import { motion } from "framer-motion";
import { useComputedColorScheme } from "@mantine/core";

const data = [
  {
    icon: IconBulb,
    title: "Innovation First",
    description:
      "We build future-ready software using modern technologies and creative thinking.",
    color: "#3B82F6",
  },
  {
    icon: IconUsers,
    title: "Expert Team",
    description:
      "Experienced React, Java, Spring Boot and Cloud developers delivering quality solutions.",
    color: "#8B5CF6",
  },
  {
    icon: IconRocket,
    title: "Fast Delivery",
    description:
      "Agile development process with quick iterations and on-time project delivery.",
    color: "#10B981",
  },
  {
    icon: IconShieldCheck,
    title: "Secure Solutions",
    description:
      "Enterprise-grade security with scalable architecture and best coding practices.",
    color: "#F59E0B",
  },
  {
    icon: IconCloudComputing,
    title: "Cloud Ready",
    description:
      "Deploy applications on DigitalOcean and cloud infrastructure with confidence.",
    color: "#06B6D4",
  },
  {
    icon: IconHeadset,
    title: "24×7 Support",
    description:
      "Reliable maintenance and technical support whenever your business needs it.",
    color: "#EF4444",
  },
];

const WhyChooseUs = () => {
  const isDark = useComputedColorScheme("light") === "dark";

  return (
    <Box
      style={{
        background: isDark ? "#081120" : "#F8FAFC",
      }}
    >
      <Container size="xl">
        <Stack align="center" mb={60}>
          <Text
            fw={700}
            tt="uppercase"
            c="blue"
            style={{ letterSpacing: 3 }}
          >
            WHY CHOOSE US
          </Text>

          <Title
            order={2}
            ta="center"
            style={{
              fontSize: "clamp(2rem,4vw,3.5rem)",
            }}
          >
            Why Choose{" "}
            <span style={{ color: "#2563EB" }}>
              Nexflare Dynamics
            </span>
          </Title>

          <Text
            ta="center"
            maw={700}
            c="dimmed"
            size="lg"
          >
            We combine innovation, experience and cutting-edge
            technology to build scalable software solutions that
            help businesses grow faster.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={30}>
          {data.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
              >
                <Paper
                  radius="xl"
                  p="xl"
                  h="100%"
                  style={{
                    background: isDark
                      ? "rgba(255,255,255,0.04)"
                      : "#fff",
                    border: isDark
                      ? "1px solid rgba(255,255,255,.08)"
                      : "1px solid #E2E8F0",
                    backdropFilter: "blur(18px)",
                    transition: ".3s",
                    boxShadow: isDark
                      ? "0 10px 30px rgba(0,0,0,.35)"
                      : "0 10px 30px rgba(0,0,0,.06)",
                  }}
                >
                  <ThemeIcon
                    size={64}
                    radius="xl"
                    variant="light"
                    color={item.color}
                    mb="lg"
                  >
                    <Icon size={34} />
                  </ThemeIcon>

                  <Title order={4} mb={10}>
                    {item.title}
                  </Title>

                  <Text c="dimmed">
                    {item.description}
                  </Text>
                </Paper>
              </motion.div>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;