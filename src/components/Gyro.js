
import DroneHud from "react-drone-hud";

function Gyro() {
  return (
    <DroneHud
    width={600} //width in px, best if >= 500
    height={400} //height in px, best if >= 400
    pitch={10} //degrees
    roll={0} //degrees, -ve -> left bank
    heading={45} //degrees, optional
    airspeed={40} //left-side number, optional
    airspeedTickSize={40} //increments to use for vertical gauge, optional
    altitude={200} //right-side number, optional
    altitudeTickSize={10} //optional
/>
  );
}

export default Gyro;
