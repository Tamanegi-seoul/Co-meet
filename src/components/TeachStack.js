import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ListItem, ToggleButton } from "@mui/material";
import Chip from "@mui/material/Chip";
import { useSelector, useDispatch } from "react-redux";
import { deleteStack } from "../store/stack";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import styled from "styled-components";
import StackButton from "./StackButton/StackButton";
import shortid from "shortid";
// Main page안의 기술 스텍 나열 컴포넌트
const SlectedStack = styled.div`
  display: flex;
  width: 20%;
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
  const shortid = require("shortid");
  const [value, setValue] = React.useState(0);
  const chipStackList = useSelector(state => state.stack.stackList);
  const dispatch = useDispatch();

  const handleDelete = chipToDelete => () => {
    dispatch(deleteStack({ stack: chipToDelete }));
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
          <Tab label="프론트앤드" {...a11yProps(0)} />
          <Tab label="백앤드" {...a11yProps(1)} />
          <Tab label="모바일" {...a11yProps(2)} />
          <Tab label="기타" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <StackButton stack={"React"}></StackButton>
        <StackButton stack={"Vue"}></StackButton>
        <StackButton stack={"Angular"}></StackButton>
        <StackButton stack={"Svelte"}></StackButton>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StackButton stack={"Java"}></StackButton>
        <StackButton stack={"Spring"}></StackButton>
        <StackButton stack={"MongoDB"}></StackButton>
        <StackButton stack={"Django"}></StackButton>
        <StackButton stack={"Node"}></StackButton>
        <StackButton stack={"Python"}></StackButton>
        <StackButton stack={"Flask"}></StackButton>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <StackButton stack={"Flutter"}></StackButton>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <StackButton stack={"Aws"}></StackButton>
        <StackButton stack={"Docker"}></StackButton>
      </TabPanel>
      <SlectedStack>
        {chipStackList.map(data => {
          let icon;
          return (
            <ListItem key={shortid.generate()}>
              <Chip icon={icon} label={data} onDelete={handleDelete(data)} />
            </ListItem>
          );
        })}
      </SlectedStack>
    </Box>
  );
}
