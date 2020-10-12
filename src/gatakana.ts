const a = [
    {ア: "a 아"},
    {イ: "i 이"},
    {ウ: "u 우"},
    {エ: "e 에"},
    {オ: "o 오"},
]

const ka = [
    {カ: "ka 카"},
    {キ: "ki 키"},
    {ク: "ku 쿠"},
    {ケ: "ke 케"},
    {コ: "ko 코"},
]

const sa = [
    {サ: "sa 사"},
    {シ: "shi 시"},
    {ス: "su 스"},
    {セ: "se 세"},
    {ソ: "so 소"},
]

const ta = [
    {タ: "ta 타"},
    {チ: "chi 치"},
    {ツ: "tsu 츠"},
    {テ: "te 테"},
    {ト: "to 토"},
]

const na = [
    {ナ: "na 나"},
    {二: "ni 니"},
    {ヌ: "nu 누"},
    {ネ: "ne 네"},
    {ノ: "no 노"},
]

const ha = [
    {ハ: "ha 하"},
    {ヒ: "hi 히"},
    {フ: "fu 후"},
    {ヘ: "he 헤"},
    {ホ: "ho 호"},
]

const ma = [
    {マ: "ma 마"},
    {ミ: "mi 미"},
    {ム: "mu 무"},
    {メ: "me 메"},
    {モ: "mo 모"},
]

const ya = [
    {ヤ: "ya 야"},
    {ユ: "yu 유"},
    {ヨ: "yo 요"},
]

const ra = [
    {ラ: "ra 라"},
    {リ: "ri 리"},
    {ル: "ru 루"},
    {レ: "re 레"},
    {ロ: "ro 로"},
]

const wa = [
    {ワ: "wa 와"},
    {ヲ: "wo 오"},
    {ン: "응"},
]

export enum EGatakana {
    "a" = "ア a 아",
    "ka" = "カ ka 카",
    "sa" = "サ a 사",
    "ta" = "タ ta 타",
    "na" = "ナ na 나",
    "ha" = "ハ ha 하",
    "ma" = "マ ma 마",
    "ya" = "ヤ ya 야",
    "ra" = "ラ ra 라",
    "wa" = "ワ wa 와",
}

export const gatakana = {
    a,
    ka,
    sa,
    ta,
    na,
    ha,
    ma,
    ya,
    ra,
    wa
}