import { Card, Text, rem, createStyles, SimpleGrid, Container } from '@mantine/core';
import { VocabItem } from '../type';
import { useMemo, useState } from 'react';
import { getRandomWords } from '@/utils/index';

const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 600,
  },
  item: {
    fontWeight: 400,
  },
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: rem(90),
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: theme.shadows.sm,
      transform: 'scale(1.01)',
      cursor: 'pointer',
      borderColor: theme.colors.blue[5],
    },
  },
  wrong: {
    backgroundColor: `${theme.colors.red[6]}!important`,
  },
  correct: {
    color: 'white',
    backgroundColor: `${theme.colors.teal[7]}!important`,
  },
}));

type SelectingFlashcardProps = {
  result: VocabItem;
  handleNext: () => void;
};

export default function SelectingFlashcard({ result, handleNext }: SelectingFlashcardProps) {
  const { classes } = useStyles();
  const [selectedWord, setSelectedWord] = useState('');

  const options = useMemo(() => getRandomWords(result.name), [result]);

  const handleCardClick = (word: string) => {
    if (word === result.name) {
      setTimeout(() => {
        handleNext();
      }, 500);
    }
    setSelectedWord(word);
  };

  const getCardClass = (word: string) => {
    if (word !== selectedWord) return '';
    if (word === result.name) return classes.correct;
    return classes.wrong;
  };

  return (
    <>
      <Container size="50rem" px={0}>
        <Text className={classes.title}>{result.description}</Text>
        <SimpleGrid cols={2} mt="md" mb={3} px={4}>
          {options.map((word) => (
            <Card
              key={word}
              withBorder
              className={`${classes.card} ${getCardClass(word)}`}
              onClick={() => handleCardClick(word)}
              radius="md"
            >
              <Text className={classes.item}>{word}</Text>
            </Card>
          ))}
        </SimpleGrid>
        <Text mt={7}>{result.example}</Text>
      </Container>
    </>
  );
}
