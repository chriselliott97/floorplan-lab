import Kitchen from "./Kitchen";
import Bedroom from "./Bedroom";
import FullBath from "./FullBath";
import Bedroom2 from "./Bedroom2";
import LivingRoom from "./LivingRoom";
import HalfBath from "./HalfBath";
import BedRoom3 from "./Bedroom3";

const FloorPlan = () => {
  return ( 
    <>
      <div>
        <div>
          <Bedroom /> 
        </div>
        <div>
          <Kitchen />
        </div>
        <div>
          <FullBath />
        </div>
        <div>
          <Bedroom2 />
        </div>
        <div>
          <LivingRoom />
        </div>
        <div>
          <HalfBath />
        </div>
        <div>
          <BedRoom3 />
        </div>
      </div>  
    </>
  );
}
 
export default FloorPlan;