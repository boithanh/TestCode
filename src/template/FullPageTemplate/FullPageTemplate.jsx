import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react'
import { arrNavlink } from '../../data/data';
import { removeVietnameseTones } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { setRandomBackground } from '../../utils/utils';


const FullPageTemplate = () => {
    console.log(setRandomBackground());

    const siteTitle = (alias) => {
        switch (true) {
            case alias === "Home":
                return "Scroll Down ⬇"
            case alias === "BloodPresure Check":
                return "Kiểm tra thông số huyết áp"
            case alias === "Lottery Random":
                return "Lấy ngẫu nhiên vé số kiến thiết"
            case alias === "6/45 Random":
                return "Lấy ngãu nhiên Mega 6/45"
            case alias === "6/55 Random":
                return "Lấy ngẫu nhiên Power 6/55"
            case alias === "Lắc xí ngầu":
                return "Trò chơi lắc xí ngầu"
            default:
                return "Page Not Found"
        }
    }
    return (
        <div className="App">
            <ul id="menu">

                {
                    arrNavlink.map((item, index) => {
                        return (
                            <li data-menuanchor={removeVietnameseTones(item.content).trim().replace(/\s+/g, '-')} key={index}>
                                <a href={`#${index + 1}`} className="text-light">{item.content}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <ReactFullpage
                menu="#menu"
                anchors={arrNavlink.map(item => removeVietnameseTones(item.content).trim().replace(/\s+/g, '-'))}
                licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
                lockAnchors={true}
                render={() => (
                    <ReactFullpage.Wrapper>

                        {
                            arrNavlink.map((item, index) => {
                                return (
                                    <div key={index} className="section" style={{ background: setRandomBackground() }}>
                                        <h1>
                                            <Link to={item.to} className=" text-white text-decoration-none">{siteTitle(item.content)}</Link>
                                        </h1>
                                    </div>
                                )
                            })
                        }
                    </ReactFullpage.Wrapper>
                )}
            />
        </div>
    )

}

export default FullPageTemplate