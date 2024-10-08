export const IBeamIcon = ({
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      width={width || "100%"}
      height={height || "auto"}
      viewBox="0 0 457 488"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="150" y="50" width="150" height="30" fill="none" stroke="currentColor" />
      <rect x="215" y="80" width="20" height="300" fill="none" stroke="currentColor" />
      <rect x="150" y="380" width="150" height="30" fill="none" stroke="currentColor" />
      <line x1="140" y1="50" x2="140" y2="410" stroke="currentColor" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
      <text x="120" y="250" fontFamily="Arial" fontSize="16" fill="currentColor">d</text>
      <line x1="150" y1="420" x2="300" y2="420" stroke="currentColor" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
      <text x="210" y="440" fontFamily="Arial" fontSize="16" fill="currentColor">bf</text>
      <line x1="310" y1="50" x2="310" y2="80" stroke="currentColor" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
      <text x="320" y="70" fontFamily="Arial" fontSize="16" fill="currentColor">tf</text>

      <line x1="215" y1="200" x2="235" y2="200" stroke="currentColor" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
      <text x="205" y="190" fontFamily="Arial" fontSize="16" transform="rotate(0, 205, 190)" fill="currentColor">tw</text>
      <line x1="340" y1="80" x2="340" y2="380" stroke="currentColor" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
      <text x="350" y="230" fontFamily="Arial" fontSize="16" fill="currentColor">h</text>
      <line x1="225" y1="50" x2="225" y2="410" stroke="currentColor" strokeDasharray="5,5" />
      <line x1="150" y1="230" x2="300" y2="230" stroke="currentColor" strokeDasharray="5,5" />
      <text x="235" y="40" fontFamily="Arial" fontSize="16" fill="currentColor">y</text>
      <text x="310" y="230" fontFamily="Arial" fontSize="16" fill="currentColor">x</text>
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
        </marker>
      </defs>
    </svg>
  );
};
