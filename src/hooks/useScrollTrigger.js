import {useRef} from 'react';
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function useScrollTrigger() {
  const ref = useRef(null);
  const tl = useRef(null);
  const q = gsap.utils.selector(ref);
  const mm = gsap.matchMedia()

  return {
    holderRef: ref,
    tl: tl,
    q: q,
    st: ScrollTrigger,
    gsap: gsap,
    mm: mm,
  };
};