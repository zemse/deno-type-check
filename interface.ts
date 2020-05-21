export interface Type {
  name: string;
  validate(input: any): true | never;
}
