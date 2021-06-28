import React , { useState, useContext }from 'react';
import { FirebaseContext } from '../firebase'
import Sidebar from '../Sidebar/index'
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {appointments} from '../assets/demo_data/appointments'
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  DateNavigator,
  TodayButton,
  Toolbar,
  ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '/' + mm + '/' + dd;
const currentDate = today;
const schedulerData = appointments;
class DateDebut {
    constructor ( heure, Date) {
        
        this.heure = heure;
        this.Date = Date;
    }
    toString() {
        return this.startDate + 'T' + this.heure ;
    }
}
class RDV{
    constructor(startDate,title){
        this.startDate=startDate;
        this.title=title;
    }
}



function Calendar() {
    
    // Firestore data converter
        
    console.log(typeof(schedulerData))
    const firebase = useContext(FirebaseContext);
    firebase.WriteBd("ikama_1998").get().then((doc)=>{if (doc.exists) {
        console.log("Document data:", new DateDebut(doc.data().date).toString(),doc.data().user);
        console.log(appointments);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
    return (
        <div class="flex-container">
            <div class="flex-child magenta">
                <Sidebar/>
            </div>
            <div class="flex-child green">
            <Paper>
        <Scheduler
          data={schedulerData}
          height={550}
        >
          <ViewState
            defaultCurrentDate="2018-07-25"
            defaultCurrentViewName="Week"
          />

          <DayView
            startDayHour={9}
            endDayHour={18}
          />
          <WeekView
            startDayHour={10}
            endDayHour={19}
          />

          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <ViewSwitcher />
          <Appointments/>
          
          <AppointmentTooltip
            showCloseButton
            showOpenButton
            
            showDeleteButton
          />
          <AppointmentForm
            
          />
        </Scheduler>
      </Paper>
        </div>
      </div>
    );
    
}

export default Calendar
