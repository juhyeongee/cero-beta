import userInfoStore from "@/store/UserInfoStore";

const { nickname } = userInfoStore;

interface IMissionType {
  [key: number]: { [key2: string]: { [key3: string]: string } };
}

const missions: IMissionType = {
  0: {
    version1: {
      subtitle: "mock data missions",
      description: ``,
      type: "text",
      articleTitle: "",
      article: `mock`,
    },
  },
  1: {
    version1: {
      subtitle: "보내지 않을 편지쓰기 📨",
      description: `그 사람에게 하고 싶은 말씀, 남김없이 털어놓으세요. 어차피 보내지 않을 편지이니 속 시원히 적어보세요.`,
      type: "text",
      articleTitle: "받는 사람, 없음",
      article: `보내지 않을 편지를 써봅니다. 그 사람에게 하고 싶은 말이 아직 남아 있다면 오늘 속마음을 모두 털어내세요.

      안부를 물어도 좋고, 원망의 마음을 쏟아내도 좋아요. 구차해 보일까 차마 그러지 못했다면, 한 번 더 매달려 보아도 괜찮습니다. 누구도 신경 쓰지 말고 하시고 싶은 말을 고스란히 적어보세요.
      
      이 편지가 그 사람에게 닿지는 않겠지만, ${nickname}님 스스로 지금의 마음이 어떤지는 분명히 정리해볼 수 있을 거예요. 바로 그것이, 이별이라는 고된 과정을 제대로 소화하는 첫 번째 걸음이 되어줄 겁니다.`,
    },
  },
  2: {
    version1: {
      subtitle: "이별 영화 감상하기 🎥",
      description: `오늘은 영화 한 편 어떠세요? 이별을 극복한 사람들이 추천하는 영화, 베스트 5입니다. `,
      type: "text",
      articleTitle: "우리가 주인공이었던 이야기",
      article: `울리지 않는 핸드폰은 잠시 내려놓고 오직 나만을 위한 두 시간을 보내봅니다. 이별을 극복한 사람들이 추천하는 영화 다섯 편을 추천해드릴게요.  

      1. 드라이브 마이카(하마구치 류스케, 2021): 어쨌든 살아가야 하는, 남은 날을 위한 위로가 필요할 때 봐야하는 영화입니다. 마지막 5분은 눈물을 쏟으면서 보게 되실 거예요.
      
      2. 500일의 썸머(마크 웹, 2009): 갑자기 찾아온 이별의 이유를 찾을 때 도움이 될 영화예요. 상대방의 시선에서 연애를 돌아보면서 나는 어떤 연애 상대였는지 찬찬히 생각해보세요.
      
      3. 그녀(스파이크 존즈, 2013): 뜨겁게 사랑했지만 어느날 갑자기 남이 되어 버릴 수도 있는, 연애라는 묘한 관계를 고스란히 보여주는 영화입니다. 우리가 했던 것이 대채 무엇이었는지 돌아보면서 마음을 정리하고 싶을 때 도움이 될 거예요.
      
      4. 조제 호랑이 물고기들(이누도 잇신, 2003): 연애가 끝나고 남는 것은 무엇일까요. 마음을 다해 사랑했다면, 사랑한 만큼 성장하는 셈이라고 말해주는 영화입니다. 속시원히 울고 싶을 때 추천해 드려요.
      
      5. 봄날은 간다(허진호, 2001): ‘사랑이 어떻게 변하니’라는 불후의 명대사를 남긴 영화입니다. 사랑은 변해도 사랑했다는 사실만큼은 변하지 않는다는, 깊은 위안을 받을 수 있을 거예요.`,
    },
    version2: {
      subtitle: `지난 연애 소설 써보기 ✍🏻`,
      description: `지난 연애에서 가장 좋았던 추억을 하나 적어보세요. 관찰하듯 담담하게 3인칭으로 써보시길 추천드려요.`,
      type: "text",
      articleTitle: "이 소설의 끝을 다시 써보려 해",
      article: `상대와 어떻게 끝을 맞이했든, 분명 좋았던 기억 하나쯤은 있을 거예요. 오늘은 작가가 되었다고 상상하며, 지난 연애의 좋았던 기억 하나를 골라 담백하게 적어보세요.

      연애가 끝이 나도 사랑을 주고 받았던 아름다운 기억까지 전부 사라지는 것은 아니에요. 함께 만들었던 추억 속에 ${nickname}님은 분명 행복하셨을 거예요. 당분간 그런 좋은 기억은 남겨두어도 괜찮습니다.
      
      내가 한때 사랑했었던 사람과의 기억을 담담하게 문장에 담으며, 덕분에 인생의 한 순간 진심으로 행복했다고 이야기하는 시간을 가져보세요.`,
    },
  },
  3: {
    version1: {
      subtitle: `이별 노래 가사 적기 🎶`,
      description: `딱 내 이야기 같다 싶은 이별 노래, 한곡 쯤 있으시죠? 가사를 적으며 감정의 바닥까지 내려가봐요.`,
      type: "both",
      articleTitle: "꼭 내 이야기 같아서",
      article: `헤어진 다음 이별 노래를 들으면 전에는 들리지 않던 가사가 귀에 콕 박히곤 하죠. 모든 이별 노래가 내 이야기인 것 같아서 마음 한 켠이 금세 찡해지기도 합니다.

      실제로 많은 연구를 통해 밝혀진 바에 따르면 슬픈 감정에 빠져들 수 있는 가사나 멜로디를 들을 때, 오히려 더 빨리 기분을 전환할 수 있다고 해요. 슬픈 음악을 통해 우리가 처한 상황을 금방 인지하고 인정함으로써 마음이 홀가분해지기 때문이죠.
      
      그러니 오늘만큼은 꼭 내 이야기인 듯한 이별 노래를 들으며 감정의 밑바닥까지 내려가도 좋습니다. 어떤 노래를 들으시나요? 특히 공감이 되는 가사를 적어보시면서 마음 속 슬픔을 꺼내보세요.`,
    },
    version2: {
      subtitle: `그 사람에게 배울만 했던 점 정리하기 🤔`,
      description: `그래도 그 사람을 만나서 다행이었다 싶은 점이 있다면 말씀해주세요. 좋은 건 잠시 남겨두자고요.`,
      type: "text",
      articleTitle: "아무리 미운 사람이지만",
      article: `끝난 연애는 모두 실패일까요? 감히 그렇지 않다고 말해봅니다. 아름답고 좋았던 모든 순간이 끝났다는 이유만으로 아무것도 아닌 것이 되어버린다면 그만큼 서글픈 일도 없을 테니까요.

      사람도 마찬가지입니다. 이제는 다시 보지 못할 사람이 되었더라도 한때는 누구보다 사랑했고, 크고 작은 영향을 주고받은 사람일 거예요. 좋든 싫든 인생의 소중한 한때를 함께 보낸 사람이죠.
      
      그러니 오늘은 원망과 미련의 마음은 잠시 내려두고 그 사람의 만남에서 좋았던 점을 한 번 떠올려봅니다. 그에게서 무엇을 배우셨는지, 그와 함께해서 긍정적으로 변한 나의 모습이 있다면 정리해보세요. 폐허 속에서 새 시작의 가능성을 발견하는 일이 될 겁니다.`,
    },
  },
  4: {
    version1: {
      subtitle: `목청 높여 노래부르기 🎤`,
      description: `오늘 기분은 어떠세요? 노래방이라도 가셔서 속이 뻥 뚫리도록 맘껏 소리 지르고 오세요! `,
      type: "photo",
      articleTitle: "소리지르는 내가 챔피언",
      article: `답답한 마음을 달래는 기본적인 방법은 무언가를 밖으로 꺼내놓는 것입니다. 눈물을 흘리거나 땀을 내면 후련하다는 느낌이 드는 것처럼, 소리를 지르는 행위도 감정 해소에 큰 도움이 되죠.

      동네에 코인노래방이 있다면 오늘 한 번 들려보세요. 좋아하는 노래를 따라부르며 감정에 푹 빠지셔도 좋고, 크라잉넛의 <말 달리자> 같은 노래를 틀어두고 있는 힘껏 질러보셔도 좋습니다.
      
      마음속에 꾹 눌러 담아두었던 울분과 슬픔을 밖으로 꺼내 놓는다고 생각하시면서 속 시원하게 목청을 높이고 오세요. 잘 부르는 게 중요한 것이 아니니 점수는 꺼놓으시는 것을 추천해 드려요.`,
    },
    version2: {
      subtitle: `동네 한 바퀴 달리기 🏃🏻‍♀️`,
      description: `땀에 온몸이 흠뻑 젖을 정도로 동네 한 바퀴 달려보세요! 익숙했던 풍경도 새롭게 보일 거예요!`,
      type: "photo",
      articleTitle: "우리 동네를 여행하는 법",
      article: `매일같이 동네를 돌아다니지만, 막상 주변 풍경을 떠올리면 잘 기억이 나지 않습니다. 너무 익숙해진 길이라 일일이 눈에 담은지 오래 된 탓이겠죠.

      오늘은 낯선 무언가를 급하게 시작하기보다는 편안한 일상에서 조금씩 새로운 것들을 발견하는 것을 추천해 드려요. 마치 새로운 길을 가듯 동네를 한 바퀴 달려보는 거죠.
      
      수다를 나누며 산책하는 사람들, 흩날리는 나뭇잎들, 푸른 하늘, 햇빛을 즐기는 참새들을 보면 어느 순간 그 평화로움 속에 빠져든 스스로를 발견하게 되실 거예요. 그동안 무심코 지나쳤던 일상에 몰입하면서 평온한 마음을 찾아보는 시간을 가져보는 겁니다.`,
    },
    version3: {
      subtitle: `그 사람이 별로인 이유 적기 🙅🏻‍♀️`,
      description: `그 사람이 준 상처가 있다면 남김 없이 적어보세요. ‘헤어지길 잘했다’ 싶은 일이라면 뭐든 좋아요.`,
      type: "text",
      articleTitle: "To. 🤬🤬🤬",
      article: `걱정하지 마세요. 이 글은 아무도 볼 수 없어요. 그러니 누구든 마음껏 원망하셔도 괜찮다는 말씀.

      그 사람의 모진 말이나 행동이 가슴에 깊이 박혀 있다면 오늘 후련하게 털어내세요. 그동안 사랑한다는 이유로 외면해 왔던 상대의 좋지 않은 모습, 이제는 봐줄 필요 없어요.
      
      나를 힘들게 했던 일을 쭉 나열하셔도 좋고 상대에게 원망스러운 감정을 토로해도 좋아요. 속 시원히 쏟아내고 나면 마음도 후련해지고, 언젠가 혹 마음이 흔들릴 때가 와도 오늘 쓴 글을 읽으면 헤어지길 잘했다는 걸 다시금 확인하시게 될 거예요.`,
    },
  },
  5: {
    version1: {
      subtitle: `찬물로 샤워하기 🚿`,
      description: `찬물로 딱 30초만 샤워해 보세요. 숨이 차고 아드레날린이 솟아오르며 기분이 아주 상쾌해질 거예요!`,
      type: "photo",
      articleTitle: "몸과 마음을 깨우는 작은 용기",
      article: `찬물 샤워의 효과는 꽤 과학적입니다. 찬물을 몸에 끼얹으면 우리 몸은 노르아드레날린이라는 호르몬을 분비하는데요. 이 호르몬은 심박수를 증가시키고 온몸에 활력을 느끼게 하죠. 기분이 가라앉고 무력감을 느낀다면 찬물 샤워가 잠시나마 도움이 될 거예요.

      방법은 간단합니다. 마지막으로 몸을 헹굴 때 조금씩 미지근하게 온도를 조절하세요. 심장에서 먼 곳부터 천천히 적응해봅니다. 평소 따뜻한 물로만 샤워하셨다면 어려우실 수 있어요. 뭐든 처음이 어렵잖아요. 눈 딱 감고 찬물로 온도를 맞춰보세요.
      
      물이 완전히 차가워지면 30초에서 1분 정도 온몸에 뿌려주시면 됩니다. 시간은 컨디션에 따라 조절해주세요. 찬물 샤워는 면역력도 올려주고 피부 건강에도 도움이 된다니 이번 기회에 작은 습관으로 삼으셔도 좋겠죠.`,
    },
    version2: {
      subtitle: `예쁜 쓰레기 지르기 🪀`,
      description: `${nickname}님을 위한 날이에요! 작고 쓸모 없는 예쁜 쓰레기 하나 지르고 오세요! 대신 딱 5만원 이하로만 지르기!`,
      type: "photo",
      articleTitle: "나를 위한 작은 사치",
      article: `상대를 위한 선물은 그렇게나 많이 줬으면서, 정작 나를 위한 선물은 얼마나 챙기셨나요? 영 떠오르지 않는다면 오늘만 YOLO(You Only Live Once) 라이프스타일을 즐겨보는 거 어때요?

      오로지 자기만족을 위해 사치를 부려 보세요. 그동안 갖고는 싶었는데 굳이 내 돈으로 사기엔 아까웠던 물건 하나를 골라 딱 5만 원 안에서 질러 보세요. 
      
      아기자기한 소품 샵에 가서 인테리어 소품을 사도 좋고, 온라인 쇼핑몰에서 마음에 드는 옷을 건져도 좋아요. 그동안 자신을 챙기지 못했던 나에게 사과한다는 생각으로 통 큰 선물을 해보는 거죠.`,
    },
    version3: {
      subtitle: `1분 명상하기 🧘🏻‍♂️`,
      description: `딱 1분, 조용한 곳에서 가만히 앉아 눈을 감으세요. 잡생각이 떠오를 때마다 다시 숨소리에 집중해 보세요.`,
      type: "photo",
      articleTitle: "그저 숨을 쉬는 1분",
      article: `명상이라는 단어가 낯설다면 ‘호흡 느끼기 연습’이라고 생각하셔도 문제없어요. 말 그대로 숨을 내쉬고 들이시는 일에 온 정신을 집중하면서 호흡을 맛보시면 됩니다.

      온전히 시간을 가질 수 있도록 3분 정도로 타이머를 맞춰주세요. 놀라지 않도록 진동으로 해놓으시길 추천해요. 조용하고 살짝 어둡고, 무엇보다 다른 사람 시선을 신경 쓰지 않아도 되는 환경이라면 어디든 좋습니다.
      
      편한 자세로 눈을 감고 몸에 힘을 빼주세요. 천천히 호흡하시면서 코끝에서부터 아랫배까지, 숨이 들고 나가는 과정에 집중하세요. 
      
      자꾸 딴생각이 떠오른다면, 그게 정상입니다. 그때마다 다시 코끝으로 돌아와서 숨을 따라가면 돼요. 타이머가 울리고 눈을 뜨면 분명 전보다 개운한 기분이 드실 거예요.`,
    },
    version4: {
      subtitle: `맨몸 스쿼트 100개 하기 💯`,
      description: `자자, 바로 맨몸 스쿼트 100개만 같이 해봐요! 딱 10분이면 근육이 불끈거리는 걸 느낄 수 있을 거예요!`,
      type: "photo",
      articleTitle: "숨이 턱 끝까지 차오르면",
      article: `딱 10분 만에 ‘내가 살아있구나’를 절실하게 느끼게 해줄 마법 같은 운동이 있습니다. 몸을 누일 정도의 공간만 있으면 되고 도구는 필요 없습니다. 녀석의 이름은 맨몸 버피예요.

      기본 동작은 간단합니다. 선 자세로 시작해, 스쿼트 하듯 앉아 손으로 바닥을 짚고, 다리를 뒤로 쭉 펴 팔굽혀 펴기 자세를 만듭니다. 다시 다리를 몸으로 끌어와 쪼그려 앉은 다음 벌떡 일어서기만 하면 한 번 끝이에요.
      
      말로는 쉬운데, 열 번만 해보면 만만치 않은 운동이라는 걸 깨닫게 되실 거예요. 처음이라면 10분 동안 70개를 목표로 도전해보세요. 10분 뒤, 온몸에 흐르는 땀과 거친 숨소리가 의외로 기분을 아주 상쾌하게 만들어 줄 거예요.`,
    },
  },
  6: {
    version1: {
      subtitle: `처음 가보는 길 걸어보기 🚶🏻‍♀️`,
      description: `세상은 넓고, 좋은 곳도 참 많죠. 오늘은 한 번도 가보지 않았던 길로 걸어보세요.`,
      type: "both",
      articleTitle: "걸음마다 새로운 추억",
      article: `윤동주의 '새로운 길'이란 시를 아시나요? 이 시는 매일 걷는 같은 길이라도 우리가 늘 새로운 목표, 꿈과 마음가짐을 지닌다면 언제나 새로운 길처럼 보인다는 미래지향적인 태도를 표현해요.

      오늘은 시 구절을 떠올리며 집에 갈 때나 동네를 돌아다닐 때 안 가봤던 길을 도전해 보세요. 걸으면서 가고 싶게 생긴 맛집, 옷 가게, 놀거리를 눈으로 메모하고 예쁜 풍경을 구경하는 것을 추천해 드려요.
      
      그동안 과거의 기억이 쳇바퀴 돌듯이 맴돌아서, 일탈하고 싶은 욕구에 반해 일상이 반복되어서 몸도 마음도 많이 지쳤을 거예요. 소소하지만, 새로운 길을 걸을 때의 설레는 마음을 기억하며 ${nickname}님의 미래도 앞으로 희망찰 거라고 ‘새로’와 함께 기대해 보아요.`,
    },
    version2: {
      subtitle: `깔끔하게 방 청소하기 🧹`,
      description: `개운하게 방 청소 해볼까요? 가장 먼저 안 쓰는 물건부터 싹 모아서 버려보자구요! `,
      type: "photo",
      articleTitle: "마음도 청소를 할 수 있다면",
      article: `정리 정돈이 안 된 방을 보면 기분이 더 우울해지지죠. 고작 이 작은 생활조차 내 의지대로 안되는 느낌이 들고, 마치 어지러운 속마음이 고스란히 방 안에 꺼내놓아진 것 같기도 하고요.

      그렇다면 오늘은 마음 먹고 방 청소를 시작해보시죠. 우선 당장 안 쓰는 물건이 있다면 하나씩 정리해보세요. 추억이 깃들어 있어 차마 버리지 못했던 물건이 있다면 과감하게 버리는 것부터 시작하셔도 좋아요. 
      
      방안을 정리하며 괜히 놓지 못했던 미련이나 후회까지 한꺼번에 정리하세요. 방안에서 자리를 차지하고 있던 물건을 깔끔히 처리하고 나면 의외로 아깝다기 보단 후련하다는 기분이 드실 거예요. `,
    },
    version3: {
      subtitle: `이별 이유 정리하기 📝`,
      description: `지난 연애가 끝날 수 밖에 없었던 결정적인 이유는 무엇인가요? 차분하게 정리하는 시간을 가져보세요.`,
      type: "text",
      articleTitle: "어떻게 사랑이 변했니",
      article: `이별은 몇번을 겪어도 좀처럼 익숙해지는 일이 없습니다. 하지만 그러한 고통을 감내하고서라도 결국 이별을 맞이하게 된 데에는 사랑으로 견디지 못할 이유가 있기 때문일 거예요. 아무리 상대를 좋아해도 사랑만으로는 감당하기 힘든 여러분만의 이유요.

      우리가 헤어질 수밖에 없었던 이유를 생각나는 대로 다 적어보세요. 우선순위에 내가 없든, 연락 패턴이 맞지 않든, 자주 싸우든 등등 뭐든지 좋아요.
      
      그렇게 다 적은 것을 읽어보면, 사귈수록 그 문제점들은 나를 계속 더 힘들게 할 거라는 생각이 들 거예요. 오히려 지금 이 관계가 끝난 게 나의 행복을 위한 선택이라고 생각해 보아요.`,
    },
  },
  7: {
    version1: {
      subtitle: `해묵은 물건 중고 거래하기 🏷`,
      description: `오랫동안 자리만 차지했던 물건 하나 골라서 중고 마켓에 올려보세요! 의외로 후련한 기분이 드실걸요?`,
      type: "both",
      articleTitle: "혹시… 당근하세요?",
      article: `집안을 둘러보시고 더는 필요 없는 물건, 방안에 자리만 차지하고 있는 물건 하나를 골라보세요. 오늘은 녀석을 깨끗하게 손질해 중고 거래 서비스에 판매 글을 올려보겠습니다.

      오래된 물건일수록 좋아요. 추억을 이유로 괜히 버리지 못했던 물건이라면 더할 나위 없죠. 물건 하나를 팔았을 뿐인데 생활도, 마음도 한결 가벼워진 느낌이 들 겁니다.
      
      실제로 여러 전문가는 물건을 버리거나 정리하는 행위가 심리적인 정화 효과를 일으킨다고 말합니다. 먼지 쌓인 방 한구석을 꺠끗이 정리하듯 마음속 케케묵은 감정도 함께 털어내세요.`,
    },
    version2: {
      subtitle: `찐맛집 예약하기 📞`,
      description: `${nickname}님, 평소 가고 싶었던 맛집이 있다면 지금 바로 예약하세요! 대신 진짜 맛있는 거 드시고 오셔야 해요!`,
      type: "photo",
      articleTitle: "진짜 맛있는 음식과의 데이트",
      article: `맛있는 음식을 먹는 즐거움은 무엇과도 비교할 수 없습니다. 남이 해주는 음식이라면 더더욱 말이죠!

      평소 가고 싶었으나 웨이팅 때문에 망설였던 맛집이 있다면 오늘 예약을 하세요. 혼자 먹는 밥이 익숙하지 않아 걱정이시라면, 걱정은 접어두셔도 좋습니다. 놀랍게도 아무도 신경 쓰지 않을 테니까요!
      
      오히려 오롯이 맛을 느끼는 즐거움이 얼마나 좋은 건지 알게 되는 멋진 시간이 될 거예요. 아주 맛있는 음식과 오직 나만을 위한 시간을 제대로 즐기고 오세요.`,
    },
    version3: {
      subtitle: `지난 연애가 남긴 교훈 정리하기 🗒`,
      description: `${nickname}님, 지난 연애에서 우린 무엇을 배웠을까요? 작은 것이라도 좋으니 한번 정리해보시죠.`,
      type: "text",
      articleTitle: "배움은 틀린 문제에서",
      article: `${nickname}님은 지난 연애에서 무엇을 얻었고 어떤 것을 배우셨나요. 다시 새롭게 나아가기 위해선 또 무엇을 간직해야 할까요. 

      오늘은 지난 연애를 돌아보면서 그 짧고도 길었던 관계 속에서 무엇을 배웠는지 찬찬히 정리해보는 시간을 가져보겠습니다.
      
      또 한 번의 연습이 끝났을 뿐이라고 생각해셔도 좋아요. 다음 연애는 지금보다 더 잘하면 그만이죠. 그러려면 무엇을 더 잘할 수 있을지 고민해보는 과정 역시 반드시 필요합니다.`,
    },
  },
  8: {
    version1: {
      subtitle: `지난 추억 정리하기 📦`,
      description: `그 사람의 편지와 사진, 아직 가지고 계신다고요? 좋아요, 남김 없이 모아서 박스 하나에 모아보세요.`,
      type: "photo",
      articleTitle: "연애의 흔적을 그러모으며",
      article: `이곳저곳 남겨져 있는 지난 연애의 흔적은 이별을 더욱 힘들게 만듭니다. 그 사람이 준 선물이나 편지라도 보게 되면 애써 다잡은 마음까지 흔들릴 거예요. 

      그렇다고 한때 사랑했던 사람과 공유했던 추억을 한순간에 버린다는 건 결코 쉬운 일은 아니죠. 그러니 오늘은 일단 지난 연애를 떠올리게 하는 물건을 모두 모아 상자 하나에 담아보세요. 볼 때마다 마음을 뒤숭숭하게 했던 것들을 눈 밖으로 정리해보는 겁니다.
      
      상자를 버리는 건 언젠가 모든 게 괜찮아지는 날이 왔을 때라도 늦지 않아요. 지금은 우선 나의 감정을 추스를 수 있는 환경부터 만들어 주세요.`,
    },
    version2: {
      subtitle: `이별 장면 회상하기 🎞`,
      description: `지난 이별의 순간을 떠올려 볼까요? 당시의 기분, 상황, 분위기까지 관찰하듯 찬찬히 되뇌어 보겠습니다.`,
      type: "both",
      articleTitle: "약간의 거리를 두고",
      article: `지난 연애의 마지막 장면을 기억하고 계신가요? 오늘은 조금 특별한 방법으로 이별의 순간을 돌아보겠습니다.

      관건은 ‘관찰자의 시선으로 바라보기’인데요. 이별 당사자가 아닌, 제삼자의 시선에서 그날의 일을 관찰하듯 말씀해주세요. 두 분의 마지막 대화는 어땠나요? 언제, 어디에서 어떻게 연애를 마무리하셨나요? 행동은 가능한 자세히 말씀해주시되, 감정은 덜어내주세요.
      
      이런 회고 방식을 전문적으로는 ‘심리적 거리두기’라고 합니다. 한 사건을 균형 감각을 가지고 객관적으로 파악하는 방법으로, 감정적 왜곡을 줄이고 벌어진 사건 자체에 집중할 수 있다는 장점이 있어요.
      
      많은 전문가는 ‘차마 돌아보기 어려운 가슴 아픈 일’을 곱씹고 소화하기 위해 이 방법을 추천합니다. 아직 마음의 준비가 되지 않았다면 오늘은 다른 할 일을 택하셔도 좋지만, 마음을 완전히 정리하기 전 꼭 한 번 해보시길 추천드려요. 감정에 가려 차마 보지 못했던 일을 찬찬히 들여다 보는 기회가 될 겁니다.`,
    },
    version3: {
      subtitle: `이불 정리하기 🛏`,
      description: `아직 침대에 누워 계시다면 바로 이불을 정리하세요! 깔끔히 정돈한 후 기지개 쭉 펴고 하루 시작하기!`,
      type: "photo",
      articleTitle: "하루를 시작하는 나만의 의식",
      article: `우리는 침대에서 하루를 시작하고 마무리합니다. 그만큼 침대는 그날 하루의 기분을 결정지을 수 있는 중요한 공간이죠.

      오늘은 일어나자마자 침대를 깔끔하게 정리하면서 작은 성공으로 하루를 시작하세요. 이제 펼쳐질 남은 하루도 성공적으로 보내게 해줄 도움닫기가 되어줄 거예요.
      
      딱 1분만 일찍 일어나 테이프 클리너로 베개와 이불 먼지를 떼고, 이불을 개고, 떨어진 인형을 올려 주세요. 깨끗해진 침대만큼 상쾌해진 마음으로 힘차게 하루를 시작해보시는 겁니다.`,
    },
  },
  9: {
    version1: {
      subtitle: `미래의 나에게 안부 묻기 👋🏻`,
      description: `나중에 ${nickname}님은 지금을 어떻게 기억할까요? 미래의 나에게 하고 싶은 말을 영상이나 글로 남겨보세요.`,
      type: "both",
      articleTitle: "잘 지내? 미래의 나",
      article: `새로운 마음이 싹을 틔운 지 벌써 9일째네요. 여기까지 함께하시느라 고생 많으셨어요. 오늘부터는 본격적으로 새 볕을 맞기 위한 준비를 하나둘 해보겠습니다.

      지금으로부터 10년 뒤, ${nickname}님은 이 시간을 어떻게 기억하고 있을까요? 10년이면 강산도 변한다고 하니, 아마도 많은 것이 달라져 있겠지요. 지금 남아있는 슬픔과 상실감도 그때쯤이면 기억조차 나지 않을 수도 있고요.
      
      그때의 우리가 어떤 사람이 될지는 지금의 우리가 이 시간을 어떻게 보내고 있는지에 달려있습니다. 그때의 내가 지금보다 더 괜찮은 내가 되어 있길 바라며, 가볍게 안부를 물어봅니다. 이렇게 시작해보는 건 어떨까요? ‘잘 지내고 있어? 그렇다면 전부 내 덕분이라는 걸 잊지 마’라고요.`,
    },
    version2: {
      subtitle: `댄스타임! 온 몸 흔들어 제끼기 🕺🏻`,
      description: `지금 혼자 계신다면 거울을 앞에 두고 아무 춤이나 실컷 춰보세요! 막춤도 좋아요! 쉐킷쉐킷!`,
      type: "photo",
      articleTitle: "이웃에 방해되지 않는 선에서",
      article: `마지막으로 춤 춘지 얼마나 되셨나요? 언제인지 가물가물하시다면 오늘만큼은 리듬에 몸을 맡겨 보세요.

      잘 추는지 아닌지는 전혀 상관없어요. 내 몸을 마음껏 움직이며 손끝 발끝을 다 사용해 내 안의 감정을 표현하는 것이 중요해요. 말로는 하기 힘들었던 내 마음을 흐르는 대로 꺼내 놓아보세요.
      
      슬픈 노래도 좋고 신나는 노래도 좋아요. 아무도 없는 방 안에서 혼자 마음 가는 대로 몸을 움직여 보세요. 평소 쓰지 않던 근육의 움직임을 느끼며 땀이 날 정도로 춤을 추다 보면, 어느새 마음도 한결 후련해질 거예요.`,
    },
    version3: {
      subtitle: `우주 다큐멘터리 보기 🪐`,
      description: `오늘은 우주 다큐멘터리 한 편 보시죠. 드넓은 우주 속에선 우리의 아픔이 아주 작게 보일 거예요.`,
      type: "photo",
      articleTitle: "마음의 균형을 찾는 법",
      article: `우주는 얼마나 크고 오래되었을까요? 우리은하에는 2천억 개의 행성이 존재하는데, 우주에는 이런 은하가 천억 개나 더 있다고 해요. 빛의 속도로 1년 동안 가는 거리를 1광년이라고 하는데, 우리가 볼 수 있는 우주만해도 지구에서부터 무려 465억 광년의 규모예요.

      이별로 마주한 슬픔과 문제들이 당장이라도 내 인생을 통째로 삼킬 것 같지만, 우주를 생각하면서 그 무게를 잠시 내려놓았으면 좋겠어요. 
      
      중요한 것은 언제나 균형이죠. 지금은 이 슬픔이 너무나 크게 느껴져 감당하기 힘들다면, 커다란 우주 앞에서 우리의 문제는 사실 아무것도 아니라고 생각해 보는 것도 방법이에요. 드넓은 우주를 보며 내 속의 우울과 상처를 작은 먼지라고 생각해보세요. 조금이라도 분명 마음이 가벼워질 거예요.`,
    },
  },
  10: {
    version1: {
      subtitle: `나를 위한 저녁 식사 차리기 🥘`,
      description: `${nickname}님을 위한 저녁 식사를 차려보세요. 기름지고 맛있는 음식이라면 완벽합니다.`,
      type: "photo",
      articleTitle: "온전히 나를 위한 식탁",
      article: `이별 후에는 식욕이 극도로 폭발하거나 혹은 입맛이 완전히 떨어지기도 합니다. 어떤 경우든, 아무리 먹어도 속은 공허한 탓이죠.

      그러나 본능적으로 우리 몸은 잘 차려진 음식을 먹는 기쁨을 그 무엇보다 강력하게 받아들입니다. 오늘은 이 기쁨을 스스로에게 선물해보세요. 
      
      메뉴를 고르고 준비한 재료를 잘 조합해 예쁘게 플레이팅 하기까지 모든 과정을 스스로 해내며, 나의 건강과 마음을 소중히 대하는 시간을 가져보세요.
      
      된장찌개, 토스트, 단백질 브라우니. 직접 만들 수 있다면 무엇이든 좋아요. 요리 초보라면, ‘종원의 요리비책’, ‘자취요리신’, ‘맛있는 한 끼’ 같은 유튜브 채널을 참고하시는 것을 추천해 드려요.`,
    },
    version2: {
      subtitle: `300피스 퍼즐 맞추기 🧩`,
      description: `300피스 퍼즐에 도전해보세요! 시간도 체크해볼까요? 잡생각을 떨치고 집중하게 되실 거예요.`,
      type: "photo",
      articleTitle: "제자리를 찾아가는 마음의 조각",
      article: `복잡한 마음을 다스리고, 잡생각을 끊어내는 데 퍼즐만한 친구도 없습니다. 어지럽게 쏟아진 퍼즐의 제자리를 찾아주다 보면 어느새 내 마음도 차곡차곡 정리되는 기분을 맛볼 수 있거든요.

      퍼즐의 가장 큰 장점은 바로 ‘작은 성공의 경험’을 반복하게 해준다는 점입니다. 수많은 조각 중에서 그 자리에 필요한 단 하나의 퍼즐을 찾아내는 과정을 반복하며, 뿌듯함과 성취감까지 느낄 수 있죠.
      
      가성비도 훌륭합니다. 300피스 기준으로 만 원 초중반이면 구할 수 있고, 느긋하게 즐기신다면 한두 시간은 흠뻑 빠져볼 수 있을 거예요. 다 맞춘 퍼즐은 액자에 넣어 장식해도 좋고, 중고로도 꽤 잘 팔린답니다.`,
    },
    version3: {
      subtitle: `혼자 심야 영화 보고 오기 🌃`,
      description: `오늘은 극장에 가서 심야 영화 한 편 보기! 여유롭게 ${nickname}님만을 위한 시간을 가져보세요.`,
      type: "both",
      articleTitle: "오직 나만을 위한 영화",
      article: `혼자여서 좋은 점 중 하나는 보고 싶은 영화를 내 취향껏 고를 수 있다는 것! 오늘은 이 작고 소중한 자유를 맘껏 누리고 오세요. 늦은 밤 고요하고 쾌적한 영화관에 앉아 내가 선택한 세계를 만끽하는 즐거움이란!

      관객이 적은 심야 영화관이라면 오직 ${nickname}님만을 위해 준비된 두 시간이 더욱 특별하게 느껴지실 거예요. 작은 극장이라도 좋으니 한 가운데 좌석을 예매해두세요.
      
      엔딩크레딧이 다 올라갈 때까지 앉아서 영화 한 편의 여운을 온전히 즐겨보시길 추천해 드려요. 영화가 끝나고 집으로 돌아오는 길에 다시 한번 머릿속으로 영화를 돌려보며 혼자만의 여유를 즐겨보시는 것도 그만의 낭만입니다.`,
    },
  },
  11: {
    version1: {
      subtitle: `‘혼자여서 괜찮은’ 5가지 이유 적기 😌`,
      description: `다시 혼자가 돼서 좋은 점은 무엇인가요? 아주 많겠지만, 딱 5가지만 말씀해주세요.`,
      type: "both",
      articleTitle: "오히려 좋아",
      article: `벌써 '새로'와 함께한 지 11일이 되었어요. 지금쯤이면 혼자가 되어서 불안하고 외로운 마음보다는 생각보다 혼자여서 괜찮은 점들도 많이 발견하시지 않았을까 싶은데요.

      오늘은 혼자여서 좋은 점 다섯 가지를 적어보세요. 커플일 때는 절대 알 수 없었던 좋은 점들로요. 예를 들어 이성 친구들을 편하게 만날 수 있거나 아무 간섭 없이 집에서 편히 쉴 수 있다는 것도 혼자여서 누릴 수 있는 자유 아니겠어요?
      
      상대가 더 이상 내 곁에 없다는 공허함에 초점을 맞추기보다, 나 자신만의 시간을 자유롭게 쓸 수 있어서 생기는 긍정적인 점에 집중해 보세요. 분명 혼자로 지내는 시간을 통해 더 행복하고 성장한 ${nickname}님을 마주하게 될 거예요.`,
    },
    version2: {
      subtitle: `주식 한 주 구매하기 📈`,
      description: `혹시 주식하세요? 오늘은 열심히 공부해서 새로운 종목을 딱 1주만 사보세요. 딱 1주만요!`,
      type: "photo",
      articleTitle: "내가 모르던, 내가 사는 세상",
      article: `우리는 자본주의라는 합의 안에서 살고 있습니다. 돈이 어떻게 굴러가는지를 알면 우리 사회가 어떤 곳인지를 알 수도 있다는 말이죠.

      가장 효과적인 경제 공부는 직접 돈을 투자해보는 거예요. 물론 섣불리 큰돈을 투자하시는 것은 금물이고요. 오늘은 공부한다는 생각으로 새로운 회사의 주식을 딱 한 주만 사보겠습니다.
      
      중요한 것은 단지 주식을 사는 게 아니라, 요즘 경제 상황은 어떤지, 어떤 분야의 산업이 유망한지를 공부하며 세상을 이해하는 것임을 잊지 마세요. 
      
      몇천 원짜리 주식을 하나 가지고 있을 뿐이지만 새삼 세상과 연결되어 있다는 기분을 느끼실 수 있을 거예요.`,
    },
    version3: {
      subtitle: `활짝 웃고 셀카 찍기 🤳🏻`,
      description: `기분 좋은 웃음을 머금고 사진 한 장 남겨보세요! 나중의 ${nickname}님이 그리워할 만큼 멋진 얼굴로요!`,
      type: "photo",
      articleTitle: "웃으면 행복이 와요",
      article: `옆 친구가 까르르 웃으면, 이유도 모른 채 덩달아 웃어본 적이 있지 않으세요? 과학적으로는 이렇게 다른 누군가의 행동에 같은 반응하는 내는 것을 두고 ‘거울 효과’라고 말합니다.

      오늘은 이 거울 효과를 이용해 기분 좋게 웃어볼게요. 말 그대로 거울을 보며 기분 좋게 미소를 지어보면서 이 근사한 미소를 사진으로도 한 장 남겨보는 거예요.
      
      연구에 따르면 억지웃음을 지어도 우리의 단순한 뇌는 행복 호르몬인 세로토닌을 분비한다고 해요. 예쁜 셀카를 건지기 위해 몇 분 동안이라도 웃고 있으면 우리 뇌는 스트레스를 훌쩍 날려버리게 되죠. 예쁜 사진도 건지고, 기분도 좋아지고 일석이조 아니겠어요?`,
    },
  },
  12: {
    version1: {
      subtitle: `새로운 취미 시작하기 👩🏻‍🎨`,
      description: `새로운 취미에 도전해볼까요? 뭐든 좋아요! 미뤄왔던 취미가 있다면 과감하게 시작해보세요!`,
      type: "both",
      articleTitle: "사랑하는 일을 찾아서",
      article: `우리는 종종 밤새 술을 마시면서 이별의 고통을 잊으려고 하죠. 하지만 그건 잠깐일 뿐, 다시 일상으로 돌아오면 여전히 우울은 거기 있습니다.

      건강하게 생활을 회복하기 위해 새로운 취미를 갖는 것을 추천해 드려요. 미친 듯이 빠질 정도의 취미를 가지고 계신가요? 만약 그렇지 않다면 지금이 인생을 바꿀 취미를 만들 적기인지 몰라요. 
      
      평소 배우고 싶었던 것이 있다면 도전해보세요. 기타 레슨을 등록하거나 복싱 체육관 다녀볼 수도 있죠. 이별은 끝이기도 하지만, 실은 새로운 것에 도전할 시작점일 수도 있어요.`,
    },
    version2: {
      subtitle: `하늘 사진 찍어보기 🌤`,
      description: `${nickname}님, 오늘 하늘은 어떤 색인가요?잠시 고개를 들고 하늘 사진 한 장 찍어보세요!`,
      type: "both",
      articleTitle: "언제라도 잠시 고개를 들면",
      article: `같은 장소에서 봐도 매일 다른 모습을 보여주는 게 하늘의 매력이죠. 구름 모양과 크기, 햇빛이나 달빛의 밝기, 하늘의 채도에 따라  어떨 땐 맑고 깨끗해 보이다가도 어떨 때는 울적해 보이기도 해요.

      오늘은 언제나 우리 위에서 당연하게 그 자라에 있는 하늘을 한 번 올려다보면서 어떤 감정이 떠오르는지 느껴보세요. 나의 울적한 마음을 투영하듯 구름이 잔뜩 끼었을 수도 있고, 화창한 볕으로 우울을 날려 보내는 느낌을 느낄 수도 있을 거예요.
      
      하늘은 굳이 시간내어 어딜 가지 않아도, 단지 고개만 들면 볼 수 있는 가장 가까운 자연이죠. 산도 바다도 좋지만 당장 여유가 없을 때, 하늘은 매번 다른 모습으로 우리를 위로해줄 거예요.`,
    },
    version3: {
      subtitle: `DO NOT 리스트 만들기 🚫`,
      description: `평소 고치고 싶었던 습관을 쭉 적어보세요. 눈에 잘 보이는 곳에 두고 당장 끊어내자고요.`,
      type: "photo",
      articleTitle: "가만히 있어도 성공하는 도전",
      article: `평소 고치고 싶었던 생활 습관이나 행동을 쭉 적어보세요. 새롭게 시작할 나를 위해 버려야 할 것은 깔끔하게 버려보자고요.

      담배 피지 않기, 자기 전 야식 먹지 않기, 다리 떨지 않기 등등. 사소하고 작은 습관이라도 좋아요. ‘내가 되고 싶은 내’가 어떤 모습인지 떠올려보고 절대 하지 않을 일을 적어보는 거죠.
      
      안좋은 습관을 고치기 위해선 조금씩 줄이는 것보다 단번에 끊어내는 것이 효과적이라고 해요. 목록을 잘 보이는 곳에 두고 흔들릴 때마다 읽어보시는 것도 도움이 될 거예요.`,
    },
  },
  13: {
    version1: {
      subtitle: `1년 버킷리스트 작성하기 📋 `,
      description: `${nickname}님의 내일이 기대돼요. 앞으로 1년 안에 이룰 버킷리스트 3개만 알려주세요.`,
      type: "text",
      articleTitle: "작은 전설의 시작",
      article: `${nickname}님은 앞으로 어떤 목표를 이루고 싶으신가요? 오늘은 새로운 각오를 다지는 마음으로, 향후 1년 동안 해내고 싶은 일을 쭉 적어보는 시간을 가져봅니다.

      거창하거나 대단하지 않아도 괜찮아요. 다만 이것만큼은 꼭 해내겠다는 다짐을 담아 딱 3가지만 적어 보겠습니다.
      
      혹시 모르죠. 어쩌면 지금이 바로 1년 후의 ${nickname}님이 어떤 사람이 될지를 결정하는 전환점일지도요.`,
    },
    version2: {
      subtitle: `오랜만의 안부 나누기 ☎️`,
      description: `${nickname}님을 아끼고 사랑하는 분들께 안부 전화 한 통 해보세요. 다들 기다리고 계실 거예요.`,
      type: "photo",
      articleTitle: "늘 내 편이 되어주는",
      article: `연애를 하면서 주변 사람들까지 챙기는 것은 정말 어려운 일입니다. 자연스럽게 친구보다는 애인과 시간을 보내는 것이 우선이 되면서 다른 인간관계에 소홀해지게 되죠.

      익숙함에 속아 소중함을 잃지 말자! 오늘 하루는 용기를 내서, 연애하는 동안 제대로 만나지 못했던 친구들이나 가족들한테 먼저 안부 연락을 해보세요. 
      
      서로의 근황을 물어보고, 약속도 잡아보기도 하는 거예요. ${nickname}님을 진정으로 좋아하는 분들은 분명 간만의 안부를 진심으로 반가워할 거예요.
      
      혼자가 된 시간은 오히려 소중한 사람들과의 관계를 다시금 상기해주는 기회일 수 있어요. 앞으로는 연애와 인간관계의 균형을 잘 유지하기로 다짐하며 소중한 사람들에게 인사를 건네보세요.`,
    },
    version3: {
      subtitle: `좋아하는 단어 수집하기 📄`,
      description: `${nickname}님을 설레게 하는 것은 무엇인가요? 좋아하는 낱말로 가득찬 종이 한 장을 만들어보아요.`,
      type: "photo",
      articleTitle: "그래, 이런 걸 좋아했었지",
      article: `살다 보면 좋아하는 것들과 멀어지기도 하고, 심지어는 무엇을 좋아했는지조차 잊어버리게 되기도 합니다. 오늘은 생각만 해도 기분 좋아지는 단어를 수집하면서 한껏 설레는 시간을 보내세요.

      방 안에 가득 들어찬 햇살, 새벽의 고요함, 혹은 멀리서 들려오는 파도 소리. 뭐든 좋아요. ${nickname}님 마음에 드는 것이라면 말이죠.
      
      잠시 잊었지만 여전히 좋기만 한 순간들을 빈 종이에 빼곡하게 적어두고, 그 순간들과 다시 가까워지려면 어떻게 해야 하는지도 잠시 생각해보세요. 어때요, 생각만 해도 벌써 행복해지시지 않나요?`,
    },
  },
  14: {
    version1: {
      subtitle: `나에게 쓰는 편지 💌`,
      description: `지금까지 아주 잘하셨어요. 더 좋은 사람이 되신 ${nickname}님께 한 마디 남겨주세요.`,
      type: "both",
      articleTitle: "새로 시작하는 너에게",
      article: ``,
    },
    version2: {
      subtitle: `내 마음 확인하기 👍🏻`,
      description: ``,
      type: "text",
      articleTitle: "새로 시작하는 너에게",
      article: `14일의 여정도 어느덧 막바지에 다다랐습니다. 그간의 아픔과 슬픔을 멋지게 이겨내고 마음의 새싹을 틔워내신 ${nickname}님, 진심으로 축하드려요.

      마지막 할 일은 매일 조금씩 괜찮은 사람이 된 자신에게 그간 고생했다는 말을 남겨주시는 거예요.
      
      가장 힘든 시기는 이제 지났다고, 앞으로는 분명 더 괜찮아질 거라고 말해주세요. 새로운 시작을 향한 응원과 각오도 곁들여 주시면 앞으로의 여정에도 큰 힘이 될 겁니다.`,
    },
  },
  15: {
    version1: {
      subtitle: "last mock data missions",
      description: `마지막 미션 진행후 version 변수를 위한 목데이터입니다`,
      type: "text",
      articleTitle: "",
      article: `mock`,
    },
  },
};

export default missions;
