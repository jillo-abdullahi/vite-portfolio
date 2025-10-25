import type { FC } from 'react';
import { useEffect, useState } from 'react';

type Props = {
  // New API: prefer `phrases` to rotate through multiple strings.
  phrases?: string[];
  // Backwards-compatible single text prop.
  text?: string;
  speed?: number; // ms per character while typing
  deleteSpeed?: number; // ms per character while deleting
  pause?: number; // ms to wait after a phrase finishes before deleting
  loop?: boolean; // whether to loop phrases
  className?: string;
};

const Typewriter: FC<Props> = ({
  phrases,
  text,
  speed = 60,
  deleteSpeed = 40,
  pause = 1500,
  loop = true,
  className = '',
}) => {
  const source = (phrases && phrases.length > 0) ? phrases : (text ? [text] : []);

  const [display, setDisplay] = useState('');
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    // If there are no phrases, do nothing.
    if (!source || source.length === 0) {
      setDisplay('');
      return;
    }

    let cancelled = false;
    let timeout: number | undefined;

    // mutable indices local to this effect to avoid re-renders for every step
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      if (cancelled) return;
      const current = source[phraseIndex] || '';

      if (!deleting) {
        // typing forward
        const next = current.slice(0, charIndex + 1);
        setDisplay(next);
        charIndex += 1;

        if (charIndex >= current.length) {
          // finished typing this phrase
          if (!loop && phraseIndex === source.length - 1) {
            // do not continue if not looping and last phrase
            return;
          }
          // pause, then start deleting
          timeout = window.setTimeout(() => {
            deleting = true;
            tick();
          }, pause);
        } else {
          timeout = window.setTimeout(tick, speed);
        }
      } else {
        // deleting
        const next = current.slice(0, Math.max(0, charIndex - 1));
        setDisplay(next);
        charIndex -= 1;

        if (charIndex <= 0) {
          // finished deleting -> move to next phrase
          deleting = false;
          phraseIndex = (phraseIndex + 1) % source.length;
          charIndex = 0;
          timeout = window.setTimeout(tick, speed);
        } else {
          timeout = window.setTimeout(tick, deleteSpeed);
        }
      }
    };

    // kick off
    timeout = window.setTimeout(tick, speed);

    return () => {
      cancelled = true;
      if (timeout) clearTimeout(timeout);
    };
  // stringify source so array identity changes still retrigger effect when content changes
  }, [JSON.stringify(source), speed, deleteSpeed, pause, loop]);

  useEffect(() => {
    const blink = setInterval(() => setCursorOn((v) => !v), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <span className={`${className} inline-block`} aria-live="polite">
      <span>{display}</span>
      <span aria-hidden className={`ml-1 ${cursorOn ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
    </span>
  );
};

export default Typewriter;
