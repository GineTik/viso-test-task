import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const URL = 'https://openrouter.ai/api/v1/chat/completions';

@Injectable()
export class OpenRouterService {
  constructor(private readonly configService: ConfigService) {}

  async writeToAI(prompt: string): Promise<string> {
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.configService.getOrThrow('OPENROUTER_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: this.configService.getOrThrow('OPENROUTER_MODEL'),
        messages: [
          {
            role: 'system',
            content:
              'You are a helpful assistant for a web application that helps users discover and manage recipes with AI-powered features.',
          },
          { role: 'user', content: prompt },
        ],
      }),
    });

    const data = await res.json();
    return data.choices[0].message.content;
  }
}
