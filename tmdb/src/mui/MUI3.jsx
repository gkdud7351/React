import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

function MUI3() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {/* <Grid size={8}>size=8</Grid>
        <Grid size={4}>size=4</Grid>
        <Grid size={8}>size=8</Grid>
        <Grid size={4}>size=4</Grid> */}
        <Grid size={{ xs: 6, md: 8 }}>
          <div style={{ backgroundColor: "skyblue" }}>xs:6,md:8</div>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <div style={{ backgroundColor: "skyblue" }}>xs:6,md:4</div>
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
          <div style={{ backgroundColor: "skyblue" }}>xs:6,md:8</div>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <div style={{ backgroundColor: "skyblue" }}>xs:6,md:4</div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MUI3;
