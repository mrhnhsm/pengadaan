import React, { useState } from "react";
import { Button, Tooltip } from "antd";
import "../../assets/css/Fabmenu.css";
import {
  PlayCircleOutlined,
  StopOutlined,
  SyncOutlined,
  FileTextOutlined,
  PlusOutlined,
} from "@ant-design/icons";

export default function FabMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Main FAB */}
      <Button className="fab-main" onClick={toggleMenu}>
        <PlusOutlined style={{ fontSize: "50px" }} />
      </Button>

      {/* Sub-buttons with Tooltip */}
      <div className={`fab-sub-container ${open ? "open" : ""}`}>
        <Tooltip title="Mulai Scheduler" placement="top">
          <Button className="fab-sub1">
            <PlayCircleOutlined />
          </Button>
        </Tooltip>
        <Tooltip title="Stop Scheduler" placement="top">
          <Button className="fab-sub2">
            <StopOutlined />
          </Button>
        </Tooltip>
        <Tooltip title="Status Scheduler" placement="top">
          <Button className="fab-sub3">
            <FileTextOutlined />
          </Button>
        </Tooltip>
        <Tooltip title="Tarik Manual" placement="top">
          <Button className="fab-sub4">
            <SyncOutlined />
          </Button>
        </Tooltip>
      </div>
    </>
  );
}
