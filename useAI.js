import { useState } from "react";

const useAI = (apiEndpoint) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAIResponse = async (inputText) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(apiEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt: inputText }),
            });

            const data = await res.json();
            setResponse(data);
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };

    return { response, loading, error, fetchAIResponse };
};

export default useAI;
