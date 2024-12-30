import { useParams } from "react-router-dom";

export const GameDetail = () => {
  const params = useParams();
  return <div>GameDetail {params["id"]}</div>;
};
