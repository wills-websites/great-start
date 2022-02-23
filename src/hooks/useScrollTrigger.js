import {useRef} from 'react';
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function useScrollTrigger() {
  const ref = useRef(null);
  const tl = useRef(null);
  const q = gsap.utils.selector(ref);

  return {
    holderRef: ref,
    tl: tl,
    q: q,
    st: ScrollTrigger,
    gsap: gsap,
  };
};