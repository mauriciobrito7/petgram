import styled from 'styled-components'

export const Container = styled.div`
    display:inline-flex;
    justify-content: space-between;
    padding:1em;
    
    div.shape{
        display:flex;
        margin-right: 1em;
        height:75px;
        width:75px;
        border-radius: 50%;
    
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