import Image from "next/image"
import { Navbar, SpecialButton, StyledButton } from "./style"

const Header = () => {

    return (
        <>
            <header 
                style={{
                    display: 'flex',
                    width: "100%",
                    padding: "50px",
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                <Image 
                    src="/images/logo-weblume.png"
                    alt="logo"
                    width={70}
                    height={70}
                    style={{
                        position: 'absolute',
                        left: '5%',
                    }}
                />
                    <Navbar>
                        <StyledButton>
                            Services
                        </StyledButton>
                        <StyledButton>
                            Technologies
                        </StyledButton>
                        <StyledButton>
                            How We Work
                        </StyledButton>
                        <SpecialButton>
                            Contact
                        </SpecialButton>
                    </Navbar>
            </header>
        </>
    )
}

export default Header