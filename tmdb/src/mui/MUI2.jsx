import Button from "@mui/material/Button";

function MUI2() {
  return (
    <div>
      <Button
        style={{
          backgroundColor: "#1976d2",
          color: "white",
          padding: 16,
        }}
      >
        버튼1
      </Button>
      <Button
        sx={{
          backgroundColor: "warning.main",
          color: "white",
          padding: "16px",
          "&:hover": {
            backgorundColor: "red",
          },
        }}
      >
        버튼2
      </Button>
      <Button variant="outlined">버튼3</Button>
    </div>
  );
}

export default MUI2;
