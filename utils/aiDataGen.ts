/**
 * Mock utility for AI-generated passwords. In a real-world scenario, this
 * would call an LLM API to generate diverse passwords for edge-case testing.
 */
export async function generateAITestData
(prompt: string) {
  // Simulating an LLM response for AT generated passwords.
  const mockAIResponses = [
    "Tr0ub4dor&3",
    "!QAZ2wsx#EDC4rfv",
    "P@$$w0rd12345!AI",
    "4xKj#9LmN@2PvQr",
    "CorrectHorseBatteryStaple7!"
  ];
  
  return mockAIResponses[Math.floor(Math.random() * mockAIResponses.length)];
}