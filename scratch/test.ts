import { parseQueryKeyword } from "../src/data/keywords";
import { getDynamicFaqs } from "../src/data/faq";

const testKeywords = [
  "관동동-외벽방수",
  "삼계동-외벽발수",
  "삼정동-옥상방수",
  "구산동-지붕방수",
  "내외동-외벽도색",
  "부원동-옥상누수",
  "어방동-외벽누수",
  "동상동-건물방수"
];

console.log("=== SEO META & H1 TEST ===");
testKeywords.forEach(k => {
  const config = parseQueryKeyword(`?k=${k}`);
  console.log(`[Keyword]: ${config.fullKeyword}`);
  console.log(` - Title: ${config.title}`);
  console.log(` - Description: ${config.description}`);
  console.log(` - H1: ${config.h1.replace(/\n/g, " ")}`);
  console.log(` - Canonical: ${config.title ? `https://www.gnrainguard.co.kr/?k=${encodeURIComponent(k)}` : "FALLBACK"}`);
  
  const faqs = getDynamicFaqs(config);
  console.log(` - FAQ Q1: ${faqs[0]?.question}`);
  console.log(` - FAQ Q2: ${faqs[1]?.question}`);
  console.log("-----------------------------------------");
});
