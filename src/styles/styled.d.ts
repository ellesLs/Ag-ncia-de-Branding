import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            backgroundColor: string
            titleColor: string,
            bannerColor: string,
            subTitleColor: string,
            textColor: string,
            sectionColor: string,
            yellowColor: string
        }
    }
}