export interface DocSection {
  slug: string
  title: string
  titleEn: string
  description: string
  icon: string
}

export const docSections: DocSection[] = [
  {
    slug: "text",
    title: "文本生成",
    titleEn: "Chat Completions",
    description: "GLM-4 系列大语言模型对话接口，完全兼容 OpenAI 格式",
    icon: "💬",
  },
  {
    slug: "vision",
    title: "多模态理解",
    titleEn: "Vision",
    description: "GLM-4V 系列，支持图片理解和图文对话",
    icon: "👁️",
  },
  {
    slug: "image",
    title: "图片生成",
    titleEn: "Image Generation",
    description: "CogView 系列 AI 图片生成",
    icon: "🖼️",
  },
  {
    slug: "video",
    title: "视频生成",
    titleEn: "Video Generation",
    description: "CogVideoX AI 视频生成",
    icon: "🎬",
  },
  {
    slug: "voice",
    title: "语音模型",
    titleEn: "Voice",
    description: "GLM-4-Voice 语音对话模型",
    icon: "🔊",
  },
  {
    slug: "embedding",
    title: "向量化",
    titleEn: "Embedding",
    description: "文本向量化接口",
    icon: "🔢",
  },
  {
    slug: "tools",
    title: "工具调用",
    titleEn: "Web Search",
    description: "联网搜索等工具",
    icon: "🔧",
  },
]

export const baseUrl = "https://your-proxy-domain.com/v1"

export interface ApiEndpoint {
  method: string
  path: string
  description: string
}

export interface CodeExample {
  language: string
  label: string
  code: string
}

export interface DocPageData {
  slug: string
  title: string
  description: string
  endpoints: ApiEndpoint[]
  requestExample: string
  responseExample: string
  codeExamples: CodeExample[]
  parameters: { name: string; type: string; required: boolean; description: string }[]
}

export const docsContent: Record<string, DocPageData> = {
  text: {
    slug: "text",
    title: "文本生成 (Chat Completions)",
    description:
      "GLM-4 系列大语言模型对话接口，完全兼容 OpenAI Chat Completions API 格式，支持流式输出和函数调用。",
    endpoints: [
      { method: "POST", path: "/chat/completions", description: "创建对话补全" },
    ],
    parameters: [
      { name: "model", type: "string", required: true, description: "模型名称：GLM-4-Plus, GLM-4-Air, GLM-4-AirX, GLM-4-Long, GLM-4-FlashX, GLM-4-Flash" },
      { name: "messages", type: "array", required: true, description: "对话消息列表，每条消息包含 role 和 content" },
      { name: "temperature", type: "number", required: false, description: "采样温度，范围 0-1，默认 0.7" },
      { name: "max_tokens", type: "integer", required: false, description: "最大生成 tokens 数量" },
      { name: "stream", type: "boolean", required: false, description: "是否使用流式输出，默认 false" },
      { name: "top_p", type: "number", required: false, description: "核采样参数，默认 0.9" },
      { name: "tools", type: "array", required: false, description: "可用的工具列表（函数调用）" },
    ],
    requestExample: `{
  "model": "GLM-4-Air",
  "messages": [
    {"role": "system", "content": "你是一个智能助手"},
    {"role": "user", "content": "请介绍一下智谱AI"}
  ],
  "temperature": 0.7,
  "top_p": 0.9,
  "stream": false
}`,
    responseExample: `{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "GLM-4-Air",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "智谱AI是一家专注于大模型与认知智能技术的公司..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 20,
    "completion_tokens": 100,
    "total_tokens": 120
  }
}`,
    codeExamples: [
      {
        language: "python",
        label: "Python",
        code: `from openai import OpenAI

# 使用代理 API
client = OpenAI(
    api_key="your-api-key",
    base_url="https://your-proxy-domain.com/v1"
)

response = client.chat.completions.create(
    model="GLM-4-Air",
    messages=[
        {"role": "system", "content": "你是一个智能助手"},
        {"role": "user", "content": "请介绍一下智谱AI"}
    ],
    temperature=0.7,
    stream=False
)

print(response.choices[0].message.content)`,
      },
      {
        language: "javascript",
        label: "JavaScript",
        code: `import OpenAI from 'openai';

// 使用代理 API
const client = new OpenAI({
  apiKey: 'your-api-key',
  baseURL: 'https://your-proxy-domain.com/v1'
});

async function chat() {
  const response = await client.chat.completions.create({
    model: 'GLM-4-Air',
    messages: [
      { role: 'system', content: '你是一个智能助手' },
      { role: 'user', content: '请介绍一下智谱AI' }
    ],
    temperature: 0.7,
    stream: false
  });

  console.log(response.choices[0].message.content);
}

chat();`,
      },
      {
        language: "bash",
        label: "cURL",
        code: `curl https://your-proxy-domain.com/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your-api-key" \\
  -d '{
    "model": "GLM-4-Air",
    "messages": [
      {"role": "system", "content": "你是一个智能助手"},
      {"role": "user", "content": "请介绍一下智谱AI"}
    ],
    "temperature": 0.7
  }'`,
      },
    ],
  },
  vision: {
    slug: "vision",
    title: "多模态理解 (Vision)",
    description: "GLM-4V 系列多模态模型，支持图片理解和图文对话。",
    endpoints: [
      { method: "POST", path: "/chat/completions", description: "多模态对话" },
    ],
    parameters: [
      { name: "model", type: "string", required: true, description: "模型名称：GLM-4V, GLM-4V-Plus" },
      { name: "messages", type: "array", required: true, description: "消息列表，content 可包含 text 和 image_url" },
      { name: "temperature", type: "number", required: false, description: "采样温度，默认 0.7" },
      { name: "max_tokens", type: "integer", required: false, description: "最大生成 tokens 数量" },
    ],
    requestExample: `{
  "model": "GLM-4V-Plus",
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "这张图片里有什么？"
        },
        {
          "type": "image_url",
          "image_url": {
            "url": "https://example.com/image.jpg"
          }
        }
      ]
    }
  ]
}`,
    responseExample: `{
  "id": "chatcmpl-456",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "GLM-4V-Plus",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "这张图片显示的是一只可爱的猫咪..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 1200,
    "completion_tokens": 80,
    "total_tokens": 1280
  }
}`,
    codeExamples: [
      {
        language: "python",
        label: "Python",
        code: `from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://your-proxy-domain.com/v1"
)

response = client.chat.completions.create(
    model="GLM-4V-Plus",
    messages=[
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "这张图片里有什么？"},
                {
                    "type": "image_url",
                    "image_url": {"url": "https://example.com/image.jpg"}
                }
            ]
        }
    ]
)

print(response.choices[0].message.content)`,
      },
      {
        language: "javascript",
        label: "JavaScript",
        code: `import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'your-api-key',
  baseURL: 'https://your-proxy-domain.com/v1'
});

async function analyzeImage() {
  const response = await client.chat.completions.create({
    model: 'GLM-4V-Plus',
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: '这张图片里有什么？' },
          {
            type: 'image_url',
            image_url: { url: 'https://example.com/image.jpg' }
          }
        ]
      }
    ]
  });

  console.log(response.choices[0].message.content);
}

analyzeImage();`,
      },
      {
        language: "bash",
        label: "cURL",
        code: `curl https://your-proxy-domain.com/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your-api-key" \\
  -d '{
    "model": "GLM-4V-Plus",
    "messages": [
      {
        "role": "user",
        "content": [
          {"type": "text", "text": "这张图片里有什么？"},
          {
            "type": "image_url",
            "image_url": {"url": "https://example.com/image.jpg"}
          }
        ]
      }
    ]
  }'`,
      },
    ],
  },
  image: {
    slug: "image",
    title: "图片生成 (CogView)",
    description: "CogView 系列 AI 图片生成模型，支持文生图。",
    endpoints: [
      { method: "POST", path: "/images/generations", description: "生成图片" },
    ],
    parameters: [
      { name: "model", type: "string", required: true, description: "模型名称：CogView-3, CogView-3-Plus" },
      { name: "prompt", type: "string", required: true, description: "图片描述文本" },
      { name: "size", type: "string", required: false, description: "图片尺寸，如 1024x1024，默认 1024x1024" },
      { name: "n", type: "integer", required: false, description: "生成图片数量，默认 1" },
    ],
    requestExample: `{
  "model": "CogView-3-Plus",
  "prompt": "一只可爱的橘猫坐在窗台上，阳光洒在它身上，水彩画风格",
  "size": "1024x1024",
  "n": 1
}`,
    responseExample: `{
  "created": 1677652288,
  "data": [
    {
      "url": "https://example.com/generated-image.jpg",
      "b64_json": null
    }
  ]
}`,
    codeExamples: [
      {
        language: "python",
        label: "Python",
        code: `from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://your-proxy-domain.com/v1"
)

response = client.images.generate(
    model="CogView-3-Plus",
    prompt="一只可爱的橘猫坐在窗台上，阳光洒在它身上，水彩画风格",
    size="1024x1024",
    n=1
)

print(response.data[0].url)`,
      },
      {
        language: "javascript",
        label: "JavaScript",
        code: `import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'your-api-key',
  baseURL: 'https://your-proxy-domain.com/v1'
});

async function generateImage() {
  const response = await client.images.generate({
    model: 'CogView-3-Plus',
    prompt: '一只可爱的橘猫坐在窗台上，阳光洒在它身上，水彩画风格',
    size: '1024x1024',
    n: 1
  });

  console.log(response.data[0].url);
}

generateImage();`,
      },
      {
        language: "bash",
        label: "cURL",
        code: `curl https://your-proxy-domain.com/v1/images/generations \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your-api-key" \\
  -d '{
    "model": "CogView-3-Plus",
    "prompt": "一只可爱的橘猫坐在窗台上，阳光洒在它身上，水彩画风格",
    "size": "1024x1024",
    "n": 1
  }'`,
      },
    ],
  },
  video: {
    slug: "video",
    title: "视频生成 (CogVideoX)",
    description: "CogVideoX AI 视频生成模型，支持文生视频。",
    endpoints: [
      { method: "POST", path: "/videos/generations", description: "创建视频生成任务" },
    ],
    parameters: [
      { name: "model", type: "string", required: true, description: "模型名称：CogVideoX" },
      { name: "prompt", type: "string", required: true, description: "视频描述文本" },
    ],
    requestExample: `{
  "model": "CogVideoX",
  "prompt": "一只橘猫在花园里追逐蝴蝶，阳光明媚，慢动作镜头"
}`,
    responseExample: `{
  "id": "video-123",
  "created": 1677652288,
  "model": "CogVideoX",
  "task_status": "processing",
  "video_url": null
}`,
    codeExamples: [
      {
        language: "python",
        label: "Python",
        code: `import requests

url = "https://your-proxy-domain.com/v1/videos/generations"
headers = {
    "Authorization": "Bearer your-api-key",
    "Content-Type": "application/json"
}

data = {
    "model": "CogVideoX",
    "prompt": "一只橘猫在花园里追逐蝴蝶，阳光明媚，慢动作镜头"
}

response = requests.post(url, json=data, headers=headers)
result = response.json()
print(result)

# 轮询检查视频生成状态
task_id = result.get("id")
# 使用 task_id 查询生成结果`,
      },
      {
        language: "javascript",
        label: "JavaScript",
        code: `const response = await fetch('https://your-proxy-domain.com/v1/videos/generations', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your-api-key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'CogVideoX',
    prompt: '一只橘猫在花园里追逐蝴蝶，阳光明媚，慢动作镜头'
  })
});

const result = await response.json();
console.log(result);

// 轮询检查视频生成状态
const taskId = result.id;
// 使用 taskId 查询生成结果`,
      },
      {
        language: "bash",
        label: "cURL",
        code: `curl https://your-proxy-domain.com/v1/videos/generations \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your-api-key" \\
  -d '{
    "model": "CogVideoX",
    "prompt": "一只橘猫在花园里追逐蝴蝶，阳光明媚，慢动作镜头"
  }'`,
      },
    ],
  },
  voice: {
    slug: "voice",
    title: "语音模型 (Voice)",
    description: "GLM-4-Voice 语音对话模型，支持语音输入输出。",
    endpoints: [
      { method: "POST", path: "/audio/speech", description: "文本转语音" },
    ],
    parameters: [
      { name: "model", type: "string", required: true, description: "模型名称：GLM-4-Voice" },
      { name: "input", type: "string", required: true, description: "要转换为语音的文本" },
      { name: "voice", type: "string", required: false, description: "音色选择，默认 alloy" },
    ],
    requestExample: `{
  "model": "GLM-4-Voice",
  "input": "你好，我是智谱AI的语音助手",
  "voice": "alloy"
}`,
    responseExample: `(返回音频文件流)`,
    codeExamples: [
      {
        language: "python",
        label: "Python",
        code: `from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://your-proxy-domain.com/v1"
)

response = client.audio.speech.create(
    model="GLM-4-Voice",
    voice="alloy",
    input="你好，我是智谱AI的语音助手"
)

# 保存音频文件
response.stream_to_file("output.mp3")`,
      },
      {
        language: "javascript",
        label: "JavaScript",
        code: `import OpenAI from 'openai';
import fs from 'fs';

const client = new OpenAI({
  apiKey: 'your-api-key',
  baseURL: 'https://your-proxy-domain.com/v1'
});

async function generateSpeech() {
  const response = await client.audio.speech.create({
    model: 'GLM-4-Voice',
    voice: 'alloy',
    input: '你好，我是智谱AI的语音助手'
  });

  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync('output.mp3', buffer);
}

generateSpeech();`,
      },
      {
        language: "bash",
        label: "cURL",
        code: `curl https://your-proxy-domain.com/v1/audio/speech \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "GLM-4-Voice",
    "input": "你好，我是智谱AI的语音助手",
    "voice": "alloy"
  }' \\
  --output output.mp3`,
      },
    ],
  },
  embedding: {
    slug: "embedding",
    title: "向量化 (Embedding)",
    description: "文本向量化接口，用于语义搜索、文本相似度计算等。",
    endpoints: [
      { method: "POST", path: "/embeddings", description: "文本向量化" },
    ],
    parameters: [
      { name: "model", type: "string", required: true, description: "模型名称：Embedding-3" },
      { name: "input", type: "string | array", required: true, description: "要向量化的文本或文本数组" },
    ],
    requestExample: `{
  "model": "Embedding-3",
  "input": "智谱AI是一家专注于大模型的公司"
}`,
    responseExample: `{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "embedding": [0.123, -0.456, 0.789, ...],
      "index": 0
    }
  ],
  "model": "Embedding-3",
  "usage": {
    "prompt_tokens": 10,
    "total_tokens": 10
  }
}`,
    codeExamples: [
      {
        language: "python",
        label: "Python",
        code: `from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://your-proxy-domain.com/v1"
)

response = client.embeddings.create(
    model="Embedding-3",
    input="智谱AI是一家专注于大模型的公司"
)

embedding_vector = response.data[0].embedding
print(f"向量维度: {len(embedding_vector)}")`,
      },
      {
        language: "javascript",
        label: "JavaScript",
        code: `import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'your-api-key',
  baseURL: 'https://your-proxy-domain.com/v1'
});

async function getEmbedding() {
  const response = await client.embeddings.create({
    model: 'Embedding-3',
    input: '智谱AI是一家专注于大模型的公司'
  });

  const embedding = response.data[0].embedding;
  console.log(\`向量维度: \${embedding.length}\`);
}

getEmbedding();`,
      },
      {
        language: "bash",
        label: "cURL",
        code: `curl https://your-proxy-domain.com/v1/embeddings \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your-api-key" \\
  -d '{
    "model": "Embedding-3",
    "input": "智谱AI是一家专注于大模型的公司"
  }'`,
      },
    ],
  },
  tools: {
    slug: "tools",
    title: "工具调用 (Web Search)",
    description: "联网搜索工具，支持实时网络信息检索。",
    endpoints: [
      { method: "POST", path: "/chat/completions", description: "使用工具的对话" },
    ],
    parameters: [
      { name: "model", type: "string", required: true, description: "支持工具调用的模型" },
      { name: "messages", type: "array", required: true, description: "对话消息" },
      { name: "tools", type: "array", required: true, description: "工具定义列表，包含 web_search" },
    ],
    requestExample: `{
  "model": "GLM-4-Air",
  "messages": [
    {
      "role": "user",
      "content": "请搜索一下今天的新闻"
    }
  ],
  "tools": [
    {
      "type": "web_search",
      "web_search": {
        "enable": true,
        "search_query": "今天的新闻"
      }
    }
  ]
}`,
    responseExample: `{
  "id": "chatcmpl-789",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "根据搜索结果，今天的主要新闻包括...",
        "tool_calls": [
          {
            "id": "call_123",
            "type": "web_search",
            "web_search": {
              "search_results": [...]
            }
          }
        ]
      },
      "finish_reason": "stop"
    }
  ]
}`,
    codeExamples: [
      {
        language: "python",
        label: "Python",
        code: `from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://your-proxy-domain.com/v1"
)

response = client.chat.completions.create(
    model="GLM-4-Air",
    messages=[
        {"role": "user", "content": "请搜索一下今天的新闻"}
    ],
    tools=[
        {
            "type": "web_search",
            "web_search": {
                "enable": True,
                "search_query": "今天的新闻"
            }
        }
    ]
)

print(response.choices[0].message.content)`,
      },
      {
        language: "javascript",
        label: "JavaScript",
        code: `import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'your-api-key',
  baseURL: 'https://your-proxy-domain.com/v1'
});

async function searchWeb() {
  const response = await client.chat.completions.create({
    model: 'GLM-4-Air',
    messages: [
      { role: 'user', content: '请搜索一下今天的新闻' }
    ],
    tools: [
      {
        type: 'web_search',
        web_search: {
          enable: true,
          search_query: '今天的新闻'
        }
      }
    ]
  });

  console.log(response.choices[0].message.content);
}

searchWeb();`,
      },
      {
        language: "bash",
        label: "cURL",
        code: `curl https://your-proxy-domain.com/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your-api-key" \\
  -d '{
    "model": "GLM-4-Air",
    "messages": [
      {"role": "user", "content": "请搜索一下今天的新闻"}
    ],
    "tools": [
      {
        "type": "web_search",
        "web_search": {
          "enable": true,
          "search_query": "今天的新闻"
        }
      }
    ]
  }'`,
      },
    ],
  },
}
