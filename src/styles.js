import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const lightTheme = {
    fontColor: "white",
    bgColor: "lightgray",
}

export const darkTheme = {
    fontColor: "lightgray",
    bgColor: "white",
}

export const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        background-color: ${(props) => props.theme.bgColor};
    }
`;