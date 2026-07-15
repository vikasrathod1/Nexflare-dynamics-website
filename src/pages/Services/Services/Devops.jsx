import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Paper,
  Progress,
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
  IconCheck,
  IconClock,
  IconCloud,
  IconGitBranch,
  IconLoader2,
  IconShieldCheck,
} from "@tabler/icons-react";

import { useEffect, useState } from "react";

const MotionPaper = motion.create(Paper);

const features = [
  "CI/CD Pipeline",
  "Docker & Kubernetes",
  "Cloud Infrastructure",
  "Monitoring & Security",
];

const pipeline = [
  { icon: IconCheck, color: "teal", label: "Unit & Integration Tests", status: "Passed", statusColor: "teal" },
  { icon: IconBrandDocker, color: "cyan", label: "Container Image Built", status: "Done", statusColor: "cyan" },
  { icon: IconLoader2, color: "grape", label: "Rolling Out to Cluster", status: "Live", statusColor: "yellow", spin: true },
  { icon: IconShieldCheck, color: "orange", label: "Security Scan", status: "Queued", statusColor: "orange" },
];

const logs = [
  { text: "✔ pulled release/2.4.1", color: "teal" },
  { text: "✔ dependencies installed", color: "teal" },
  { text: "✔ production bundle built", color: "teal" },
  { text: "✔ image pushed to registry", color: "teal" },
  { text: "► rolling out to cluster...", color: "cyan", pulse: true },
  { text: "► running security scan...", color: "yellow", pulse: true },
];

const Devops = () => {
  const colorScheme = useComputedColorScheme("light");
  const dark = colorScheme === "dark";

  const [progress, setProgress] = useState(0);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((p) => (p >= 92 ? 92 : p + 1));
  //   }, 35);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <Container size="xl" py={10}>
      <Paper
        radius="xl"
        shadow="xl"
        withBorder
        p={0}
        style={{
          overflow: "hidden",
          background: dark ? "#0f172a" : "#ffffff",
        }}
      >
        <Grid gutter={0}>
          {/* ===========================================================
            LEFT SIDE
            =========================================================== */}

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Box
              p={{ base: "sm", md: "lg" }}
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: dark
                  ? "linear-gradient(135deg,#020617,#111827)"
                  : "linear-gradient(135deg,#eef7ff,#f8fbff)",
              }}
            >
              <MotionPaper
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                radius="lg"
                shadow="md"
                withBorder
                p={{ base: "sm", md: "md" }}
                w="100%"
                maw={480}
              >
                <Stack gap="xs">
                  <Group justify="space-between" wrap="nowrap">
                    <Group gap="xs" wrap="nowrap">
                      <ThemeIcon size={38} radius="xl" color="blue">
                        <IconLoader2 size={20} />
                      </ThemeIcon>
                      <Stack gap={0}>
                        <Text fw={700} size="sm">
                          Live Deployment
                        </Text>
                        <Text size="xs" c="dimmed">
                          Production Environment
                        </Text>
                      </Stack>
                    </Group>
                    <Badge color="teal" size="sm" radius="xl" variant="light">
                      Deploying
                    </Badge>
                  </Group>

                  <Divider />

                  <Group justify="center" gap="xs">
                    {[
                      // { icon: IconGitBranch, value: "release/2.4.1" },
                      { icon: IconCloud, value: "Production" },
                      // { icon: IconClock, value: "1m 42s" },
                    ].map(({ icon: Icon, value }, i) => (
                      <Group key={i} gap={6} wrap="nowrap">
                        <Icon size={14} />
                        <Text size="xs" fw={600}>
                          {value}
                        </Text>
                      </Group>
                    ))}
                  </Group>

                  {/* <Group justify="space-between" gap="xs">
                    <Text size="xs" fw={700}>
                      Rollout Progress
                    </Text>
                    <Text size="xs" fw={700} c="blue">
                      {progress}
                    </Text>
                  </Group> */}
                  {/* <Progress value={progress} animated radius="xl" size="md" /> */}

                  <Stack gap={6} mt={2}>
                    {pipeline.map(
                      ({
                        icon: Icon,
                        color,
                        label,
                        status,
                        statusColor,
                        spin,
                      }) => (
                        <Paper key={label} withBorder radius="md" p={6}>
                          <Group justify="space-between" wrap="nowrap">
                            <Group gap={6} wrap="nowrap">
                              <ThemeIcon color={color} radius="xl" size={22}>
                                {spin ? (
                                  <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                      repeat: Infinity,
                                      duration: 2,
                                      ease: "linear",
                                    }}
                                    style={{ display: "flex" }}
                                  >
                                    <Icon size={13} />
                                  </motion.div>
                                ) : (
                                  <Icon size={12} />
                                )}
                              </ThemeIcon>
                              <Text size="xs" fw={600}>
                                {label}
                              </Text>
                            </Group>
                            <Badge size="xs" color={statusColor}>
                              {status}
                            </Badge>
                          </Group>
                        </Paper>
                      ),
                    )}
                  </Stack>

                  <Paper
                    radius="md"
                    p={8}
                    withBorder
                    style={{
                      background: dark ? "#020617" : "#0f172a",
                      color: "#00ff88",
                      fontFamily: "monospace",
                    }}
                  >
                    <Stack gap={2}>
                      {logs.map(({ text, color, pulse }, i) =>
                        pulse ? (
                          <motion.div
                            key={i}
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ repeat: Infinity, duration: 1.2 }}
                          >
                            <Text size="10px" c={color}>
                              {text}
                            </Text>
                          </motion.div>
                        ) : (
                          <Text key={i} size="10px" c={color}>
                            {text}
                          </Text>
                        ),
                      )}
                    </Stack>
                  </Paper>
                </Stack>
              </MotionPaper>
            </Box>
          </Grid.Col>
          {/* ===========================================================
            RIGHT SIDE
            =========================================================== */}

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Box
              p={{ base: "md", lg: 60 }}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Stack>
                <Badge
                  color="blue"
                  variant="light"
                  radius="xl"
                  size="lg"
                  w="fit-content"
                >
                  DEVOPS
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

                {/* <Button
                  size="xl"
                  radius="xl"
                  w="fit-content"
                  rightSection={<IconArrowRight size={20} />}
                >
                  Discuss Your DevOps Needs
                </Button> */}
              </Stack>
            </Box>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Devops;