# Ollama ChatBot

A React-based chatbot powered by [Ollama](https://ollama.com) for local AI inference. Features real-time streaming responses.

## Features

- Local AI inference using Ollama (no API costs)
- Real-time streaming responses
- Simple and clean UI
- Supports any Ollama model (llama3, phi3, mistral, etc.)

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [Ollama](https://ollama.com) installed on your machine

## Setup

### 1. Install Ollama and pull a model

```bash
# Install Ollama from https://ollama.com

# Pull a model (choose one)
ollama pull llama3      # Best quality, slower
ollama pull phi3        # Good balance of speed/quality
ollama pull gemma:2b    # Fastest, smaller model
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start Ollama server

```bash
ollama serve
```

### 4. Start the React app (in a new terminal)

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to use the chatbot.

## Configuration

To change the model, edit the `MODEL` constant in `src/Chatbot.js`:

```javascript
const MODEL = "phi3"; // Change to your preferred model
```

## Available Models

| Model | Size | Speed | Quality |
|-------|------|-------|---------|
| llama3 | 4.7GB | Slow | Best |
| phi3 | 2.2GB | Fast | Good |
| gemma:2b | 1.4GB | Fastest | Basic |
| mistral | 4.1GB | Medium | Great |

## Troubleshooting

**"Ollama error — make sure Ollama is running"**
- Ensure Ollama is running: `ollama serve`

**Slow responses**
- Use a smaller model like `phi3` or `gemma:2b`
- Streaming is enabled by default to show text as it generates

## Tech Stack

- React 19
- Ollama API
- Streaming fetch for real-time responses
