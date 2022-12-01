import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ListItem } from "@mui/material";
import Chip from "@mui/material/Chip";
import { useSelector, useDispatch } from "react-redux";
import { deleteStack } from "../store/stack";
import styled from "styled-components";
import StackButton from "./StackButton/StackButton";
import StackListJson from "../tech_stacks.json";

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

  const LANGUAGE_STACKLIST = Object.keys(StackListJson.language);
  const FRAMWORK_STACKLIST = Object.keys(StackListJson.framework);
  const ETC_STACKLIST = Object.keys(StackListJson.etc);

  // language
  const laguagneList = LANGUAGE_STACKLIST.map((item, index) => {
    return (
      <StackButton key={index} stack={LANGUAGE_STACKLIST[index]}></StackButton>
    );
  });

  // framwork
  const frameworkList = FRAMWORK_STACKLIST.map((item, index) => {
    return (
      <StackButton key={index} stack={FRAMWORK_STACKLIST[index]}></StackButton>
    );
  });

  // etc
  const etcList = ETC_STACKLIST.map((item, index) => {
    return <StackButton key={index} stack={ETC_STACKLIST[index]}></StackButton>;
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="언어" {...a11yProps(0)} />
          <Tab label="프레임워크" {...a11yProps(1)} />
          <Tab label="기타" {...a11yProps(2)} />
        </Tabs>
      </Box>
      {/* Language */}
      <TabPanel value={value} index={0}>
        {laguagneList}
      </TabPanel>
      {/* FrameWork */}
      <TabPanel value={value} index={1}>
        {frameworkList}
      </TabPanel>
      {/* ETC */}
      <TabPanel value={value} index={2}>
        {etcList}
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
