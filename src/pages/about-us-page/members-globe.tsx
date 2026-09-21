const LAT = 42; // camera tilt
const START_LNG = 15; // Europe faces the viewer at the top of the page
const ALTITUDE = 1.1; // lower = globe fills more of its box
const DEG_PER_PX = 0.08; // spin speed per pixel scrolled

export default function MembersGlobe() {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const readyRef = useRef(false);
  const [size, setSize] = useState(0);

  // Keep the canvas the same size as its wrapper
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) =>
      setSize(entry.contentRect.width),
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Spin with scroll, eased so it doesn't feel jumpy
  useEffect(() => {
    let raf = 0;
    let current = window.scrollY;

    const tick = () => {
      const target = window.scrollY;
      const globe = globeRef.current;

      if (globe && readyRef.current && Math.abs(target - current) > 0.1) {
        current += (target - current) * 0.1;
        globe.pointOfView(
          {
            lat: LAT,
            lng: START_LNG - current * DEG_PER_PX,
            altitude: ALTITUDE,
          },
          0,
        );
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const pins = useMemo<Pin[]>(
    () => [
      ...toPins(FULL_MEMBERS, "full"),
      ...toPins(SUSPENDED_MEMBERS, "suspended"),
    ],
    [],
  );

  const material = useMemo(
    () => new THREE.MeshPhongMaterial({ color: "#ffffff", shininess: 8 }),
    [],
  );

  const handleReady = () => {
    const globe = globeRef.current;
    if (!globe) return;
    globe.pointOfView(
      {
        lat: LAT,
        lng: START_LNG - window.scrollY * DEG_PER_PX,
        altitude: ALTITUDE,
      },
      0,
    );
    readyRef.current = true;
  };

  return (
    <div
      ref={wrapperRef}
      aria-hidden
      className="pointer-events-none fixed bottom-0 right-0 z-0 w-[110vmin] aspect-square translate-x-[35%] translate-y-[35%]"
    >
      {size > 0 && (
        <Globe
          ref={globeRef}
          width={size}
          height={size}
          onGlobeReady={handleReady}
          enablePointerInteraction={false}
          backgroundColor="rgba(0,0,0,0)"
          globeMaterial={material}
          showAtmosphere
          atmosphereColor="#ffffff"
          atmosphereAltitude={0.12}
          pointsData={pins}
          pointLat="lat"
          pointLng="lng"
          pointColor={(d) => COLORS[(d as Pin).status]}
          pointAltitude={0.02}
          pointRadius={0.35}
          pointsMerge={false}
          // keep your texture / hexPolygon props from before here
        />
      )}
    </div>
  );
}
