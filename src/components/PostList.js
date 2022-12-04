import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import PostPreview from "./PostPreview";
import dummyPost from "../dummyPost/dummyPost.json";
import { useDispatch, useSelector } from "react-redux";
import { loadMorePostListAsync, loadPostListAsync } from "../store/post/post";
// // Main page안의 카드 슬롯 형태 리스트

const BigTable = styled.div`
  align-content: center;
  box-sizing: inherit;
  box-sizing: content-box;
`;

const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  const dispatch = useDispatch();
  const [observationTarget, setObservationTarget] = useState(null);
  const [value, setValue] = useState(0);
  const firstLoading = useSelector(state => state.post.FistPostListDone);
  const isLoading = useSelector(state => state.post.MorePostListLoading);
  const stackList = useSelector(state => state.stack.stackList);
  const postList = useSelector(state => state.post.postList);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    dispatch(loadPostListAsync());
    console.log("초기불러오기 완료");
  }, []);
  // -----------------------------------------------------------------------
  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        //함수자리
        console.log("발생");
        dispatch(loadMorePostListAsync());
      },
      { threshold: 1 }
    )
  );

  useEffect(() => {
    const currentTarget = observationTarget;
    const currentObserver = observer.current;
    if (currentTarget) {
      currentObserver.observe(currentTarget);
    }
    return () => {
      if (currentTarget) {
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [observationTarget]);
  // -----------------------------------------------------------------------
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="모두보기" {...a11yProps(0)} />
          <Tab label="스터디" {...a11yProps(1)} />
          <Tab label="프로젝트" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <BigTable>
          <Table>
            {firstLoading &&
              postList.data.map(data => {
                if (stackList.length === 0) {
                  return (
                    <PostPreview
                      title={data.title}
                      start_date={data.start_date}
                      designated_stacks={data.designated_stacks}
                      poster_nickname={data.poster_nickname}
                    />
                  );
                } else {
                  const stackChecked = data.designated_stacks.filter(x =>
                    stackList.includes(x)
                  );
                  if (!(stackChecked.length === 0)) {
                    return (
                      <PostPreview
                        title={data.title}
                        start_date={data.start_date}
                        designated_stacks={data.designated_stacks}
                        poster_nickname={data.poster_nickname}
                      />
                    );
                  }
                }
              })}
            {isLoading && <div>***********Loading************</div>}
            {!isLoading && <div ref={setObservationTarget}>1111</div>}
          </Table>
        </BigTable>
      </TabPanel>
      <TabPanel value={value} index={1}>
        스터디
      </TabPanel>
      <TabPanel value={value} index={2}>
        프로젝트
      </TabPanel>
    </Box>
  );
}
