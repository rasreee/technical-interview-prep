/**
 * * [DCP 170]
 *
 * This problem was asked by Facebook.
 *
 * Given a start word, an end word, and a dictionary of valid words, find the shortest transformation sequence from start to end such that only one letter is changed at each step of the sequence, and each transformed word exists in the dictionary. If there is no possible transformation, return null. Each word in the dictionary have the same length as start and end and is lowercase.
 *
 * For example, given start = "dog", end = "cat", and dictionary = {"dot", "dop", "dat", "cat"}, return ["dog", "dot", "dat", "cat"].
 *
 * Given start = "dog", end = "cat", and dictionary = {"dot", "tod", "dat", "dar"}, return null as there is no possible transformation from dog to cat.
 *
 */

import { exclude } from 'lib/array';

const getHammingDistance = (wordA: string, wordB: string): number => {
  let distance = 0;

  wordA.split('').forEach((charA, index) => {
    if (wordB.at(index) !== charA) {
      distance += 1;
    }
  });

  return distance;
};

const getCandidates = (word: string, dictionary: readonly string[]): readonly string[] => {
  const candidates: string[] = [];
  for (let i = 0; i < dictionary.length; i += 1) {
    const dictionaryWord = dictionary[i];

    const hammingDistance = getHammingDistance(word, dictionaryWord);
    if (hammingDistance === 1) candidates.push(dictionaryWord);
  }
  return candidates;
};

const shortestTransformationSequence = (
  start: string,
  end: string,
  dictionary: readonly string[],
  currentSequence: readonly string[] = [],
): readonly string[] | null => {
  if (start === end) return currentSequence;

  const dictionaryToUse = exclude(dictionary, currentSequence);
  const candidates = getCandidates(start, dictionaryToUse);

  let sequence: readonly string[] | null = null;
  let i = 0;
  while (i < candidates.length) {
    const candidate = candidates[i];

    const potentialSequence =
      candidate === end
        ? [...currentSequence, start, candidate]
        : shortestTransformationSequence(candidate, end, dictionaryToUse, [...currentSequence, start]);

    if (potentialSequence && (sequence === null || potentialSequence.length < sequence.length)) {
      sequence = potentialSequence;
    }

    i += 1;
  }

  return sequence;
};

export { shortestTransformationSequence };
