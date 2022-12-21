import { Box } from "@mui/material";
import { List, Typography } from "@mui/material";
import {
  LooksOne,
  LooksTwo,
  Looks3,
  Looks4,
  Looks5,
  Looks6,
} from "@mui/icons-material";
import InternalListItem from "../InternalListItem";
import Breadcrumb from "./Breadcrumb";

const Tips = () => {
  return (
    <Box>
      {" "}
      <Breadcrumb
        parent="Informacje praktyczne"
        parentUrl="/support"
        name="Porady"
      />
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h2">
          Porady od ludzi, co ukończyli GSS 2.0
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "teal.main",
          }}
        >
          <Box
            sx={{
              width: "45%",
              p: 2,
              backgroundColor: "teal.main",
              textAlign: "center",
            }}
          >
            <Typography variant="h3">
              Mateusz Stawarz (Zieloni w Podróży)
            </Typography>
            <Box>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "teal.lighter",
                  minHeight: "200px",
                }}
              >
                <InternalListItem
                  icon={<LooksOne />}
                  primaryText="Zawsze sikaj przez rozpięty rozporek"
                />
                <InternalListItem
                  icon={<LooksTwo />}
                  primaryText="Zawsze sikaj przez rozpięty rozporek"
                />
                <InternalListItem
                  icon={<Looks3 />}
                  primaryText="Zawsze sikaj przez rozpięty rozporek"
                />
                <InternalListItem
                  icon={<Looks4 />}
                  primaryText="Zawsze sikaj przez rozpięty rozporek"
                />
                <InternalListItem
                  icon={<Looks5 />}
                  primaryText="Zawsze sikaj przez rozpięty rozporek"
                />
                <InternalListItem
                  icon={<Looks6 />}
                  primaryText="Zawsze sikaj przez rozpięty rozporek"
                />
              </List>
            </Box>
          </Box>

          <Box
            sx={{
              width: "45%",
              p: 2,
              backgroundColor: "teal.main",
              textAlign: "center",
            }}
          >
            <Typography variant="h3">
              Mateusz Stawarz (Zieloni w Podróży)
            </Typography>
            <Box>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "teal.lighter",
                  minHeight: "200px",
                }}
              >
                <InternalListItem
                  icon={<LooksOne />}
                  primaryText="Zawsze sikaj przez rozpięty rozporek"
                />
              </List>
            </Box>
          </Box>

          <Box
            sx={{
              width: "45%",
              p: 2,
              backgroundColor: "teal.main",
              textAlign: "center",
            }}
          >
            <Typography variant="h3">
              Mateusz Stawarz (Zieloni w Podróży)
            </Typography>
            <Box>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "teal.lighter",
                  minHeight: "200px",
                }}
              >
                <InternalListItem
                  icon={<LooksOne />}
                  primaryText="Zawsze sikaj przez rozpięty rozporek"
                />
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Tips;
