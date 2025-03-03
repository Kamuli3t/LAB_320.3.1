import Score from "./Score";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Card, Box } from "@mui/material";

function Learner({ learner }) {
  const { name, bio, scores } = learner;
  return (
    <>
      <Card elevation={4} sx={{ marginBottom: "1rem" }}>
        <Box
          sx={{
            gap: "20px",
            padding: 1,
            display: "flex",
          }}
        >
          <Avatar alt="Travis Howard" src="" sx={{ width: 84, height: 84 }} />
          <Box>
            <Typography variant="h4">{name}</Typography>
            <Typography variant="body1">{bio}</Typography>
            <Typography
              sx={{
                color: "rgb(126, 126, 126)",
                paddingY: 0,
                textAlign: "left",
              }}
              variant="body1"
            >
              <Score scores={scores} />
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
}

export default Learner;
