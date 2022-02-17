import { BigNumber, BigNumberish } from "ethers"

export const timestampSetter: (provider: any) => (timestamp: number) => Promise<void>  = 
  (provider) => async (timestamp: number) =>  await provider.send("evm_mine", [timestamp])

export const blockGetter: (provider: any, type: string) => () => Promise<number>  = 
  (provider, type) => async () =>  (await provider.getBlock("latest"))[type]

export function expandTo18Decimals(n: BigNumberish): BigNumber {
  const decimals = BigNumber.from(10).pow(18)
  return BigNumber.from(n).mul(decimals)
}