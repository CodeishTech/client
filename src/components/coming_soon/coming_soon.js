import { Link } from 'react-router-dom';
import { containedButton } from '../../styles/style';

export default function ComingSoon() {
  return (
    <>
      <div className="flex flex-wrap dark:bg-gray-900 justify-center p-16">
        <div className="flex-col">
          <img src="/images/comingsoon.png" alt="coming soon" width="300" />
          <Link to="/"><button className={containedButton+" w-full mt-8"}>Back to Home</button></Link>
        </div>
      </div>
    </>
  );
}