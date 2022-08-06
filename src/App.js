import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";
import "./App.css";

//for popup
import React, { useState, useNavigate } from "react";

import PopupContent from "./components/PopupContent";
import Signin from "./pages/Signin";

const App = () => {
  const [isOpenPopup, setisOpenPopup] = useState(false);
  const [input, setInput] = useState("");

  const toggle = () => {
    setisOpenPopup(!isOpenPopup);
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <button onClick={toggle}> Click</button>
      <MyHeader
        btn1Type="Feedback"
        btn1Text="Feedback"
        btn1Func={(e) => alert("Feedback clicked")}
        btn2Type="sign"
        btn2Text="sign"
        btn2Func={(e) => alert("sign clicked")}
      />
      <body>
        <p>
          Hello User2022년에 가장 기대되는 K-POP 걸그룹 1위로 선정되었다. ADOR
          대표인 민희진이 제작해서 민희진 걸그룹으로도 많이 불린다. 민희진은
          쏘스뮤직과 합작하여 2019년 10월부터 전 세계 7개국의 16개 도시를 돌며
          5만 명이 넘게 지원한 플러스 글로벌 오디션을 진행했고, 2019년 말에
          오디션 및 캐스팅으로 선발된 데뷔조 멤버들은 2020년 초부터 연습생으로
          생활했다고 한다. 원래는 쏘스뮤직에서 2021년에 데뷔시키려고 했었다가
          코로나19 때문에 연기되었고, 예정보다 빨리 자신의 레이블인 ADOR를
          설립하게 되어서 데뷔조 멤버들이 모두 ADOR로 이적하여 데뷔하게 되었다.
          처음부터 5인조 걸그룹으로 기획되었다. 민희진이 기획한 2019년 오디션
          홍보 영상의 마차에서 5명이 내리는 장면이 나온다. 2021년 7월 23일,
          방탄소년단의 Permission to Dance MV에 멤버 민지, 하니 두 명이
          출연했었고, 민지는 2019년 플러스 글로벌 오디션 홍보 영상에도
          출연했으며, 해당 오디션을 통해 선발되어 멤버 전원이 10대인 소녀들을
          중심으로 기획되었다. 데뷔일인 2022년 8월 1일 기준, 멤버들 평균 나이는
          만 16.4세이며 모든 멤버가 미성년자이다. 2021년 12월 1일, 민희진 대표가
          tvN 유 퀴즈 온 더 블럭에 출연하여 HYBE에 입사한 2019년부터 너무 잘하는
          프로듀서와 이미 타이틀곡을 준비해놨다고 하고, "분명히 굉장히 새로운
          반향을 불러일으키지 않을까 심히 기대하고 있다"라고 말하며 2022년에
          데뷔 시킬 것이라고 밝혔다.[7] 민희진 대표는 멤버들 부모님들과 나이가
          비슷해서 너무 신기했고, 좋은 이모가 되고 싶고 좋은 엄마가 돼주고
          싶다며 한 명씩 주말마다 집에 불러서 요리도 해주고 산책도 하며 친해지는
          시간을 가졌으며, 멤버들이 자연스럽게 아티스트가 되는 과정을 만들어주고
          싶었다고 한다. 멤버들이 미숙한데 진짜 노력을 많이해서 막 병아리 같고
          이뻐보였다고 한다. 그래서 '즐겁게 해보자, 그러면 굉장히 다른 바이브가
          나올거다'라고 말했다고 한다. 2022년 1월 7일, 다른 인물을 통해 New
          Jeans라는 상표가 우회 등록되었다. 2022년 3월 11일, 민희진 대표이사는
          미국의 세계적인 엔터테인먼트 전문 매체 '버라이어티'에서 글로벌
          엔터테인먼트 업계에 영향을 미친 여성 리스트에 선정되었으며, 소감으로
          "감사하다. 어도어 신규 걸그룹 기획·제작에 올인(All-in)하고 있다. 올해
          3분기, 전 세계 팬들에게 새로운 취향과 화두를 제시할 수 있는 차별화된
          걸그룹을 선보이겠다."라고 포부를 밝히면서 2022년 3분기에 ADOR의 첫번째
          걸그룹 데뷔가 확정되었다. 민희진 대표는 데뷔팀 지향점을 ‘숙련’보다는
          ‘즐기기’에 두고 있고, 진심으로 즐기는 사람에게서 나오는 에너지는
          엄청나게 강력해서 보는 사람까지도 춤추게 만든다고 한다. 그리고
          업계에서 (내가 아닌) 남이 말해줬을 때 듣기 좋았던 들은 말 중에 가장
          기분 좋은 두 단어가 '세계관'과 '아티스트'라고 말했는데, 대신
          인위적으로 만들어낸 설정보다 자연스러운 흐름과 복선을 좋아한다고
          밝혔다. 멤버 전원이 한국어, 영어를 모두 구사할 수 있다고 한다. 데뷔 전
          민희진 대표가 한국 걸그룹한테 굳이 '한국어를 할 줄 안다'고
          표현했으므로 외국인 멤버가 포함되어 있는 다국적 걸그룹으로 추정되었고,
          실제로 베트남 출신의 하니, 호주-한국의 이중국적인 다니엘이 공개되었다.
          2022년 7월 1일, 3분기가 시작되자마자 ADOR 걸그룹 관련 자료가 공식
          인스타그램에 올라왔고 7월 22일에 ADOR 걸그룹 첫 콘텐츠 공개를
          예고했다. 7월 1일에 공개된 멤버 수를 의미하는 다섯 마리의 토끼가 각각
          초록색, 흰색, 분홍색, 하늘색, 노란색 등의 색상들을 가지며 눈동자에
          '♡'가 있고, 순서대로 같은 방향을 향해 롤러스케이트를 타고 있으며
          그중에 센터에 있는 분홍색 토끼와 마지막 노란색 토끼 두 마리만 불꽃
          같은 아우라를 내뿜고 있다. 2022년 8월 1일, 공개된 New Jeans의 멤버별
          앨범을 통해 초록색 토끼는 다니엘, 흰색 토끼는 해린, 분홍색 토끼는
          하니, 하늘색 토끼는 혜인, 노란색 토끼는 민지로 확인되었다. 다른 HYBE
          LABELS 소속 아티스트들과 달리 무료 소통 어플인 Weverse를 쓰지 않고
          WEVERSE COMPANY에서 새로 제작한 Phoning이라는 유료[8] 소통 어플을
          사용한다.트위터 아이콘 NewJeans의 각종 로고 이미지 및 일부 의상이나
          공식 홈페이지 및 전용 소통어플인 Phoning의 화면 구성등이 뉴트로
          스타일로 구성되었다. 유튜브 뮤직비디오 프로모션을 진행하지 않았다.
        </p>

        {isOpenPopup && (
          <PopupContent
            handleclose={toggle}
            content={
              <div>
                <Signin
                  id="input"
                  type="text"
                  name="input"
                  value={input}
                  onChange={handleOnChange}
                />
              </div>
            }
          />
        )}
      </body>
    </div>
  );
};

export default App;
