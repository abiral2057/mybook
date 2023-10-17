import Firstpart from './Component/Homepage/Firstpart';
import Lastpart from './Component/Homepage/Lastpart';
import Secondpart from './Component/Homepage/Secondpart';
import Thirdpart from './Component/Homepage/Thirdpart';
import Topview from './Component/Homepage/Topview';
import './Component/css/home.css'

const Home = () => {




  
    return (
    <div>

<Topview/>
{/* First part */}
   <Firstpart/>


{/* Second part */}
    <Secondpart/>


    {/* Third part */}

    <Thirdpart/>

<Lastpart/>
    </div>
  );
}


export default Home;