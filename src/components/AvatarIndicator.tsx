import 'bootstrap/dist/css/bootstrap.min.css';

// Define the props for the component
interface AvatarWithIndicatorProps {
  initial: string;
  isConnected: boolean;
}

const AvatarIndicator: React.FC<AvatarWithIndicatorProps> = ({ initial, isConnected }) => {
 
  const avatarStyle = {
    width: '35px',
    height: '35px',
    backgroundColor: 'grey',
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: '50%',
    fontSize: '20px',
    Position: 'relative',
  };

const indicatorStyle = {
    width: '15px',
    height: '15px',
    backgroundColor: isConnected ? 'green' : 'red',
    borderRadius: '50%',
    Position: 'absolute',
    bottom: '0',
    right: '0',
    transform: 'translate(45%, 50%)',
    border: '2px solid white',
};

  return (
    <div style={avatarStyle}>
      {initial}
      <div style={indicatorStyle}></div>
    </div>
  );
};

export default AvatarIndicator;