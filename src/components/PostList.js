import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import PostPreview from "./PostPreview";
import { useDispatch, useSelector } from "react-redux";
import { loadPostListAsync } from "../store/post/post";
import Loading from "../pages/Loading";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import NoSearch from "./NoSearch";
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

const Blank = styled.div`
  height: 300px;
  width: 100%;
  background-color: white;
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
  const [value, setValue] = useState(0);
  const isLoading = useSelector(state => state.post.MorePostListLoading);
  const postListShow = useSelector(state => state.post.postListShow);
  const setInfiniteScroll = useIntersectionObserver();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    dispatch(loadPostListAsync());
  }, []);

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
            {postListShow.length !== 0 ? (
              <>
                {postListShow.map(data => {
                  return (
                    <PostPreview
                      title={data.title}
                      start_date={data.start_date}
                      designated_stacks={data.designated_stacks}
                      poster_nickname={data.poster_nickname}
                      post_id={data.post_id}
                    />
                  );
                })}
                {isLoading && <Loading />}
                {!isLoading && <Blank ref={setInfiniteScroll}></Blank>}
              </>
            ) : (
              <NoSearch />
            )}
          </Table>
        </BigTable>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <BigTable>
          <Table>
            {postListShow.length !== 0 ? (
              <>
                {postListShow.map(data => {
                  return (
                    <PostPreview
                      title={data.title}
                      start_date={data.start_date}
                      designated_stacks={data.designated_stacks}
                      poster_nickname={data.poster_nickname}
                      post_id={data.post_id}
                    />
                  );
                })}
                {isLoading && <Loading />}
                {!isLoading && <Blank ref={setInfiniteScroll}></Blank>}
              </>
            ) : (
              <NoSearch />
            )}
          </Table>
        </BigTable>
      </TabPanel>

      <TabPanel value={value} index={2}>
        {postListShow.length !== 0 ? (
          <>
            {postListShow.map(data => {
              return (
                <PostPreview
                  title={data.title}
                  start_date={data.start_date}
                  designated_stacks={data.designated_stacks}
                  poster_nickname={data.poster_nickname}
                  post_id={data.post_id}
                />
              );
            })}
            {isLoading && <Loading />}
            {!isLoading && <Blank ref={setInfiniteScroll}></Blank>}
          </>
        ) : (
          <NoSearch />
        )}
      </TabPanel>
    </Box>
  );
}
