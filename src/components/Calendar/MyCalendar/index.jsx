import React, { useRef, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import { DatePicker, Space, Modal, Input, TimePicker } from "antd";
import moment from "moment";
import { useRouter } from "next/router";

export default function MyCalendar() {
  const router = useRouter();
  const externalElementRef = useRef(null);
  const calendarRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [arr, setArr] = useState([]);
  const [showDailyButton, setShowDailyButton] = useState(false);

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContent(event.target.value);
  };

  const handleViewChange = (view) => {
    const calendar = calendarRef.current.getApi();
    calendar.changeView(view);
    if (view === "timeGridDay") {
      setShowDailyButton(true);
    } else {
      setShowDailyButton(false);
    }
  };

  // <일정 클릭시 일정으로 이동>
  const handleEventClick = (clickInfo) => {
    alert("안녕");
    router.push(`/ChatPage`);
  };

  // <모달_날짜>
  const handleDatePickerChange = (date, dateString) => {
    setSelectedDate(date);
    const calendar = calendarRef.current.getApi();
    if (date) {
      calendar.gotoDate(date.toDate());
    }
    setDay(dateString);
  };

  // <모달_시작>
  const StartTimePickerChange = (time, timeString) => {
    setSelectedStartTime(time);
    setStartTime(timeString);
  };

  // <모달_끝>
  const EndTimePickerChange = (time, timeString) => {
    setSelectedEndTime(time);
    setEndTime(timeString);
  };

  // <모달_오픈>
  const handleModalOpen = () => {
    setShowModal(true);
  };

  // <모달_클로즈>
  const handleModalClose = () => {
    setShowModal(false);
    setEventTitle("");
    setEventDescription("");
  };

  // <모달_최종 제출>
  const handleModalSubmit = () => {
    console.log(`${day}T${startTime}`);
    console.log(`${day}T${endTime}`);
    console.log(title);

    const newEvent = {
      title: title,
      start: `${day}T${startTime}`,
      end: `${day}T${endTime}`,
      description: content,
    };

    setArr([...arr, newEvent]);

    setShowModal(false);
    setEventTitle("");
    setEventDescription("");
  };

  const dateRender = (info) => {
    const calendarDate = info.date;
    if (
      selectedDate &&
      calendarDate.toDateString() === selectedDate.toDate().toDateString()
    ) {
    }
  };

  // const handleDailyButtonClick = () => {
  //   const calendar = calendarRef.current.getApi();
  //   calendar.changeView("timeGridDay");
  // };

  return (
    <div className="App">
      <Modal
        title="일정 생성"
        visible={showModal}
        onCancel={handleModalClose}
        onOk={handleModalSubmit}
      >
        <div>
          <Space direction="vertical">
            <DatePicker
              value={selectedDate}
              onChange={handleDatePickerChange}
              placeholder="날짜 선택"
            />
            <TimePicker
              value={selectedStartTime}
              onChange={StartTimePickerChange}
              format="HH:mm:ss"
              placeholder="시작 시간 선택"
            />
            <TimePicker
              value={selectedEndTime}
              onChange={EndTimePickerChange}
              format="HH:mm:ss"
              placeholder="마치는 시간 선택"
            />
          </Space>
        </div>
        <Input placeholder="제목" onChange={onChangeTitle} />
        <Input.TextArea placeholder="내용" onChange={onChangeContents} />
      </Modal>
      <div style={{ display: "flex" }}>
        <Space direction="vertical">
          <DatePicker
            value={selectedDate}
            onChange={handleDatePickerChange}
            picker="week"
            placeholder="날짜 선택"
          />
        </Space>
        <div className="view-options">
          <select onChange={(e) => handleViewChange(e.target.value)}>
            <option value="dayGridMonth">월간</option>
            <option value="timeGridWeek">주간</option>
            <option value="timeGridDay">일간</option>
          </select>
        </div>
        <button onClick={handleModalOpen}>일정 생성</button>
        {showDailyButton && <button>일단 만들어놓긴함</button>}
      </div>

      <FullCalendar
        ref={calendarRef}
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          listPlugin,
          bootstrapPlugin,
          googleCalendarPlugin,
        ]}
        initialView="dayGridMonth"
        headerToolbar={null}
        height="75vh"
        dateClick={dateRender}
        eventClick={handleEventClick}
        events={arr.map((event) => ({
          title: event.title,
          start: event.start,
          end: event.end,
        }))}
        slotLabelFormat={{
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }}
      />
    </div>
  );
}
