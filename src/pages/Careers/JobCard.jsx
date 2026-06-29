import {
  Badge,
  Button,
  Card,
  Divider,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconBriefcase,
  IconMapPin,
  IconClockHour4,
  IconCurrencyRupee,
  IconArrowRight,
  IconEye,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionCard = motion.create(Card);

const JobCard = ({ job }) => {
  return (
    <MotionCard
      shadow="md"
      radius="xl"
      withBorder
      p="lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 45px rgba(0,0,0,.12)",
      }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      style={{
        height: "100%",
      }}
    >
      <Stack justify="space-between" h="100%">
        <Stack gap="md">
          <Group justify="space-between" align="flex-start">
            <div>
              <Title order={3}>{job.title}</Title>

              <Text c="dimmed" size="sm">
                Nexflare Dynamics
              </Text>
            </div>

            <Badge
              color="blue"
              variant="light"
              radius="xl"
            >
              {job.department}
            </Badge>
          </Group>

          <Group gap="lg">
            <Group gap={6}>
              <ThemeIcon
                variant="light"
                color="blue"
                radius="xl"
              >
                <IconMapPin size={16} />
              </ThemeIcon>

              <Text size="sm">
                {job.location}
              </Text>
            </Group>

            <Group gap={6}>
              <ThemeIcon
                variant="light"
                color="green"
                radius="xl"
              >
                <IconBriefcase size={16} />
              </ThemeIcon>

              <Text size="sm">
                {job.jobType}
              </Text>
            </Group>
          </Group>

          <Group gap="lg">
            <Group gap={6}>
              <ThemeIcon
                variant="light"
                color="grape"
                radius="xl"
              >
                <IconClockHour4 size={16} />
              </ThemeIcon>

              <Text size="sm">
                {job.experience}
              </Text>
            </Group>

            <Group gap={6}>
              <ThemeIcon
                variant="light"
                color="yellow"
                radius="xl"
              >
                <IconCurrencyRupee size={16} />
              </ThemeIcon>

              <Text size="sm">
                {job.salary}
              </Text>
            </Group>
          </Group>

          <Text
            c="dimmed"
            size="sm"
            lineClamp={3}
          >
            {job.description}
          </Text>

          <Divider />

          <Group gap="xs">
            {job.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                radius="xl"
              >
                {skill}
              </Badge>
            ))}
          </Group>
        </Stack>

        <Group mt="lg" grow>
          <Button
            component={Link}
            to={`/careers/${job.id}`}
            variant="light"
            radius="xl"
            leftSection={<IconEye size={18} />}
          >
            View Details
          </Button>

          <Button
            component={Link}
            to={`/careers/apply/${job.id}`}
            radius="xl"
            rightSection={<IconArrowRight size={18} />}
          >
            Apply Now
          </Button>
        </Group>
      </Stack>
    </MotionCard>
  );
};

export default JobCard;