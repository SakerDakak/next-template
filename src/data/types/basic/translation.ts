export interface LocaleName {
  name: string;
  code: string;
  show: string;
}

export enum LocalePrefix {
  never = "never",
  always = "always",
  asNeeded = "as-needed",
}
