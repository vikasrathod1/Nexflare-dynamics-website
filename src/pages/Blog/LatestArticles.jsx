import { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";

import { motion } from "framer-motion";

import {
  IconArrowRight,
  IconCalendar,
  IconClock,
} from "@tabler/icons-react";

const MotionCard = motion.create(Card);

const blogs = [
  {
    title: "Top Web Development Trends in 2026",
    category: "Web Development",
    date: "12 Jul 2026",
    read: "5 min read",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
  },
  {
    title: "How AI is Transforming Modern Businesses",
    category: "Artificial Intelligence",
    date: "10 Jul 2026",
    read: "7 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
  },
  {
    title: "Cloud Computing Best Practices",
    category: "Cloud",
    date: "08 Jul 2026",
    read: "6 min read",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
  },
  {
    title: "Why Every Business Needs CRM Software",
    category: "CRM",
    date: "05 Jul 2026",
    read: "4 min read",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
  },
  {
    title: "DevOps for Faster Software Delivery",
    category: "DevOps",
    date: "02 Jul 2026",
    read: "6 min read",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
  },
  {
    title: "Cybersecurity Tips for Enterprises",
    category: "Security",
    date: "30 Jun 2026",
    read: "8 min read",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
  },
];

const LatestArticles = () => {
  const colorScheme = useComputedColorScheme("light");
  const [showAll, setShowAll] = useState(false);

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <Container size="xl" pb={60}>
      <Stack align="center" mb={60}>
        <Badge
          radius="xl"
          size="lg"
          color="cyan"
          variant="light"
        >
          Latest Articles
        </Badge>

        <Title
          ta="center"
          order={2}
          style={{
            fontSize: "clamp(2rem,4vw,3.5rem)",
          }}
        >
          Explore Our Latest
          <br />
          Technology Insights
        </Title>

        <Text
          ta="center"
          maw={700}
          c="dimmed"
          size="lg"
        >
          Stay updated with software development, AI, cloud,
          cybersecurity, ERP, CRM, and digital transformation
          articles from our experts.
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="xl">
        {visibleBlogs.map((blog, index) => (
          <motion.div
            key={blog.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <MotionCard
              radius="xl"
              shadow="lg"
              withBorder
              p={0}
              h="100%"
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.25,
              }}
              style={{
                overflow: "hidden",
                background:
                  colorScheme === "dark"
                    ? "rgba(255,255,255,.04)"
                    : "#ffffff",
                backdropFilter: "blur(12px)",
              }}
            >
              <Image
                src={blog.image}
                h={220}
                alt={blog.title}
              />

              <Box p="lg">
                <Badge
                  color="cyan"
                  variant="light"
                  mb="md"
                >
                  {blog.category}
                </Badge>

                <Title order={4} mb="sm">
                  {blog.title}
                </Title>

                <Group
                  gap="lg"
                  mb="lg"
                  c="dimmed"
                >
                  <Group gap={5}>
                    <IconCalendar size={16} />
                    <Text size="sm">{blog.date}</Text>
                  </Group>

                  <Group gap={5}>
                    <IconClock size={16} />
                    <Text size="sm">{blog.read}</Text>
                  </Group>
                </Group>

                {/* <Button
                  variant="light"
                  radius="xl"
                  color="cyan"
                  rightSection={
                    <IconArrowRight size={16} />
                  }
                >
                  Read More
                </Button> */}
              </Box>
            </MotionCard>
          </motion.div>
        ))}
      </SimpleGrid>

      <Group justify="center" mt={60}>
        <Button
          radius="xl"
          size="lg"
          color="cyan"
          variant={showAll ? "light" : "filled"}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </Button>
      </Group>
    </Container>
  );
};

export default LatestArticles;