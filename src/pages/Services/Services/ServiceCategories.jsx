import {
  Box,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
  Button,
  useComputedColorScheme,
} from "@mantine/core";

import {
  IconCode,
  IconDeviceMobile,
  IconCloudComputing,
  IconWorld,
  IconBrain,
  IconBrandGoogle,
  IconArrowRight,
} from "@tabler/icons-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionCard = motion.create(Card);

const services = [
  {
    title: "Custom Software Development",
    description:
      "Scalable enterprise software tailored to your business processes.",
    icon: IconCode,
    color: "blue",
    link: "/services/custom-software-development",
  },
  {
    title: "Web Development",
    description:
      "Responsive, high-performance websites and web applications.",
    icon: IconWorld,
    color: "cyan",
    link: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform Android & iOS applications.",
    icon: IconDeviceMobile,
    color: "grape",
    link: "/services/mobile-development",
  },
  {
    title: "Cloud Solutions",
    description:
      "Secure cloud infrastructure, deployment and DevOps services.",
    icon: IconCloudComputing,
    color: "teal",
    link: "/services/cloud-solutions",
  },
  {
    title: "AI Solutions",
    description:
      "AI-powered automation, chatbots and intelligent software.",
    icon: IconBrain,
    color: "violet",
    link: "/services/ai-solutions",
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, PPC, branding and social media marketing services.",
    icon: IconBrandGoogle,
    color: "orange",
    link: "/services/digital-marketing",
  },
];

const ServiceCategories = () => {
  const colorScheme = useComputedColorScheme("light");

  return (
    <Container size="xl" py={120}>
      <Stack align="center" mb={70}>
        <Text
          fw={700}
          c="blue"
          tt="uppercase"
          size="sm"
        >
          Our Services
        </Text>

        <Title
          ta="center"
          maw={700}
          style={{
            fontSize: "clamp(2rem,4vw,3.5rem)",
          }}
        >
          Solutions Built For Every Business
        </Title>

        <Text
          ta="center"
          maw={700}
          c="dimmed"
          size="lg"
        >
          We deliver innovative software, cloud, AI,
          web and digital solutions that help businesses
          grow faster in the digital era.
        </Text>
      </Stack>

      <Grid gutter={30}>
        {services.map((service, index) => (
          <Grid.Col
            key={service.title}
            span={{ base: 12, sm: 6, lg: 4 }}
          >
            <MotionCard
              withBorder
              radius="xl"
              p="xl"
              shadow="md"
              h="100%"
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              style={{
                background:
                  colorScheme === "dark"
                    ? "rgba(255,255,255,.03)"
                    : "#fff",
                backdropFilter: "blur(12px)",
              }}
            >
              <Stack h="100%">
                <ThemeIcon
                  size={70}
                  radius="xl"
                  variant="light"
                  color={service.color}
                >
                  <service.icon size={34} />
                </ThemeIcon>

                <Title order={3}>
                  {service.title}
                </Title>

                <Text
                  c="dimmed"
                  lh={1.8}
                  style={{ flex: 1 }}
                >
                  {service.description}
                </Text>

                <Group mt="md">
                  <Button
                    component={Link}
                    to={service.link}
                    variant="subtle"
                    rightSection={
                      <IconArrowRight size={16} />
                    }
                  >
                    Learn More
                  </Button>
                </Group>
              </Stack>
            </MotionCard>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default ServiceCategories;