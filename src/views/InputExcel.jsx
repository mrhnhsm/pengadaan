import { DropdownInputExcel } from "../component/dropdown/DropdownComponent";
import { InputRupa, InputPengadaan, Select } from "../component/ComponentInputExcel";
import { useState } from "react";
export default function InputExcel() {
  const [selectedOption, setSelectedOption] = useState("select");
  const renderContent = () => {
    switch (selectedOption) {
      case "select":
        return <Select/>;
      case "RUPA":
        return <InputRupa />;
      case "PENGADAAN":
        return <InputPengadaan />;
      default:
        return <Select/>;
    }
  };
  return (
    <div style={{ padding: 24 }}>
      <DropdownInputExcel onChange={setSelectedOption} />
      {renderContent()}
    </div>
  );
}
