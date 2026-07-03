import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
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
  IconBrandDocker,
  IconBrandGithub,
  // IconBrandKubernetes,
  IconCheck,
  IconCloud,
  IconCode,
  IconServer,
  IconUsers,
} from "@tabler/icons-react";

const MotionPaper = motion.create(Paper);

const features = [
  "CI/CD Pipeline",
  "Docker & Kubernetes",
  "Cloud Infrastructure",
  "Monitoring & Security",
];

const Devops = () => {
  const colorScheme = useComputedColorScheme("light");

  return (
    <Container size="xl" py={10}>
      <Paper
        radius="xl"
        shadow="xl"
        withBorder
        p={0}
        style={{
          overflow: "hidden",
          background: colorScheme === "dark" ? "#0f172a" : "#ffffff",
        }}
      >
        <Grid gutter={0}>
          {/* ===========================================================
    LEFT SIDE
=========================================================== */}

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Box
              p={50}
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack gap={12} align="center">
                {/* Developer */}

                <MotionPaper
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                  radius="lg"
                  shadow="sm"
                  withBorder
                  p="md"
                  w={260}
                >
                  <Group justify="center">
                    <ThemeIcon size={48} radius="xl" color="blue">
                      <IconCode size={24} />
                    </ThemeIcon>

                    <Text fw={700}>Developer</Text>
                  </Group>
                </MotionPaper>

                <Text fw={700} c="blue">
                  │
                </Text>
                <Text fw={700} c="blue">
                  ▼
                </Text>

                {/* GitHub */}

                <MotionPaper
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                  radius="lg"
                  shadow="sm"
                  withBorder
                  p="md"
                  w={260}
                >
                  <Group justify="center">
                    <ThemeIcon size={48} radius="xl" color="dark">
                      <IconBrandGithub size={24} />
                    </ThemeIcon>

                    <Stack gap={0}>
                      <Text fw={700}>Source Control</Text>

                      <Text size="sm" c="dimmed">
                        GitHub
                      </Text>
                    </Stack>
                  </Group>
                </MotionPaper>

                <Text fw={700} c="blue">
                  │
                </Text>
                <Text fw={700} c="blue">
                  ▼
                </Text>

                {/* Pipeline */}

                <MotionPaper
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                  radius="lg"
                  shadow="sm"
                  withBorder
                  p="md"
                  w={260}
                >
                  <Group justify="center">
                    <ThemeIcon size={48} radius="xl" color="violet">
                      <IconArrowRight size={22} />
                    </ThemeIcon>

                    <Text fw={700}>CI/CD Pipeline</Text>
                  </Group>
                </MotionPaper>

                {/* Split */}

                <Text ff="monospace" fw={700} ta="center" c="blue">
                  │{"\n"}
                  ┌────────┴────────┐
                </Text>

                {/* Docker & Testing */}

                <Group gap="xl">
                  <MotionPaper
                    whileHover={{ y: -6 }}
                    radius="lg"
                    shadow="sm"
                    withBorder
                    p="md"
                    w={160}
                  >
                    <Stack align="center">
                      <ThemeIcon size={46} radius="xl" color="cyan">
                        <IconBrandDocker size={24} />
                      </ThemeIcon>

                      <Text ta="center" fw={600}>
                        Docker
                        <br />
                        Build
                      </Text>
                    </Stack>
                  </MotionPaper>

                  <MotionPaper
                    whileHover={{ y: -6 }}
                    radius="lg"
                    shadow="sm"
                    withBorder
                    p="md"
                    w={160}
                  >
                    <Stack align="center">
                      <ThemeIcon size={46} radius="xl" color="green">
                        <IconCheck size={24} />
                      </ThemeIcon>

                      <Text ta="center" fw={600}>
                        Automated
                        <br />
                        Test
                      </Text>
                    </Stack>
                  </MotionPaper>
                </Group>

                {/* Merge */}

                <Text ff="monospace" fw={700} ta="center" c="blue">
                  └────────┬────────┘{"\n"}│{"\n"}▼
                </Text>

                {/* Kubernetes */}

                <MotionPaper
                  whileHover={{ scale: 1.05 }}
                  radius="lg"
                  shadow="sm"
                  withBorder
                  p="md"
                  w={260}
                >
                  <Group justify="center">
                    <ThemeIcon size={48} radius="xl" color="indigo">
                      {/* <IconBrandKubernetes size={24} /> */}
                    </ThemeIcon>

                    <Text fw={700}>Kubernetes Cluster</Text>
                  </Group>
                </MotionPaper>

                <Text fw={700} c="blue">
                  │
                </Text>
                <Text fw={700} c="blue">
                  ▼
                </Text>

                {/* Cloud */}

                <MotionPaper
                  whileHover={{ scale: 1.05 }}
                  radius="lg"
                  shadow="sm"
                  withBorder
                  p="md"
                  w={260}
                >
                  <Group justify="center">
                    <ThemeIcon size={48} radius="xl" color="orange">
                      <IconCloud size={24} />
                    </ThemeIcon>

                    <Text fw={700}>Cloud Infrastructure</Text>
                  </Group>
                </MotionPaper>

                <Text fw={700} c="blue">
                  │
                </Text>
                <Text fw={700} c="blue">
                  ▼
                </Text>

                {/* Users */}

                <MotionPaper
                  whileHover={{ scale: 1.05 }}
                  radius="lg"
                  shadow="sm"
                  withBorder
                  p="md"
                  w={260}
                >
                  <Group justify="center">
                    <ThemeIcon size={48} radius="xl" color="teal">
                      <IconUsers size={24} />
                    </ThemeIcon>

                    <Text fw={700}>End Users</Text>
                  </Group>
                </MotionPaper>
              </Stack>
            </Box>
          </Grid.Col>
          {/* ===========================================================
    RIGHT SIDE
=========================================================== */}

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Box
              p={60}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Stack gap="xl">
                <Badge
                  color="blue"
                  variant="light"
                  radius="xl"
                  size="lg"
                  w="fit-content"
                >
                  01 — DEVOPS
                </Badge>

                <Title
                  order={1}
                  style={{
                    fontSize: "clamp(2.2rem,4vw,3.6rem)",
                    lineHeight: 1.2,
                    fontWeight: 800,
                  }}
                >
                  Streamline Your
                  <br />
                  Software Lifecycle
                </Title>

                <Text size="lg" c="dimmed" lh={1.9}>
                  Accelerate software delivery with our modern DevOps solutions.
                  We automate deployments, improve collaboration, strengthen
                  infrastructure, and ensure secure, scalable, and highly
                  available applications through CI/CD, Kubernetes, Docker,
                  cloud platforms, and monitoring tools.
                </Text>

                <Divider />

                <Stack gap="md">
                  {features.map((item) => (
                    <Group key={item}>
                      <ThemeIcon color="green" variant="light" radius="xl">
                        <IconCheck size={16} />
                      </ThemeIcon>

                      <Text fw={600}>{item}</Text>
                    </Group>
                  ))}
                </Stack>

                <Divider />

                <Group gap="sm">
                  <Badge size="lg" radius="xl" color="dark">
                    GitHub
                  </Badge>

                  <Badge size="lg" radius="xl" color="cyan">
                    Docker
                  </Badge>

                  <Badge size="lg" radius="xl" color="indigo">
                    Kubernetes
                  </Badge>

                  <Badge size="lg" radius="xl" color="orange">
                    AWS
                  </Badge>

                  <Badge size="lg" radius="xl" color="grape">
                    Terraform
                  </Badge>
                </Group>

                <Button
                  size="xl"
                  radius="xl"
                  w="fit-content"
                  rightSection={<IconArrowRight size={20} />}
                >
                  Discuss Your DevOps Needs
                </Button>
              </Stack>
            </Box>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Devops;
