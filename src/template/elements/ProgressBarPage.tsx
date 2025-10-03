import { Card } from "@/components"

const ProgressBarPage = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card title="Basic">
                <div className="space-y-4 mt-2">
                    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                        <div className="bg-primary h-4 rounded-full w-3/12"></div>
                    </div>
                    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                        <div className="bg-secondary h-4 rounded-full w-4/12"></div>
                    </div>
                    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                        <div className="bg-success h-4 rounded-full w-5/12"></div>
                    </div>
                    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                        <div className="bg-warning h-4 rounded-full w-6/12"></div>
                    </div>
                    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                        <div className="bg-danger h-4 rounded-full w-7/12"></div>
                    </div>
                    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                        <div className="bg-info h-4 rounded-full w-8/12"></div>
                    </div>
                    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                        <div className="bg-black dark:bg-dark h-4 rounded-full w-9/12"></div>
                    </div>
                </div>
            </Card>
            <Card title="Gradient">
                <div className="space-y-4 mt-2">
                    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                        <div className="bg-gradient-to-r from-[#0081ff] to-[#0045ff] h-4 rounded-full w-3/12"></div>
                    </div>
                    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                        <div className="bg-gradient-to-r from-[#04befe] to-[#4481eb] h-4 rounded-full w-4/12"></div>
                    </div>
                    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                        <div className="bg-gradient-to-r from-[#3cba92] to-[#0ba360] h-4 rounded-full w-5/12"></div>
                    </div>
                    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                        <div className="bg-gradient-to-r from-[#f09819] to-[#ff5858] h-4 rounded-full w-6/12"></div>
                    </div>
                    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                        <div className="bg-gradient-to-r from-[#d09693] to-[#c71d6f] h-4 rounded-full w-7/12"></div>
                    </div>
                    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                        <div className="bg-gradient-to-r from-[#7579ff] to-[#b224ef] h-4 rounded-full w-8/12"></div>
                    </div>
                    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                        <div className="bg-gradient-to-r from-[#2b5876] to-[#4e4376] h-4 rounded-full w-9/12"></div>
                    </div>
                </div>
            </Card>
            <Card title="Striped">
                <div className="space-y-4 mt-2">
                    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                        <div
                            className="bg-primary h-4 rounded-full w-3/12"
                            style={{
                                backgroundImage:
                                    'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                                backgroundSize: '1rem 1rem',
                            }}
                        ></div>
                    </div>
                </div>
            </Card>
            <Card title="Animated">
                <div className="space-y-4 mt-2">
                    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                        <div
                            className="bg-primary h-4 rounded-full w-6/12 animated-progress"
                            style={{
                                backgroundImage:
                                    'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                                backgroundSize: '1rem 1rem',
                            }}
                        ></div>
                    </div>
                </div>
            </Card>
            <Card title="Sizes">
                <div className="space-y-4 mt-2">
                    <div className="space-y-1">
                        <h3 className="text-primary">Default</h3>
                        <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
                            <div className="bg-primary h-4 rounded-full rounded-bl-full w-3/12 text-center text-white text-xs"></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base text-success">Progress-sm</h3>
                        <div className="w-full h-1 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
                            <div className="bg-success h-1 rounded-full rounded-bl-full w-5/12 text-center text-white text-xs"></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base text-warning">Progress-md</h3>
                        <div className="w-full h-2.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
                            <div className="bg-warning h-2.5 rounded-full rounded-bl-full w-7/12 text-center text-white text-xs"></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base text-info">Progress-lg</h3>
                        <div className="w-full h-5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
                            <div className="bg-info h-5 rounded-full rounded-bl-full w-8/12 text-center text-white text-xs"></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base text-danger">Progress-xl</h3>
                        <div className="w-full h-6 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
                            <div className="bg-danger h-6 rounded-full rounded-bl-full w-10/12 text-center text-white text-xs"></div>
                        </div>
                    </div>
                </div>
            </Card>
            <Card title="Striped">
                <div className="space-y-4 mt-2">
                    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                        <div className="bg-info h-4 rounded-full w-4/5 text-center text-white text-xs">80%</div>
                    </div>
                    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
                        <div className="bg-danger h-4 rounded-full w-11/12 text-center text-white flex justify-between items-center px-2 text-xs">
                            <span>PHP</span>
                            <span>90%</span>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ProgressBarPage