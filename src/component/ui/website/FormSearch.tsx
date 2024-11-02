import { DatePicker } from 'antd';
import { Moment } from 'moment';
import React, { useState } from 'react'

type Props = {}

const FormSearch = (props: Props) => {
    const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const handleDateSet = (date: Moment) => {
    // const value = format(date, 'yyyy-MM-dd HH:mm:ss');
    const value = date.toDate();
    setStartDate(value);
    console.log(value);
  };
  const handleDateOut = (date: Moment) => {
    const value = date.toDate();
    setEndDate(value);
    console.log(value);
  };
  return (
    <form className="home_block_one_form">
    <div className="home_block_one_form_act">
      <i className="fa-solid fa-magnifying-glass" />
      <div className="home_block_one_form_act_text" id="home_act1">
        <label>khach san</label>
        <input type="text" placeholder="ban muon di dau?" />
      </div>
    </div>
    <div className="home_block_one_form_act" id="home_act2">
      <div className="home_block_one_form_act">
        <i className="fa-solid fa-calendar-days" />
        <div className="home_block_one_form_act_text">
          <label htmlFor="nhanphong">nhan phong</label>
          <DatePicker
            format={"DD/MM/YYYY"}
            disabledDate={(current) => {
              return current && current.isBefore(new Date(), "date");
            }}
            onChange={handleDateSet}
            popupStyle={{ overflow: "hidden" }}
          />
        </div>
      </div>
      <div className="home_block_one_form_act_text">
        <label htmlFor="traphong">tra phong</label>
        <DatePicker
          format={"DD/MM/YYYY"}
          disabledDate={(current) => {
            return current && current.isBefore(startDate, "date");
          }}
          onChange={handleDateOut}
        />
      </div>
    </div>
    <div className="home_block_one_form_act" id="home_act3">
      <i className="fa-solid fa-person" />
      <div className="home_block_one_form_act_text">
        <label>so khach va phong</label>
        <p id="display_box_quantity">1 khach va 1 phong</p>
      </div>
      <div className="home_act_quantity" id="box_quantity">
        <div className="home_act_quantity_box">
          <p>so khach</p>
          <div className="home_act_quantity_input">
            <button type="button">-</button>
            <input
              id="quantity_preson"
              type="number"
              defaultValue={1}
              min={1}
            />
            <button type="button">+</button>
          </div>
        </div>
        <div className="home_act_quantity_box">
          <p>so phong</p>
          <div className="home_act_quantity_input">
            <button type="button">-</button>
            <input
              id="quantity_room"
              type="number"
              defaultValue={1}
              min={1}
            />
            <button type="button">+</button>
          </div>
        </div>
        <button type="button" className="home_act_quantity_btn">
          ap dung
        </button>
      </div>
    </div>
    <button id="home_act4" type="submit">
      Tim
    </button>
  </form>
  )
}

export default FormSearch