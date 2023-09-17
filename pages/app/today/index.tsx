import { Title, Text } from '@mantine/core';
import dynamic from 'next/dynamic';
import { FlashCardContent, FlashCardType } from '@/components/app/flashcards/type';
import { useState } from 'react';

const SelectingFlashcard = dynamic(
  () => import('@/components/app/flashcards/selecting/Selecting'),
  { ssr: false }
);

const exampleFlashCards: FlashCardContent[] = [
  {
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
  },
  {
    type: FlashCardType.Selecting,
    content: {
      id: 'string',
      name: 'spontaneous 2',
      pronunciation: `/'spɒn'teiniəs/`,
      example: 'His jokes seemed spontaneous, but were in fact carefully prepared beforehand.',
      description: '(a): Tự phát (not planned)',
      retention: 1,
      lastTime: new Date(),
    },
  },
];

export function Today() {
  const [indexWord, setIndexWord] = useState(0);
  const handleNextQuestion = () => {
    setIndexWord((prev) => prev + 1);
  };

  return (
    <>
      <Title align="center" mt={3} mb={4}>
        <Text inherit variant="gradient" component="span">
          Today's picks
        </Text>
      </Title>

      <SelectingFlashcard
        result={
          exampleFlashCards[
            indexWord < exampleFlashCards.length ? indexWord : exampleFlashCards.length - 1
          ].content
        }
        handleNext={handleNextQuestion}
      ></SelectingFlashcard>

      {indexWord > exampleFlashCards.length - 1 && (
        <Text inherit variant="text" component="span" color="red">
          Complete daily questions
        </Text>
      )}
    </>
  );
}

export default Today;
