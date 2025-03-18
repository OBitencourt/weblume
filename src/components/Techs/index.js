import Image from "next/image"
import { Title, Content, Divider, Tool } from "./style"

const Techs = () => {

    return (
        <>
            <Title>
                We use the most modern development tools.
            </Title>
            <Content>
                <Tool>
                    Figma
                    <Image 
                        src="/images/figma.svg"
                        alt="figma-icon"
                        width={70}
                        height={70}
                        style={{marginTop: '12px'}}
                    />
                </Tool>

                <Divider />

                <Tool>
                    React.js
                    <Image 
                        src="/images/reactjs.svg"
                        alt="react-icon"
                        width={70}
                        height={70}
                        style={{marginTop: '12px'}}
                    />
                </Tool>

                <Divider />

                <Tool>
                    Next.js
                    <Image 
                        src="/images/nextjs.svg"
                        alt="next-icon"
                        width={70}
                        height={70}
                        style={{marginTop: '12px'}}
                    />
                </Tool>

                <Divider />

                <Tool>
                    Node.js
                    <Image 
                        src="/images/nodejs.svg"
                        alt="node-icon"
                        width={70}
                        height={70}
                        style={{marginTop: '12px'}}
                    />
                </Tool>

                <Divider />

                <Tool>
                    Next.js
                    <Image 
                        src="/images/express.svg"
                        alt="express-icon"
                        width={70}
                        height={70}
                        style={{marginTop: '12px'}}
                    />
                </Tool>
            </Content>
        </>
    )
}


export default Techs