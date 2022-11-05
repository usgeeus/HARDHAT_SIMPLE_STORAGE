# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:


처음
```shell
yarn init
yarn add --dev hardhat
```

도움말
```shell
yarn hardhat
```

컴파일
```shell
yarn hardhat compile
```

다운로드
```shell
yarn add --dev prettier prettier-plugin-solidity
yarn add --dev dotenv
yarn add --dev @nomiclabs/hardhat-etherscan
```

테스트
```shell
yarn hardhat test
yarn hardhat test --grep store
```

테스트커버리지
```shell
yarn hardhat coverage
```

verify 도움말
```shell
yarn hardhat verify --help
```

로컬 환경 노드 실행
```shell
yarn hardhat node
```

배포
```shell
yarn hardhat run scripts/deploy.js
yarn hardhat run scripts/deploy.js --network hardhat
위에 두개는 같음
yarn hardhat run scripts/deploy.js --network goerli

yarn hardhat node
yarn hardhat run scripts/deploy.js --network localhost
```

artifact cache 에러났을때
```shell
yarn hardhat clean => delete artifacts and clean cache
```

locally interact
```shell
yarn hardhat node
yarn hardhat console --network localhost
 을통해서 콘솔로 yarn hardhat node 환경에서 interact할수있음.
```

기타
```
rekt news에는 스마트컨트랙트 해킹된 사건들에 대해서 다룸.
```

custom tasks
```shell
yarn hardhat accounts
yarn hardhat block-number
```

참고
```
RPCURL은 https://dashboard.alchemy.com/ 참고
프라이빗키는 메타마스크 참고
ETHERSCAN_API_KEY 는 https://etherscan.io/myapikey 참고 (verify 하기 위함)
COINMARKETCAP_API_KEY는 https://pro.coinmarketcap.com/account 참고 (gas-reporter USD전환시)
네트워크 체인아이디chainlist gorli 참고
```