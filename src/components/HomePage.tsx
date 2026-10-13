import { GALLERY, SITE } from "@/lib/site";

function img(n: string) {
  return `${SITE.imageCdn}/${n}.webp`;
}

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>

      <main id="main">
        <section className="hero" aria-label="부산애견미용학원 히어로">
          <img
            className="hero-media"
            src={img("11")}
            alt="부산애견미용학원 부산펫스쿨 엉킴 정리 실습"
            width={1600}
            height={1067}
            fetchPriority="high"
          />
          <div className="hero-veil" aria-hidden="true" />
          <div className="hero-content">
            <p className="hero-brand">
              {SITE.brandEn} · {SITE.brandKo}
            </p>
            <h1>부산애견미용학원</h1>
            <p className="hero-lead">
              바닷바람과 장마가 털을 엉키게 하는 도시입니다.
              서면에서 목욕·엉킴·썸머컷 순서를 먼저 익히고,
              해운대·광안 산책 뒤 들어오는 피부 상태를 읽는 연습을 합니다.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#climate">
                부산에서 다른 점
              </a>
              <a className="btn btn-ghost" href="#district">
                서면·해운대 권역
              </a>
            </div>
          </div>
        </section>

        <section className="keyword-bar" aria-label="부산 검색어">
          <div className="container keyword-bar-inner">
            <span>#부산애견미용학원</span>
            <span>#부산펫스쿨</span>
            <span>#부산강아지미용학원</span>
            <span>#서면애견미용학원</span>
            <span>#해운대애견미용</span>
            <span>#애견미용사자격증</span>
            <span>#애견미용학원비용</span>
          </div>
        </section>

        <section className="section" id="climate">
          <div className="container split">
            <div>
              <p className="eyebrow">Coast</p>
              <h2>컷보다 먼저 보는 것은 습기입니다</h2>
              <p>
                <strong>부산애견미용학원</strong> 수업은 가위를 쥐기 전에
                털 안쪽의 물기를 확인하는 습관부터 들입니다. 6월부터 9월까지
                서면 살롱에 들어오는 푸들은 산책 땀과 바닷바람이 겹쳐
                피부 접힌 곳이 쉽게 붉어집니다. <strong>부산펫스쿨</strong>은
                그 계절을 커리큘럼의 기준으로 삼습니다.
              </p>
              <p>
                겨울에는 반대로 건조합니다. 같은 썸머컷이라도
                남구·수영구의 아파트 실내 난방과 해운대 바닷가 산책은
                남기는 털 길이가 달라집니다. <strong>애견미용배우기</strong>를
                부산에서 한다면 달력에 장마와 휴가철을 표시하고 시작하세요.
              </p>
              <ul className="check-list">
                <li>엉킨 털은 억지로 자르지 않고 결부터 엽니다</li>
                <li>귀 안·겨드랑이·사타구니는 매 수업 피부색을 기록합니다</li>
                <li>한낮 예약은 짧게, 저녁 예약은 건조 시간을 늘립니다</li>
              </ul>
            </div>
            <figure className="media-frame">
              <img
                src={img("03")}
                alt="부산펫스쿨 여름 엉킴 정리"
                loading="lazy"
                width={800}
                height={1000}
              />
            </figure>
          </div>
        </section>

        <section className="section section-alt" id="curriculum">
          <div className="container">
            <div className="section-head left">
              <p className="eyebrow">Sequence</p>
              <h2>해안 도시 네 단계</h2>
              <p>
                <strong>부산강아지미용학원</strong>으로 검색해 오시면
                아래 순서가 기본 시간표입니다. 견종 이름은 단계 안에 예로만 넣습니다.
              </p>
            </div>
            <div className="info-grid curriculum-grid">
              <article>
                <span className="step-num">A</span>
                <h3>목욕 전 검사</h3>
                <p>진드기 자리, 핫스팟, 염분 얼룩을 물 없이 먼저 표시합니다.</p>
              </article>
              <article>
                <span className="step-num">B</span>
                <h3>엉킴 해체</h3>
                <p>빗이 들어가는 방향만 바뀌어도 피부가 당겨집니다. 해운대 장모종이 많은 이유입니다.</p>
              </article>
              <article>
                <span className="step-num">C</span>
                <h3>썸머 실루엣</h3>
                <p>배와 목은 짧게, 등성은 계절에 맞춰 남깁니다. 광안리 산책견 단골 요청입니다.</p>
              </article>
              <article>
                <span className="step-num">D</span>
                <h3>건조와 마감</h3>
                <p>습한 날에는 케이지 드라이 시간을 늘리고, 마른 날에는 브러시 방향을 바꿉니다.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="district">
          <div className="container narrow">
            <p className="eyebrow">Districts</p>
            <h2>서면이 거점이고, 구마다 요청이 다릅니다</h2>
            <p>
              상담과 실습 안내는 <strong>서면역</strong> 생활권에서 예약으로 받습니다.
              동래·연산은 도시철도로 한 번에 오고, 해운대·광안은 퇴근 시간이
              길어 주말 반을 따로 둡니다. 남구는 황령산 산책 뒤 진흙과
              풀씨가 묻은 케이스가 실습 예제로 자주 나옵니다.
            </p>
            <p>
              <strong>부산애견미용학원</strong>은 전 구를 한 반으로 묶지 않습니다.
              사는 구를 말하면 그 구 살롱에서 많이 나오는 견종과 계절 컷을
              과제 예로 바꿉니다.
            </p>
          </div>
        </section>

        <section className="section section-alt" id="career">
          <div className="container split reverse">
            <div>
              <p className="eyebrow">Work</p>
              <h2>관광 성수기와 동네 단골은 다른 일</h2>
              <p>
                해운대 쪽 샵은 여름에 예약이 몰리고, 서면·동래 샵은
                월간 단골의 주기가 일정합니다. 취업을 서면에 둘지
                바닷가 상권에 둘지에 따라 연습의 절반이 바뀝니다.
                성수기 샵은 건조 속도를, 단골 샵은 얼굴 재현을 더 봅니다.
              </p>
              <p>
                <strong>애견미용사자격증</strong> 실기는 공통 과제이므로
                주 1회만 체크리스트로 돌리고, 나머지 시간은
                지원하려는 상권의 작업에 씁니다.
              </p>
            </div>
            <figure className="media-frame">
              <img
                src={img("08")}
                alt="부산애견미용학원 건조 마감 연습"
                loading="lazy"
                width={800}
                height={1000}
              />
            </figure>
          </div>
        </section>

        <section className="section" id="price">
          <div className="container narrow">
            <p className="eyebrow">Cost</p>
            <h2>장마철 보강이 포함인지가 비용의 핵심입니다</h2>
            <p>
              <strong>애견미용학원비용</strong>을 비교할 때 부산에서는
              “우천·폭염 휴강 시 보강이 있는지”를 먼저 보십시오.
              부산펫스쿨은 6–9월 휴강을 보강 주간으로 미리 적어 두고,
              도구·모델견·자격 모의 포함 여부를 과정 이름 옆에 붙입니다.
            </p>
            <div className="info-grid price-grid">
              <article>
                <h3>우기입문</h3>
                <p>엉킴과 목욕 전 검사만. 가위는 최소로 시작합니다.</p>
              </article>
              <article>
                <h3>시즌컷</h3>
                <p>썸머 실루엣과 건조. 해운대·광안 통학은 주말 반이 있습니다.</p>
              </article>
              <article>
                <h3>샵분리</h3>
                <p>서면 단골형과 해변 성수기형을 반씩 나눠 연습합니다.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="gallery">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Record</p>
              <h2>계절별로 남긴 부산 실습</h2>
              <p>같은 아이도 장마 전과 휴가철 사진이 다르게 남습니다.</p>
            </div>
            <div className="gallery-grid">
              {GALLERY.map((n) => (
                <figure key={n}>
                  <img
                    src={img(n)}
                    alt={`부산애견미용학원 계절 실습 ${n}`}
                    loading="lazy"
                    width={600}
                    height={750}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-faq" id="faq">
          <div className="container narrow">
            <p className="eyebrow">FAQ</p>
            <h2>부산 수강 전에 나오는 말</h2>
            <div className="faq-list">
              <details open>
                <summary>해운대에 사는데 서면까지 가야 하나요?</summary>
                <p>
                  실습 안내는 서면 생활권이 거점입니다. 해운대에서 오시면
                  주말 반 시간을 우선 제안하고, 평일 저녁은 소요 시간을 같이 재 봅니다.
                </p>
              </details>
              <details>
                <summary>여름에만 짧게 배울 수 있나요?</summary>
                <p>
                  우기입문은 엉킴과 피부 확인에 한정됩니다. 가위 실루엣까지는
                  시즌컷으로 넘어가야 손이 남습니다.
                </p>
              </details>
              <details>
                <summary>태풍이면 수업은 어떻게 되나요?</summary>
                <p>
                  기상 특보가 발효되면 휴강하고, 그 주는 보강 칸으로 미리 빼 둔 시간에 채웁니다.
                </p>
              </details>
              <details>
                <summary>동래 온천장 쪽에서 파트타임 샵을 보고 있습니다.</summary>
                <p>
                  단골 재현이 중요한 상권입니다. 샵분리 과정에서 얼굴 길이를
                  지난주와 같게 맞추는 과제를 넣습니다.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="container narrow contact-box">
            <p className="eyebrow">Visit</p>
            <h2>서면역 생활권에서 예약</h2>
            <p>
              사는 구와 원하는 계절(장마 전 입문, 여름 컷, 겨울 건조)을
              알려 주시면 반을 먼저 좁혀 드립니다.
            </p>
            <p className="contact-brand">
              {SITE.brandKo} · {SITE.schoolName}
            </p>
            <p className="contact-address">{SITE.address}</p>
            <p className="contact-address-sub">{SITE.addressDetail}</p>
            <a className="btn btn-primary" href="#climate">
              지역 특성 다시 보기
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-brand-en">{SITE.brandEn}</p>
            <p className="footer-brand-ko">{SITE.brandKo}</p>
            <p className="footer-seo">{SITE.title}</p>
          </div>
          <div className="footer-meta">
            <p>{SITE.address}</p>
            <p>부산애견미용학원 · 부산펫스쿨 · 서면애견미용학원</p>
            <p className="footer-managed">
              <img src="/kkf-logo.png" alt="" width={36} height={36} />
              <span>한국애견연맹 반려문화증진위원회에 의해 관리되는 페이지입니다.</span>
            </p>
            <p className="footer-copy">
              &copy; {year} {SITE.brandKo}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
