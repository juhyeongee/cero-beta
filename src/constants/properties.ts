import { Dimensions } from "react-native";
import userInfoStore from "@/store/UserInfoStore";

const { nickname } = userInfoStore;

export const WINDOW_WIDTH = Dimensions.get("window").width;
export const WINDOW_HEIGHT = Dimensions.get("window").height;

// export const MindTestIntroductionText = [
//   `${nickname}님의 마음은 지금 어둡고 외로워 보이네요.`,
//   "평소에는 괜찮은 것 같다가도, 이따금 가슴이 답답하고 가라앉는 느낌이 드실 거예요.",
//   `괜찮아요.여기 ${nickname}님의 외로움을 담은 마음 씨앗을 받으세요.`,
//   `앞으로 14일 동안, ${nickname}님이 이 씨앗을 키우게 됩니다.`,
//   "14일 후, 이 화분엔 어떤 꽃이 자라게 될까요?",
// ];

export const introText = [
  "안녕하세요.",
  `여기까지 오시느라\n고생많으셨어요.`,
  `혼자가 된 사람들을 위한\n비밀의 방에 오신 것을 환영합니다.`,
  `이곳에선 모두가\n화분에 마음을 담아\n자신만의 씨앗을 틔웁니다.`,
  `14일 후,\n당신의 화분엔\n어떤 꽃이 자라게 될까요?`,
  `어서오세요.\n지금은 새로 시작할 시간입니다.`,
];

export const introduceMindText = [
  `좋아요! 그럼 지금부터 ${nickname}님의 마음을 알아보기 위한 질문을 드릴게요.`,
  `답변에 따라 ${nickname}님의 마음을 본 뜬 씨앗이 만들어집니다.`,
  `앞으로 14일간, 저희가 드리는 매일의 작은 할 일을 하며 씨앗을 돌봐주세요.`,
  `씨앗이 움을 틔울수록, ${nickname}님의 마음도 점점 편해지실 거예요.`,
];

interface IQuestionObj {
  [key: number]: string;
}

export const questionObj: IQuestionObj = {
  1: `평소에는 성가시지 않았던 일이\n성가시게 느껴졌어요.`,
  2: "입맛이 없었어요.",
  3: `가족이나 친구가 도와주더라도\n울적한 기분을 떨칠 수 없었어요.`,
  4: `다른 사람만큼 기분이 좋았어요.`,
  5: `하고 있는 일에\n마음을 집중하기가 어려웠어요.`,
  6: `우울했어요.`,
  7: "하는 일마다 힘들게 느껴졌어요.",
  8: "미래에 대해 희망적으로 느꼈어요.",
  9: `내 인생은 \n실패작이라는 생각이 들었어요.`,
  10: "무서움을 느꼈어요",
  11: "잠을 잘 자지 못했어요.",
  12: "행복했어요.",
  13: "평소보다 말을 적게 했어요",
  14: `외로움을 느꼈어요.`,
  15: `사람들이 불친절했어요`,
  16: `인생이 즐거웠어요.`,
  17: `울음을 터뜨린 적이 있었어요.`,
  18: `슬픔을 느꼈어요.`,
  19: `사람들이 나를 \n싫어한다고 느꼈어요.`,
  20: `일을 제대로 진척시킬 수 없었어요.`,
};

export const policyText = {
  text: "본 약관은 새로의 서비스 이용과 관련하여 필요한 사항을 규정합니다. 제1장 총칙 제 1 조 목적  1. 새로를 운영하는 주식회사 새로컴퍼니(이하 '회사'라고 합니다)는 아래와 같은 약관에 동의하는 이용자들에게 제공되는 인터넷서비스로, 본 약관은 이용자와 회사 사이에 본 홈페이지 이용에 관한 권리 및 의무를 규정하는 것을 목적으로 합니다.2. 홈페이지의 모든 자료는 Cero 및 자회사, 계열사 혹은 Cero Corporation에 의해 자격을 취득한 기타 이해 관계자에 의한 저작권, 등록의장, 등록상표 또는 기타 지적소유권으로 보호되고 있습니다. 3. 본 홈페이지에 포함된 자료는 이용자에게 정보 제공을 위한 목적으로만 제공됩니다. 이용자는 본 홈페이지의 내용에 대하여 어떤 방법으로도 배포, 출판, 전송, 변경, 전시, 모방작품의 창조 혹은 개발할 수 없습니다. 이용자는 회사의 권한을 보호하여야 하고, 본 홈페이지의 자료를 허가 없이 유용할 수 없습니다. 허가 없이 본 홈페이지의 내용을 유용하는 경우에 회사와 Starbucks Corporation은 이용자에게 법적, 재정적으로 가능한 기타 추가적인 배상을 청구할 수 있습니다.본 약관은 새로의 서비스 이용과 관련하여 필요한 사항을 규정합니다. 제1장 총칙 제 1 조 목적  1. 새로를 운영하는 주식회사 새로컴퍼니(이하 '회사'라고 합니다)는 아래와 같은 약관에 동의하는 이용자들에게 제공되는 인터넷서비스로, 본 약관은 이용자와 회사 사이에 본 홈페이지 이용에 관한 권리 및 의무를 규정하는 것을 목적으로 합니다.2. 홈페이지의 모든 자료는 Cero 및 자회사, 계열사 혹은 Cero Corporation에 의해 자격을 취득한 기타 이해 관계자에 의한 저작권, 등록의장, 등록상표 또는 기타 지적소유권으로 보호되고 있습니다. 3. 본 홈페이지에 포함된 자료는 이용자에게 정보 제공을 위한 목적으로만 제공됩니다. 이용자는 본 홈페이지의 내용에 대하여 어떤 방법으로도 배포, 출판, 전송, 변경, 전시, 모방작품의 창조 혹은 개발할 수 없습니다. 이용자는 회사의 권한을 보호하여야 하고, 본 홈페이지의 자료를 허가 없이 유용할 수 없습니다. 허가 없이 본 홈페이지의 내용을 유용하는 경우에 회사와 Starbucks Corporation은 이용자에게 법적, 재정적으로 가능한 기타 추가적인 배상을 청구할 수 있습니다.본 약관은 새로의 서비스 이용과 관련하여 필요한 사항을 규정합니다. 제1장 총칙 제 1 조 목적  1. 새로를 운영하는 주식회사 새로컴퍼니(이하 '회사'라고 합니다)는 아래와 같은 약관에 동의하는 이용자들에게 제공되는 인터넷서비스로, 본 약관은 이용자와 회사 사이에 본 홈페이지 이용에 관한 권리 및 의무를 규정하는 것을 목적으로 합니다.2. 홈페이지의 모든 자료는 Cero 및 자회사, 계열사 혹은 Cero Corporation에 의해 자격을 취득한 기타 이해 관계자에 의한 저작권, 등록의장, 등록상표 또는 기타 지적소유권으로 보호되고 있습니다. 3. 본 홈페이지에 포함된 자료는 이용자에게 정보 제공을 위한 목적으로만 제공됩니다. 이용자는 본 홈페이지의 내용에 대하여 어떤 방법으로도 배포, 출판, 전송, 변경, 전시, 모방작품의 창조 혹은 개발할 수 없습니다. 이용자는 회사의 권한을 보호하여야 하고, 본 홈페이지의 자료를 허가 없이 유용할 수 없습니다. 허가 없이 본 홈페이지의 내용을 유용하는 경우에 회사와 Starbucks Corporation은 이용자에게 법적, 재정적으로 가능한 기타 추가적인 배상을 청구할 수 있습니다.본 약관은 새로의 서비스 이용과 관련하여 필요한 사항을 규정합니다. 제1장 총칙 제 1 조 목적  1. 새로를 운영하는 주식회사 새로컴퍼니(이하 '회사'라고 합니다)는 아래와 같은 약관에 동의하는 이용자들에게 제공되는 인터넷서비스로, 본 약관은 이용자와 회사 사이에 본 홈페이지 이용에 관한 권리 및 의무를 규정하는 것을 목적으로 합니다.2. 홈페이지의 모든 자료는 Cero 및 자회사, 계열사 혹은 Cero Corporation에 의해 자격을 취득한 기타 이해 관계자에 의한 저작권, 등록의장, 등록상표 또는 기타 지적소유권으로 보호되고 있습니다. 3. 본 홈페이지에 포함된 자료는 이용자에게 정보 제공을 위한 목적으로만 제공됩니다. 이용자는 본 홈페이지의 내용에 대하여 어떤 방법으로도 배포, 출판, 전송, 변경, 전시, 모방작품의 창조 혹은 개발할 수 없습니다. 이용자는 회사의 권한을 보호하여야 하고, 본 홈페이지의 자료를 허가 없이 유용할 수 없습니다. 허가 없이 본 홈페이지의 내용을 유용하는 경우에 회사와 Starbucks Corporation은 이용자에게 법적, 재정적으로 가능한 기타 추가적인 배상을 청구할 수 있습니다.본 약관은 새로의 서비스 이용과 관련하여 필요한 사항을 규정합니다. 제1장 총칙 제 1 조 목적  1. 새로를 운영하는 주식회사 새로컴퍼니(이하 '회사'라고 합니다)는 아래와 같은 약관에 동의하는 이용자들에게 제공되는 인터넷서비스로, 본 약관은 이용자와 회사 사이에 본 홈페이지 이용에 관한 권리 및 의무를 규정하는 것을 목적으로 합니다.2. 홈페이지의 모든 자료는 Cero 및 자회사, 계열사 혹은 Cero Corporation에 의해 자격을 취득한 기타 이해 관계자에 의한 저작권, 등록의장, 등록상표 또는 기타 지적소유권으로 보호되고 있습니다. 3. 본 홈페이지에 포함된 자료는 이용자에게 정보 제공을 위한 목적으로만 제공됩니다. 이용자는 본 홈페이지의 내용에 대하여 어떤 방법으로도 배포, 출판, 전송, 변경, 전시, 모방작품의 창조 혹은 개발할 수 없습니다. 이용자는 회사의 권한을 보호하여야 하고, 본 홈페이지의 자료를 허가 없이 유용할 수 없습니다. 허가 없이 본 홈페이지의 내용을 유용하는 경우에 회사와 Starbucks Corporation은 이용자에게 법적, 재정적으로 가능한 기타 추가적인 배상을 청구할 수 있습니다.",
};

export const mindTestResult: { [key: string]: { [key: number]: string } } = {
  serious: {
    0: `자, 여기 ${nickname}님의 \n마음이 담긴 씨앗입니다.\n\n조심히 다뤄주세요.\n아주 여리고 연약한 씨앗이에요.\n\n이 작고 앙상한 점 하나에\n외롭고 고단한 마음이\n고스란히 담겨 있습니다.`,
    1: `지금 마음 상태라면\n평범한 일상 생활도 어렵게\n느껴지실 거예요.\n\n계속해서 부정적인 생각이 들고\n도저히 회복할 방법이 보이지\n않으실 수도 있어요.`,
    2: `그러나 분명한 사실은\n제 아무리 어두운 밤이라도\n아침은 끝내 찾아온다는 것.\n\n지금 무엇보다 중요한 것은\n아침이 올 때까지 \n스스로를 지켜내는 일이에요.`,
    3: `자, 이 씨앗을 한 번 보세요.\n\n${nickname}님의 씨앗엔\n어둠을 물리칠\n화사함이 담겨있답니다.`,
    4: `앞으로 14일 동안\n저희가 함께할게요.\n\n먼저 이 씨앗을 조심히 \n화분에 심어주세요.`,
    5: `씨앗이 꽃을 피울 수록\n${nickname}님의 마음도\n근사하게 피어날 거예요.`,
    6: `14일 후,\n과연 이 씨앗은\n어떤 꽃으로 자라게 될까요?`,
  },
  attention: {
    0: `자, 여기 ${nickname}님의 \n마음이 담긴 씨앗입니다.\n\n이런, 씨앗이 유난히 어둡네요.\n\n겉껍질도 당장 심어주지 않으면\n바스라질 것처럼 말라 있어요.`,
    1: `요즘 마음은 좀 어떠세요?\n\n괜찮다 싶다가도\n문득 마음이 답답하고 \n가라앉는 느낌이 드시진 않나요?`,
    2: `복잡하고 싱숭생숭한 마음이\n씨앗에 고스란히\n담겨 있는 듯 합니다.\n\n이 씨앗처럼\n${nickname}님의 마음도\n꾸준한 관리가 필요해보여요.`,
    3: `너무 걱정하진 마세요.\n\n${nickname}님의 씨앗은\n작고 여리지만 단단하고\n속도 꽉 차 있거든요.`,
    4: `앞으로 14일이\n정말 중요하겠어요.\n\n이 씨앗을 잘 가지고 가서\n바로 화분에 심어주세요.`,
    5: `씨앗이 꽃을 피울 수록\n${nickname}님의 마음도\n근사하게 피어날 거예요.`,
    6: `14일 후,\n과연 이 씨앗은\n어떤 꽃으로 자라게 될까요?`,
  },
  moderate: {
    0: `자, 여기 ${nickname}님의\n마음이 담긴 씨앗입니다.\n\n겉으로 보기엔 멀쩡하지만\n조심해주세요,\n안쪽은 아직 연약하거든요.`,
    1: `특별한 관리가 필요하진 않지만\n언제라도 물러질 수 있으니\n꾸준히 살펴보는 게 좋겠어요.\n\n${nickname}님 마음도\n마찬가지일 거예요.`,
    2: `평소에 잘 지내다가도\n문득 이유 없는 한숨이 나오거나\n가끔 잠들기 어려운 밤이\n찾아오지 않나요?`,
    3: `엄려하실 필요는 없어요.\n\n${nickname}님의 마음은\n작은 어려움 정도는\n금방 이겨낼 만큼\n건강하고 튼튼하거든요.\n\n마치 이 씨앗처럼 말이죠.`,
    4: `자, 그럼 매일매일의\n마음을 돌보는 마음으로\n씨앗을 키워볼까요?\n\n이 씨앗을 바로\n화분에 심어주세요.`,
    5: `씨앗이 꽃을 피울 수록\n${nickname}님의 마음도\n근사하게 피어날 거예요.`,
    6: `14일 후,\n과연 이 씨앗은\n어떤 꽃으로 자라게 될까요?`,
  },
  good: {
    0: `자, 여기 ${nickname}님의\n마음이 담긴 씨앗입니다.\n\n건강하고 속이 꽉 찬\n멋진 씨앗이네요!\n\n윤기가 흐르는 껍질까지\n보기도 좋아요.`,
    1: `${nickname}님은\n요즘 평온하고 만족스런\n나날을 보내고 계신가 보네요.\n\n좋아요,\n분명 이 씨앗도\n아주 멋진 꽃을 피울 거예요.`,
    2: `그렇지만 아무리 \n건강한 씨앗이라도\n혼자 자라지 않는다는 건\n알고 계시죠?\n\n우리 마음도 마찬가지입니다.\n이 건강을 오래 유지하기 위해\n잊지 않고 돌봐주어야 해요.`,
    3: `앞으로 14일,\n이 씨앗과 함께\n${nickname}님의 마음을\n돌보는 시간을 가져볼게요.`,
    4: `화사하게 피어날\n우리의 내일을 기대하며,\n이 씨앗을 화분에 심어주세요.`,
    5: `씨앗이 꽃을 피울 수록\n${nickname}님의 마음도\n근사하게 피어날 거예요.`,
    6: `14일 후,\n과연 이 씨앗은\n어떤 꽃으로 자라게 될까요?`,
  },
};

export const EndingResultText: { [key: string]: string } = {
  firstPageTitle: "오늘은 드디어 14일의 여정이\n결실을 맺는 날입니다.",
  firstPageSub: `\n지금까지 저희는 ${nickname}님의\n이별을 함께했습니다.\n\n마음을 담은 씨앗을 만들고 \n매일의 할 일을 완수하며\n꽃을 키워나가시는\n모습까지 쭉 지켜봤죠.`,
  secondPageTitle: `이제 꽃을 피우기 전\n마지막으로 ${nickname}님의\n마음을 살펴보겠습니다.`,
  secondPageSub: `\n저희가 처음 만난 날,\n마음 씨앗을 만들기 위해\n드렸던 질문을 기억하시나요?\n\n그때의 대답은 저희가\n모두 기억하고 있답니다.\n\n14일의 여정을 함께하신 지금,\n${nickname}님의 마음은 어떻게 달라졌을까요?\n\n그동안의 변화를 기대하며\n아래 버튼을 눌러주세요.`,
  thirdPageTitle: `${nickname}님의 \n마음 점수를 알려드려요.`,
};

export const MindTestResultText: { [key: string]: string } = {
  info: `검사 결과는 한국판 역학연구센터 우울척도(CES-D)의 기준필을 따릅니다. 전반적인 우울증 정도를 알아보기 위한 간이 설문으로, 정확한 진단을 위해선 반드시 전문의의 상담이 필요해요.`,
  serious: `${nickname}님의 우울증 정도는 심각한 상태예요. 일상 생활이 어려울 정도의 부정적인 기분이 자주 드실 수 있어요. 심한 경우 전문가의 상담과 도움이 필요합니다.\n\n이렇게 마음이 어렵고 답답할수록, 무엇보다 중요한 것은 자신이라는 사실을 잊기 쉬운데요. 전부 다 괜찮아질 거라고, 스스로에게 말해주세요. 저희도 그렇게 믿고 있답니다 🙏🏻`,
  attention: `${nickname}님의 우울증 정도는 주의가 필요한 상태예요. 평소엔 괜찮은 것 같다가도 종종 마음이 답답해지고 가라앉는 느낌이 드실 수 있어요.\n\n그렇지만 다행히 아주 힘든 시기는 지났다고 할 수 있어요. 아직 말끔한 마음은 아니지만, 조금씩 일상으로 돌아오는 과정이라고 생각하셔도 좋아요 💪🏼`,
  moderate: `${nickname}님의 우울증 정도는 보통 상태예요. 일상 생활을 하면서 흔히 겪을 수 있는, 일반적인 수준의 스트레스를 받고 계시다고 할 수 있어요.\n\n이따금 이유 모를 한숨이 입 밖으로 터져나올 수 있지만 너무 염려하시지 않으셔도 돼요. 이미 충분히 마음을 잘 다스리고 계시고, 이대로 조금씩만 더 노력하면 금방 말끔해지실 거예요 😌`,
  good: `${nickname}님의 우울증 정도는 정상 상태예요. 이제 완전히 이별을 마무리하고 새로 시작할 준비가 되셨군요!이런 탄탄한 마음이라면 당장 무엇이든 해볼 수 있겠어요.\n\n지금 이 마음 그대로 일상의 새로움을 더해주시면서 여정을 이어나가 주세요. 저희도 지금처럼 곁에서 함께할게요 🌱`,
};

export const CompareResultText: { [key: string]: { [key: string]: string } } = {
  keepAttention: {
    title: `${nickname}님, 몸도 마음도 \n꾸준한 관리가 필요해요😌\n`,
    body: `아직 완전히 괜찮아졌다고할 순 없지만 실망하지 마세요.\n지난 정성과 노력은\n앞으로의 더 건강한 마음을 위한 연습에 불과하니까요.\n\n지금까지 그랬듯 \n스스로를 정성껏 돌보신다면\n분명 ${nickname}님의 마음도\n곧 활짝 꽃 피울 거예요.\n\n자, 그럼 마지막으로\n화분에 물을 주러 가보실까요?`,
  },
  better: {
    title: `${nickname}님,\n전보다 편안한 마음이\n되신 것을 축하드려요. 🎉\n`,
    body: `매일 정성들여 \n씨앗을 가꾸시는 동안 \n${nickname}님의 마음도 \n건강하게 꽃을 피웠습니다.\n\n지난 14일간 스스로를\n살뜰히 돌보시는 모습을\n지켜볼 수 있어서 \n저희도 무척 기뻤어요.\n\n자, 그럼 마지막으로\n화분에 물을 주러 가보실까요?`,
  },
  worse: {
    title: `${nickname}님, \n새로운 시작은 지금부터예요 🙏🏻\n`,
    body: `큰 아픔을 완전히 이겨내기에\n2주는 너무 짧은 시간인지\n모르겠습니다.\n\n그러나 회복의 과정에서\n상처가 덧나는 것은\n자연스러운 과정이기도 하지요.\n\n지금처럼 포기하지 않는다면\n분명 ${nickname}님의 마음도\n곧 활짝 꽃 피울 거라 믿습니다.\n\n자, 그럼 마지막으로\n화분에 물을 주러 가보실까요?`,
  },
  keepGood: {
    title: `${nickname}님,\n이제 꽃길만 걸으세요💐\n`,
    body: `매일 정성들여 \n씨앗을 가꾸시는 동안 \n${nickname}님의 마음도 \n건강하게 꽃을 피웠습니다.\n\n지금처럼만 해내신다면\n아무 걱정없어요.\n\n떠나실 앞날에 늘 \n활짝 핀 꽃길이\n가득하길 응원하겠습니다.\n\n자, 그럼 마지막으로\n화분에 물을 주러 가보실까요?`,
  },
};

export const EndingMovieText: { [key: number]: string } = {
  1: `${nickname}님의\n새로운 시작을 위한\n14일의 여정이 끝났습니다 👏🏻`,
  2: `어려운 시간을 멋지게 이겨내신 것\n진심으로 축하드려요`,
  3: `${nickname}님의 힘들고 외로운 나날에\n조금이라도 위로를 드릴 수 있어\n저희는 참 행복했습니다 ☺️`,
  4: `저희 새로 팀은 앞으로도\n모두가 더 괜찮은 세상을 꿈꾸며\n다양한 서비스를 제공할 예정인데요.\n\n한편으론 ${nickname}님께서 다시는\n저희를 만나지 않아도 괜찮기를\n바라는 마음입니다.`,
  5: `그러나 언젠가 또 한 번\n다시금 상실의 순간이 찾아온다\n그 땐 저희를 기억해주세요\n\n지금까지의 이야기\n고스란히 간직한 채\n저희는 언제나 여기 있겠습니다.`,
  6: `마지막으로 ${nickname}님께서 피우신 꽃을 볼 시간이에요.\n\n마음의 씨앗을 심고 정성껏\n돌보셨던 그 화분은 과연\n어떤 꽃이 피었을까요?\n\n활짝 핀 꽃을 보며\n${nickname}님의 마음도\n활짝 피어나길 바랍니다.`,
  7: `여기까지 함께해주셔서\n진심으로 감사드려요.\n\n그럼 지금부터 다시,`,
  8: `${nickname}님의 매일을 응원하며\n`,
  9: `- 새로 팀 드림 -`,
};

export const FAQText: { [key: number]: { [key: string]: string } } = {
  1: {
    Q: `‘새로’의 의미는 무엇인가요?`,
    A: `'새로'라고 읽는 Cero는 스페인어로 숫자 0을 의미해요. 0은 아무것도 없는 상태를 떠올리게 하죠. 하지만 아무것도 없다는 것은 ‘시작’하기 가장 좋은 때이기도 합니다. \n\n새로는 여러분께서 아무것도 남은 게 없다고 느낄 때, 새로 시작하길 바라는 마음을 담아 지은 이름입니다. 사랑하는 사람이나 상황과 이별할 때 찾아오는 공허함을 새로운 여정의 거름으로 삼을 수 있도록 도와드릴게요.\n\n새로(Cero)는 0부터, 새로이 시작할 우리를 응원합니다.`,
  },
  2: {
    Q: `마음 씨앗 만들기 검사 결과에 따라서 \n꽃 종류가 다른가요?`,
    A: `네, 검사 진단에 따라 다른 종류의 꽃을 준비했습니다. 지금의 마음을 위로하거나 응원해 줄 꽃말을 씨앗에 담았어요.\n\n14일 동안 마음 씨앗을 정성껏 기르시면 활짝 핀 꽃을 엔딩에서 확인하실 수 있을 거예요.`,
  },
  3: {
    Q: `오늘 할 일을 하루 안에 완료하지 못하면\n첫째 날부터 다시 시작해야 하나요?`,
    A: `그렇지는 않습니다.\n언제 할 일을 완료해도 다음 날 아침에 새로운 할 일을 확인하실 수 있어요.\n\n하지만 저희의 목적이 날마다 조금씩 더 나아질, 새로 시작할 우리를 찾는 것인 만큼 가능한 오늘 할 일은 오늘 끝내시는 것을 추천드려요.`,
  },
  4: {
    Q: `검사 질문과 오늘 할 일은\n과학적으로 검증된 내용인가요?`,
    A: `마음 점검 문항은 한국판 역학연구센터 우울척도(CES-D)를 참고했습니다. CES-D는 학계와 임상적으로 널리 활용하고 있는 우울증 판단 설문입니다.\n그러나 정확한 진단과 치료는 반드시 전문의의 상담이 필요합니다.\n\n오늘의 할 일 14일 커리큘럼은 퀴블러 로스(Elisabeth Kübler－Ross)의 ‘죽음을 받아들이는 5단계’를 따라가는 방식으로 작성했습니다. 그에 따르면 우리가 죽음(을 비롯한 극적인 불행)을 받아들이는 단계는 '부정-분노-타협-우울-수용' 순으로 이루어집니다.\n새로는 여러분께서 이 단계들을 건강하게 지나갈 수 있도록 각 기간마다 단계에 알맞는 할 일을 제공해드립니다.`,
  },
  5: {
    Q: `로그아웃과 초기화의\n정확한 차이가 궁금해요.`,
    A: `로그아웃을 하면 설정하신 프로필 정보와 마음 점검 결과, 오늘 할 일 데이터까지 모두 보존이 됩니다.\n\n그러나 만약 계정을 초기화를 하면, 위의 데이터가 모두 삭제되고 복구할 수 없게 됩니다.\n처음 앱을 다운로드하고 접속할 때의 화면부터 새롭게 시작하게 되죠. `,
  },

  6: {
    Q: `14일 이후로 앱을 더 사용하고 싶어요.`,
    A: `새로 Ver 1.은 여러분께서 매일 조금씩 괜찮아지실 수 있도록 돕기 위한 최소한의 기능만을 담았습니다.\n\n앞으로 새로는 커뮤니티 기능을 추가하거나 오늘의 할 일 커리큘럼을 업그레이드 하는 등, 여러분께서 새로를 오랫동안 이용하실 수 있도록 열심히 개발 중입니다.\n\n조금만 기다려주세요!`,
  },
};

export const lifeQuotes: { [key: number]: string } = {
  1: `인간의 감정은 누군가를 만날 때와 헤어질 때\n가장 순수하고 빛난다.\n - 장 폴 리히터 -`,
  2: `작별 인사에 낙담하지 말라.\n재회에 앞서 작별은 필요하다.\n - 리처드 바크 -`,
  3: `올바른 순간에 잘못된 행동을 하는 것이\n삶의 모순 중 하나다.\n - 찰리 채플린 -`,
  4: `작은 변화가 일어날 때,\n진정한 삶을 살게 된다.\n- 레프 톨스토이 -`,
  5: `시간을 낭비하지 말라.\n시간이야말로 인생을 형성하는 재료이기 때문이다.\n- 벤자민 프랭클린 -`,
  6: `경험을 현명하게 사용한다면,\n어떤 일도 시간 낭비는 아니다.\n- 오귀스트 르네 로댕 -`,
  7: `개선이란 무언가 좋지 않다고\n느끼는 사람만 만들 수 있다.\n- 프레드리히 니체 -`,
  8: `웃음 없는 하루는 낭비한 하루다.\n- 찰리 채플린`,
  9: `당신을 만나는 모든 사람이\n당신과 헤어질 때 더 행복해지도록 하라.\n- 마더 테레사 -`,
  10: `'잘 가'라는 말을 할 충분한 용기가 있다면,\n삶은 당신에게 새로운 만남을 보상해 줄 것이다.\n- 파울로 코엘료 -`,
  11: `무언가가 끝났다고 슬퍼하지 말고,\n그런 일이 일어났다는 것 자체에 미소를 지어라.\n- 닥터 수스 -`,
  12: `다시 만나는 기쁨에 비하면\n이별의 아픔은 아무것도 아니다.\n- 찰스 디킨스 -`,
  13: `사랑해 본 적 없는 것보다\n사랑하고 이별하는 것이 차라리 나으리.\n- 알프레드 테니슨 -`,
  14: `극단적인 슬픔은 오래 가지 않는다.\n슬픔에 지고 말든가 그것에 익숙해지든가 둘 중 하나다.\n- 피에트로 메타스타시오 -`,
  15: `슬픔의 유일한 치료법은 무슨 일이든 열심히 하는 것이다.\n- J.L. 루이스 -`,
  16: `만나고, 알고, 사랑하고,\n그리고 이별하는 것이 모든 인간의 공통된 슬픈 이야기다.\n- S.T. 콜리지 -`,
  17: `사랑을 잃었을 때 치료법은\n더욱 사랑하는 것밖에 없다.\n- 헨리 데이비드 소로 - `,
  18: `잘 시작하는 것도 훌륭한 것이지만,\n잘 끝내는 것은 더 훌륭한 일이다.\n- 헨리 워즈워스 롱펠로우 -`,
  19: `지나간 슬픔에 새 눈물을 낭비하지 마라.\n- 에우리피데스 - `,
  20: `이별의 아픔 속에서만 사랑의 깊이를 알게 된다.\n- 조지 엘리엇 - `,
  21: `사랑하는 사람과의 이별을 후회하는 것만큼\n깊은 상처는 없다.\n- 플로리다 스캇 -`,
  22: `태어난 모든 것들은\n기약조차 없는 이별을 준비하고 있어야 한다.\n- 그라시안 -`,
  23: `우리가 다시 만날 그 날까지\n행복한 여정이 되기를.\n- 데일 에반스 -`,
  24: `웃음도 눈물도 그렇게 오래 가는 것은 아니다.\n- 어니스트 다우슨 -`,
  25: `만나면 반드시 헤어져야 하는 것이\n인생이 정한 운명이다.\n- 석가모니 -`,
  26: `진정한 사랑은\n영원히 자신을 성장시키는 경험이다.\n- M. 스캇 펙 -`,
  27: `이별의 시간이 될 때까지는 사랑은\n그 깊이를 알지 못한다.\n- 칼릴 지브란 -`,
  28: `자신을 사랑하는 것이야말로\n평생 지속되는 로맨스다.\n- 오스카 와일드 -`,
  29: `사랑한다는 것은 자기를 넘어서는 것이다.\n- 오스카 와일드 -`,
};

export const notificationTexts = {
  missionAfterNoti: [
    {
      title: "좋은 아침! 새로 시작할 시간이에요.",
      body: `좋은 아침! 새로 시작할 시간이에요.
            새로와 함께 뿌듯하고 행복한 하루를 보내보아요. 파이팅!`,
    },
    {
      title: "오늘도 새로운 하루가 시작됐어요.",
      body: `${nickname}님이 힘차게 아침을 맞이하도록 새로가 응원할게요!`,
    },
    {
      title: "푹 주무셨어요?",
      body: `오늘 할 일을 달성해서, 뿌듯함으로 피곤함을 싹 잊길 바랄게요!`,
    },
    {
      title: "오늘 아침 날씨는 어떤가요?",
      body: `화창하든 우중충하든, ${nickname}님의 마음만은 밝게 하루를 맞이할 거예요.`,
    },
    {
      title: `${nickname}님, 새로 할 일이 도착했어요.`,
      body: `오늘은 어떤 할 일이 새로미를 쑥쑥 자라나게 할까요?`,
    },
    {
      title: `오늘은 딱 하루밖에 없어요.`,
      body: `다시 오지 않을 소중한 오늘, 오늘의 할 일과 함께 기분 좋게 시작하세요!`,
    },
    {
      title: `오늘은 기분이 좀 어떠세요?`,
      body: `새로와 함께 새로운 하루를 시작하러 가볼까요?`,
    },
  ],
  missionDidnotNoti: [
    {
      title: "어제는 할 일을 못하셨네요!",
      body: `하지만 새로미는 ${nickname}님 만큼 강해요. 새로미가 버틸 동안 할 일을 완료해주세요!`,
    },
    {
      title: `${nickname}님! 새로미 보고 싶지 않으세요?,`,
      body: `새로미가 기다리고 있답니다. 오늘은 꼭 다시 찾아주세요.`,
    },
    {
      title: "새로미가 시들고 있어요.",
      body: `오늘 할 일을 완료해서 단비를 내려주세요!`,
    },

    {
      title: "혹시 할 일이 너무 어려우셨나요?",
      body: `오늘은 조금 쉬운 할 일을 준비했으니 잠시 시간내서 찾아와주세요.`,
    },
    {
      title: `${nickname}님, 새로를 잊으신 건 아니죠?`,
      body: `저희는 언제나 같은 자리에서 기다리고 있어요.`,
    },
  ],
};
