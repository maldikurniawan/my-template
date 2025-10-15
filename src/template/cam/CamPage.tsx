import * as faceapi from "face-api.js";
import { useEffect, useRef, useState } from "react";

const CamPage = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [message, setMessage] = useState("Loading models...");
    const [finished, setFinished] = useState(false);

    const MODEL_URL = "/models"; // folder public/models/

    const handleRetry = () => {
        setFinished(false);
        setMessage("Retrying detection...");
        if (videoRef.current) runDetection();
    };

    useEffect(() => {
        let stream: MediaStream;

        const loadModels = async () => {
            await Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL), // ✅ tambahkan ini
            ]);
            setMessage("Models loaded ✅ Starting webcam...");
            startVideo();
        };

        const startVideo = async () => {
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: {} });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.onloadedmetadata = () => {
                        videoRef.current?.play();
                        runDetection();
                    };
                }
            } catch (err) {
                console.error("Webcam error:", err);
                setMessage("Cannot access webcam");
                setFinished(true);
            }
        };

        loadModels();

        return () => {
            if (stream) stream.getTracks().forEach((t) => t.stop());
            if (videoRef.current) videoRef.current.srcObject = null;
        };
    }, []);

    // ✅ Deteksi ekspresi wajah
    const runDetection = async () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        const displaySize = { width: 720, height: 500 };
        canvas.width = displaySize.width;
        canvas.height = displaySize.height;
        faceapi.matchDimensions(canvas, displaySize);

        // Deteksi wajah dengan ekspresi
        const detections = await faceapi
            .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceExpressions();

        const resizedDetections = faceapi.resizeResults(detections, displaySize);

        const ctx = canvas.getContext("2d");
        ctx?.clearRect(0, 0, canvas.width, canvas.height);

        if (resizedDetections.length > 0) {
            const face = resizedDetections[0];

            // Ambil ekspresi dengan probabilitas tertinggi
            const expressions = face.expressions;
            const topExpression = Object.entries(expressions).reduce((a, b) =>
                a[1] > b[1] ? a : b
            );

            // Gambar kotak di wajah
            const drawBox = new faceapi.draw.DrawBox(face.detection.box, {
                label: `${topExpression[0]} (${Math.round(topExpression[1] * 100)}%)`,
            });
            drawBox.draw(canvas);

            setMessage(`Ekspresi terdeteksi: ${topExpression[0]} 😄`);
        } else {
            setMessage("Tidak ada wajah terdeteksi ❌");
        }

        setFinished(true);
    };

    return (
        <div
            style={{
                position: "relative",
                display: "inline-block",
                width: "720px",
                height: "500px",
            }}
        >
            <video
                ref={videoRef}
                autoPlay
                muted
                style={{
                    width: "720px",
                    height: "500px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
                    background: "#000",
                    objectFit: "cover",
                    display: "block",
                }}
            />
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            />
            <div
                style={{
                    marginTop: "10px",
                    fontSize: "20px",
                    color: "#1565c0",
                    fontWeight: "bold",
                    textAlign: "center",
                }}
            >
                {message}
            </div>

            {finished && (
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                    <button
                        onClick={handleRetry}
                        style={{
                            padding: "8px 20px",
                            fontSize: "16px",
                            borderRadius: "6px",
                            border: "none",
                            background: "#1976d2",
                            color: "#fff",
                            cursor: "pointer",
                            fontWeight: "bold",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                        }}
                    >
                        Retry
                    </button>
                </div>
            )}
        </div>
    );
};

export default CamPage;
