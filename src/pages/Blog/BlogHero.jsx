import {
  Badge,
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";

import { motion } from "framer-motion";

import { IconArrowRight, IconBook2 } from "@tabler/icons-react";

const MotionBox = motion.create(Box);

const BlogHero = () => {
  const colorScheme = useComputedColorScheme("light");

  return (
    <Box py={120}>
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Stack align="center" gap="xl">
            <Badge
              size="lg"
              radius="xl"
              color="cyan"
              variant="light"
              leftSection={<IconBook2 size={16} />}
            >
              Nexflare Insights
            </Badge>

            <Title
              ta="center"
              order={1}
              style={{
                fontSize: "clamp(2.8rem,5vw,5rem)",
                lineHeight: 1.1,
                maxWidth: 900,
              }}
            >
              Technology Articles,
              <br />
              Business Insights &
              <br />
              Digital Innovation
            </Title>

            <Text ta="center" maw={760} size="lg" c="dimmed" lh={1.9}>
              Discover expert articles on software development, AI, cloud
              computing, digital transformation, cybersecurity, ERP, CRM and the
              latest technology trends from Nexflare Dynamics.
            </Text>

            <Group>
              <Button
                radius="xl"
                size="lg"
                color="cyan"
                rightSection={<IconArrowRight size={18} />}
              >
                Explore Articles
              </Button>

              <Button radius="xl" size="lg" variant="light">
                Subscribe
              </Button>
            </Group>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default BlogHero;
