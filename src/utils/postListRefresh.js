export default function postListRefresh(postListShow, postListData, stackList) {
  postListShow = postListData.filter(data =>
    data.designatedStacks.some(i => stackList.includes(i))
  );
  if (stackList.length === 0) postListShow = postListShow.concat(postListData);
  return postListShow;
}
