import { faker } from '@faker-js/faker';

export function getRandomWords(origin: string, number: number = 3) {
  const expectedLength = origin.length > 1 ? origin.length : 2;
  const randomWords: string[] = [];
  for (let i = 0; i < number; i++) {
    let randomWord: string;
    do {
      randomWord = faker.word.sample({
        strategy: 'any-length',
        length: { min: expectedLength, max: expectedLength + 3 },
      });
    } while (randomWord === origin && !randomWords.includes(randomWord));
    randomWords.push(randomWord);
  }

  return randomWords;
}
