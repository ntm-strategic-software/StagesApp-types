/**
 * Playlist "What to Listen For" content entries.
 * Each entry corresponds to a playlistListenForUnit*.md asset file.
 * Content is embedded here so it works in both Node and React Native environments.
 * Entries are sorted descending by unit number for efficient lookup.
 *
 * To add content for a new unit range:
 * 1. Create the .md file in src/assets/ (e.g., playlistListenForUnit05.md)
 * 2. Add a new entry here with the matching unit number and content
 */
export const playlistListenForEntries: { unit: number; content: string }[] = [
  // Sorted descending by unit number.
  // playlistListenFor() returns the entry with the greatest unit <= the requested unit.
  {
    unit: 1,
    content:
`# What to Listen For

As you listen to your playlist recordings, pay attention to the following aspects of how people communicate. These are based on the "10 Things People Do When They Talk."

## 1. Sounds

Listen for the distinct sounds of the language. Are there sounds that don't exist in your own language? Pay attention to:
- Consonant sounds that seem unfamiliar
- Vowel distinctions that are hard to hear
- Tones or pitch patterns on words

## 2. Words and Word Parts

Notice how words are formed. Are there prefixes, suffixes, or other parts attached to words?
- Do words change form depending on how they are used?
- Are there small words or particles that seem to appear frequently?
- How do speakers form new words from existing ones?

## 3. Putting Words Together

Pay attention to the order of words in sentences.
- Where does the verb go in a sentence?
- How are questions formed?
- Where do descriptive words go in relation to what they describe?
- How do speakers express negation?

## 4. Using Language for Different Purposes

Notice the different things people do with language:
- How do they greet each other?
- How do they make requests?
- How do they tell stories vs. give instructions?
- How do they express emotions or opinions?

## 5. Conversation Patterns

Listen to how conversations flow:
- How do speakers take turns?
- How do they show they are listening?
- How do they interrupt or change topics?
- What happens when there is a misunderstanding?

## 6. Cultural References

Be alert to references that reflect cultural knowledge:
- Proverbs or sayings
- References to shared history or events
- Metaphors drawn from local life
- Humor and what makes people laugh

## 7. Intonation and Rhythm

Pay attention to the "music" of the language:
- Does the pitch rise or fall at the end of sentences?
- Are certain words or syllables stressed more than others?
- What is the overall rhythm — does it sound even or varied?
- How does speed change during different parts of speech?

## 8. Repetition and Emphasis

Notice how speakers emphasize or reinforce their message:
- Do they repeat words or phrases?
- Do they use special words for emphasis?
- How do they signal that something is important?

## 9. Connecting Ideas

Listen for how speakers link thoughts together:
- What words do they use to connect sentences?
- How do they show cause and effect?
- How do they sequence events in a narrative?
- How do they contrast or compare ideas?

## 10. Non-verbal Communication

While listening, also consider:
- Are there sounds (clicks, interjections) that carry meaning?
- Do pauses or silence play a role in communication?
- Are there vocal qualities (whispering, raised voice) that signal something?`,
  },
];
