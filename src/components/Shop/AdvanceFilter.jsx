import React, { useState } from "react";
import { Drawer, Button, Checkbox, Slider, Typography, Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const AdvanceFilter = ({ open, setOpen }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([100, 5000]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  // Handle Apply Filters
  const handleApply = () => {
    applyFilters({ categories: selectedCategories, priceRange });
    onClose();
  };

  // Handle Reset Filters
  const handleReset = () => {
    setSelectedCategories([]);
    setPriceRange([100, 5000]);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
    // title="Advanced Filter"
    placement="left"
    closable={true}
    onClose={onClose}
    open={open}
    width={400} // Adjust drawer width
  >
    {/* 🔹 Price Range on Top */}
    <div className="px-10 py-10">
    <Typography.Title level={5}>Filter by price</Typography.Title>
    <Slider
    controlSize={20}
      range
      min={100}
      max={10000}
      step={100}
      value={priceRange}
      onChange={setPriceRange}
    />
    <div className="flex justify-between text-gray-700">
      <span>₹{priceRange[0]}</span>
      <span>₹{priceRange[1]}</span>
    </div>

    {/* 🔹 Expandable Sections with Plus Icon */}
    <Collapse
     
      expandIcon={({ isActive }) =>
        isActive ? <MinusOutlined /> : <PlusOutlined />
      }
      className="mt-4 bg-[#fff] border-none pt-5"
    >
      {/* Categories Section */}
      <Panel header="Categories" key="1">
        <div className="flex flex-col gap-2">
          {["Shoes", "Watches", "Bags", "Clothing", "Accessories"].map(
            (category) => (
              <Checkbox
                key={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              >
                {category}
              </Checkbox>
            )
          )}
        </div>
      </Panel>

      {/* Brand Section */}
      <Panel header="Brand" key="2">
        <div className="flex flex-col gap-2">
          {["Nike", "Adidas", "Puma", "Rolex", "Gucci"].map((brand) => (
            <Checkbox key={brand}>{brand}</Checkbox>
          ))}
        </div>
      </Panel>

      {/* Availability Section */}
      <Panel header="Availability" key="3">
        <Checkbox>In Stock</Checkbox>
        <Checkbox>Out of Stock</Checkbox>
      </Panel>
    </Collapse>

    {/* 🔹 Buttons at the Bottom */}
   
    </div>
  </Drawer>
    
  );
};

export default AdvanceFilter;
