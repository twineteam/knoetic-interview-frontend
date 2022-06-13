import React, { useState } from "react";
import { Button, Card, Input, Space } from "antd";
import {
  UpOutlined,
  DownOutlined,
  EditOutlined,
  MinusOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

function cardEditInput({ draftName, setDraftName }) {
  return (
    <Input
      type="text"
      value={draftName}
      onChange={(e) => setDraftName(e.target.value)}
    ></Input>
  );
}

function cardTitle({ name, count }) {
  return (
    <p style={{ marginBottom: "0", fontSize: "14px"}}>
      {name}:
      {count}
    </p>
  );
}

function Counter({ name, count, onUp, onDown, onRemove, onEditName }) {
  const [draftName, setDraftName] = useState(name);
  const [editOn, setEditOn] = useState(false);

  const _onEditName = () => {
    if (editOn) {
      onEditName(draftName);
    }
    setEditOn(!editOn);
  };

  const _onRemove = () => {
    onRemove()
    setDraftName(name)
  };

  return (
    <Card
      style={{
        marginTop: 10,
        marginBottom: 40,
        marginLeft: "auto",
        marginRight: "auto",
        background: "transparent",
        width: "180px",
      }}
      bordered={false}
      size="small"
      actions={[
        <Button 
          type="primary" 
          shape="circle" 
          onClick={onUp} 
          icon={<UpOutlined style={{color: "#699c96"}} />} 
          style={{ backgroundColor: "#8dd7cf", border: "0px"}}
        />,
        <Button 
          type="primary" 
          shape="circle" 
          onClick={onDown} 
          icon={<DownOutlined style={{color: "gray"}} />} 
          style={{ backgroundColor: "#f0f0f0", border: "0px"}}
        />,
        <Button 
          onClick={_onEditName} 
          icon={<EditOutlined />} 
          type="dashed"
          style={{color: "#e0e0e0"}}
        />,
      ]}
    >
      <Space style={{ justifyContent: "center"}}>
        <Meta
          title={
            editOn
              ? cardEditInput({ draftName, setDraftName })
              : cardTitle({ name, count })
          }
          style={{background: "transparent"}}
        />
        <Button 
          style={{ position: "absolute", right: "13px", marginLeft: "auto", color: "#e0e0e0" }}
          onClick={_onRemove}
          icon={<MinusOutlined />}
          type="dashed"
        />
      </Space>
    </Card>
  );
}

export default Counter;
