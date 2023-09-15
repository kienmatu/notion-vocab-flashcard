import { Title, Text } from '@mantine/core';

export function Settings() {
  return (
    <>
      <Title align="center" mt={100}>
        <Text inherit variant="gradient" component="span">
          Setting page
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Đây là website giúp bạn tự học từ vựng tiếng anh kết hợp notion để lưu vocab một cách hợp lý
        theo phương pháp spaced-repetition.
      </Text>
    </>
  );
}

export default Settings;
