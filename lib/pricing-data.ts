export interface PricingItem {
  model: string
  category: string
  unit: string
  officialPrice: number
  ourPrice: number
  description?: string
}

// 文本模型 - GLM-4 系列
export const textModels: PricingItem[] = [
  {
    model: "GLM-4-Plus",
    category: "文本生成",
    unit: "百万tokens",
    officialPrice: 50,
    ourPrice: 20,
    description: "最强大的 GLM-4 模型，适合复杂任务",
  },
  {
    model: "GLM-4-Long",
    category: "文本生成",
    unit: "百万tokens",
    officialPrice: 1,
    ourPrice: 0.4,
    description: "超长上下文模型，支持 1M tokens",
  },
  {
    model: "GLM-4-Air",
    category: "文本生成",
    unit: "百万tokens",
    officialPrice: 1,
    ourPrice: 0.4,
    description: "高性价比模型，速度快",
  },
  {
    model: "GLM-4-AirX",
    category: "文本生成",
    unit: "百万tokens",
    officialPrice: 10,
    ourPrice: 4,
    description: "增强版 Air 模型，性能更强",
  },
  {
    model: "GLM-4-FlashX",
    category: "文本生成",
    unit: "百万tokens",
    officialPrice: 0.1,
    ourPrice: 0.04,
    description: "极速响应模型",
  },
  {
    model: "GLM-4-Flash",
    category: "文本生成",
    unit: "免费",
    officialPrice: 0,
    ourPrice: 0,
    description: "免费的快速模型",
  },
]

// 多模态模型 - GLM-4V 系列
export const visionModels: PricingItem[] = [
  {
    model: "GLM-4V-Plus",
    category: "多模态理解",
    unit: "百万tokens",
    officialPrice: 10,
    ourPrice: 4,
    description: "增强版多模态模型，支持图片理解",
  },
  {
    model: "GLM-4V",
    category: "多模态理解",
    unit: "百万tokens",
    officialPrice: 50,
    ourPrice: 20,
    description: "多模态模型，支持图文理解",
  },
]

// 图片生成 - CogView 系列
export const imageModels: PricingItem[] = [
  {
    model: "CogView-3-Plus",
    category: "图片生成",
    unit: "张",
    officialPrice: 0.5,
    ourPrice: 0.2,
    description: "高质量图片生成模型",
  },
  {
    model: "CogView-3",
    category: "图片生成",
    unit: "张",
    officialPrice: 0.25,
    ourPrice: 0.1,
    description: "快速图片生成模型",
  },
]

// 视频生成 - CogVideoX
export const videoModels: PricingItem[] = [
  {
    model: "CogVideoX",
    category: "视频生成",
    unit: "视频",
    officialPrice: 1.0,
    ourPrice: 0.4,
    description: "AI 视频生成模型",
  },
]

// 语音模型 - GLM-4-Voice
export const voiceModels: PricingItem[] = [
  {
    model: "GLM-4-Voice",
    category: "语音对话",
    unit: "百万tokens",
    officialPrice: 50,
    ourPrice: 20,
    description: "语音对话模型",
  },
]

// 工具与嵌入模型
export const toolModels: PricingItem[] = [
  {
    model: "Embedding-3",
    category: "向量化",
    unit: "百万tokens",
    officialPrice: 0.5,
    ourPrice: 0.2,
    description: "文本向量化模型",
  },
  {
    model: "Web-Search-Pro",
    category: "工具调用",
    unit: "百万tokens",
    officialPrice: 1,
    ourPrice: 0.4,
    description: "联网搜索工具",
  },
]

export const allModels = [
  ...textModels,
  ...visionModels,
  ...imageModels,
  ...videoModels,
  ...voiceModels,
  ...toolModels,
]

export const discount = 0.4
export const discountLabel = "4折"
