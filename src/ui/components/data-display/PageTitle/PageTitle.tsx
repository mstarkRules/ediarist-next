import { jsx } from '@emotion/react';
import React from 'react';
import {PageTitleContainer, PageTitleStyled} from './PageTitleStyle';

interface PageTitleProps{
    title: string;
    subtitle: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {

    return (
        <PageTitleContainer>
            <PageTitleStyled>{props.title} </PageTitleStyled>
           {props.subtitle}
        </PageTitleContainer>
    );
}

export default PageTitle;