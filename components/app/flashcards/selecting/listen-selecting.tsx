import { Anchor, Card, Text, rem, createStyles, SimpleGrid, Container } from '@mantine/core';
import { VocabItem } from '../type';

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `${theme.fontFamily}`,
    fontWeight: 700,
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
      color: 'white',
      // backgroundImage: theme.fn.gradient(),
      backgroundColor: theme.colors.teal[7],
    },
  },
}));
export default function ListenSelectingFlashcard({ item }: { item: VocabItem }) {
  const { classes, theme } = useStyles();
  return (
    <>
      <Container size="50rem" px={0}>
        <Text className={classes.title}>{item.name}</Text>
        <SimpleGrid cols={2} mt="md" mb={3} px={4}>
          <Card withBorder radius="md" className={classes.card}>
            <Text className={classes.item}>{item.name}</Text>
          </Card>
          <Card withBorder radius="md" className={classes.card}>
            <Text className={classes.item}>{item.name}</Text>
          </Card>
          <Card withBorder radius="md" className={classes.card}>
            <Text className={classes.item}>{item.name}</Text>
          </Card>
          <Card withBorder radius="md" className={classes.card}>
            <Text className={classes.item}>{item.name}</Text>
          </Card>
        </SimpleGrid>
      </Container>
    </>
  );
}
