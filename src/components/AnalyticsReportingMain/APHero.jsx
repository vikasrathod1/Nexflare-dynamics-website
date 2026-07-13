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
const MotionBox = motion.create(Box);
const stats = [
  { value: "100+", label: "Dashboards Built" },
  { value: "3x", label: "Avg. ROI Improvement" },
  { value: "99%", label: "Report Accuracy" },
];
const APHero = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  const imageOpacity = isDark ? 0.9 : 0.7;
  // Improved scroll function
  const handleGetFreeAudit = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      // Scroll to contact form if it exists on the same page
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Fallback: Redirect to contact page (change URL if needed)
      window.location.href = "/contact"; // ← Change this if your contact page route is different
    }
  };
  return (
    <Box
      component="section"
      py={140}
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "88vh",
        alignItems: "center",
      }}
    >
      {/* Background image */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl40DcV5ggsXYOMndXAMISXp1xghqmZU43tyME6xXQbWyr50ibKlM6ZIn&s=10')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: imageOpacity,
          filter: isDark ? "brightness(0.45)" : "brightness(0.9)",
        }}
      />
      {/* Overlay */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? `
              linear-gradient(90deg, rgba(4,10,18,0.97) 0%, rgba(4,10,18,0.88) 40%, rgba(4,10,18,0.55) 65%, rgba(4,10,18,0.35) 100%),
              radial-gradient(circle at 15% 20%, rgba(20,184,166,.12), transparent 40%)
            `
            : `
              linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0.65) 65%, rgba(255,255,255,0.4) 100%),
              radial-gradient(circle at 15% 20%, rgba(20,184,166,.08), transparent 40%)
            `,
        }}
      />
      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          maw={620}
        >
          <Stack gap={30}>
            {/* Badge */}
            <Badge
              radius="xl"
              size="xl"
              color="teal"
              variant={isDark ? "light" : "outline"}
              px={22}
              py={14}
              style={{
                width: "fit-content",
                letterSpacing: 1,
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              ● Digital Marketing
            </Badge>
            {/* Heading */}
            <Title
              style={{
                fontSize: "clamp(2.6rem, 6vw, 4rem)",
                lineHeight: 1.1,
                fontWeight: 900,
                color: isDark ? "#ffffff" : "#0b1326",
              }}
            >
              Analytics &amp;
              <br />
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "#0d9488", to: "#14b8a6" }}
              >
                Reporting
              </Text>
            </Title>
            {/* Description */}
            <Text
              lh={1.7}
              style={{
                fontSize: 18,
                color: isDark ? "rgba(255,255,255,.75)" : "rgba(11,19,38,.75)",
              }}
            >
              Turn raw data into clear decisions. We track every click,
              conversion, and campaign — and translate the numbers into
              actionable strategies that drive real growth.
            </Text>
            {/* Buttons */}
            <Group mt={10}>
              <Button
                size="lg"
                radius="xl"
                color="teal"
                h={54}
                px={34}
                onClick={handleGetFreeAudit}   
              >
                Get Free Audit
              </Button>
              
            </Group>
            {/* Stats */}
            <Group mt={30} gap={48}>
              {stats.map((stat, index) => (
                <Box key={index}>
                  <Title
                    order={1}
                    c="teal"
                    fw={900}
                    style={{
                      fontSize: "clamp(26px, 3vw, 34px)",
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.value}
                  </Title>
                  <Text
                    tt="uppercase"
                    size="xs"
                    fw={600}
                    style={{
                      letterSpacing: 1,
                      color: isDark
                        ? "rgba(255,255,255,0.6)"
                        : "rgba(11,19,38,0.6)",
                    }}
                  >
                    {stat.label}
                  </Text>
                </Box>
              ))}
            </Group>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
};
export default APHero;