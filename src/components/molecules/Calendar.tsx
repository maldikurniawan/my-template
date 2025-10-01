import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import React from 'react';

interface CalendarProps {
    events: Array<{ title: string; date: string }>;
    onEventClick?: (eventInfo: any) => void;
    onDateSelect?: (selectionInfo: any) => void;
    initialView?: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay';
    headerToolbar?: {
        left?: string;
        center?: string;
        right?: string;
    };
    editable?: boolean;
    selectable?: boolean;
    droppable?: boolean;
}

const Calendar: React.FC<CalendarProps> = ({
    events,
    onEventClick,
    onDateSelect,
    initialView = 'dayGridMonth',
    headerToolbar = {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    editable = true,
    selectable = true,
    droppable = true,
}) => {
    return (
        <FullCalendar
            customButtons={{
                buttonAdd: {
                    text: "+ Tambah",
                    click: () => {
                        alert("Add button clicked!");
                    },
                },
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={initialView}
            headerToolbar={headerToolbar}
            editable={editable}
            selectable={selectable}
            droppable={droppable}
            events={events}
            eventClick={onEventClick}
            select={onDateSelect}
            handleWindowResize={true}
        />
    );
};

export default Calendar;