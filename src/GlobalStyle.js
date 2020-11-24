import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`

:root {
 --gryffindor-primary: #740001;
 --gryffindor-primary-light: #AE0001;
 --gryffindor-secondary: #D3A625;
 --gryffindor-secondary-light:  #EEBA30;
 --gryffindor-white: #C0C0C0;

 --slytherin-primary: #1A472A;
 --slytherin-primary-light: #2A623D;
 --slytherin-secondary: #5D5D5D;
 --slytherin-secondary-light:  #5D5D5D;


 --ravenclaw-primary: #0E1A40;
 --ravenclaw-primary-light: #222F5B;
 --ravenclaw-secondary: #5D5D5D;
 --ravenclaw-secondary-light:  #946B2D;

 --hufflepuff-primary: #FFDB00;
 --hufflepuff-primary-light: #FFED86;
 --hufflepuff-primary-lightest: #FFF4B1;
 --hufflepuff-secondary: #60605C;

}

body {
  margin: 0;
  padding: 0;
}`

export default GlobalStyle
