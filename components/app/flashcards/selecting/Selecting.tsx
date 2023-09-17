import { Anchor, Card, Text, rem, createStyles, SimpleGrid, Container } from '@mantine/core';
import { VocabItem } from '../type';
import { useState } from 'react';

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
      borderColor: theme.colors.teal[7],
    },
  },
  wrong: {
    borderColor: theme.colors.red[6],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  },
  correct: {
    color: 'white',
    backgroundColor: theme.colors.teal[7],
  },
}));

export default function SelectingFlashcard({ item, words }: { item: VocabItem; words: string[] }) {
  const { classes, theme } = useStyles();
  const [selectedWord, setSelectedWord] = useState('');

  const handleCardClick = (word: string) => {
    if (word === item.name) {
      console.log('Word matches the provided word:', word);
    }
    setSelectedWord(word);
  };
  const getCardClass = (word: string) => {
    if (!selectedWord) {
      return '';
    }
    if (word === selectedWord && item.name === word) {
      return classes.correct;
    }
    if (word === selectedWord && item.name !== word) {
      return classes.wrong;
    }
    return '';
  };

  const cards = words.map((word) => {
    return (
      <Card
        key={word}
        withBorder
        className={`${classes.card} ${getCardClass(word)}`}
        onClick={() => handleCardClick(word)}
        radius="md"
      >
        <Text className={classes.item}>{word}</Text>
      </Card>
    );
  });

  return (
    <>
      <Container size="50rem" px={0}>
        <Text className={classes.title}>{item.description}</Text>
        <SimpleGrid cols={2} mt="md" mb={3} px={4}>
          {cards}
        </SimpleGrid>
      </Container>
    </>
  );
}
