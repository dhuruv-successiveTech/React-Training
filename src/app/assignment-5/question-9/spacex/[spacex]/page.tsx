import client from "../../apolloClient";
import { gql } from "@apollo/client";
import Pagination from "./Pagination";

const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int!, $offset: Int!) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      mission_name
      launch_date_utc
      rocket {
        rocket_name
      }
    }
  }
`;

interface LaunchPestInterface {
  id: number;
  mission_name: string;
  launch_date_utc: string;
  rocket: {
    rocket_name: string;
  };
}

export default async function SpaceXPage({ params }: any) {
  const param = await params;
  const currentPage = param.spacex;
  const pagesize = 5;
  const offset = (currentPage - 1) * pagesize;

  const { data } = await client.query({
    query: GET_LAUNCHES,
    variables: { limit: pagesize, offset },
    fetchPolicy: "no-cache",
  });

  return (
    <div className="">
      {data?.launchesPast.map((item: LaunchPestInterface) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            margin: "0.5rem",
          }}
          className=""
        >
          <p> Mission name : {item.mission_name}</p>
          <p> Launch Date : {item.launch_date_utc}</p>
          <p> Rocket name : {item.rocket.rocket_name}</p>
        </div>
      ))}
      <Pagination totalPages={4} currentPage={parseInt(currentPage)} />
    </div>
  );
}
