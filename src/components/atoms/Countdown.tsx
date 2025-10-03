import React, { useEffect, useState } from "react"

interface CountdownProps {
    value: Date | string | number
    roundedFull?: boolean
}

interface TimeLeft {
    days: number
    hours: number
    minutes: number
    seconds: number
}

const Countdown: React.FC<CountdownProps> = ({ value, roundedFull = false }) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const targetDate = new Date(value).getTime()

        const timer = setInterval(() => {
            const now = new Date().getTime()
            const distance = targetDate - now

            if (distance <= 0) {
                clearInterval(timer)
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
                return
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [value])

    const boxClass = `w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] ${roundedFull ? "rounded-full" : "rounded"
        } border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col`

    const items = [
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Mins", value: timeLeft.minutes },
        { label: "Sec", value: timeLeft.seconds },
    ]

    return (
        <div className="grid grid-cols-4 justify-items-center gap-3">
            {items.map((item, idx) => (
                <div key={idx}>
                    <div className={boxClass}>
                        <h1 className="text-primary sm:text-3xl text-xl text-center">
                            {item.value}
                        </h1>
                    </div>
                    <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">
                        {item.label}
                    </h4>
                </div>
            ))}
        </div>
    )
}

export default Countdown
