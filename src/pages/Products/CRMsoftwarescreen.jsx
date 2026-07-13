import React from "react";
import {
  Box,
  Badge,
  Button,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconDatabase,
  IconChartLine,
  IconUsersGroup,
  IconMailForward,
  IconArrowRight,
  IconPointFilled,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

/* ── static data ───────────────────────────────────── */
const features = [
  { icon: IconDatabase,    title: "Unified Customer Database",      desc: "360-degree view of contact details, purchase history, and all interactions" },
  { icon: IconChartLine,   title: "Sales Pipeline Optimization",    desc: "Monitor progress, identify bottlenecks, and forecast revenue accurately" },
  { icon: IconUsersGroup,  title: "Lead Management",                desc: "Track, nurture, and convert leads with automated workflows and real-time updates" },
  { icon: IconMailForward, title: "Marketing Automation",           desc: "Targeted campaigns with segmentation, email marketing, and performance analytics" },
];

const bullets = [
  "Enhanced productivity via automated repetitive tasks",
  "Real-time data sharing for improved team collaboration",
  "Personalized customer experience with deep insights",
  "Scalable — adapts as your business grows",
];

/* ── component ─────────────────────────────────────── */
const CRMSoftwareScreen = () => {

  const navigate = useNavigate();
  const isDark = useComputedColorScheme("light") === "dark";

  /* ── same semantic token pattern ── */
  const accent      = isDark ? "#00D4C8"                    : "#0891B2";
  const accentDim   = isDark ? "rgba(0,212,200,0.12)"       : "rgba(8,145,178,0.10)";
  const surface     = isDark ? "rgba(255,255,255,0.04)"      : "rgba(255,255,255,0.85)";
  const surface2    = isDark ? "rgba(255,255,255,0.06)"      : "rgba(255,255,255,0.95)";
  const border      = isDark ? "rgba(255,255,255,0.08)"      : "rgba(37,99,235,0.12)";
  const textMain    = isDark ? "#ffffff"                    : "#0f172a";
  const textSub     = isDark ? "rgba(255,255,255,0.75)"      : "#334155";
  const textDim     = isDark ? "rgba(255,255,255,0.45)"      : "#64748b";
  const statGood    = isDark ? "#00D4C8"                    : "#0891B2";
  const statNeutral = isDark ? "rgba(255,255,255,0.75)"      : "#475569";
  const barEmpty    = isDark ? "rgba(255,255,255,0.10)"      : "rgba(37,99,235,0.10)";
  const btnOutline  = isDark ? "rgba(255,255,255,0.22)"      : "rgba(37,99,235,0.35)";
  const btnTextOut  = isDark ? "#ffffff"                    : "#1e40af";
  const btnPrimCol  = isDark ? "#0a0f1e"                    : "#ffffff";

  const imgBg    = isDark
    ? "linear-gradient(160deg,#162032 0%,#0a1520 60%,#071018 100%)"
    : "linear-gradient(160deg,#dbeafe 0%,#bfdbfe 60%,#93c5fd 100%)";
  const silShade = isDark
    ? ["#1e3048","#162840","#1a2e44","#122034"]
    : ["#93c5fd","#60a5fa","#7dd3fc","#38bdf8"];

  const dashStats = [
    { label: "Active Leads",          value: "1,284",  color: statGood    },
    { label: "Deals Closed (Month)",  value: "₹42L",   color: statGood    },
    { label: "Email Open Rate",       value: "68.2%",  color: statNeutral },
    { label: "Customer Retention",    value: "94%",    color: statGood    },
  ];

  return (
    <Container size="xl" py={{ base:50, md:80 }}>
      <Grid gutter={{ base:40, md:60 }} align="flex-start">

        {/* ══════════════ LEFT — content ══════════════ */}
        <Grid.Col span={{ base:12, md:6 }}>
          <motion.div
            initial={{ opacity:0, x:-30 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.7 }}
          >
            <Stack gap={20}>

              <Text fz={11} fw={700} style={{ color:accent, letterSpacing:2.5, textTransform:"uppercase" }}>
                CRM Software
              </Text>

              <Text fz={12} fw={600} style={{ color:textDim, letterSpacing:1.5, textTransform:"uppercase" }}>
                NEX CRM
              </Text>

              <Title
                order={1}
                style={{
                  color: textMain,
                  fontWeight: 900,
                  fontSize: "clamp(1.9rem,3.5vw,2.8rem)",
                  lineHeight: 1.12,
                  letterSpacing: -0.5,
                }}
              >
                Elevate Customer
                <br />Relationships with NEX CRM
              </Title>

              <Text size="sm" lh={1.85} style={{ color:textSub, maxWidth:480 }}>
                In the digital era, where customer expectations are at an all-time
                high, building and maintaining strong relationships is critical for
                business success. NEX CRM is a robust and intuitive platform that
                centralizes all aspects of customer management — from lead generation
                and sales tracking to personalized engagement and after-sales support,
                empowering businesses to deliver exceptional experiences at every
                touchpoint.
              </Text>

              {/* feature 2×2 grid */}
              <SimpleGrid cols={2} spacing={12} mt={4}>
                {features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity:0, y:20 }}
                      animate={{ opacity:1, y:0 }}
                      transition={{ delay:0.15 + i*0.08, duration:0.5 }}
                    >
                      <Box
                        className="crm-feat-card"
                        style={{
                          background: surface,
                          border: `1px solid ${border}`,
                          borderRadius: 12,
                          padding: "16px 14px",
                          height: "100%",
                          backdropFilter: "blur(12px)",
                          transition: "border-color .25s, box-shadow .25s",
                        }}
                      >
                        <Group gap={8} mb={8} wrap="nowrap">
                          <Box style={{
                            width:28, height:28, borderRadius:8,
                            background: accentDim,
                            display:"flex", alignItems:"center", justifyContent:"center",
                            flexShrink:0,
                          }}>
                            <Icon size={15} color={accent} />
                          </Box>
                          <Text size="xs" fw={700} style={{ color:textMain, lineHeight:1.3 }}>
                            {f.title}
                          </Text>
                        </Group>
                        <Text size="xs" lh={1.7} style={{ color:textDim }}>
                          {f.desc}
                        </Text>
                      </Box>
                    </motion.div>
                  );
                })}
              </SimpleGrid>

              {/* bullets */}
              <Stack gap={8} mt={4}>
                {bullets.map((b, i) => (
                  <Group key={i} gap={8} wrap="nowrap" align="flex-start">
                    <IconPointFilled size={10} color={accent} style={{ flexShrink:0, marginTop:5 }} />
                    <Text size="sm" style={{ color:textSub }}>{b}</Text>
                  </Group>
                ))}
              </Stack>

              {/* CTAs */}
              <Group gap={12} mt={8}>
                <Button
                  size="md" radius="xl"
                  rightSection={<IconArrowRight size={16}/>}
                  style={{ background:accent, color:btnPrimCol, fontWeight:700, border:"none" }}
                  className="crm-btn"
                   onClick={()=> navigate("/contact")}
                >
                  Request a Demo
                </Button>
                {/* <Button
                  size="md" radius="xl" variant="outline"
                  style={{ borderColor:btnOutline, color:btnTextOut }}
                  className="crm-btn"
                >
                  Learn More
                </Button> */}
              </Group>

            </Stack>
          </motion.div>
        </Grid.Col>

        {/* ══════════════ RIGHT — visuals ══════════════ */}
        <Grid.Col span={{ base:12, md:6 }}>
          <motion.div
            initial={{ opacity:0, x:30 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.7, delay:0.1 }}
          >
            <Stack gap={16}>

              {/* Hero image card */}
              <Box style={{
                borderRadius:16, overflow:"hidden", position:"relative",
                border:`1px solid ${border}`, height:240,
              }}>
                <Box style={{ position:"absolute", inset:0, background:imgBg }}>
                  {/* laptop/screen silhouette shapes */}
                  {[
                    { left:"8%",  bottom:0, width:50,  height:120, rx:6 },
                    { left:"25%", bottom:0, width:200, height:140, rx:10 },
                    { left:"62%", bottom:0, width:60,  height:150, rx:6 },
                    { left:"76%", bottom:0, width:80,  height:180, rx:8 },
                  ].map((s,i)=>(
                    <Box key={i} style={{
                      position:"absolute", left:s.left, bottom:s.bottom,
                      width:s.width, height:s.height, borderRadius:s.rx,
                      background: silShade[i],
                    }}/>
                  ))}
                  {/* screen glow on laptop silhouette */}
                  <Box style={{
                    position:"absolute", left:"28%", bottom:"42%",
                    width:"36%", height:"55%",
                    background: isDark ? "rgba(0,212,200,0.08)" : "rgba(8,145,178,0.12)",
                    borderRadius:6, filter:"blur(4px)",
                  }}/>
                  {/* chart line decoration */}
                  {[35,50,40,65,55,70,60,80].map((h, i)=>(
                    <Box key={i} style={{
                      position:"absolute",
                      left:`${28 + i*4.5}%`,
                      bottom:`${42 + h*0.28}%`,
                      width:3, height:h*0.28+"%",
                      background: accent,
                      opacity:0.5,
                      borderRadius:2,
                    }}/>
                  ))}
                  {/* window lights */}
                  {[
                    { left:"70%", top:"12%", w:20, h:32 },
                    { left:"80%", top:"8%",  w:16, h:24 },
                  ].map((b,i)=>(
                    <Box key={i} style={{
                      position:"absolute", left:b.left, top:b.top,
                      width:b.w, height:b.h, borderRadius:4,
                      background: isDark ? "rgba(200,160,80,0.30)" : "rgba(255,255,255,0.55)",
                      filter:"blur(2px)",
                    }}/>
                  ))}
                </Box>

                {/* bottom labels */}
                <Box style={{
                  position:"absolute", bottom:0, left:0, right:0,
                  display:"flex", justifyContent:"space-between", alignItems:"flex-end",
                  padding:"12px 16px",
                  background:"linear-gradient(0deg,rgba(0,0,0,0.65) 0%,transparent 100%)",
                }}>
                  <Text fw={700} size="sm" c="white">NEX CRM</Text>
                  <Badge
                    size="sm"
                    style={{
                      background: accentDim,
                      color: accent,
                      border: `1px solid ${accent}55`,
                      fontWeight: 700,
                      letterSpacing: 1,
                    }}
                  >
                    CUSTOMER RELATIONS
                  </Badge>
                </Box>
              </Box>

              {/* Dashboard card */}
              <motion.div
                initial={{ opacity:0, y:20 }}
                animate={{ opacity:1, y:0 }}
                transition={{ delay:0.35, duration:0.55 }}
              >
                <Box style={{
                  background: surface2,
                  border: `1px solid ${border}`,
                  borderRadius: 16,
                  padding: "20px 20px 16px",
                  position: "relative",
                  overflow: "hidden",
                  backdropFilter: "blur(12px)",
                }}>
                  <Box style={{
                    position:"absolute", top:0, left:0, right:0, height:2,
                    background:`linear-gradient(90deg,${accent},#6366F1)`,
                  }}/>

                  <Group justify="space-between" mb={18} align="center">
                    <Group gap={6}>
                      {["#ef4444","#f59e0b","#22c55e"].map((c,i)=>(
                        <Box key={i} style={{ width:10, height:10, borderRadius:"50%", background:c }}/>
                      ))}
                    </Group>
                    <Text fz={11} style={{ color:textDim, letterSpacing:1 }}>
                      CRM Pipeline — Live
                    </Text>
                  </Group>

                  <Stack gap={10}>
                    {dashStats.map(({ label, value, color }, i) => (
                      <Group key={i} justify="space-between" align="center">
                        <Text size="xs" style={{ color:textDim }}>{label}</Text>
                        <Text size="xs" fw={700} style={{ color }}>{value}</Text>
                      </Group>
                    ))}
                  </Stack>

                  <Group gap={8} mt={18} wrap="nowrap">
                    {[false,true,false,true,true].map((fill, i) => (
                      <Box key={i} style={{
                        flex:`${[28,22,20,18,12][i]}%`, height:8, borderRadius:4, minWidth:8,
                        background: fill ? accent : barEmpty,
                      }}/>
                    ))}
                  </Group>
                </Box>
              </motion.div>

            </Stack>
          </motion.div>
        </Grid.Col>

      </Grid>

      <style>{`
        .crm-feat-card:hover {
          border-color: ${accent}55 !important;
          box-shadow: 0 8px 28px ${accentDim} !important;
        }
        .crm-btn {
          transition: transform .22s ease, box-shadow .22s ease !important;
        }
        .crm-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 10px 28px ${accentDim} !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .crm-feat-card, .crm-btn { transition: none !important; }
        }
      `}</style>
    </Container>
  );
};

export default CRMSoftwareScreen;