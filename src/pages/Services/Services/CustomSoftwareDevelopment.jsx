import {
  Badge,
  Box,
  Button,
  Card,
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

import { motion } from "framer-motion";

import {
  IconArrowRight,
  IconCheck,
  IconCode,
  IconDeviceMobile,
  IconCloud,
  IconBrain,
  IconBuilding,
  IconWorld,
  IconRocket,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const MotionCard = motion.create(Card);

const features = [
  "Enterprise Software Development",
  "Web & Mobile Applications",
  "Cloud Native Architecture",
  "AI & Automation Solutions",
];

const technologies = [
  "React",
  "Java",
  "Spring Boot",
  "Node.js",
  "MySQL",
  "AWS",
];

const services = [
  {
    title: "Enterprise Software",
    icon: IconBuilding,
    color: "blue",
  },
  {
    title: "Web Applications",
    icon: IconWorld,
    color: "cyan",
  },
  {
    title: "Mobile Apps",
    icon: IconDeviceMobile,
    color: "grape",
  },
  {
    title: "Cloud",
    icon: IconCloud,
    color: "teal",
  },
  {
    title: "AI",
    icon: IconBrain,
    color: "indigo",
  },
];

const CustomSoftwareDevelopment = () => {
  const colorScheme = useComputedColorScheme("light");

  const navigate = useNavigate();

  return (
    <Container size="xl" py={90}>
      <Paper
        radius="xl"
        withBorder
        shadow="xl"
        p={0}
        style={{
          overflow: "hidden",
          backdropFilter: "blur(18px)",
          background: colorScheme === "dark" ? "rgba(15,23,42,.75)" : "#ffffff",
        }}
      >
        <Grid gutter={0}>
          {/* ===========================================================
    LEFT CONTENT
=========================================================== */}

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Box
              p={{ base: 30, md: 60 }}
              h="100%"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                style={{ width: "100%" }}
              >
                <Stack gap="xl">
                  {/* Section */}

                  <Group gap={8}>
                    <Text
                      tt="uppercase"
                      fw={700}
                      size="xs"
                      c="cyan"
                      style={{
                        letterSpacing: 2,
                      }}
                    >
                      CUSTOM SOFTWARE DEVELOPMENT
                    </Text>
                  </Group>

                  {/* Heading */}

                  <Title
                    order={1}
                    style={{
                      fontSize: "clamp(2.4rem,4vw,4rem)",
                      lineHeight: 1.1,
                      fontWeight: 800,
                    }}
                  >
                    Build Software
                    <br />
                    That Grows With
                    <br />
                    Your Business
                  </Title>

                  {/* Description */}

                  <Text size="lg" c="dimmed" lh={1.9}>
                    We build modern software products that help startups,
                    enterprises, and growing businesses automate operations,
                    improve customer experience, and scale faster using the
                    latest technologies.
                  </Text>

                  {/* Features */}

                  <Stack gap="md">
                    {features.map((item) => (
                      <Group key={item} align="flex-start">
                        <ThemeIcon
                          radius="xl"
                          color="cyan"
                          variant="light"
                          mt={2}
                        >
                          <IconCheck size={14} />
                        </ThemeIcon>

                        <Text fw={500}>{item}</Text>
                      </Group>
                    ))}
                  </Stack>

                  {/* Technology */}

                  <Group mt={10} gap="sm">
                    {technologies.map((tech) => (
                      <Badge
                        key={tech}
                        radius="md"
                        size="lg"
                        variant={colorScheme === "dark" ? "light" : "filled"}
                        color="cyan"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </Group>

                  {/* Button */}

                  <Button
                    radius="xl"
                    size="lg"
                    mt="md"
                    color="cyan"
                    rightSection={<IconArrowRight size={18} />}
                    onClick={()=>navigate("/contact")}
                  >
                    Start Your Project
                  </Button>
                </Stack>
              </motion.div>
            </Box>
          </Grid.Col>
          {/* ===========================================================
    RIGHT SIDE
=========================================================== */}

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Box
              p={{ base: 30, md: 60 }}
              h="100%"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ width: "100%", maxWidth: 520 }}
              >
                <Paper
                  radius="xl"
                  p="xl"
                  shadow="xl"
                  withBorder
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    background:
                      colorScheme === "dark"
                        ? "rgba(255,255,255,.04)"
                        : "#f8fbff",
                    backdropFilter: "blur(18px)",
                  }}
                >
                  {/* Background Glow */}

                  <Box
                    style={{
                      position: "absolute",
                      width: 220,
                      height: 220,
                      borderRadius: "50%",
                      background: "rgba(0,180,255,.15)",
                      filter: "blur(80px)",
                      top: -80,
                      right: -70,
                    }}
                  />

                  <Stack gap="lg">
                    {/* Rocket */}

                    <ThemeIcon
                      size={90}
                      radius={90}
                      color="cyan"
                      variant="light"
                      mx="auto"
                    >
                      <IconCode size={42} />
                    </ThemeIcon>

                    <Title ta="center" order={3}>
                      Software Solutions
                    </Title>

                    <Text ta="center" c="dimmed">
                      End-to-end development services powered by modern
                      technologies.
                    </Text>

                    {services.map((service, index) => (
                      <motion.div
                        key={service.title}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.08,
                        }}
                        viewport={{ once: true }}
                      >
                        <MotionCard
                          radius="lg"
                          withBorder
                          shadow="sm"
                          p="md"
                          whileHover={{
                            scale: 1.03,
                            x: 8,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          style={{
                            background:
                              colorScheme === "dark"
                                ? "rgba(255,255,255,.03)"
                                : "#ffffff",
                          }}
                        >
                          <Group justify="space-between">
                            <Group>
                              <ThemeIcon
                                radius="xl"
                                color={service.color}
                                variant="light"
                              >
                                <service.icon size={20} />
                              </ThemeIcon>

                              <Text fw={600}>{service.title}</Text>
                            </Group>

                            <IconArrowRight size={18} color="#00B5FF" />
                          </Group>
                        </MotionCard>
                      </motion.div>
                    ))}

                    <Paper
                      radius="lg"
                      p="md"
                      mt="md"
                      style={{
                        background:
                          colorScheme === "dark"
                            ? "rgba(0,180,255,.08)"
                            : "#eef9ff",
                      }}
                    >
                      <Group justify="space-between">
                        <Box>
                          <Text fw={700} size="lg">
                            100+
                          </Text>

                          <Text size="sm" c="dimmed">
                            Successful Software Projects
                          </Text>
                        </Box>

                        <ThemeIcon size={55} radius="xl" color="cyan">
                          <IconRocket size={28} />
                        </ThemeIcon>
                      </Group>
                    </Paper>
                  </Stack>
                </Paper>
              </motion.div>
            </Box>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CustomSoftwareDevelopment;
