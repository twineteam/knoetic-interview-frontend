import React from "react";

const getStatusBoxColor = ({rehire_eligible, voluntary}) => {
  if (rehire_eligible === false || rehire_eligible === null) {
    return "#dfe6ed"
  }
  return voluntary? "#8dd7cf" : "#e9a2ad"
}


const AttritionPane = ({ items, onViewDetail }) => { 
  return (
    <> {
      items.map((item, index) => {
        const { rehire_eligible, voluntary } = item;
        const boxColor = getStatusBoxColor({rehire_eligible, voluntary});
        
        return (
          <div key={index} onClick={() => { onViewDetail(index)}}>
            <div>{item.terminated_date}</div>
            <div className="attrition-timeline-item">
              <div 
                className="attrition-rehire-status-box" 
                style={{backgroundColor: boxColor}} 
              />
              <p style={{marginBottom: 0}}>
                {item.name}, {item.position}
              </p>
          </div>
        </div>
        );
      })
    } </>
  );
}

export default AttritionPane;