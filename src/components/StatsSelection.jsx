import "../styles/stats.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatsSelection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="stats" aria-label="stats">
      {inView && (
        <>
          <div>
            <h2>
              <CountUp end={25} duration={2} />+
            </h2>
            <div>Sucess projects</div>
          </div>

          <div>
            <h2>
              <CountUp end={90} duration={2} />%
            </h2>
            <div>Happy Clients</div>
          </div>

          <div>
            <h2>
              <CountUp end={10} duration={2} />+
            </h2>
            <div>years of experience</div>
          </div>
        </>
      )}
    </div>
  );
}
