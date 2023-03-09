import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Overlay = ({ project, type, id, setOverlayActive, folderName }) => {
    let owlRespoinsive = {};
    type == "mobile" ? owlRespoinsive = {
        0: {
            items: 1
        },
        1200: {
            items: 3
        },
        1500: {
            items: 4
        }
    } : owlRespoinsive = {
        0: {
            items: 1
        },
        1200: {
            items: 3
        },
    }
    const navTextWhite = [
        '<span class="arrow prev"><img src="/images/icons/arrow-left-white.png" alt"Arrow" /></span>',
        '<span class="arrow next"><img src="/images/icons/arrow-right-white.png" alt"Arrow" /></span>'
    ]
    return (
        <div className={`project-info ${type}`}>
            {project && (
                <div className="overlay">
                    <div className="close" onClick={() => setOverlayActive(false)}>
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="background" onClick={() => setOverlayActive(false)}></div>
                    <OwlCarousel className='owl-theme' autoplay nav={true} autoplayTimeout="3000" navText={navTextWhite} dots={false} margin={100} autoplayHoverPause loop center responsive={owlRespoinsive}>
                        {project[id].images.map((image, index) => (
                            <div key={index} className="item">
                                <div className="image">
                                    <img src={`/images/projects/${type}/${folderName(project[id].name)}/${image}`} alt="Project" />
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            )}
        </div>
    )
}

export default Overlay