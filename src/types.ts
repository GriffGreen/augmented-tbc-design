export interface InputFieldInterface {
  label: string;
  value: number;
  setter(newValue: any): void;
  min: number;
  max: number;
  step: number;
  unit?: string;
  prefix?: string;
  suffix?: string;
  secondaryColor?: boolean;
  toText?(value: number): string;
  toNum?(value: string): number;
  format(value: number): string;
}

export interface CurveParamsInterface {
  d0: number;
  theta: number;
  p0: number;
  p1: number;
  wFee: number;
}
