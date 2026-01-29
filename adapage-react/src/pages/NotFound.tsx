import { Footer } from '../components/footer';
import { Header } from '../components/Header';
import page404 from '../images/page-404.png';


export default function NotFound() {


    return (
<>
        <Header/>
<div>
    <img src={page404}/>
</div>

<Footer/>
</>
    )
};