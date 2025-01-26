"use client"
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import "react-big-calendar/lib/css/react-big-calendar.css"

import { useState } from 'react'

const localizer = momentLocalizer(moment)

const BigCalender = () => {
    const [view, SetView] = useState<View>(Views.WORK_WEEK)

    const handleOnChangeView = (selectedView: View) => {
        SetView(selectedView)
    }

    return (
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            views={["work_week", "day"]}
            view={view}
            style={{ height: "98%" }}
            onView={handleOnChangeView}
            min={new Date(0, 0, 0, 8, 0, 0)}
            max={new Date(0, 0, 0, 17, 0, 0)}
        />

    );

};
export default BigCalender