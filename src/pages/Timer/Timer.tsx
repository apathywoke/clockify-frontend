import { Header } from '../../widgets/index'
import { Helmet } from 'react-helmet';
 
const Timer = () => {
    return(
        <body>
            <Helmet>
                <title>Timer</title>
            </Helmet>
            <Header />
        </body>
    )
}

export default Timer;