import OverallInfo from "./OverallInfo";
import SpiltupInfo from "./SplitupInfo";

const DeveloperDetails = ({ selectedDeveloper }) => {
  // console.log(data);

  return (
    <div className="developer-details">
      {/* <p>{selectedDeveloper}</p> */}
      {/* {data && (
        <OverallInfo
          collectionInfo={
            data.user.ansibleCollections.contributionCalendar.totalContributions
          }
        />
      )} */}

      <OverallInfo selectedDeveloper={selectedDeveloper} />
      <SpiltupInfo selectedDeveloper={selectedDeveloper} />
    </div>
  );
};

export default DeveloperDetails;
