import React from 'react';
import HTMLFlipBook from 'react-pageflip';

const PdfReview = () => {
    return (
        <div className='pdf'>
            <HTMLFlipBook width={350} height={500}>
                <div className="demoPage">
                    <img src="/images/cp/1.png" alt="CP" />
                </div>
                <div className="demoPage">
                    <img src="/images/cp/2.png" alt="CP" />
                </div>
                <div className="demoPage">
                    <img src="/images/cp/3.png" alt="CP" />
                </div>
                <div className="demoPage">
                    <img src="/images/cp/4.png" alt="CP" />
                </div>
                <div className="demoPage">
                    <img src="/images/cp/5.png" alt="CP" />
                </div>
                <div className="demoPage">
                    <img src="/images/cp/6.png" alt="CP" />
                </div>
                <div className="demoPage">
                    <img src="/images/cp/7.png" alt="CP" />
                </div>
                <div className="demoPage">
                    <img src="/images/cp/8.png" alt="CP" />
                </div>
            </HTMLFlipBook>
        </div>
    );
}
export default PdfReview;