import { Card } from "@/components";
import CountUp from 'react-countup';
import { PiDownload, PiUsers, PiVan } from "react-icons/pi";

const CounterPage = () => {
    return (
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
            <Card title="Simple Counter">
                <div className="mt-2 grid grid-cols-3 justify-items-center gap-3 max-w-[900px] mx-auto">
                    <div>
                        <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
                            <CountUp start={0} end={710} duration={7} className="text-primary text-xl sm:text-3xl text-center"></CountUp>
                        </div>
                        <h4 className="text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold">HOURS</h4>
                    </div>
                    <div>
                        <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
                            <CountUp start={0} end={915} duration={7} className="text-primary text-xl sm:text-3xl text-center"></CountUp>
                        </div>
                        <h4 className="text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold">TICKETS</h4>
                    </div>
                    <div>
                        <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
                            <CountUp start={0} end={580} duration={7} className="text-primary text-xl sm:text-3xl text-center"></CountUp>
                        </div>
                        <h4 className="text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold">CUSTOMERS</h4>
                    </div>
                </div>
            </Card>
            <Card title="With Icon">
                <div className="mt-2 grid grid-cols-3 justify-items-center gap-3 max-w-[900px] mx-auto">
                    <div>
                        <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
                            <CountUp start={0} end={105} duration={7} className="text-primary text-xl sm:text-3xl text-center"></CountUp>
                        </div>
                        <h4 className="text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold">
                            <PiUsers className="sm:w-6 sm:h-6 text-primary mx-auto mb-2" />
                            Clients
                        </h4>
                    </div>
                    <div>
                        <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
                            <CountUp start={0} end={300} duration={7} className="text-primary text-xl sm:text-3xl text-center"></CountUp>
                        </div>
                        <h4 className="text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold">
                            <PiDownload className="sm:w-6 sm:h-6 text-primary mx-auto mb-2" />
                            Downloads
                        </h4>
                    </div>
                    <div>
                        <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
                            <CountUp start={0} end={58} duration={7} className="text-primary text-xl sm:text-3xl text-center"></CountUp>
                        </div>
                        <h4 className="text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold">
                            <PiVan className="sm:w-6 sm:h-6 text-primary mx-auto mb-2" />
                            Vehicle
                        </h4>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CounterPage