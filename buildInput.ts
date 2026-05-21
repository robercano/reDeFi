import { SerializationService, ChainInfo, User, Wallet, Address, AddressType } from './packages/sdk/common/src'

const input = {
  user: User.createFrom({
    chainInfo: ChainInfo.createFrom({ chainId: 1, name: 'Ethereum' }),
    wallet: Wallet.createFrom({
      address: Address.createFrom({ value: '0xAAf00613A099DeAe24EeB2c21Ad2965CaDEac244', type: AddressType.Ethereum }),
    }),
  }),
}
console.log(encodeURIComponent(SerializationService.stringify(input)))
