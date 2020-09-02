import React from 'react';

import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';

const DaysRow = styled.View`
  width: 100%;
  height: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1;
  border-bottom-color: #efefef;
`;
const DayColumn = styled.View`
  width: 30;
  height: 100%;
  align-items: center;
`;
const DayTitle = styled.Text`
  /* font-family: NotoSansCJKkr-Medium; */
  font-size: 12;
  color: #565656;
  line-height: 16;
`;
interface Props {
  style?: ViewStyle;
}
/**
 * 캘린더 요일 row
 */
const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
function CalendarDaysRow(props: Props): React.ReactElement {
  return (
    <DaysRow style={{ width: '100%', ...props.style }}>
      {weekDays.map((day, index) => {
        const textColor = index === 0 ? '#ff424c' : '#565656';
        return (
          <DayColumn key={index}>
            <DayTitle style={{ color: textColor }}>{day}</DayTitle>
          </DayColumn>
        );
      })}
    </DaysRow>
  );
}

export default CalendarDaysRow;