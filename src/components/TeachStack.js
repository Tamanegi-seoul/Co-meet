import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ListItem, ToggleButton } from "@mui/material";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import styled from "styled-components";
// Main page안의 기술 스텍 나열 컴포넌트
const SlectedStack = styled.div`
  display: flex;
  width: 25%;
`;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="모두보기" {...a11yProps(0)} />
          <Tab label="프론트앤드" {...a11yProps(1)} />
          <Tab label="백앤드" {...a11yProps(2)} />
          <Tab label="모바일" {...a11yProps(3)} />
          <Tab label="기타" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ToggleButton
          sx={{ borderRadius: 10 }}
          value="check"
          selected={false}
          onChange={() => {}}
        >
          <img alt="" src="img/react.png" />
          리액트
        </ToggleButton>
      </TabPanel>
      <TabPanel value={value} index={1}>
        프론트앤드
      </TabPanel>
      <TabPanel value={value} index={2}>
        백앤드
      </TabPanel>
      <TabPanel value={value} index={3}>
        모바일
      </TabPanel>
      <TabPanel value={value} index={4}>
        기타
      </TabPanel>
      <SlectedStack>
        {chipData.map(data => {
          let icon;
          return (
            <ListItem key={data.key}>
              <Chip
                icon={icon}
                label={data.label}
                onDelete={handleDelete(data)}
              />
            </ListItem>
          );
        })}
      </SlectedStack>
    </Box>
  );
}
