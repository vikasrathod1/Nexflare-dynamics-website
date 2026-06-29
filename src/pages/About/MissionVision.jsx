import {
  Container,
  Grid,
  Paper,
  Title,
  Text,
  Stack,
  ThemeIcon,
} from "@mantine/core";
import {
  IconTargetArrow,
  IconEye,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionPaper = motion.create(Paper);

const MissionVision = () => {
  return (
    <Container size="xl" py={80}>
      <Stack align="center" mb={50}>
        <Text
          fw={700}
          c="blue"
          tt="uppercase"
          size="sm"
        >
          Mission & Vision
        </Text>

        <Title
          order={2}
          ta="center"
          maw={700}
        >
          Driving Innovation With Purpose
        </Title>

        <Text
          ta="center"
          c="dimmed"
          maw={800}
          size="lg"
        >
          Our mission and vision guide every solution we
          build, every partnership we create, and every
          challenge we solve.
        </Text>
      </Stack>

      <Grid>
        {/* Mission Card */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <MotionPaper
            p="xl"
            radius="xl"
            shadow="md"
            withBorder
            h="100%"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Stack gap="lg">
              <ThemeIcon
                size={70}
                radius="xl"
                variant="light"
                color="blue"
              >
                <IconTargetArrow size={36} />
              </ThemeIcon>

              <Title order={3}>
                Our Mission
              </Title>

              <Text
                size="lg"
                c="dimmed"
                lh={1.8}
              >
                To empower businesses through innovative,
                scalable, and reliable technology solutions
                that simplify operations, improve
                productivity, and accelerate sustainable
                growth.
              </Text>

              <Text
                size="lg"
                c="dimmed"
                lh={1.8}
              >
                We strive to understand our clients’
                challenges and deliver software that creates
                measurable business value while maintaining
                the highest standards of quality and
                customer satisfaction.
              </Text>
            </Stack>
          </MotionPaper>
        </Grid.Col>

        {/* Vision Card */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <MotionPaper
            p="xl"
            radius="xl"
            shadow="md"
            withBorder
            h="100%"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Stack gap="lg">
              <ThemeIcon
                size={70}
                radius="xl"
                variant="light"
                color="violet"
              >
                <IconEye size={36} />
              </ThemeIcon>

              <Title order={3}>
                Our Vision
              </Title>

              <Text
                size="lg"
                c="dimmed"
                lh={1.8}
              >
                To become a globally trusted technology
                partner recognized for delivering innovative
                digital solutions that transform businesses
                and create lasting impact.
              </Text>

              <Text
                size="lg"
                c="dimmed"
                lh={1.8}
              >
                We envision a future where organizations of
                all sizes leverage technology seamlessly to
                unlock new opportunities, enhance customer
                experiences, and achieve extraordinary
                success.
              </Text>
            </Stack>
          </MotionPaper>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default MissionVision;