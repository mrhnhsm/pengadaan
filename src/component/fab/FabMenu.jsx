import React, { useState } from "react";
import { Button } from "antd";
import "../../assets/css/Fabmenu.css"
import { PlayCircleOutlined, StopOutlined, SyncOutlined, FileTextOutlined } from "@ant-design/icons";

export default function FabMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Main FAB */}
      <Button className="fab-main" onClick={toggleMenu}>
        +
      </Button>

      {/* Sub-buttons */}
      <div className={`fab-sub-container ${open ? "open" : ""}`}>
        <Button className="fab-sub1"><PlayCircleOutlined/></Button>
        <Button className="fab-sub2"><StopOutlined /></Button>
        <Button className="fab-sub3"><FileTextOutlined /></Button>
        <Button className="fab-sub4"><SyncOutlined /></Button>
      </div>
    </>
  );
}
