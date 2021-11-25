import * as S from './FooterStyle'
import eurekaLogo from '../../assets/eureka-labs-logo.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'

export default function Footer() {
    return (
        <S.FooterArea>
            <h3>2021 - Feito por Lávio Vale</h3>
            <S.SocialMedias>
                <a href="https://www.linkedin.com/in/laviovale/" target="_blank">
                    <img src={linkedin} alt="Linkedin" height={20} />
                </a>
                <a href="https://github.com/laviodias" target="_blank">
                    <img src={github} alt="Github" height={20} />
                </a>
                <a href="https://www.instagram.com/laviovale/" target="_blank">
                    <img src={instagram} alt="Instagram" height={20} />
                </a>
                <a href="https://eurekalabs.com.br/" target="_blank">
                    <img src={eurekaLogo} alt="Eureka" height={20} />
                </a>
            </S.SocialMedias>
        </S.FooterArea>
    )
}
