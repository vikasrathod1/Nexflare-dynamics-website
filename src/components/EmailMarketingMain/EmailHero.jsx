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
  { value: "42x", label: "Average Email ROI" },
  { value: "68%", label: "Higher Open Rates" },
  { value: "5M+", label: "Emails Sent Monthly" },
];
const EmailHero = () => {
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  // ==================== ONLY ADDED THIS ====================
  const handleGetFreeEmailAudit = () => {
    window.location.href = "/contact"; // Change if your contact route is different
  };
  // ========================================================
  return (
    <Box
      component="section"
      py={140}
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "88vh",
        // display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background image */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: isDark ? "brightness(0.55)" : "brightness(0.9)",
        }}
      />
      {/* Overlay */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? `
              linear-gradient(90deg, rgba(4,10,18,0.96) 0%, rgba(4,10,18,0.85) 40%, rgba(4,10,18,0.55) 65%, rgba(4,10,18,0.35) 100%),
              radial-gradient(circle at 15% 20%, rgba(6,182,212,.12), transparent 40%)
            `
            : `
              linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0.65) 65%, rgba(255,255,255,0.4) 100%),
              radial-gradient(circle at 15% 20%, rgba(6,182,212,.08), transparent 40%)
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
              Email
              <br />
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "#0d9488", to: "#14b8a6" }}
              >
                Marketing
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
              Turn your email list into a revenue engine. We design, write,
              and automate email campaigns that nurture leads, retain
              customers, and drive consistent sales.
            </Text>
            {/* Buttons */}
            <Group mt={10}>
              <Button 
                size="lg" 
                radius="xl" 
                color="teal" 
                h={54} 
                px={34}
                onClick={handleGetFreeEmailAudit}  
              >
                Get Free Email Audit
              </Button>
{/* 
              <Button
                size="lg"
                radius="xl"
                variant="default"
                h={54}
                px={30}
                rightSection={<span>→</span>}
              >
                See Our Services
              </Button> */}
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
export default EmailHero;