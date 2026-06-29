import {
  Grid,
  TextInput,
  Select,
  Button,
  Container,
} from "@mantine/core";
import {
  IconSearch,
  IconFilterOff,
} from "@tabler/icons-react";

const JobFilters = ({
  filters,
  setFilters,
}) => {
  const handleChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value || "",
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      department: "",
      jobType: "",
      location: "",
    });
  };

  return (
    <Container size="xl" style={{ position: "relative", zIndex: 2 }}>
    <Grid gutter="md">
      <Grid.Col span={{ base: 12, md: 4 }}>
        <TextInput
          placeholder="Search jobs..."
          leftSection={<IconSearch size={18} />}
          value={filters.search}
          onChange={(e) =>
            handleChange("search", e.currentTarget.value)
          }
          radius="xl"
          size="md"
        />
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 6, md: 2.5 }}>
        <Select
          placeholder="Department"
          radius="xl"
          size="md"
          value={filters.department}
          onChange={(value) =>
            handleChange("department", value)
          }
          data={[
            "Frontend",
            "Backend",
            "UI/UX",
            "QA",
            "DevOps",
            "Marketing",
            "HR",
            "Sales",
          ]}
          clearable
        />
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
        <Select
          placeholder="Job Type"
          radius="xl"
          size="md"
          value={filters.jobType}
          onChange={(value) =>
            handleChange("jobType", value)
          }
          data={[
            "Full Time",
            "Part Time",
            "Internship",
            "Contract",
            "Remote",
          ]}
          clearable
        />
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
        <Select
          placeholder="Location"
          radius="xl"
          size="md"
          value={filters.location}
          onChange={(value) =>
            handleChange("location", value)
          }
          data={[
            "Pune",
            "Mumbai",
            "Bangalore",
            "Hyderabad",
            "Remote",
          ]}
          clearable
        />
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 6, md: 1.5 }}>
        <Button
          fullWidth
          radius="xl"
          variant="light"
          color="red"
          leftSection={<IconFilterOff size={18} />}
          onClick={clearFilters}
        >
          Clear
        </Button>
      </Grid.Col>
    </Grid>
    </Container>
  );
};

export default JobFilters;