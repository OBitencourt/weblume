
import Image from 'next/image'
import { BigCircle, Divider, MainTitle, NormalButton, StyledButton, Subtitle } from './style'
const Hero = () => { 

    return (
        <>
            <section
                id="home"
                style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: '70vh'
                }}
            >
                <MainTitle>
                    We create your digital <span>solution</span>.
                </MainTitle>
                <Subtitle>
                    Social media management, web sites development and sofisticate digital experience creation.
                </Subtitle>
                <Divider />
                <div style={{
                    display: 'flex',
                    gap: '3rem',
                    marginTop: "28px",
                }}>
                    <StyledButton>
                        Contact
                    </StyledButton>
                    <NormalButton>
                        Our Services
                        <Image 
                            src="/images/arrow-down.svg"
                            width={30}
                            height={30}
                            alt='arrow'
                        />
                    </NormalButton>
                </div>
                <BigCircle />
            </section>
        </>
    )
}


export default Hero