import styled from "styled-components";
import { SidebarCard } from "../organismos/sidebar/SidebarCard";

export function ConfiguracionTemplate() {
  return (
    <Container>
        <h3>Cierra sesion por favor</h3>
        <div style={{width: '250px', margin: '8px'}}>
            <SidebarCard/>
        </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.bgtotal};
  color: ${({ theme }) => theme.text};
  width: 100%;
`;