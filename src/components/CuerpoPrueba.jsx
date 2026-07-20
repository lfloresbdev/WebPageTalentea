import { SiWhatsapp, SiInstagram, SiTiktok, SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";

function CuerpoPrueba() {
    return (
        <div className="cuerpo-prueba">
            <SiWhatsapp size={32} color="#25D366" />
            <SiInstagram size={32} color="#E4405F" />
            <SiTiktok size={32} />
            <SiFacebook size={32} color="#1877F2" />
            <FaLinkedin size={32} color="#0A66C2" />
            <FiMapPin size={32} color="red" />
        </div>
    )
}   

export default CuerpoPrueba;
