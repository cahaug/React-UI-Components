import React from 'react';
import './Header.css';
import HeaderContent from '../HeaderComponents/HeaderContent'
import HeaderTitle from './HeaderTitle';
import ImgThumbnail from '../HeaderComponents/ImageThumbnail'

const HeaderContainer = () => {
    return (
    <div>
        <ImgThumbnail />
        <div>
            <HeaderTitle />
            <HeaderContent />
        </div>
    </div>)
}

export default HeaderContainer;