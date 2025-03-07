import { Header } from '../../widgets/index'
import { Helmet } from 'react-helmet';
import { TimerComponent } from '../../widgets/index.tsx'
 
const Timer = () => {
    return(
        <div>
            <Helmet>
                <title>Timer</title>
            </Helmet>
            <Header />
            <TimerComponent />
        </div>
    )
}

export default Timer;