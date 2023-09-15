import { Title, Text, Anchor } from '@mantine/core';
import Link from 'next/link';

export function Learn() {
  return (
    <>
      <Title align="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          Notion Vocab Flashcard APP
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Đây là website giúp bạn tự học từ vựng tiếng anh kết hợp notion để lưu vocab một cách hợp lý
        theo phương pháp spaced-repetition.
        <Link href="/">Home</Link>
        <Link href="/app/settings">Settings</Link>
      </Text>
    </>
  );
}
export const dynamic = 'force-dynamic';

export default Learn;
