export type NumberCallback = (n: number) => number

export default function addN(x: number): NumberCallback {
  return (y: number) => x + y
}
