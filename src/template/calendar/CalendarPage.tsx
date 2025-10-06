import { Calendar, Card } from '@/components';
import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react';

const CalendarPage: React.FC = () => {
    const { colortheme } = useContext(ThemeContext);
    const events = [
        { title: 'Meeting with Team', date: '2025-01-20' },
        { title: 'Project Deadline', date: '2025-01-22' },
    ];

    const handleEventClick = (eventInfo: any) => {
        alert(`Event clicked: ${eventInfo.event.title}`);
    };

    const handleDateSelect = (selectionInfo: any) => {
        alert(`Date selected: ${selectionInfo.startStr} to ${selectionInfo.endStr}`);
    };

    return (
        <Card title='Calendar'>
            <div className="text-sm mb-3">
                <span style={{ color: colortheme }}>FullCalendar</span> provides a complete event calendar with multiple views (month, week, day, list) and interactive features like drag & drop or date selection.
            </div>
            <div className='scroll-hidden calendar-wrapper'>
                <Calendar
                    events={events}
                    onEventClick={handleEventClick}
                    onDateSelect={handleDateSelect}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay',
                    }}
                />
            </div>
        </Card>
    );
};

export default CalendarPage;