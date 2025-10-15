import * as faceapi from "face-api.js";
import { useEffect, useRef, useState } from "react";

const CamPage = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [message, setMessage] = useState("Loading models...");
    const MODEL_URL = "/models";
    const detectionInterval = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        let stream: MediaStream | null = null;

        const loadModels = async () => {
            try {
                await Promise.all([
                    faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                    faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                    faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
                ]);
                setMessage("Models loaded ✅ Starting webcam...");
                await startVideo();
            } catch (err) {
                console.error("Model load error:", err);
                setMessage("Gagal memuat model ❌");
            }
        };

        const startVideo = async () => {
            try {
                stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: "user",
                    },
                    audio: false,
                });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    await videoRef.current.play();
                    setMessage("Webcam aktif 🎥");
                    startDetectionLoop();
                }
            } catch (err) {
                console.error("Webcam error:", err);
                setMessage("Tidak bisa mengakses webcam ❌");
            }
        };

        const startDetectionLoop = () => {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            if (!video || !canvas) return;

            const displaySize = { width: 720, height: 500 };
            canvas.width = displaySize.width;
            canvas.height = displaySize.height;
            faceapi.matchDimensions(canvas, displaySize);

            detectionInterval.current = setInterval(async () => {
                if (!video || video.paused || video.ended) return;

                const detections = await faceapi
                    .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
                    .withFaceLandmarks()
                    .withFaceExpressions();

                const resized = faceapi.resizeResults(detections, displaySize);
                const ctx = canvas.getContext("2d");
                ctx?.clearRect(0, 0, canvas.width, canvas.height);

                if (resized.length > 0) {
                    const face = resized[0];
                    const top = Object.entries(face.expressions).reduce((a, b) =>
                        a[1] > b[1] ? a : b
                    );
                    const drawBox = new faceapi.draw.DrawBox(face.detection.box, {
                        label: `${top[0]} (${Math.round(top[1] * 100)}%)`,
                    });
                    drawBox.draw(canvas);
                    setMessage(`Ekspresi: ${top[0]} 😄`);
                } else {
                    setMessage("Tidak ada wajah ❌");
                }
            }, 300);
        };

        loadModels();

        return () => {
            if (detectionInterval.current) clearInterval(detectionInterval.current);
            if (stream) stream.getTracks().forEach((t) => t.stop());
            if (videoRef.current) videoRef.current.srcObject = null;
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 box-border space-y-4">
            <div className="text-center font-black text-black dark:text-white-light">
                Emotion Detection
            </div>
            <div className="relative w-full max-w-[700px] aspect-[4/3] rounded-md overflow-hidden shadow-lg bg-white-light dark:bg-black">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-cover block"
                />
                <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full"
                />
            </div>

            <div className="text-center font-black text-black dark:text-white-light">
                {message}
            </div>
        </div>
    );
};

export default CamPage;
