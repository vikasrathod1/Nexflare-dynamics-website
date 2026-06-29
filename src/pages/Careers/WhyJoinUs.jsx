import {
  Box,
  Container,
  SimpleGrid,
  Paper,
  Stack,
  ThemeIcon,
  Text,
  Title,
} from "@mantine/core";
import {
  IconRocket,
  IconUsersGroup,
  IconSchool,
  IconHeartHandshake,
  IconDeviceLaptop,
  IconTrophy,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionPaper = motion.create(Paper);

const benefits = [
  {
    icon: IconRocket,
    title: "Career Growth",
    description:
      "Accelerate your career with mentorship, challenging projects, and continuous learning opportunities.",
    color: "blue",
  },
  {
    icon: IconUsersGroup,
    title: "Collaborative Culture",
    description:
      "Work alongside talented professionals in an open, innovative, and supportive environment.",
    color: "grape",
  },
  {
    icon: IconSchool,
    title: "Learning & Development",
    description:
      "Upskill through technical training, certifications, workshops, and knowledge-sharing sessions.",
    color: "green",
  },
  {
    icon: IconHeartHandshake,
    title: "Work-Life Balance",
    description:
      "We value flexibility, employee well-being, and maintaining a healthy work-life balance.",
    color: "red",
  },
  {
    icon: IconDeviceLaptop,
    title: "Latest Technologies",
    description:
      "Build modern applications using React, AI, Cloud, Java, Mobile, and enterprise technologies.",
    color: "cyan",
  },
  {
    icon: IconTrophy,
    title: "Recognition & Rewards",
    description:
      "Your hard work is appreciated through rewards, performance recognition, and growth opportunities.",
    color: "yellow",
  },
];

const WhyJoinUs = () => {
  return (
    <Box py={90}>
      <Container size="xl">
        <Stack align="center" gap="md" mb={50}>
          <Text
            fw={700}
            c="blue"
            tt="uppercase"
            size="sm"
          >
            Why Join Nexflare Dynamics
          </Text>

          <Title
            order={2}
            ta="center"
          >
            Grow Your Career With Us
          </Title>

          <Text
            ta="center"
            maw={720}
            c="dimmed"
            size="lg"
          >
            We believe our people are our greatest strength. Join a workplace
            where innovation, collaboration, and continuous learning drive
            personal and professional success.
          </Text>
        </Stack>

        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing="xl"
        >
          {benefits.map((item, index) => (
            <MotionPaper
              key={item.title}
              withBorder
              radius="xl"
              shadow="sm"
              p="xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <Stack gap="md">
                <ThemeIcon
                  size={60}
                  radius="xl"
                  color={item.color}
                  variant="light"
                >
                  <item.icon size={30} />
                </ThemeIcon>

                <Title order={4}>
                  {item.title}
                </Title>

                <Text
                  c="dimmed"
                  lh={1.8}
                >
                  {item.description}
                </Text>
              </Stack>
            </MotionPaper>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default WhyJoinUs;