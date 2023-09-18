import { faker } from '@faker-js/faker';
import { shuffleArray } from './array';

export function getRandomWords(origin: string, limit: number = 3) {
  const expectedLength = origin.length > 1 ? origin.length : 2;
  const randomWords: string[] = [origin];

  while (randomWords.length < limit + 1) {
    const randomWord = faker.word.sample({
      strategy: 'closest',
      length: { min: expectedLength, max: expectedLength + 3 },
    });

    if (!randomWords.includes(randomWord)) {
      randomWords.push(randomWord);
    }
  }

  return shuffleArray<string>(randomWords);
}
