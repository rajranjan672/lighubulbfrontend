import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Data from "../components/sampleData";
import Card from "../components/newCard";
import "../styles.css";

export default function Project() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Build" value="1" style={{ marginLeft: "20%" }} />
            <Tab label="Vouched" value="2" style={{ marginLeft: "18%" }} />
            <Tab label="Created" value="3" style={{ marginLeft: "20%" }} />
          </TabList>
        </Box>
        <TabPanel
          value="1"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          {Data.map((name) => {
            return (
              <Card
                name={name.name}
                description={name.description}
                logo={name.logo}
                className="card"
              />
            );
          })}
        </TabPanel>
        <TabPanel
          value="2"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          {" "}
          {Data.map((name) => {
            return (
              <Card
                name={name.name}
                description={name.description}
                logo={name.logo}
                className="card"
              />
            );
          })}
        </TabPanel>
        <TabPanel
          value="3"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          {" "}
          {Data.map((name) => {
            return (
              <Card
                name={name.name}
                description={name.description}
                logo={name.logo}
                className="card"
              />
            );
          })}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
