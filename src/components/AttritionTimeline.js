import React, { useState } from "react";
import { Tabs } from "antd";
import AttritionModal from "./AttritionModal";
import AttritionPane from "./AttritionPane";
import { useEmployeesApi } from "../hooks/useEmployeesApi";

const { TabPane } = Tabs;

const AttritionTimeline = () => {
  const { employees, actions } = useEmployeesApi();

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  return (
    <>
      <Tabs defaultActiveKey="rehire-eligible">
        <TabPane tab="Rehire Eligible" key="rehire-eligible">
          <AttritionPane 
            items={employees.rehireEligibleList} 
            onViewDetail={(idx) => {
              setShowModal(true);
              setModalData(actions.viewRehireEligible(idx));
            }}
          />
        </TabPane>
        <TabPane tab="Rehire Uneligible" key="rehire-uneligible">
          <AttritionPane
            items={employees.rehireIneligibleList} 
            onViewDetail={(idx) => {
              setShowModal(true);
              setModalData(actions.viewRehireIneligible(idx));
            }}
          />
        </TabPane>
        <TabPane tab="Rehire Unknown" key="rehire-unknown">
          <AttritionPane
            items={employees.rehireUnknownList} 
            onViewDetail={(idx) => {
              setShowModal(true);
              setModalData(actions.viewRehireUnknown(idx));
            }}
          />
        </TabPane>
      </Tabs>
      <AttritionModal 
        showModal={showModal}
        setShowModal={(show) => {setShowModal(show)}}
        modalData={modalData}
      />
    </>
  );
}

export default AttritionTimeline;