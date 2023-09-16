export interface VocabItem {
  id: string;
  name: string;
  pronunciation: string;
  example: string;
  description: string;
  retention: number;
  lastTime: Date;
}

export enum FlashcardType {
  Typing = 'TYPING',
  Selecting = 'SELECTING',
}

export interface FlashcardResult {
  time: Date;
  remember: boolean;
  timeToRemember: number; // milliseconds
}

export interface FlashCardContent {
  type: FlashcardType;
  content: VocabItem;
}
