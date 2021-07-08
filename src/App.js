import './App.css';
import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, MonthAgenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-react-schedule';

function App() {
  return (
    <div className="App">
      <div id='schedule'>
      <ScheduleComponent>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth ]} />
      </ScheduleComponent>
      </div>
    </div>
  );
}

export default App;
