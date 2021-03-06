import { useQuery } from "@apollo/client";
import { TEST } from "../../queries/analytics_queries";
import { groupByMonth } from "./groupByMonth";
import { useState } from "react";
// import ChartTest from "./ChartTest";
import RepositoryList from "./RepositoryList";
import RepositoryAnalytics from "./RepositoryAnalytics";
import { Card } from "antd";

const Analytics = () => {
  const [selectedRepository, setSelectedRepository] = useState("");
  const repositoryCallback = (selectedRepository) => {
    setSelectedRepository(selectedRepository);
  };

  return (
    <div className="analytics">
      <Card className="repo-list">
        <RepositoryList repositoryCallback={repositoryCallback} />
      </Card>
      <div className="repo-analytics">
        <RepositoryAnalytics selectedRepository={selectedRepository} />
      </div>
    </div>
  );
};

export default Analytics;
