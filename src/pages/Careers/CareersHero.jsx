import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import {
  IconArrowRight,
  IconBriefcase2,
  IconUsersGroup,
  IconRocket,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CareersHero = () => {
  const colorScheme = useComputedColorScheme("light");
  const isDark = colorScheme === "dark";

  return (
    <Box
      py={100}
      style={{
        position: "relative",
        overflow: "hidden",
        background: isDark
          ? "linear-gradient(135deg,#050816 0%,#081120 45%,#0F172A 100%)"
          : "linear-gradient(135deg,#ffffff 0%,#eef5ff 45%,#f8fbff 100%)",
      }}
    >
      {/* Background Glow */}
      <Box
        style={{
          position: "absolute",
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: "#2563eb",
          opacity: isDark ? 0.25 : 0.12,
          filter: "blur(120px)",
          top: -120,
          left: -120,
        }}
      />

      <Box
        style={{
          position: "absolute",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "#06b6d4",
          opacity: isDark ? 0.2 : 0.1,
          filter: "blur(120px)",
          bottom: -100,
          right: -100,
        }}
      />

      {/* Grid Pattern */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage: `
            linear-gradient(to right,#94a3b8 1px,transparent 1px),
            linear-gradient(to bottom,#94a3b8 1px,transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <Container size="xl" style={{ position: "relative", zIndex: 2 }}>
        <Grid align="center" py={20} gutter={60}>
          {/* Left Content */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="lg">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Group gap={10}>
                  <ThemeIcon size={42} radius="xl" color="blue" variant="light">
                    <IconBriefcase2 size={22} />
                  </ThemeIcon>

                  <Text fw={700} c="blue" tt="uppercase">
                    Careers at Nexflare Dynamics
                  </Text>
                </Group>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Title
                  order={1}
                  style={{
                    fontSize: "clamp(2.5rem,5vw,4.4rem)",
                    lineHeight: 1.1,
                    fontWeight: 800,
                  }}
                >
                  Build Your Career
                  <br />
                  With Innovation &
                  <Text component="span" c="blue" inherit>
                    {" "}
                    Technology
                  </Text>
                </Title>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Text
                  size="lg"
                  maw={650}
                  c="dimmed"
                  lh={1.8}
                >
                  Join a passionate team of innovators, developers, designers,
                  and problem-solvers building next-generation digital products.
                  Grow your skills, work on exciting projects, and shape the
                  future of technology with Nexflare Dynamics.
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Group mt="md">
                  <Button
                    size="lg"
                    radius="xl"
                    component={Link}
                    to="/careers/openings"
                    rightSection={<IconArrowRight size={18} />}
                  >
                    View Open Positions
                  </Button>

                  <Button
                    size="lg"
                    radius="xl"
                    variant="outline"
                    component={Link}
                    to="/contact"
                  >
                    Contact HR
                  </Button>
                </Group>
              </motion.div>
            </Stack>
          </Grid.Col>

          {/* Right Side */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Stack gap="lg">
                <Box
                  p="xl"
                  style={{
                    borderRadius: 24,
                    background: isDark
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(148,163,184,.15)",
                  }}
                >
                  <Stack gap="xl">
                    <Group>
                      <ThemeIcon size={55} radius="xl" color="blue">
                        <IconUsersGroup size={28} />
                      </ThemeIcon>

                      <div>
                        <Title order={4}>Collaborative Culture</Title>
                        <Text c="dimmed" size="sm">
                          Work with talented professionals.
                        </Text>
                      </div>
                    </Group>

                    <Group>
                      <ThemeIcon size={55} radius="xl" color="grape">
                        <IconRocket size={28} />
                      </ThemeIcon>

                      <div>
                        <Title order={4}>Career Growth</Title>
                        <Text c="dimmed" size="sm">
                          Continuous learning & innovation.
                        </Text>
                      </div>
                    </Group>

                    <Group justify="space-between">
                      <div>
                        <Title order={2} c="blue">
                          50+
                        </Title>
                        <Text c="dimmed">Team Members</Text>
                      </div>

                      <div>
                        <Title order={2} c="blue">
                          100+
                        </Title>
                        <Text c="dimmed">Projects Delivered</Text>
                      </div>

                      <div>
                        <Title order={2} c="blue">
                          24/7
                        </Title>
                        <Text c="dimmed">Support</Text>
                      </div>
                    </Group>
                  </Stack>
                </Box>
              </Stack>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default CareersHero;