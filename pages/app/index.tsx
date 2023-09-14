'use client'; // This is a client component 👈🏽

import { Title, Text, Anchor } from '@mantine/core';

export function Learn() {
  return (
    <>
      <Title align="center" mt={100}>
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
export const dynamic = 'force-dynamic';

export default Learn;
