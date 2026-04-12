import solarTerms from './solar_terms_2026.json';

export function getCurrentAndNextSolarTerm(now = new Date()) {
  const nowMs = now.getTime();

  const terms = solarTerms
    .map(term => ({
      ...term,
      ts: new Date(term.datetime).getTime()
    }))
    .sort((a, b) => a.ts - b.ts);

  let current = null;
  let next = null;

  for (let i = 0; i < terms.length; i++) {
    if (terms[i].ts <= nowMs) {
      current = terms[i];
    }
    if (terms[i].ts > nowMs) {
      next = terms[i];
      break;
    }
  }

  if (!current) current = terms[terms.length - 1];
  if (!next) next = terms[0];

  return {
    currentTerm: current,
    nextTerm: next
  };
}
