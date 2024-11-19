import Goal from './Goal';
import Missed from './Missed';


function Test(props) {
    const isGoal = props.isGoal;

    if(isGoal == true) {
        return <Goal />
    }

    return <Missed />
}

export default Test;