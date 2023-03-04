import {
  typo_h2,
  typo_h3,
  nested_list_ul,
  flexSpaceBetween,
} from "../styles/styles.css";

const Works = () => {
  return (
    <>
      <div>
        <div className={flexSpaceBetween}>
          <h3 className={typo_h3}>프런트엔드 엔지니어 (닥터나우)</h3>
          <span>2022. 6. ~ 현재</span>
        </div>
        <div>
          <ul>
            <li>
              닥터나우 모바일 애플리케이션 화면 개발 (React Native)
              <ul className={nested_list_ul}>
                <li>건강탭 - 건강검진 조회 기능 화면 개발</li>
                <li>5단계로 이루어지는 진료신청서 화면 개발</li>
                <li>
                  가장 최근의 건강검진과 직전 건강검진을 비교하여 1년간의 건강
                  비교를 보여주는 연간결산 이벤트 피처 화면 전체 개발
                </li>
                <li>배너 광고 사업 관련 mvp 구현</li>
              </ul>
              <li>웹 애플리케이션 개발 관련 (React, NextJS)</li>
              <ul className={nested_list_ul}>
                <li>
                  회사 내부 어드민 웹 페이지 고도화 작업 전담, 어드민 디자인
                  개선
                </li>
                <li>
                  내부 어드민 - 광고 사업과 관련된 제반 신규 기능 개발 및 고도화
                  예정
                </li>
                <li>광고 사업 관련 광고주 서비스 웹 사이트 개발 진행 예정</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className={flexSpaceBetween}>
        <h3 className={typo_h3}>웹 프런트엔드 엔지니어 (어퍼코리아)</h3>
        <span>2020. 12. ~ 2022. 6.</span>
      </div>
      <div>
        <ul>
          <li>
            ERP 프런트엔드 개발 (해당 애플리케이션은 현재 가비아에서 판매 중.
            erp.gabia.com/service)
          </li>
          <ul>
            <li>
              계정과목 관리 / 전자세금계산서 및 전자계산서 자동전표처리 서비스 /
              세금계산서 자료비교 / 세금계산서 승인번호 입력 서비스 화면 개발
              (기여도 100%)
            </li>
            <li>
              서비스 론칭 전 QA 진행 후 버그 수정 시 프런트엔드와 관련된 문제,
              그 외 화면과 관련된 이슈 전담
            </li>
            <li>
              소숫점 연산 개선 프로젝트: 기존에 Number 타입 기반으로 되어 있던
              서비스 전체를 BigNumber.js 라이브러리를 사용한 문자열 기반의
              계산이 되도록 수정. 프런트엔드 전체 파일 및 Graphql 관련 파일 작업
              담당 (기여도 30%)
            </li>
          </ul>
          <li>신사업 프로젝트 프런트엔드 영역 전체 개발(aicy.ai/)</li>
          <ul>
            <li>
              SWC, Next.js, recoil 기반 클라이언트 개발환경 구성 및 해당 서비스
              관련 프런트엔드 개발 전담 (당시 프런트엔드 1인, 백엔드 1인이
              배정되어 작업)
            </li>
            <li>
              재무상태표, 손익계산서 등 재무제표 전반과 비용 분석, 직원 생산성,
              재무 비율 등 15종의 경영 분석 지표를 보여주는 코어 로직 개발
            </li>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default Works;
