import { useEffect } from "react";
const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = `${title} - Nexflare Dynamics`;
  }, [title]);
  return null;
};
export default PageTitle;
