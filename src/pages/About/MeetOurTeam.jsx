import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Paper,
  Stack,
  Avatar,
  Group,
  ActionIcon,
} from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionPaper = motion.create(Paper);

const teamMembers = [
  {
    name: "Amit Sharma",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a",
  },
  {
    name: "Priya Patel",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Rahul Verma",
    role: "Lead Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Sneha Joshi",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
];

const MeetOurTeam = () => {
  return (
    <Container size="xl" py={90}>
      <Stack align="center" gap="md" mb={60}>
        <Text
          fw={700}
          c="blue"
          tt="uppercase"
          size="sm"
        >
          Meet Our Team
        </Text>

        <Title
          order={2}
          ta="center"
          maw={700}
        >
          The People Behind Our Success
        </Title>

        <Text
          ta="center"
          c="dimmed"
          size="lg"
          maw={850}
        >
          Our talented team of developers, designers, project
          managers, and technology experts work together to
          deliver innovative solutions that help businesses
          achieve their goals.
        </Text>
      </Stack>

      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing="xl"
      >
        {teamMembers.map((member, index) => (
          <MotionPaper
            key={member.name}
            p="xl"
            radius="xl"
            shadow="sm"
            withBorder
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
            }}
            style={{
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <Stack align="center">
              <Avatar
                src={member.image}
                size={120}
                radius="50%"
              />

              <div>
                <Title order={4}>
                  {member.name}
                </Title>

                <Text c="dimmed" size="sm">
                  {member.role}
                </Text>
              </div>

              <Group gap="xs">
                <ActionIcon
                  variant="light"
                  radius="xl"
                >
                  <IconBrandLinkedin size={18} />
                </ActionIcon>

                <ActionIcon
                  variant="light"
                  radius="xl"
                >
                  <IconBrandTwitter size={18} />
                </ActionIcon>
              </Group>
            </Stack>
          </MotionPaper>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default MeetOurTeam;