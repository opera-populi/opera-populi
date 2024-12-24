import {
  Character,
  ModelProviderName,
  defaultCharacter,
  Clients,
} from "@ai16z/eliza";

export const character: Character = {
  ...defaultCharacter,
  clients: [Clients.TWITTER, Clients.DISCORD],
  modelProvider: ModelProviderName.OPENROUTER,
  name: "operapopuli",
};
