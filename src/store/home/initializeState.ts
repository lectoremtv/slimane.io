import { HomeState } from "../../types/home/store.home.types";
import {
  fetchLatestArticles,
  fetchLatestPodcast,
} from "../../lib/graphql/fetchers/home";

export async function getHomeInitialState(): Promise<HomeState> {
  const [latestArticles, latestPodcast] = await Promise.all([
    fetchLatestArticles(3),
    fetchLatestPodcast(),
  ]);

  return {
    ...staticState,
    latestArticles: latestArticles,
    latestPodcast: latestPodcast,
  };
}

const latestVideos = [
  {
    id: "4LeiQ9gdlts",
    title: "عبد الواحد الشبيهي — الهندسة، الماستر، هجرة الأدمغة، مفهوم الوطن، الزواج، صناعة المحتوى، التوازن",
  },
  {
    id: "-ELmGkZQNfc",
    title: "مهدي شراشر: أساسيات البرمجة، Golang، Rust، العمل في Meta، ليونيل ميسي، الزواج، الموسيقى، السعادة",
  },
  {
    id: "R0G_xRYWlEA",
    title:
      "يوسف التبالي: الحلم المغربي، البودكاست، الزواج، العلاقات، المرأة في الإسلام، الطب، الشهرة، السياسة",
  },
  {
    id: "jkXoDeV8s_8",
    title: "ادريس علاكي: التعليم في المغرب، البحث العلمي، الفرنسية، الأساتذة المتعاقدون، التوجيه، هندسة البرامج",
  },
  {
    id: "0JI4aM6Eg1k",
    title: "محمد الغيساني: YouCan، سيمولايف، سلطانة، الزواج، الفشل، إدارة الأعمال، العلاقات، الشغف، حب الوطن",
  },
  {
    id: "gLGSQaSxdvs",
    title:
      "دعاء أحمدون: الذكاء الاصطناعي، الأقسام التحضيرية، الحجاب و النقاب، المثلية و التحول الجنسي، السياسة",
  },
];

const staticState: HomeState = {
  latestArticles: {},
  latestPodcast: null,
  allVideosExternalLink:
    "https://www.youtube.com/channel/UCAKherxCCvXWHyGaeQKy-Jw/videos",
  presenterVideoId: "bkxykh0GWB8",
  presenterVideoStart: 129,
  latestVideos: latestVideos,
};
