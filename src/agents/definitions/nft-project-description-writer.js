const nftProjectDescriptionWriter = {
  id: 'nft-project-description-writer',
  name: 'NFT Project Description Writer',
  description: 'Writes engaging and compelling descriptions for NFT collections.',
  category: 'Marketing',
  icon: 'Image',
  provider: 'any',
  defaultProvider: 'openai',
  model: 'gpt-4o',
  inputs: [
    {
      id: 'projectName',
      label: 'Project Name',
      type: 'text',
      placeholder: 'e.g., CryptoPunks',
      required: true,
    },
    {
      id: 'theme',
      label: 'Theme & Concept',
      type: 'textarea',
      placeholder: 'Describe the art style, theme, and inspiration...',
      required: true,
    },
    {
      id: 'utility',
      label: 'Utility & Perks',
      type: 'textarea',
      placeholder: 'What do holders get? (e.g., community access, airdrops)',
      required: false,
    },
    {
      id: 'targetAudience',
      label: 'Target Audience',
      type: 'text',
      placeholder: 'e.g., Art collectors, Gamers, Crypto natives',
      required: false,
    },
  ],
  systemPrompt: `You are an expert Copywriter specializing in Web3 and NFTs.
Your task is to write a compelling, exciting, and professional description for an NFT project.

The description should include:
1. A catchy hook introducing the project.
2. The core concept and story behind the collection.
3. The utility and perks of holding the NFT.
4. A strong call-to-action (CTA).

Use a tone that appeals to the specified target audience. Ensure the output is formatted beautifully in Markdown.`,
  outputType: 'markdown',
};

export default nftProjectDescriptionWriter;
