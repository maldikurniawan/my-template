import { Button, Card } from '@/components';
import { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

const DragAndDropPage = () => {
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

    const items3 = [
        {
            id: 2,
            text: 'Meeting with client',
            name: 'Andy King',
        },
        {
            id: 1,
            text: 'Need to be approved',
            name: 'Kelly Young',
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
    ];

    const items4 = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
        { id: 6, name: 'Item 6' },
        { id: 7, name: 'Item 7' },
        { id: 8, name: 'Item 8' },
        { id: 9, name: 'Item 9' },
        { id: 10, name: 'Item 10' },
        { id: 11, name: 'Item 11' },
        { id: 12, name: 'Item 12' },
    ];

    const [sortable1, setSortable1] = useState(items1);
    const [sortable2, setSortable2] = useState(items2);
    const [handler1, setHandler1] = useState(items1);
    const [handler2, setHandler2] = useState(items2);
    const [newsFeed, setNewsFeed] = useState(items3);
    const [gridDrag, setGridDrag] = useState(items4);

    return (
        <div className="space-y-6">
            {/* Sortable */}
            <Card title='Sortable'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
                    <ul id="example1">
                        <ReactSortable list={sortable1} setList={setSortable1} animation={200} delay={2} ghostClass="gu-transit" group="shared">
                            {sortable1.map((item) => {
                                return (
                                    <li key={item.id} className="mb-2.5 cursor-grab">
                                        <div className="bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col ltr:md:text-left rtl:md:text-right text-center items-md-center">
                                            <div className="ltr:sm:mr-4 rtl:sm:ml-4">
                                                <img alt="avatar" src={`https://i.pravatar.cc/200`} className="w-11 h-11 rounded-full mx-auto" />
                                            </div>
                                            <div className="flex md:flex-row flex-col justify-between items-center flex-1">
                                                <div className="font-semibold md:my-0 my-3">
                                                    <div className="text-dark dark:text-[#bfc9d4] text-base">{item.text}</div>
                                                    <div className="text-white-dark text-xs">{item.name}</div>
                                                </div>
                                                <Button type="button" color='secondary'>
                                                    View
                                                </Button>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ReactSortable>
                    </ul>
                    <ul id="example2">
                        <ReactSortable list={sortable2} setList={setSortable2} animation={200} delay={2} ghostClass="gu-transit" group="shared">
                            {sortable2.map((item) => {
                                return (
                                    <li key={item.id} className="mb-2.5 cursor-grab">
                                        <div className="bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col ltr:md:text-left rtl:md:text-right text-center items-md-center">
                                            <div className="ltr:sm:mr-4 rtl:sm:ml-4">
                                                <img alt="avatar" src={`https://i.pravatar.cc/200`} className="w-11 h-11 rounded-full mx-auto" />
                                            </div>
                                            <div className="flex md:flex-row flex-col justify-between items-center flex-1">
                                                <div className="font-semibold md:my-0 my-3">
                                                    <div className="text-dark dark:text-[#bfc9d4] text-base">{item.text}</div>
                                                    <div className="text-white-dark text-xs">{item.name}</div>
                                                </div>
                                                <Button type="button" color='secondary'>
                                                    View
                                                </Button>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ReactSortable>
                    </ul>
                </div>
            </Card>

            {/* Handler */}
            <Card title='Handler'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
                    <ul id="example5">
                        <ReactSortable list={handler1} setList={setHandler1} animation={200} handle=".handle" group="handler" ghostClass="gu-transit">
                            {handler1.map((item) => {
                                return (
                                    <li key={item.id} className="mb-2.5 cursor-grab">
                                        <div className="bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col ltr:text-left rtl:text-right items-md-center">
                                            <div className="ltr:sm:mr-4 rtl:sm:ml-4">
                                                <img alt="avatar" src={`https://i.pravatar.cc/200`} className="w-11 h-11 rounded-full mx-auto" />
                                            </div>
                                            <div className="flex md:flex-row flex-col justify-between items-center flex-1 text-center md:text-left">
                                                <div className="font-semibold md:my-0 my-3">
                                                    <div className="text-dark dark:text-[#bfc9d4] text-base">{item.text}</div>
                                                    <div className="text-white-dark text-xs">{item.name}</div>
                                                </div>
                                                <div className="text-white-dark">
                                                    <span className="handle px-2 ltr:mr-1 rtl:ml-1 bg-[#ebedf2] dark:bg-black rounded cursor-move">+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ReactSortable>
                    </ul>

                    <ul id="example6">
                        <ReactSortable list={handler2} setList={setHandler2} animation={200} handle=".handle" group="handler" ghostClass="gu-transit">
                            {handler2.map((item) => {
                                return (
                                    <li key={item.id} className="mb-2.5 cursor-grab">
                                        <div className="bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col ltr:text-left rtl:text-right items-md-center">
                                            <div className="ltr:sm:mr-4 rtl:sm:ml-4">
                                                <img alt="avatar" src={`https://i.pravatar.cc/200`} className="w-11 h-11 rounded-full mx-auto" />
                                            </div>
                                            <div className="sm:flex block justify-between items-center flex-1 text-center md:text-left">
                                                <div className="font-semibold md:my-0 my-3">
                                                    <div className="text-dark dark:text-[#bfc9d4] text-base">{item.text}</div>
                                                    <div className="text-white-dark text-xs">{item.name}</div>
                                                </div>
                                                <div className="text-white-dark">
                                                    <span className="handle px-2 ltr:mr-1 rtl:ml-1 bg-[#ebedf2] dark:bg-black rounded cursor-move">+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ReactSortable>
                    </ul>
                </div>
            </Card >

            {/* News Feed */}
            <Card title='News Feed'>
                <ReactSortable list={newsFeed} setList={setNewsFeed} animation={200} className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
                    {newsFeed.map((item) => {
                        return (
                            <div className="mb-2.5" key={item.id}>
                                <div className="bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5">
                                    <div className="py-sm-2.5 sm:flex block ltr:md:text-left rtl:md:text-right text-center items-md-center">
                                        <div className="ltr:sm:mr-4 rtl:sm:ml-4">
                                            <img alt="avatar" src={`https://i.pravatar.cc/200`} className="w-11 h-11 rounded-lg mx-auto" />
                                        </div>
                                        <div className="flex md:flex-row flex-col justify-between items-center flex-1">
                                            <div className="font-semibold md:my-0 my-3">
                                                <div className="text-dark dark:text-[#bfc9d4] text-base">{item.name}</div>
                                                <div className="text-white-dark text-xs">11 hours ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-5 border-b border-b-[#f1f2f3] dark:border-b-dark mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation.
                                    </div>
                                    <div className="md:flex items-center flex-wrap">
                                        <div className="ltr:md:text-left rtl:md:text-right text-center xl:flex-1">
                                            <div className="flex md:justify-start justify-center -space-x-2 rtl:space-x-reverse text-white">
                                                <img
                                                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-white-dark"
                                                    src="https://i.pravatar.cc/200"
                                                    alt="avatar"
                                                />
                                                <img
                                                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-white-dark"
                                                    src="https://i.pravatar.cc/200"
                                                    alt="avatar"
                                                />
                                                <img
                                                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-white-dark"
                                                    src="https://i.pravatar.cc/200"
                                                    alt="avatar"
                                                />
                                                <img
                                                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-white-dark"
                                                    src="https://i.pravatar.cc/200"
                                                    alt="avatar"
                                                />
                                            </div>
                                        </div>
                                        <div className="ltr:md:text-right rtl:md:text-left text-center">
                                            <span className="text-xs text-white-dark lg:pt-0 pt-2 block">
                                                <button className="text-danger dark:text-primary font-semibold text-sm mr-1">Vincent, Mary</button>
                                                and 19 other like this
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </ReactSortable>
            </Card >

            {/* Grid drag */}
            <Card title='Grid Drag'>
                <ReactSortable list={gridDrag} setList={setGridDrag} animation={200} className="flex flex-wrap gap-4 place-items-center">
                    {gridDrag.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="w-24 h-24 border border-white-light rounded-md shadow dark:border-dark flex items-center justify-center font-semibold cursor-grab"
                            >
                                {item.name}
                            </div>
                        );
                    })}
                </ReactSortable>
            </Card >
        </div >
    );
};

export default DragAndDropPage;
