export interface VocabItem {
  id: string;
  name: string;
  pronunciation: string;
  example: string;
  description: string;
  retention: number;
  lastTime: Date;
}

export enum FlashCardType {
  Typing = 'TYPING',
  Selecting = 'SELECTING',
}

export interface FlashCardResult {
  time: Date;
  remember: boolean;
  timeToRemember: number; // milliseconds
}

export interface FlashCardContent {
  type: FlashCardType;
  content: VocabItem;
}
