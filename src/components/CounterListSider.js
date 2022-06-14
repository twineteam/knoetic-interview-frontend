import React from 'react';
import { Button, Layout } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Counter from './Counter';
import { useCounterList } from "../hooks/useCounterList";

const { Sider } = Layout;

const CounterListSider = () => {
  const { counterList, actions } = useCounterList();
  
  return (
    <Sider>
      <section className="sider-div">
        { counterList.map((counter, index) => {
          return (
            <Counter
              key={index}
              name={counter.name}
              count={counter.count}
              onUp={() => actions.upCount(index)}
              onDown={() => actions.downCount(index)}
              onRemove={() => actions.remove(index)}
              onEditName={(newName) => {
                actions.editName(index, newName);
              }}
            />
          );
        })}
      </section>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          type="dashed"
          icon={<PlusOutlined />}
          color="#f0f0f0"
          style={{width: "100px", height: "60px", color: "#e0e0e0"}}
          onClick={() => { actions.add(); }}
        ></Button>
      </div>
    </Sider>
  );
}

export default CounterListSider;