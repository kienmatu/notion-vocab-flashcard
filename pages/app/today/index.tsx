import { Title, Text } from '@mantine/core';
import dynamic from 'next/dynamic';
import { FlashCardContent, FlashCardType } from '@/components/app/flashcards/type';
import { getRandomWords, shuffleArray } from '@/utils/index';

const SelectingFlashcard = dynamic(
  () => import('@/components/app/flashcards/selecting/Selecting'),
  { ssr: false }
);

const exampleFlashCard: FlashCardContent = {
  type: FlashCardType.Selecting,
  content: {
    id: 'string',
    name: 'spontaneous',
    pronunciation: `/'spɒn'teiniəs/`,
    example: 'His jokes seemed spontaneous, but were in fact carefully prepared beforehand.',
    description: '(a): Tự phát (not planned)',
    retention: 1,
    lastTime: new Date(),
  },
};

export function Today() {
  const confusingWords = getRandomWords(exampleFlashCard.content.name);
  const allWords = [...confusingWords, exampleFlashCard.content.name];
  shuffleArray(allWords);
  return (
    <>
      <Title align="center" mt={3} mb={4}>
        <Text inherit variant="gradient" component="span">
          Today's picks
        </Text>
      </Title>
      <SelectingFlashcard item={exampleFlashCard.content} words={allWords}></SelectingFlashcard>
    </>
  );
}

export default Today;
