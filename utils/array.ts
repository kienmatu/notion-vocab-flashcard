export function shuffleArray<T>(array: T[]): T[] {
  const cloneArr = JSON.parse(JSON.stringify(array)) as T[];

  for (let i = cloneArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloneArr[i], cloneArr[j]] = [cloneArr[j], cloneArr[i]];
  }

  return cloneArr;
}
