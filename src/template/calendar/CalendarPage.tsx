import { Calendar, Card } from '@/components';
import React from 'react';

const CalendarPage: React.FC = () => {
    // Example events
    const events = [
        { title: 'Meeting with Team', date: '2025-01-20' },
        { title: 'Project Deadline', date: '2025-01-22' },
    ];

    // Event click handler
    const handleEventClick = (eventInfo: any) => {
        alert(`Event clicked: ${eventInfo.event.title}`);
    };

    // Date selection handler
    const handleDateSelect = (selectionInfo: any) => {
        alert(`Date selected: ${selectionInfo.startStr} to ${selectionInfo.endStr}`);
    };

    return (
        <Card title='Calendar'>
            <div className='scroll-hidden calendar-wrapper mt-2'>
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