import './DivideContents.css';

const DivideContents = ({ height }: { height?: number }) => {
  return <div style={{ '--h': height === undefined ? 100 : height } as React.CSSProperties} className="divide" />;
};

export default DivideContents;
