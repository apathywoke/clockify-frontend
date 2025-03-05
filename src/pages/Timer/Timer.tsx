import { Header } from '../../widgets/index'
import { Helmet } from 'react-helmet';
import { TimerComponent } from '../../widgets/index.tsx'
 
const Timer = () => {
    return(
        <body>
            <Helmet>
                <title>Timer</title>
            </Helmet>
            <Header />
            <TimerComponent />
        </body>
    )
}

export default Timer;