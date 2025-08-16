# D'Cent: DIscovery

아이오트러스트 디센트 지갑의 Discovery 화면 일부를 구현한 프로젝트.  
React와 TypeScript를 사용했으며, 환경(dev/stage/prod), 플랫폼(Android/iOS), 언어(한국어/영어)에 따라 표시되는 서비스를 동적으로 처리하도록 설계.
주요 기능으로는 상단 배너 슬라이드, 즐겨찾기 관리, 조건별 서비스 리스트 노출 등이 포함.

---

## 기술 스택

- **Framework**: Next.js 15
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **다국어**: i18next
- **UI 라이브러리**: react-icons, react-slick
- **개발 도구**: ESLint 9, env-cmd

---

## 실행 및 빌드 방법

### 설치

```bash
npm install
```

### 실행

```bash
npm run dev        # dev 환경 실행
npm run dev:stage  # stage 환경 실행
npm run dev:prod   # prod 환경 실행
```

### 빌드

```bash
npm run build:dev
npm run build:stage
npm run build:prod
```

### 빌드 실행

```bash
npm run start:dev
npm run start:stage
npm run start:prod
```

## 구현한 주요 요소

### 1. 상단 배너

- 슬라이드, 슬라이드 인디케이터, CTA 버튼, 관련 URL 이동

### 2. 즐겨찾기 리스트

- 삭제 버튼 클릭 시 팝업 안내 후 삭제

### 3. 서비스 필터링

- 언어 / 플랫폼 / 빌드 환경에 따라 데이터 필터링

---

## ⏱ 제한 시간 내 구현하지 못한 부분 & 보완점

- **SEO & 접근성**: 메타 태그, Open Graph 설정 및 접근성 개선
- **성능 최적화**: Total Blocking Time 최소화
- **UI 확장성**: 컴포넌트 재사용성 개선
- **다국어 처리**
- **에러 및 로딩 상태 처리**: 예외 상황 핸들링
