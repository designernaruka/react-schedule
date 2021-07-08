import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, MonthAgenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-react-schedule';
class App extends React.Component {
    render() {
        return <ScheduleComponent>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth ]} />
</ScheduleComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('schedule'));