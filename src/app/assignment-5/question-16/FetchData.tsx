"use client";

import withDataFetching from "./withDataFetching";

interface PropInterface {
  data: { id: number; name: string }[];
}
const FetchData = (props: PropInterface) => {
  const { data } = props;

  return (
    <>
      {data.map((item) => (
        <p key={item?.id}>UserName : {item?.name}</p>
      ))}
    </>
  );
};
export default withDataFetching(
  FetchData,
  "https://jsonplaceholder.typicode.com/users"
);
