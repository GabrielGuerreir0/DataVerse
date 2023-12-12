import './Sobre.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TextSobre from '../../components/TextSobre';

function Sobre (){
    return(
        <div className='Sobre-Page'>
            <div><Navbar/></div>
            <div><TextSobre/></div>
            <div><Footer/></div>   
        </div>
        

    );
}

export default Sobre;