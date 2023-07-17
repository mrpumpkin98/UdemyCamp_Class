import MyCalendar from "./MyCalendar/index";
import * as B from "./Calendar.styles";

export default function Calendar() {
  return (
    <>
      <B.Wrapper>
        <MyCalendar />
      </B.Wrapper>
    </>
  );
}
