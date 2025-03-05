
import { Content, Divider, ServiceBox, Title } from './style'
const Services = () => {

    return (

        <>
            <section
                id="services"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '150vh',
                    justifyContent: 'center'
                }}
            >
                <Title>
                    Our Services
                </Title>
                <Content>
                    <ServiceBox>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: "8px"
                        }}>
                            <h4>
                                UX/UI
                            </h4>
                        </div>
                        <Divider />
                        <p>
                            We craft intuitive and elegant user experiences, blending aesthetics with functionality to create seamless digital interactions
                        </p>
                    </ServiceBox>
                    <ServiceBox>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: "8px"
                        }}>
                            <h4>
                                Websites
                            </h4>
                        </div>
                        <Divider />
                        <p>
                            From concept to launch, we build high-performance websites that captivate, engage, and convert your audience.
                        </p>
                    </ServiceBox>
                    <ServiceBox>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: "8px"
                        }}>
                            <h4>
                                Social Media
                            </h4>
                        </div>
                        <Divider />
                        <p>
                            We elevate your online presence with strategic content, audience engagement, and data-driven growth solutionss
                        </p>
                    </ServiceBox>


                    
                    
                </Content>
            </section>
        </>
    )
}

export default Services