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
    id: "JJdRJR0EZBo",
    title: "محمد أبوالليث: الفشل، Geeks BlaBla، OSS، Java، Spotify، متلازمة المحتال، السياسة، مسلسل المكتوب",
   },
   {
    id: "uGiPcl-7BHE",
    title:
      "عدنان عديوي: اختيار الهوية، النموذج التنموي، ريادة الأعمال الإجتماعية، هجرة الأدمغة، MCISE، التعليم",
  },
  {
    id: "bkxykh0GWB8",
    title: "أحمد العزابي: العمل عن بعد، الإستثمار في المغرب، إنشاء شركة، السعادة، التدوين، الإنتاجية، القراءة",
  },
  {
    id: "IjzzqFmVSY4",
    title: "وصال إدبلا: الحرية، التطبيع، الصحافة في المغرب، برلمان شعب، القضية الفلسطينية، الأزمة مع الجزائر",
  },
   {
    id: "W0GzhzOuHnA",
    title:
      "دنيا بلعناب: برمجة تطبيقات الآيفون، السفر، المغامرة، التكاثر، القراءة، العمل في أوروبا، تعريف النجاح",
  },
  {
    id: "_rJq3fRkSag",
    title: "كيف تصبح مبرمجا محترف بالتفصيل - The Clean Coder",
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
