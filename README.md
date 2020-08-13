1. `npm i -g typescript ts-loader`로 `typescript`와 `ts-loader`설치
2. `tsc --init`으로 `tsconfig.json` 생성
3. `tsconfig.json`에서

- `allowJS`
- `declaration`
- `declarationMap`
- `sourceMap`
- `outDir`
  들의 주석 해제
- `baseUrl`과 `paths`는 주석 해제시 추가적으로 세팅 필요

4. 변환 작업 시작
