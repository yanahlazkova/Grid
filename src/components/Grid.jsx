import Column from "./Column";
import Container from "./Container";
import Row from './Row'

export default function Grid(){
    return (
    <>
        <Container>
            <Row>
                <Column>Column of size 20%</Column>
                <Column>Column of size 20%</Column>
                <Column>Column of size 20%</Column>
                <Column>Column of size 20%</Column>
            </Row>
        
            

            <Row>
                <Column backgroundcolor="background-color">Column of size 80%</Column>
                <Column backgroundcolor="background-color">Column of size 80%</Column>
                <Column backgroundcolor="background-color">Column of size 80%</Column>
                <Column backgroundcolor="background-color">Column of size 80%</Column>
            </Row>
        </Container>        
            </>
    )
}