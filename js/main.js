const Header = document.querySelector('header');
const Footer = document.querySelector('footer');

function getQueryString(){
    //Get QueryString
    params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
        params[key] = value;
    });
    console.log(params)
    return params;
   }
function HeaderRender(A){
    if(A == "index"){
        Text = "어디로 떠나세요?"
        console.log(Text)
    }
    else if(A == "ticket"){
        Text = "투어티켓"
    }
    else if(A == "airplan"){
        Text = "항공권"
    }
    else if(A == "home"){
        Text = "숙소"
    }
    else if(A == "a2"){
        Text = "특가여행"
    }else if(A == "a3"){
        Text = "패키지"
    }else if(A == "a4"){
        Text = "여행자보험"
    }else if(A == "a5"){
        Text = "여행준비"
    }
    
Header.innerHTML = ` 
    <div class="section_box">
        <div class="boxs">
            <div class="wrap">
                <div class="box1">
                    <a href="index.html">
                        <h1><img src="img/logo.png" alt="로고"></h1>
                    </a>
                    <ul>
                        <li>파트너 등록하기</li>
                        <li>로그인</li>
                        <li>회원가입</li>
                    </ul>
                    <div class="ham">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div class="box2">
                    <ul>
                        <li class="nav_list"><a href="index.html?id=ticket&pageno=0">투어&티켓</a></li>
                        <li class="nav_list"><a href="airport.html?id=airplan&pageno=1">항공권</a></li>
                        <li class="nav_list"><a href="#">숙소</a></li>
                        <li class="nav_list"><a href="#">특가여행</a></li>
                        <li class="nav_list"><a href="#">패키지</a></li>
                        <li class="nav_list"><a href="#">여행자보험</a></li>
                        <li class="nav_list"><a href="#">여행준비</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="middle_box">
            <div class="wrap">
                <h2>${Text}</h2>
                <div class="box3">
                    <!-- <img src="img/dot.jpg" alt="dot"> -->
                    <input type="text" placeholder="여행지나 상품을 검색해보세요!">
                </div>
            </div>
        </div>
    </div>`
    }
    function ActiveList(A){
        const NavList = document.querySelectorAll('.nav_list');
        // console.log(NavList);
        NavList[A].className='active'
    }

    function FooterRender(){
        
    Footer.innerHTML = ` 
        <div class="footer_wrap">
            <div class="footer_inner">
                <div class="footer_left">
                    <h4>고객센터</h4>
                    <h5>1670-8208</h5>
                    <span>일반 문의 09:00-22:00 / 실시간 항공권 문의 09:00-18:00 </span>
                    <span>연중무휴 / 점심 12:00-13:00</span>
                    <button>1:1 채팅상담</button>

                </div>
                <div class="footer_right">
                    <div class="footer_right_nav">
                        <ul>
                            <li><h4>소개</h4></li>
                            <li>회사 소개</li>
                            <li>채용</li>
                        </ul>
                    </div>
                    <div class="footer_right_nav">
                        <ul>
                            <li><h4>파트너</h4></li>
                            <li>파트너 등록하기</li>
                            <li>프로그램</li>
                            <li>리얼 가이드</li>
                            <li>가이드 블로그</li>
                        </ul>
                    </div>
                    <div class="footer_right_nav">
                        <ul>
                            <li><h4>지원</h4></li>
                            <li>자주 묻는 질문</li>
                            <li>최저가 보장제</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer_inner2">
                <ul>
                    <li>이용약관</li>
                    <li>개인정보 처리방침</li>
                    <li>취소 및 환불 정책</li>
                    <button style="float: right;">한국어</button>
                </ul>
                <p>상호명 (주)마이리얼트립 | 대표 이동건 | 개인정보보호책임자 류종민 | 사업자등록번호 209-81-55339 <br/>주소 서울특별시 서초구 강남대로 327, 대륭서초타워 18층(서초동) | 이메일 help@myrealtrip.com | 마케팅/제휴 문의 marketing@myrealtrip.com<br/><br/>
                    자사는 서울특별시관광협회 공제영업보증보험에 가입되어 있습니다.마이리얼트립은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 상품·거래정보 및 거래에 대하여 책임을 지지않습니다.</p>
            </div>
        </div>`
    }