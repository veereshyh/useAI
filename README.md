# useAHandlers

How to use this hook

Step1: 
`
npm install use-ai-hook
`
Step2:
`
import useAI from "use-ai-hook";

const ChatComponent = () => {
  const { response, loading, fetchAIResponse } = useAI("https://api.openai.com/v1/chat");

  return (
    <div>
      <button onClick={() => fetchAIResponse("Tell me a joke")}>
        Ask AI
      </button>
      {loading && <p>Loading...</p>}
      {response && <p>{response.text}</p>}
    </div>
  );
};

export default ChatComponent;
`
