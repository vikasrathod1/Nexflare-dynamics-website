import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useComputedColorScheme,
} from "@mantine/core";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  IconCode,
  IconDeviceMobile,
  IconCloud,
  IconBrain,
  IconArrowRight,
} from "@tabler/icons-react";

const MotionCard = motion.create(Card);

const services = [
  {
    // number: "01",
    title: "Dev Ops",
    id: "devops",
    description:
      "CI/CD pipelines, infrastructure as code, automated monitoring. Seamless deployments with enterprise-grade reliability.",
    icon: IconCloud,
    color: "#2563eb",
  },
  {
    // number: "02",
    title: "Software Outsourcing",
    id: "software-outsourcing",
    description:
      "End-to-end development using a global talent pool. High quality, cost-effective, and fully managed from discovery to launch.",
    icon: IconDeviceMobile,
    color: "#06b6d4",
  },
  {
    // number: "03",
    title: "Project & Resource Consulting",
    id: "consulting",
    description:
      "Expert guidance, team augmentation, and strategic technology advisory for optimal project outcomes at every scale.",
    icon: IconCloud,
    color: "#8b5cf6",
  },
  {
    // number: "04",
    title: "Custom Software Development",
    id: "custom-software",
    description:
      "Tailored web, mobile, and enterprise products built with agile methodology — aligned perfectly to your unique business goals.",
    // icon: IconBrain,
    icon: IconCode,
    color: "#10b981",
  },
];

const ServicesOverview = () => {
  const scheme = useComputedColorScheme("light");

  return (
    <Container size="xl" py={120}>
      {/* Top Section */}

      <Grid mb={70} align="center">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="md">
            <Text fw={700} c="blue" tt="uppercase" size="sm">
              OUR CORE SERVICES
            </Text>

            <Title
              order={1}
              style={{
                fontSize: "clamp(2.5rem,4vw,4rem)",
                lineHeight: 1.1,
              }}
            >
              Technology Solutions
              <br />
              Built For Modern
              <br />
              Businesses
            </Title>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="xl">
            <Text size="lg" c="dimmed" lh={1.9}>
              We deliver end-to-end digital solutions that help startups,
              enterprises, and growing businesses accelerate innovation, improve
              operational efficiency, and build future-ready software products.
            </Text>

            <Button
              component={Link}
              to="/contact"
              radius="xl"
              size="md"
              w={200}
              rightSection={<IconArrowRight size={18} />}
            >
              Get Free Quote
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>

      {/* Cards */}

      <Grid gutter={0}>
        {services.map((service, index) => (
          <Grid.Col key={service.number} span={{ base: 12, sm: 6, lg: 3 }}>
            <MotionCard
              withBorder
              radius={0}
              p={35}
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
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              style={{
                background: scheme === "dark" ? "#0f172a" : "#ffffff",

                borderColor: scheme === "dark" ? "#1e293b" : "#e5e7eb",

                cursor: "pointer",

                transition: ".3s",
              }}
            >
              <Stack justify="space-between" h="100%">
                <Stack gap="lg">
                  <Text size="xs" fw={700} c="dimmed">
                    {service.number}
                  </Text>

                  <ThemeIcon size={70} radius="xl" variant="light" color="blue">
                    <service.icon size={34} color={service.color} />
                  </ThemeIcon>

                  <Title order={3}>{service.title}</Title>

                  <Text c="dimmed" size="sm" lh={1.8}>
                    {service.description}
                  </Text>
                </Stack>

                <Button
                  variant="subtle"
                  p={0}
                  justify="start"
                  color="blue"
                  rightSection={<IconArrowRight size={16} />}
                  onClick={() => {
                    const element = document.getElementById(service.id);

                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  Explore
                </Button>
              </Stack>
            </MotionCard>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesOverview;
