import suggestions from '../public/data/chat-suggestions.json';
import models from '../public/data/chat-models.json';
import type { ChatSuggestion, ModelOption } from '@/types/site';

export const chatSuggestions = suggestions as ChatSuggestion[];
export const chatModels = models as ModelOption[];
