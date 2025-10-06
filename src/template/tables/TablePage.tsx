import { Button, ButtonRipple, Card, Limit, Pagination, Tables, TextField, Tooltip } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { TbDotsVertical, TbEye, TbTrash } from "react-icons/tb";

const TablePage = () => {
    const { colortheme } = useContext(ThemeContext);
    const [limit, setLimit] = useState(10);
    const [pageActive, setPageActive] = useState(1);

    const [data] = useState([
        {
            id: 1,
            name: "John Doe",
            email: "johndoegmail.com",
        },
        {
            id: 2,
            name: "Jane Doe",
            email: "janedoegmail.com",
        },
        {
            id: 3,
            name: "John Smith",
            email: "johnsmithgmail.com",
        },
        {
            id: 4,
            name: "John Wick",
            email: "johnwickgmail.com",
        },
        {
            id: 5,
            name: "John Krasinski",
            email: "johnkrasinskigmail.com",
        },
        {
            id: 6,
            name: "John Cena",
            email: "johncenagmail.com",
        },
        {
            id: 7,
            name: "John Legend",
            email: "johnlegendgmail.com",
        },
        {
            id: 8,
            name: "John Mayer",
            email: "johnmayergmail.com",
        },
        {
            id: 9,
            name: "John Travolta",
            email: "johntravoltagmail.com",
        },
        {
            id: 10,
            name: "John Mulaney",
            email: "johnmulaneygmail.com",
        },
        {
            id: 11,
            name: "John Oliver",
            email: "johnolivergmail.com",
        },
        {
            id: 12,
            name: "John Lennon",
            email: "johnlennongmail.com",
        },
    ]);

    return (
        <div
            className="grid grid-cols-1 gap-6"
        >
            {/* Basic */}
            <Card title="Basic">
                <div className="text-sm mb-3">
                    Tables component is a wrapper for HTML table element.
                </div>

                <Tables>
                    <Tables.Head>
                        <Tables.Row>
                            <Tables.Header>ID</Tables.Header>
                            <Tables.Header>Name</Tables.Header>
                            <Tables.Header>Email</Tables.Header>
                        </Tables.Row>
                    </Tables.Head>
                    <Tables.Body>
                        {data.slice(0, 5).map((item, idx) => (
                            <Tables.Row
                                expandable={<div className="p-2">{item.name}</div>}
                                key={idx}
                            >
                                <Tables.Data>{item.id}</Tables.Data>
                                <Tables.Data>{item.name}</Tables.Data>
                                <Tables.Data>{item.email}</Tables.Data>
                            </Tables.Row>
                        ))}
                    </Tables.Body>
                </Tables>
            </Card>

            {/* Size */}
            <Card title="Size">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>size</span> prop is used to
                    set the size of the table.
                </div>

                <Tables size="sm">
                    <Tables.Head>
                        <Tables.Row>
                            <Tables.Header>ID</Tables.Header>
                            <Tables.Header>Name</Tables.Header>
                            <Tables.Header>Email</Tables.Header>
                        </Tables.Row>
                    </Tables.Head>
                    <Tables.Body>
                        {data.slice(0, 5).map((item, idx) => (
                            <Tables.Row key={idx}>
                                <Tables.Data>{item.id}</Tables.Data>
                                <Tables.Data>{item.name}</Tables.Data>
                                <Tables.Data>{item.email}</Tables.Data>
                            </Tables.Row>
                        ))}
                    </Tables.Body>
                </Tables>
            </Card>

            {/* Density */}
            <Card title="Density">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>density</span> prop is used to
                    set the density of the table.
                </div>

                <Tables density="tight">
                    <Tables.Head>
                        <Tables.Row>
                            <Tables.Header>ID</Tables.Header>
                            <Tables.Header>Name</Tables.Header>
                            <Tables.Header>Email</Tables.Header>
                        </Tables.Row>
                    </Tables.Head>
                    <Tables.Body>
                        {data.slice(0, 3).map((item, idx) => (
                            <Tables.Row key={idx}>
                                <Tables.Data>{item.id}</Tables.Data>
                                <Tables.Data>{item.name}</Tables.Data>
                                <Tables.Data>{item.email}</Tables.Data>
                            </Tables.Row>
                        ))}
                    </Tables.Body>
                </Tables>

                <br />

                <Tables density="normal">
                    <Tables.Head>
                        <Tables.Row>
                            <Tables.Header>ID</Tables.Header>
                            <Tables.Header>Name</Tables.Header>
                            <Tables.Header>Email</Tables.Header>
                        </Tables.Row>
                    </Tables.Head>
                    <Tables.Body>
                        {data.slice(0, 3).map((item, idx) => (
                            <Tables.Row key={idx}>
                                <Tables.Data>{item.id}</Tables.Data>
                                <Tables.Data>{item.name}</Tables.Data>
                                <Tables.Data>{item.email}</Tables.Data>
                            </Tables.Row>
                        ))}
                    </Tables.Body>
                </Tables>

                <br />

                <Tables density="loose">
                    <Tables.Head>
                        <Tables.Row>
                            <Tables.Header>ID</Tables.Header>
                            <Tables.Header>Name</Tables.Header>
                            <Tables.Header>Email</Tables.Header>
                        </Tables.Row>
                    </Tables.Head>
                    <Tables.Body>
                        {data.slice(0, 3).map((item, idx) => (
                            <Tables.Row key={idx}>
                                <Tables.Data>{item.id}</Tables.Data>
                                <Tables.Data>{item.name}</Tables.Data>
                                <Tables.Data>{item.email}</Tables.Data>
                            </Tables.Row>
                        ))}
                    </Tables.Body>
                </Tables>
            </Card>

            {/* Table Fix */}
            <Card title="Table Fix">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>table fix</span> prop is used
                    to set the table layout to fixed.
                </div>

                <Tables tablefix>
                    <Tables.Head>
                        <Tables.Row>
                            <Tables.Header>ID</Tables.Header>
                            <Tables.Header>Name</Tables.Header>
                            <Tables.Header>Email</Tables.Header>
                        </Tables.Row>
                    </Tables.Head>
                    <Tables.Body>
                        {data.slice(0, 5).map((item, idx) => (
                            <Tables.Row key={idx}>
                                <Tables.Data>{item.id}</Tables.Data>
                                <Tables.Data>{item.name}</Tables.Data>
                                <Tables.Data>{item.email}</Tables.Data>
                            </Tables.Row>
                        ))}
                    </Tables.Body>
                </Tables>
            </Card>

            {/* Height & Sticky */}
            <Card title="Height & Sticky">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>height</span> prop is used to
                    set the height of the table. The{" "}
                    <span style={{ color: colortheme }}>sticky</span> prop is used to set
                    the table header to sticky.
                </div>

                <Tables height={300}>
                    <Tables.Head sticky>
                        <Tables.Row>
                            <Tables.Header>ID</Tables.Header>
                            <Tables.Header>Name</Tables.Header>
                            <Tables.Header>Email</Tables.Header>
                        </Tables.Row>
                    </Tables.Head>
                    <Tables.Body>
                        {data.map((item, idx) => (
                            <Tables.Row key={idx}>
                                <Tables.Data>{item.id}</Tables.Data>
                                <Tables.Data>{item.name}</Tables.Data>
                                <Tables.Data>{item.email}</Tables.Data>
                            </Tables.Row>
                        ))}
                    </Tables.Body>
                </Tables>
            </Card>

            {/* Center */}
            <Card title="Center">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>center</span> prop is used to
                    set the content of the table to center.
                </div>

                <Tables>
                    <Tables.Head>
                        <Tables.Row>
                            <Tables.Header>ID</Tables.Header>
                            <Tables.Header center>Name</Tables.Header>
                            <Tables.Header center>Email</Tables.Header>
                        </Tables.Row>
                    </Tables.Head>
                    <Tables.Body>
                        {data.slice(0, 3).map((item, idx) => (
                            <Tables.Row key={idx}>
                                <Tables.Data>{item.id}</Tables.Data>
                                <Tables.Data center>{item.name}</Tables.Data>
                                <Tables.Data center>{item.email}</Tables.Data>
                            </Tables.Row>
                        ))}
                    </Tables.Body>
                </Tables>
            </Card>

            {/* Center */}
            <Card title="Example">
                <div className="text-sm mb-3">
                    This example shows a table with <span style={{ color: colortheme }}>pagination </span>
                    and <span style={{ color: colortheme }}>action buttons</span>. Pagination makes it easy
                    to navigate large data sets, while action buttons allow quick interactions such as
                    editing or deleting rows.
                </div>
                {/* Control Top */}
                <div className="mb-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
                    <div className="w-full sm:w-60">
                        <TextField placeholder="Search" />
                    </div>

                    <div className="flex gap-2">
                        <Button color="primary">
                            Create
                        </Button>
                    </div>
                </div>

                {/* Tables */}
                <Tables>
                    <Tables.Head>
                        <Tables.Row>
                            <Tables.Header>ID</Tables.Header>
                            <Tables.Header>Name</Tables.Header>
                            <Tables.Header>Email</Tables.Header>
                            <Tables.Header center>Action</Tables.Header>
                        </Tables.Row>
                    </Tables.Head>
                    <Tables.Body>
                        {data
                            .slice((pageActive - 1) * limit, limit * pageActive)
                            .map((item: any, idx: any) => (
                                <Tables.Row
                                    expandable={<div className="p-2">{item.name}</div>}
                                    key={idx}
                                >
                                    <Tables.Data>{item.id}</Tables.Data>
                                    <Tables.Data>{item.name}</Tables.Data>
                                    <Tables.Data>{item.email}</Tables.Data>
                                    <Tables.Data center>
                                        <div className="flex items-center justify-center">
                                            <Tooltip tooltip="Lihat">
                                                <ButtonRipple
                                                    stopPropagation
                                                    className="p-2 rounded-full transition-[background] hover:bg-white/10"
                                                >
                                                    <TbEye className="text-xl text-info" />
                                                </ButtonRipple>
                                            </Tooltip>
                                            <Tooltip tooltip="Hapus">
                                                <ButtonRipple
                                                    stopPropagation
                                                    className="p-2 rounded-full transition-[background] hover:bg-white/10"
                                                >
                                                    <TbTrash className="text-xl text-danger" />
                                                </ButtonRipple>
                                            </Tooltip>
                                            <Tooltip tooltip="Lainnya">
                                                <ButtonRipple
                                                    stopPropagation
                                                    className="p-2 rounded-full transition-[background] hover:bg-white/10"
                                                >
                                                    <TbDotsVertical className="text-xl" />
                                                </ButtonRipple>
                                            </Tooltip>
                                        </div>
                                    </Tables.Data>
                                </Tables.Row>
                            ))}
                    </Tables.Body>
                </Tables>

                {/* Control Bottom */}
                <div className="mt-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
                    <div className="flex gap-2 items-baseline text-sm">
                        <Limit
                            limit={limit}
                            setLimit={setLimit}
                            onChange={() => setPageActive(1)}
                        />
                        {data.length} entries
                    </div>

                    <Pagination
                        totalCount={data.length}
                        onPageChange={(page) => {
                            setPageActive(page);
                        }}
                        currentPage={pageActive}
                        pageSize={limit}
                    />
                </div>
            </Card>
        </div >
    );
};

export default TablePage;