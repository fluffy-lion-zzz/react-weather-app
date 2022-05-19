import { GridLoader } from "react-spinners";
import styled from "styled-components";
const LoaderWrapper = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid red 4px;
`
const Loader =  ({ loading }) => {

    return (
        <LoaderWrapper>
            <GridLoader 
                color={"blue"}
                size={30}
                loading={loading}

            />
        </LoaderWrapper>
    )
}
export default Loader