// == import action types for buttons witch change month or comeback today
import {
  CHANGE_TO_TODAY,
  CHANGE_TO_PREV_MONTH,
  CHANGE_TO_NEXT_MONTH,
} from 'src/actions';

// == Visitor Calendar initialState : just calendar display, not data schedules
const initialState = {
  // == maybe use calendar and calendarId to filter by place
  // == calendar view monthly
  view: 'month',
  // == day names on the top of the calendar
  daynames: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
  // == first day of the week : Lundi
  startDayOfWeek: 1,
  myTheme: {
    // == default color border #e5e5e5
    'common.border': '1px solid #f8cba9',
    'common.backgroundColor': 'white',
    // == default holiday color #ff4040 - other colors name #333
    'common.holiday.color': '#474647',
    'common.saturday.color': '#474647',
    'common.dayname.color': '#474647',
    'common.today.color': '#333',
    // creation guide style
    'common.creationGuide.backgroundColor': 'rgba(81, 92, 230, 0.05)',
    'common.creationGuide.border': '1px solid #515ce6',
    // month header 'dayname'
    // default value 31px
    'month.dayname.height': '45px',
    // default value #e5e5e5
    'month.dayname.borderLeft': '1px solid #f8cba9',
    'month.dayname.paddingLeft': '10px',
    'month.dayname.paddingRight': '10px',
    // default value inherit
    'month.dayname.backgroundColor': '#c1c1c1',
    // default value 12px
    'month.dayname.fontSize': '14px',
    'month.dayname.fontWeight': 'normal',
    'month.dayname.textAlign': 'left',
    // month day grid cell 'day'
    // default value rgba(255, 64, 64, 0.4)
    'month.holidayExceptThisMonth.color': '#f3c465',
    // default value gba(51, 51, 51, 0.4)
    'month.dayExceptThisMonth.color': '#f3c465',
    'month.weekend.backgroundColor': 'inherit',
    // default value 14px
    'month.day.fontSize': '15px',
    // month schedule style
    // default value 5px
    'month.schedule.borderRadius': '5px',
    // default value 24px
    'month.schedule.height': '25px',
    'month.schedule.marginTop': '2px',
    'month.schedule.marginLeft': '8px',
    'month.schedule.marginRight': '8px',
    // month more view
    'month.moreView.border': '1px solid #d5d5d5',
    'month.moreView.boxShadow': '0 2px 6px 0 rgba(0, 0, 0, 0.1)',
    'month.moreView.backgroundColor': 'white',
    'month.moreView.paddingBottom': '17px',
    'month.moreViewTitle.height': '44px',
    'month.moreViewTitle.marginBottom': '12px',
    'month.moreViewTitle.backgroundColor': 'inherit',
    'month.moreViewTitle.borderBottom': 'none',
    'month.moreViewTitle.padding': '12px 17px 0 17px',
    'month.moreViewList.padding': '0 17px',
    // week header 'dayname'
    'week.dayname.height': '42px',
    'week.dayname.borderTop': '1px solid #e5e5e5',
    'week.dayname.borderBottom': '1px solid #e5e5e5',
    'week.dayname.borderLeft': 'inherit',
    'week.dayname.paddingLeft': '0',
    'week.dayname.backgroundColor': 'inherit',
    'week.dayname.textAlign': 'left',
    'week.today.color': '#333',
    'week.pastDay.color': '#bbb',
    // week vertical panel 'vpanel'
    'week.vpanelSplitter.border': '1px solid #e5e5e5',
    'week.vpanelSplitter.height': '3px',
    // week daygrid 'daygrid'
    'week.daygrid.borderRight': '1px solid #e5e5e5',
    'week.daygrid.backgroundColor': 'inherit',
    'week.daygridLeft.width': '72px',
    'week.daygridLeft.backgroundColor': 'inherit',
    'week.daygridLeft.paddingRight': '8px',
    'week.daygridLeft.borderRight': '1px solid #e5e5e5',
    'week.today.backgroundColor': 'rgba(81, 92, 230, 0.05)',
    'week.weekend.backgroundColor': 'inherit',
    // week timegrid 'timegrid'
    'week.timegridLeft.width': '72px',
    'week.timegridLeft.backgroundColor': 'inherit',
    'week.timegridLeft.borderRight': '1px solid #e5e5e5',
    'week.timegridLeft.fontSize': '11px',
    'week.timegridLeftTimezoneLabel.height': '40px',
    'week.timegridLeftAdditionalTimezone.backgroundColor': 'white',
    'week.timegridOneHour.height': '52px',
    'week.timegridHalfHour.height': '26px',
    'week.timegridHalfHour.borderBottom': 'none',
    'week.timegridHorizontalLine.borderBottom': '1px solid #e5e5e5',
    'week.timegrid.paddingRight': '8px',
    'week.timegrid.borderRight': '1px solid #e5e5e5',
    'week.timegridSchedule.borderRadius': '2px',
    'week.timegridSchedule.paddingLeft': '2px',
    'week.currentTime.color': '#515ce6',
    'week.currentTime.fontSize': '11px',
    'week.currentTime.fontWeight': 'normal',
    'week.pastTime.color': '#bbb',
    'week.pastTime.fontWeight': 'normal',
    'week.futureTime.color': '#333',
    'week.futureTime.fontWeight': 'normal',
    'week.currentTimeLinePast.border': '1px dashed #515ce6',
    'week.currentTimeLineBullet.backgroundColor': '#515ce6',
    'week.currentTimeLineToday.border': '1px solid #515ce6',
    'week.currentTimeLineFuture.border': 'none',
    // week creation guide style
    'week.creationGuide.color': '#515ce6',
    'week.creationGuide.fontSize': '11px',
    'week.creationGuide.fontWeight': 'bold',
    // week daygrid schedule style
    'week.dayGridSchedule.borderRadius': '2px',
    'week.dayGridSchedule.height': '24px',
    'week.dayGridSchedule.marginTop': '2px',
    'week.dayGridSchedule.marginLeft': '8px',
    'week.dayGridSchedule.marginRight': '8px',
  },
  // == test plants in initial state - use keys names to consume api
  plantsSchedules: [
    {
      id: '1',
      title: 'Abricots',
      // = category must be use to display. I don't know it utility
      category: 'time',
      start: '2021-08-05',
      end: '2021-08-15',
      color: '#fad689',
      bgColor: '#f46d5f',
      borderColor: '#f8cba9',
    },
    {
      id: '2',
      title: 'Carottes',
      category: 'time',
      start: '2021-08-25',
      end: '2021-09-07',
      color: '#f46d5f',
      bgColor: '#9ed2bf',
      borderColor: '#daece5',
    },
    {
      id: '3',
      title: 'Fraises',
      category: 'time',
      start: '2021-09-01',
      end: '2021-09-18',
      color: '#fad689',
      bgColor: '#f46d5f',
      borderColor: '#f8cba9',
    },
    {
      id: '4',
      title: 'Tomates',
      category: 'time',
      start: '2021-07-05',
      end: '2021-08-02',
      color: '#fad689',
      bgColor: '#f46d5f',
      borderColor: '#f8cba9',
    },
    {
      id: '5',
      title: 'Poireaux',
      category: 'time',
      start: '2021-08-29',
      end: '2021-09-10',
      color: '#f46d5f',
      bgColor: '#9ed2bf',
      borderColor: '#daece5',
    },
    {
      id: '6',
      title: 'Artichauts',
      category: 'time',
      start: '2021-08-16',
      end: '2021-09-04',
      color: '#f46d5f',
      bgColor: '#9ed2bf',
      borderColor: '#daece5',
    },
  ],
  // == impossible to click on the calendar or schedule may be use
  // == change to false when you code
  isReadOnly: true,
};

function visitorCalendarReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_TO_TODAY:
      return {
        ...state,
        // what else ?
      };
    case CHANGE_TO_PREV_MONTH:
      return {
        ...state,
        // what else ?
      };
    case CHANGE_TO_NEXT_MONTH:
      return {
        ...state,
        // what else ?
      };
    default:
      return state;
  }
}

export default visitorCalendarReducer;