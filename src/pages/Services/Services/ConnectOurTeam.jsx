import {
  Box,
  Container,
  Text,
  Title,
  SimpleGrid,
  Stack,
  Group,
  Image,
  Badge,
  useComputedColorScheme,
} from "@mantine/core";

const team = [
  {
    name: "Vikas Rathod",
    role: "Lead Software Engineer",
    // experience: "7+ years",
    location: "Pune, Maharashtra",
    skills: ["ReactJS", "JavaScript", "Java"],
    // Replace with your real team photo path, e.g. "/team/arjun.jpg"
    photo: "https://i.pravatar.cc/400?img=12",
  },
  {
    name: "Priya Nair",
    role: "UI/UX Design Lead",
    // experience: "5+ years",
    location: "Pune, Maharashtra",
    skills: ["Figma", "React", "Angular"],
    photo: "https://i.pravatar.cc/400?img=47",
  },
  {
    name: "Rohan Kulkarni",
    role: "DevOps Architect",
    // experience: "6+ years",
    location: "Pune, Maharashtra",
    skills: ["Kubernetes", "Docker", "Terraform"],
    photo: "https://i.pravatar.cc/400?img=13",
  },
  {
    name: "Sneha Desai",
    role: "Senior Project Manager",
    // experience: "8+ years",
    location: "Pune, Maharashtra",
    skills: ["Agile", "Scrum", "PMP"],
    photo: "https://i.pravatar.cc/400?img=32",
  },
];

const ConnectOurTeam = () => {
  // Parent component controls the page background; this component only
  // reads the computed color scheme to adapt text / card / badge colors.
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";

  // Aqua accent — brighter/lighter in dark mode for pop against the dark bg,
  // deeper/more saturated in light mode for readable contrast on white.
  const accent = isDark ? "#22d3ee" : "#0891b2"; // cyan-400 (dark) / cyan-600 (light)
  const textSecondary = isDark ? "rgba(226,232,240,.65)" : "rgba(15,23,42,.6)";
  const cardBg = isDark ? "rgba(255,255,255,.02)" : "rgba(15,23,42,.02)";
  const cardBorder = isDark ? "rgba(255,255,255,.08)" : "rgba(15,23,42,.08)";
  const badgeBg = isDark ? "rgba(255,255,255,.04)" : "rgba(15,23,42,.03)";
  const badgeBorder = isDark ? "rgba(255,255,255,.12)" : "rgba(15,23,42,.12)";
  const badgeText = isDark ? "rgba(226,232,240,.85)" : "rgba(15,23,42,.75)";

  return (
    <Box component="section" py={80}>
      <Container size="lg">
        <Box maw={560} mb={48}>
          <Group gap={8} mb={12}>
            {/* <Box w={24} h={2} style={{ background: accent }} /> */}
            <Text
              fw={700}
              size="xs"
              tt="uppercase"
              style={{ letterSpacing: 1.5, color: accent }}
            >
              The Team
            </Text>
          </Group>
          <Title
            order={2}
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              lineHeight: 1.15,
              color: accent,
              fontWeight: 800,
            }}
            mb={16}
          >
            Experts behind your success
          </Title>
          <Text style={{ color: textSecondary, lineHeight: 1.7 }} size="sm">
            A passionate team of engineers, designers, and strategists from
            Pune, driving innovation for businesses worldwide.
          </Text>
        </Box>

        <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} spacing="lg">
          {team.map(({ name, role, experience, location, skills, photo }) => (
            <Box
              key={name}
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: 8,
                overflow: "hidden",
                transition: "border-color 150ms ease, transform 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = accent;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = cardBorder;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Image
                src={photo}
                alt={name}
                h={220}
                fit="cover"
                style={{ display: "block" }}
              />

              <Stack gap={6} p="md">
                <Text fw={700} size="md" style={{ color: accent }}>
                  {name}
                </Text>
                <Text
                  fw={600}
                  size="xs"
                  tt="uppercase"
                  style={{ color: accent, letterSpacing: 0.5 }}
                >
                  {role}
                </Text>
                <Text size="xs" style={{ color: textSecondary }}>
                  {experience} · {location}
                </Text>

                <Group gap={6} mt={8}>
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      radius={4}
                      styles={{
                        root: {
                          background: badgeBg,
                          borderColor: badgeBorder,
                          color: badgeText,
                          textTransform: "none",
                          fontWeight: 500,
                        },
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </Group>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ConnectOurTeam;