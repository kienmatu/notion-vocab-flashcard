import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './HomePage.styles';

export function HomePage() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          Notion Vocab Flashcard
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Đây là website giúp bạn tự học từ vựng tiếng anh kết hợp notion để lưu vocab một cách hợp lý
        theo phương pháp spaced-repetition.
      </Text>
    </>
  );
}
