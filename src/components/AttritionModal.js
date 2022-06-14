import React from "react";
import { Button, Input, Modal } from "antd";

const getStatusBoxColor = ({rehire_eligible, voluntary}) => {
  if (rehire_eligible === null) {
    return "#dfe6ed"
  }
  return voluntary? "#8dd7cf" : "#e9a2ad"
}

const StatusBox = ({ name, position, color }) => {
  return (
    <div style={{display:"flex"}} >
      <div style={{ 
          backgroundColor: color,
          height:"24px",
          width:"24px",
          marginRight:"6px"
        }} 
      />
      <p>{name}, {position}</p>
    </div>
  );
}

const AttritionModal = ({showModal, setShowModal, modalData}) => {
  const { name, position, rehire_eligible, voluntary } = modalData;
  const { profile_link, termination_reason } = modalData;  
  const boxColor = getStatusBoxColor({rehire_eligible, voluntary});
  
  return (
    <Modal 
      title={<StatusBox name={name} position={position} color={boxColor} />}
      visible={showModal}
      okButtonProps={{hidden: true}}
      cancelButtonProps={{hidden: true}}
      onCancel={() => setShowModal(false)}
      footer={null}
    >
    <p>Go to 
      <a href={profile_link} target="_blank" rel="noopener noreferrer">
        {` ${name}'s Profile`}
      </a>
    </p>
    <br/>
    <p>{termination_reason}</p>
    {
      voluntary && rehire_eligible && (
        <>
        <Input type="text" placeholder="Reach out to Susan" />
        <div style={{display:"flex", justifyContent:"flex-end"}}>
          <Button 
            type="button" 
            style={{
              backgroundColor :"#6558f5", 
              color:"white",
              marginTop: "15px",
              marginBottom: "2px"
            }}
          >
            Send email
          </Button>
        </div>
        </>
      )
    }
    </Modal>
  );
}

export default AttritionModal;