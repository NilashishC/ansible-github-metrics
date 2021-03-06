import { useQuery } from "@apollo/client";
import { Card } from "antd";
import { useState } from "react";
import { DEVELOPER_LIST } from "../../queries/developer_queries";
import DeveloperDetails from "./DeveloperDetails";
import DeveloperList from "./DevelopersList";

const Developers = () => {
  // const { loading, error, data } = useQuery(DEVELOPER_LIST);

  const [selectedDeveloper, setSeletedDeveloper] = useState(null);
  const developerCallback = (selectedDeveloper) => {
    setSeletedDeveloper(selectedDeveloper);
  };

  // console.log(selectedDeveloper);

  return (
    <div className="developers">
      <div className="developers-content">
        <Card className="dev-list">
          <DeveloperList developerCallback={developerCallback} />
        </Card>
        <div className="dev-details">
          {!selectedDeveloper && (
            <p> &lt;-- Click on a developer for more details</p>
          )}
          {selectedDeveloper && (
            <DeveloperDetails selectedDeveloper={selectedDeveloper} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Developers;
