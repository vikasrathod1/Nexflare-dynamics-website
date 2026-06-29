import {
  Box,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
  SimpleGrid,
} from "@mantine/core";
import {
  IconFileText,
  IconPhoneCall,
  IconCode,
  IconUsers,
  IconAward,
  IconArrowRight,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const MotionPaper = motion.create(Paper);

const hiringSteps = [
  {
    step: "01",
    title: "Apply",
    icon: IconFileText,
    color: "blue",
    description:
      "Submit your application through our careers page with your updated resume.",
  },
  {
    step: "02",
    title: "HR Screening",
    icon: IconPhoneCall,
    color: "cyan",
    description:
      "Our HR team reviews your profile and schedules an introductory discussion.",
  },
  {
    step: "03",
    title: "Technical Interview",
    icon: IconCode,
    color: "grape",
    description:
      "Demonstrate your technical knowledge, problem-solving, and project experience.",
  },
  {
    step: "04",
    title: "Final Interview",
    icon: IconUsers,
    color: "orange",
    description:
      "Meet the leadership team to discuss your goals, culture fit, and expectations.",
  },
  {
    step: "05",
    title: "Offer & Onboarding",
    icon: IconAward,
    color: "green",
    description:
      "Receive your offer letter and begin your exciting journey with Nexflare Dynamics.",
  },
];

const HiringProcess = () => {
  return (
    <Box py={90}>
      <Container size="xl">
        <Stack align="center" gap="md" mb={60}>
          <Text
            fw={700}
            c="blue"
            tt="uppercase"
            size="sm"
          >
            Hiring Process
          </Text>

          <Title
            order={2}
            ta="center"
          >
            Our Recruitment Journey
          </Title>

          <Text
            ta="center"
            maw={720}
            c="dimmed"
            size="lg"
          >
            We believe in a transparent and efficient hiring process that
            helps us discover talented professionals while ensuring an
            excellent candidate experience.
          </Text>
        </Stack>

        <SimpleGrid
          cols={{ base: 1, md: 5 }}
          spacing="xl"
        >
          {hiringSteps.map((step, index) => (
            <Group
              key={step.step}
              align="stretch"
              gap={0}
              wrap="nowrap"
            >
              <MotionPaper
                withBorder
                radius="xl"
                shadow="sm"
                p="lg"
                style={{
                  flex: 1,
                  minHeight: 280,
                }}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <Stack align="center" gap="md">
                  <ThemeIcon
                    size={65}
                    radius="xl"
                    color={step.color}
                    variant="light"
                  >
                    <step.icon size={32} />
                  </ThemeIcon>

                  <Text
                    fw={700}
                    c="blue"
                    size="xl"
                  >
                    {step.step}
                  </Text>

                  <Title
                    order={4}
                    ta="center"
                  >
                    {step.title}
                  </Title>

                  <Text
                    ta="center"
                    c="dimmed"
                    lh={1.7}
                    size="sm"
                  >
                    {step.description}
                  </Text>
                </Stack>
              </MotionPaper>

              {index !== hiringSteps.length - 1 && (
                <Group
                  visibleFrom="md"
                  justify="center"
                  px="sm"
                >
                  <IconArrowRight
                    size={30}
                    color="#228be6"
                  />
                </Group>
              )}
            </Group>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default HiringProcess;