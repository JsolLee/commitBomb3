import React from 'react';

// css 추가
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Componets/CSS/issue.css';

import Footer from '../../../components/Footer.js';
import Popular_News from '../Componets/JS/Popular_News.js';
import Header from '../../../components/Header.js';

const Iusse = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="container">
          <div className="container px-4 py-5">

            <h3 className="fw-bold">IT 이슈</h3>
            <h2 className="pb-2 border-bottom"></h2>

            <a href="../news_view.html" className="list-group-item list-group-item-action">
              <div className="row row-cols-1 align-items-md-center g-5 py-5">
                <div className="d-flex flex-column align-items-start gap-2">
                  <img src="/issueImages/image11.png" width="1200" height="500" className="img-thumbnail" alt="뉴스1 썸네일" /> <br />

                  <h3 className="fw-bold">챗GPT 확장 프로그램 10가지로 꾀하는 크롬 브라우저의 변신</h3>
                  <p className="text-muted">챗GPT는 2022년 출시 직후부터 엄청난 인기를 끌었다. 수많은 사용자가 챗봇의 기능을 살펴보기 위해 몰려들었고 이제 챗GPT 서비스는 확고하게 자리를 잡았다. 한편, 구글과 구글의 브라우저 크롬은 오래전부터 세계적으로 유명한 이름이다. 네오위즈홀딩스도 12.74% 오른 2만1950원에 마감했다.</p>
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
      <Popular_News />
      <section className="container mt-4">
        <div className="row my-5">

          <a href="../news_view.html" class="list-group-item list-group-item-action">
            <div class="row">
              <div class="col-md-1">
                <img src="./issueImages/image1.jpg" class="img-fluid" alt="뉴스1 썸네일" />
              </div>
              <div class="col-md-10">
                <div class="fw-bold">"클라우드 시장 확대하자"…KT클라우드, 이노그리드와 협력</div>
                <p class="news-content">KT클라우드가 클라우드 컴퓨팅 전문기업 이노그리드와 '클라우드 시장 확대를 위한 공동 …</p>
                <p class="news-mediaCompany">뉴스1</p>
              </div>
            </div>
          </a>

          <a href="../news_view.html" class="list-group-item list-group-item-action">
            <div class="row">
              <div class="col-md-1">
                <img src="./issueImages/image2.jpg" class="img-fluid" alt="뉴스2 썸네일" />
              </div>
              <div class="col-md-10">
                <div class="fw-bold">[Let's 스타트업] 자율주행 드론, 美 물류창고에 수출</div>
                <p class="news-content">브룩허스트거라지 올해 초 북미 최초로 드론을 활용한 재고관리 자동화 상업 서비스에 성…</p>
                <p class="news-mediaCompany">매일경제</p>
              </div>
            </div>
          </a>

          <a href="../news_view.html" class="list-group-item list-group-item-action">
            <div class="row">
              <div class="col-md-1">
                <img src="./issueImages/image3.jpg" class="img-fluid" alt="뉴스3 썸네일" />
              </div>
              <div class="col-md-10">
                <div class="fw-bold">1.8m 높이서 갤Z폴드·아이폰15 수직낙하했더니.. 예상외로 '이 기기' 멀쩡했…</div>
                <p class="news-content">“애플의 최신형 스마트폰 '아이폰15 프로 맥스'와 삼성의 '갤럭시 Z폴드5'의 낙 …</p>
                <p class="news-mediaCompany">파이낸셜뉴스</p>
              </div>
            </div>
          </a>
          <a href="../news_view.html" class="list-group-item list-group-item-action">
            <div class="row">
              <div class="col-md-1">
                <img src="./issueImages/image4.jpg" class="img-fluid" alt="뉴스4 썸네일" />
              </div>
              <div class="col-md-10">
                <div class="fw-bold">32세에 재산 1조원대 日 사업가 “AI로 후계자 못 구해 폐업하는 기업 없게"</div>
                <p class="news-content">MA종합연구소 창립자 사가미 순사쿠, 블룸버그·포브스도 집중 조명 WEEKLY …</p>
                <p class="news-mediaCompany">조선일보 </p>
              </div>
            </div>
          </a>
          <a href="../news_view.html" class="list-group-item list-group-item-action">
            <div class="row">
              <div class="col-md-1">
                <img src="./issueImages/image5.jpg" class="img-fluid" alt="뉴스5 썸네일" />
              </div>
              <div class="col-md-10">
                <div class="fw-bold">개발자 69% "주4일 근무보다 중요한 건 연봉 유지" </div>
                <p class="news-content">경력직 개발자들은 근로시간 단축보다 현재 연봉 수준 유지를 더 중요하게 생각한다는 …</p>
                <p class="news-mediaCompany">디지털타임스</p>
              </div>
            </div>
          </a>

          <a href="../news_view.html" class="list-group-item list-group-item-action">
            <div class="row">
              <div class="col-md-1">
                <img src="./issueImages/image6.jpg" class="img-fluid" alt="뉴스6 썸네일" />
              </div>
              <div class="col-md-10">
                <div class="fw-bold">'모바일 RPG'에 돈 몰리는 韓 게임 시장…MMO는 주춤</div>
                <p class="news-content">한국 모바일 게임 시장이 역할수행게임(RPG) 장르에 편중된 것으로 나타났다. 한 … </p>
                <p class="news-mediaCompany">뉴시스</p>
              </div>
            </div>
          </a>

          <a href="../news_view.html" class="list-group-item list-group-item-action">
            <div class="row">
              <div class="col-md-1">
                <img src="./issueImages/image7.jpg" class="img-fluid" alt="뉴스7 썸네일" />
              </div>
              <div class="col-md-10">
                <div class="fw-bold">삼성, '스마트싱스' 생태계 키운다</div>
                <p class="news-content">삼성전자가 '갤럭시 스마트태그2'를 통해 스마트태그 시장을 지속 공략한다. 스마 …</p>
                <p class="news-mediaCompany">비즈워치</p>
              </div>
            </div>
          </a>

          <a href="../news_view.html" class="list-group-item list-group-item-action">
            <div class="row">
              <div class="col-md-1">
                <img src="./issueImages/image8.jpg" class="img-fluid" alt="뉴스8 썸네일" />
              </div>
              <div class="col-md-10">
                <div class="fw-bold">아이폰15 '손난로' 오명 벗을까...애플, iOS 17 업데이트 시작</div>
                <p class="news-content">애플이 '아이폰15' 발열 문제를 해결하기 위해 OS(운영체제) 업데이트를 실시했다. 발열 … </p>
                <p class="news-mediaCompany">머니투데이</p>
              </div>
            </div>
          </a>

          <a href="../news_view.html" class="list-group-item list-group-item-action">
            <div class="row">
              <div class="col-md-1">
                <img src="./issueImages/image9.jpg" class="img-fluid" alt="뉴스9 썸네일" />
              </div>
              <div class="col-md-10">
                <div class="fw-bold">토종 AI 반도체, 삼성전자 우군으로…스타트업 '중동 공략'은 순항 [Geeks' Briefing]</div>
                <p class="news-content">이 기사는 프리미엄 스타트업 미디어 플랫폼 한경 긱스에 게재된 기사입니다. 한국경제… </p>
                <p class="news-mediaCompany">한국경제</p>
              </div>
            </div>
          </a>

          <a href="../news_view.html" class="list-group-item list-group-item-action">
            <div class="row">
              <div class="col-md-1">
                <img src="./issueImages/image10.jpg" class="img-fluid" alt="뉴스10 썸네일" />
              </div>
              <div class="col-md-10">
                <div class="fw-bold">중국 응원에 농락당한 ‘다음’…‘매크로’ 규제, 업계 반응은?</div>
                <p class="news-content">다음, 매크로 응원 조작에 ‘여론조작’ 규제 필요성↑ 업계, 취지 공감하면서도 “명확한 기… </p>
                <p class="news-mediaCompany">매일경제</p>
              </div>
            </div>
          </a>

          <div style={{ whiteSpace: 'pre-line' }}>
            <span style={{ display: 'inline-block', width: '100%' }}></span>
            <span style={{ display: 'inline-block', width: '100%' }}></span>
            <span style={{ display: 'inline-block', width: '100%' }}></span>
          </div>

          <div className="pagination-wrap d-flex justify-content-center">
            <nav aria-label="Page navigation example" className="pagination-nav">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item"><a className="page-link" href="#">6</a></li>
                <li className="page-item"><a className="page-link" href="#">7</a></li>
                <li className="page-item"><a className="page-link" href="#">8</a></li>
                <li className="page-item"><a className="page-link" href="#">9</a></li>
                <li className="page-item"><a className="page-link" href="#">10</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
export default Iusse;