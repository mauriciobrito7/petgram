import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    display:inline-flex;
    &.column {
        flex-wrap:wrap;
        justify-content:center;
        div {
            margin-bottom: 1em;
        }
    }
    &.row {
        display: -webkit-inline-box; 
        overflow:scroll;
        div {
            margin-right: 1em;
            width:100%;

        }
    }
    div.circle {
        border-radius: 50%;
    }
    div.square{
        border-radius: 10px;
    }
    div{
        display:flex;
        animation: pulse 1s infinite ease-in-out;
        @keyframes pulse {
            0% {
                background: rgba(165, 165, 165, 0.1);
            }
            50% {
                background: rgba(165, 165, 165, 0.3);
            }
            100% {
                background: rgba(165, 165, 165, 0.1);
            }
        }
    }
`