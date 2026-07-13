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
  IconCalendarTime,
  IconBell,
  IconCalendarEvent,
  IconCreditCard,
  IconArrowRight,
  IconPointFilled,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const features = [
  { icon: IconCalendarTime,  title: "Real-Time Booking",              desc: "Clients book anytime, anywhere with live availability updates" },
  { icon: IconBell,          title: "Automated Reminders",            desc: "Custom SMS and email reminders that slash no-show rates" },
  { icon: IconCalendarEvent, title: "Calendar Integration",           desc: "Sync with Google Calendar, Outlook, and any preferred calendar system" },
  { icon: IconCreditCard,    title: "Secure Payment Integration",     desc: "Collect payments at booking to reduce cancellations instantly" },
];

const bullets = [
  "Ideal for healthcare, salons, fitness, consulting & more",
  "Multi-channel: website, app, and social media booking",
  "Flexible: recurring, group & multi-location scheduling",
  "Customizable branding for your booking pages",
];

const BookingScreen = () => {
  const navigate = useNavigate();
  const isDark = useComputedColorScheme("light") === "dark";

  const accent      = isDark ? "#00D4C8"                    : "#0891B2";
  const accentDim   = isDark ? "rgba(0,212,200,0.12)"       : "rgba(8,145,178,0.10)";
  const surface     = isDark ? "rgba(255,255,255,0.04)"      : "rgba(255,255,255,0.85)";
  const surface2    = isDark ? "rgba(255,255,255,0.06)"      : "rgba(255,255,255,0.95)";
  const border      = isDark ? "rgba(255,255,255,0.08)"      : "rgba(37,99,235,0.12)";
  const textMain    = isDark ? "#ffffff"                    : "#0f172a";
  const textSub     = isDark ? "rgba(255,255,255,0.75)"      : "#334155";
  const textDim     = isDark ? "rgba(255,255,255,0.45)"      : "#64748b";
  const statGood    = isDark ? "#00D4C8"                    : "#0891B2";
  const statWarn    = isDark ? "#f87171"                    : "#ef4444";
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
    { label: "Appointments Today", value: "48 Booked", color: statGood    },
    { label: "No-Show Rate",        value: "↓ 3.2%",   color: statWarn    },
    { label: "Reminders Sent",      value: "124 SMS",  color: statNeutral },
    { label: "Revenue (Month)",     value: "₹2.8L",    color: statGood    },
  ];

  return (
    <Container size="xl" py={{ base:50, md:80 }}>
      <Grid gutter={{ base:40, md:60 }} align="flex-start">

        {/* ══════════ LEFT — visuals ══════════ */}
        <Grid.Col span={{ base:12, md:6 }}>
          <motion.div
            initial={{ opacity:0, x:-30 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.7 }}
          >
            <Stack gap={16}>

              {/* Hero image card */}
              <Box style={{
                borderRadius:16, overflow:"hidden", position:"relative",
                border:`1px solid ${border}`, height:240,
              }}>
                <Box style={{ position:"absolute", inset:0, background:imgBg }}>
                  {/* person at whiteboard silhouettes */}
                  {[
                    { left:"5%",  bottom:0, width:55,  height:135, rx:8 },
                    { left:"22%", bottom:0, width:100, height:210, rx:8 },
                    { left:"52%", bottom:0, width:80,  height:170, rx:8 },
                    { left:"72%", bottom:0, width:65,  height:145, rx:8 },
                  ].map((s,i)=>(
                    <Box key={i} style={{
                      position:"absolute", left:s.left, bottom:s.bottom,
                      width:s.width, height:s.height, borderRadius:s.rx,
                      background:silShade[i],
                    }}/>
                  ))}
                  {/* whiteboard shape */}
                  <Box style={{
                    position:"absolute", left:"14%", top:"10%",
                    width:"45%", height:"52%",
                    background: isDark ? "rgba(255,255,255,0.06)" : "rgba(37,99,235,0.08)",
                    borderRadius:8, border:`1px solid ${isDark?"rgba(255,255,255,0.10)":"rgba(37,99,235,0.15)"}`,
                  }}/>
                  {/* calendar grid lines on whiteboard */}
                  {[0,1,2,3].map(col=>(
                    [0,1,2].map(row=>(
                      <Box key={`${col}-${row}`} style={{
                        position:"absolute",
                        left:`${18 + col*10}%`, top:`${18 + row*12}%`,
                        width:"8%", height:"8%",
                        background: isDark ? "rgba(0,212,200,0.15)" : "rgba(8,145,178,0.18)",
                        borderRadius:3,
                      }}/>
                    ))
                  ))}
                  {/* plant blob top-left */}
                  <Box style={{
                    position:"absolute", left:"-2%", top:"5%",
                    width:60, height:80, borderRadius:"50% 50% 40% 40%",
                    background: isDark ? "rgba(34,197,94,0.18)" : "rgba(34,197,94,0.22)",
                    filter:"blur(3px)",
                  }}/>
                  {/* window light */}
                  <Box style={{
                    position:"absolute", right:"8%", top:"8%",
                    width:20, height:34, borderRadius:4,
                    background: isDark ? "rgba(200,160,80,0.30)" : "rgba(255,255,255,0.55)",
                    filter:"blur(2px)",
                  }}/>
                </Box>

                <Box style={{
                  position:"absolute", bottom:0, left:0, right:0,
                  display:"flex", justifyContent:"space-between", alignItems:"flex-end",
                  padding:"12px 16px",
                  background:"linear-gradient(0deg,rgba(0,0,0,0.65) 0%,transparent 100%)",
                }}>
                  <Text fw={700} size="sm" c="white">Booking System</Text>
                  <Badge size="sm" style={{
                    background:accentDim, color:accent,
                    border:`1px solid ${accent}55`, fontWeight:700, letterSpacing:1,
                  }}>
                    SCHEDULING
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
                  background:surface2, border:`1px solid ${border}`,
                  borderRadius:16, padding:"20px 20px 16px",
                  position:"relative", overflow:"hidden", backdropFilter:"blur(12px)",
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
                      Booking Dashboard — Today
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
                    {[true,false,true,true,false].map((fill, i) => (
                      <Box key={i} style={{
                        flex:`${[26,14,24,20,16][i]}%`, height:8, borderRadius:4, minWidth:8,
                        background: fill ? accent : barEmpty,
                      }}/>
                    ))}
                  </Group>
                </Box>
              </motion.div>

            </Stack>
          </motion.div>
        </Grid.Col>

        {/* ══════════ RIGHT — content ══════════ */}
        <Grid.Col span={{ base:12, md:6 }}>
          <motion.div
            initial={{ opacity:0, x:30 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.7, delay:0.1 }}
          >
            <Stack gap={20}>

              <Text fz={11} fw={700} style={{ color:accent, letterSpacing:2.5, textTransform:"uppercase" }}>
                Booking Software
              </Text>

              <Text fz={12} fw={600} style={{ color:textDim, letterSpacing:1.5, textTransform:"uppercase" }}>
                Appointment Booking Software
              </Text>

              <Title order={1} style={{
                color:textMain, fontWeight:900,
                fontSize:"clamp(1.9rem,3.5vw,2.8rem)",
                lineHeight:1.12, letterSpacing:-0.5,
              }}>
                Streamline Scheduling —
                <br />Reduce No-Shows
              </Title>

              <Text size="sm" lh={1.85} style={{ color:textSub, maxWidth:480 }}>
                In a world where time is money, efficient scheduling can make all
                the difference. Our Appointment Booking Software is an intelligent
                platform that automates the scheduling process, enabling businesses
                to manage appointments effortlessly. With real-time updates,
                automated reminders, and an intuitive interface, it eliminates
                manual scheduling errors, saving time and boosting productivity for
                your entire team and client base.
              </Text>

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
                        className="bk-feat-card"
                        style={{
                          background:surface, border:`1px solid ${border}`,
                          borderRadius:12, padding:"16px 14px", height:"100%",
                          backdropFilter:"blur(12px)",
                          transition:"border-color .25s, box-shadow .25s",
                        }}
                      >
                        <Group gap={8} mb={8} wrap="nowrap">
                          <Box style={{
                            width:28, height:28, borderRadius:8, background:accentDim,
                            display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
                          }}>
                            <Icon size={15} color={accent} />
                          </Box>
                          <Text size="xs" fw={700} style={{ color:textMain, lineHeight:1.3 }}>
                            {f.title}
                          </Text>
                        </Group>
                        <Text size="xs" lh={1.7} style={{ color:textDim }}>{f.desc}</Text>
                      </Box>
                    </motion.div>
                  );
                })}
              </SimpleGrid>

              <Stack gap={8} mt={4}>
                {bullets.map((b, i) => (
                  <Group key={i} gap={8} wrap="nowrap" align="flex-start">
                    <IconPointFilled size={10} color={accent} style={{ flexShrink:0, marginTop:5 }} />
                    <Text size="sm" style={{ color:textSub }}>{b}</Text>
                  </Group>
                ))}
              </Stack>

              <Group gap={12} mt={8}>
                <Button
                  size="md" radius="xl"
                  rightSection={<IconArrowRight size={16}/>}
                  style={{ background:accent, color:btnPrimCol, fontWeight:700, border:"none" }}
                  className="bk-btn"
                   onClick={()=> navigate("/contact")}
                >
                  Get a Demo
                </Button>
                {/* <Button
                  size="md" radius="xl" variant="outline"
                  style={{ borderColor:btnOutline, color:btnTextOut }}
                  className="bk-btn"
                >
                  Learn More
                </Button> */}
              </Group>

            </Stack>
          </motion.div>
        </Grid.Col>

      </Grid>

      <style>{`
        .bk-feat-card:hover {
          border-color: ${accent}55 !important;
          box-shadow: 0 8px 28px ${accentDim} !important;
        }
        .bk-btn {
          transition: transform .22s ease, box-shadow .22s ease !important;
        }
        .bk-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 10px 28px ${accentDim} !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .bk-feat-card, .bk-btn { transition: none !important; }
        }
      `}</style>
    </Container>
  );
};

export default BookingScreen;