// Timer.tsx (Timer page component)
import { Helmet } from 'react-helmet';
import { Header } from '../../widgets/index'; // Assuming Header component import

import { TimerUI } from '../../widgets/index.tsx'



const Timer = () => {

    return (
        <div>
            <Helmet>
                <title>Timer</title>
            </Helmet>
            <Header />
            <TimerUI />
        </div>
    );
};

export default Timer;
