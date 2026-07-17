import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const suggestions = [
    "Suggest a laptop under ₹70,000",
    "Best phone for photography",
    "Latest fashion trends",
    "Difference between OLED and AMOLED",
    "What should I wear for an interview?",
    "Recommend a gaming keyboard",
];

const Ai = () => {
    const [prompt, setPrompt] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const askAI = async () => {
        if (!prompt.trim()) return;

        try {
            setLoading(true);
            setAnswer("");

            const res = await axios.post("http://localhost:8080/chat", {
                prompt,
            });

            setAnswer(res.data.answer);
            setPrompt("");
        } catch (error) {
            console.error(error);
            setAnswer("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            askAI();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100 py-12 px-4">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-10">


                    <h1 className="text-5xl font-extrabold mt-5 text-gray-800">
                        AI Shopping Assistant
                    </h1>

                    <p className="text-gray-500 mt-3 text-lg">
                        Ask anything about fashion, gadgets, technology, shopping
                        advice, or product recommendations.
                    </p>
                </div>

                {/* Input Card */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200 p-8">

                    <textarea
                        rows={6}
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Example: Suggest a laptop under ₹60,000 for programming..."
                        className="w-full rounded-xl border border-gray-300 p-5 text-lg resize-none outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition"
                    />

                    <button
                        onClick={askAI}
                        disabled={loading}
                        className={`mt-6 w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-white ${loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.01]"
                            }`}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center gap-3">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Thinking...
                            </div>
                        ) : (
                            "Ask AI"
                        )}
                    </button>

                    {/* Suggestions */}
                    <div className="mt-10">
                        <h2 className="text-xl font-bold mb-5 text-gray-700">
                            Try Asking
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {suggestions.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setPrompt(item)}
                                    className="text-left bg-gray-50 border border-gray-200 rounded-xl p-4 hover:bg-blue-50 hover:border-blue-500 hover:shadow-md transition"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Response */}
                {answer && (
                    <div className="mt-10 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">

                        <div className="bg-blue-600 text-white px-6 py-4 flex items-center gap-3">
                            <span className="text-2xl">🤖</span>

                            <h2 className="text-xl font-bold">
                                AI Response
                            </h2>
                        </div>

                        <div className="p-8">

                            <div className="prose prose-lg max-w-none prose-blue">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {answer}
                                </ReactMarkdown>
                            </div>

                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Ai;