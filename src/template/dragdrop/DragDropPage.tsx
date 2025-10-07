import { Button, Card } from '@/components';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext, useState } from 'react';
import { PiArrowsOut } from 'react-icons/pi';
import { ReactSortable } from 'react-sortablejs';

const DragAndDropPage = () => {
    const { colortheme } = useContext(ThemeContext);
    const items1 = [
        {
            id: 1,
            text: 'Need to be approved',
            name: 'Kelly Young',
        },
        {
            id: 2,
            text: 'Meeting with client',
            name: 'Andy King',
        },
        {
            id: 3,
            text: 'Project Detail',
            name: 'Judy Holmes',
        },
        {
            id: 4,
            text: 'Edited Post Apporval',
            name: 'Vincent Carpenter',
        },
        {
            id: 5,
            text: 'Project Lead Pickup',
            name: 'Mary McDonald',
        },
    ];

    const items2 = [
        {
            id: 6,
            text: 'Need to be approved',
            name: 'Kelly Young',
        },
        {
            id: 7,
            text: 'Meeting with client',
            name: 'Andy King',
        },
        {
            id: 8,
            text: 'Project Detail',
            name: 'Judy Holmes',
        },
        {
            id: 9,
            text: 'Edited Post Apporval',
            name: 'Vincent Carpenter',
        },
        {
            id: 10,
            text: 'Project Lead Pickup',
            name: 'Mary McDonald',
        },
    ];

    const [sortable1, setSortable1] = useState(items1);
    const [sortable2, setSortable2] = useState(items2);
    const [handler1, setHandler1] = useState(items1);
    const [handler2, setHandler2] = useState(items2);
    const [swap, setSwap] = useState([...items1, ...items2]);

    return (
        <div className="dragndrop space-y-6">
            {/* Sortable */}
            <Card title='Sortable'>
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Sortable</span> is a component that allows items in a list or grid to be rearranged by dragging and dropping.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
                    <ReactSortable list={sortable1} setList={setSortable1} animation={200} delay={2} forceFallback={true} fallbackOnBody={true} delayOnTouchOnly={true} chosenClass="sortable-chosen" dragClass="sortable-drag" ghostClass="gu-transit" group="shared">
                        {sortable1.map((item) => {
                            return (
                                <div key={item.id} className="mb-2.5 cursor-grab">
                                    <div className="bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col md:text-left text-center items-md-center">
                                        <div className="sm:mr-4">
                                            <img alt="avatar" src={`https://i.pravatar.cc/200?n=${item.id}`} className="w-11 h-11 rounded-full mx-auto" />
                                        </div>
                                        <div className="flex md:flex-row flex-col justify-between items-center flex-1">
                                            <div className="font-semibold md:my-0 my-3">
                                                <div className="text-dark dark:text-[#bfc9d4] text-base">{item.name}</div>
                                                <div className="text-white-dark text-xs">{item.text}</div>
                                            </div>
                                            <Button type="button" color='secondary'>
                                                View
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </ReactSortable>
                    <ReactSortable list={sortable2} setList={setSortable2} animation={200} delay={2} forceFallback={true} fallbackOnBody={true} chosenClass="sortable-chosen" dragClass="sortable-drag" ghostClass="gu-transit" group="shared">
                        {sortable2.map((item) => {
                            return (
                                <div key={item.id} className="mb-2.5 cursor-grab">
                                    <div className="bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col md:text-left text-center items-md-center">
                                        <div className="sm:mr-4">
                                            <img alt="avatar" src={`https://i.pravatar.cc/200?n=${item.id}`} className="w-11 h-11 rounded-full mx-auto" />
                                        </div>
                                        <div className="flex md:flex-row flex-col justify-between items-center flex-1">
                                            <div className="font-semibold md:my-0 my-3">
                                                <div className="text-dark dark:text-[#bfc9d4] text-base">{item.name}</div>
                                                <div className="text-white-dark text-xs">{item.text}</div>
                                            </div>
                                            <Button type="button" color='secondary'>
                                                View
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </ReactSortable>
                </div>
            </Card>

            {/* Handler */}
            <Card title='Handler'>
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Sortable</span> is a component that has specific element inside each draggable item that acts as the drag handle.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
                    <ReactSortable list={handler1} setList={setHandler1} animation={200} forceFallback={true} fallbackOnBody={true} handle=".handle" group="handler" chosenClass="sortable-chosen" dragClass="sortable-drag" ghostClass="gu-transit">
                        {handler1.map((item) => {
                            return (
                                <div key={item.id} className="mb-2.5 cursor-grab">
                                    <div className="bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col text-left items-md-center">
                                        <div className="sm:mr-4">
                                            <img alt="avatar" src={`https://i.pravatar.cc/200?n=${item.id}`} className="w-11 h-11 rounded-full mx-auto" />
                                        </div>
                                        <div className="flex md:flex-row flex-col justify-between items-center flex-1 text-center md:text-left">
                                            <div className="font-semibold md:my-0 my-3">
                                                <div className="text-dark dark:text-[#bfc9d4] text-base">{item.name}</div>
                                                <div className="text-white-dark text-xs">{item.text}</div>
                                            </div>
                                            <Button size="40" className='handle p-1.5 cursor-move' variant='tonal'>
                                                <PiArrowsOut />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </ReactSortable>
                    <ReactSortable list={handler2} setList={setHandler2} animation={200} forceFallback={true} fallbackOnBody={true} handle=".handle" group="handler" chosenClass="sortable-chosen" dragClass="sortable-drag" ghostClass="gu-transit">
                        {handler2.map((item) => {
                            return (
                                <div key={item.id} className="mb-2.5 cursor-grab">
                                    <div className="bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col text-left items-md-center">
                                        <div className="sm:mr-4">
                                            <img alt="avatar" src={`https://i.pravatar.cc/200?n=${item.id}`} className="w-11 h-11 rounded-full mx-auto" />
                                        </div>
                                        <div className="sm:flex block justify-between items-center flex-1 text-center md:text-left">
                                            <div className="font-semibold md:my-0 my-3">
                                                <div className="text-dark dark:text-[#bfc9d4] text-base">{item.name}</div>
                                                <div className="text-white-dark text-xs">{item.text}</div>
                                            </div>
                                            <Button size="40" className='handle p-1.5 cursor-move' variant='tonal'>
                                                <PiArrowsOut />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </ReactSortable>
                </div>
            </Card >

            {/* News Feed */}
            <Card title='Swapable'>
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Swappable</span> component allows items to exchange positions when one is dragged over another, instead of inserting or pushing other items aside.
                </div>
                <ReactSortable list={swap} setList={setSwap} animation={200} swap={true} swapThreshold={1} chosenClass="sortable-chosen" dragClass="sortable-drag" ghostClass="gu-transit" className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2.5">
                    {swap.map((item) => {
                        return (
                            <div key={item.id} className="cursor-grab">
                                <div className="bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col text-left items-md-center">
                                    <div className="sm:mr-4">
                                        <img alt="avatar" src={`https://i.pravatar.cc/200?n=${item.id}`} className="w-11 h-11 rounded-full mx-auto" />
                                    </div>
                                    <div className="flex md:flex-row flex-col justify-between items-center flex-1 text-center md:text-left">
                                        <div className="font-semibold md:my-0 my-3">
                                            <div className="text-dark dark:text-[#bfc9d4] text-base">{item.name}</div>
                                            <div className="text-white-dark text-xs">{item.text}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </ReactSortable>
            </Card >
        </div >
    );
};

export default DragAndDropPage;
