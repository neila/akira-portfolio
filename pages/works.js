import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Synthfeed from '/public/images/Synthfeed.png'
import Rap from '/public/images/rap.jpg'
import AmbulancePic from '/public/images/nhs.jpg'
import Radio from '/public/images/radio.jpg'
import Digihana from '/public/images/digihana.png'

const Title = ({ section, color }) => (
    <div className="mt-5 mb-7 flex-grow-0 text-center">
        <h1 className={color}> {section} </h1>
    </div>
)

const WorkTriangleIcon = (props) => {
    const { pagepath, updown, image } = props
    return (
        <Link href={pagepath}>
            <div
                className={`relative flex h-36 w-36 lg:h-72 lg:w-72 ${updown} cursor-pointer`}
            >
                <Image className="h-full w-full object-cover" src={image} />
            </div>
        </Link>
    )
}

export default function works() {
    return (
        <div className="works">
            <Head>
                <title>WXRKS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* logo */}
            <Header />

            <Title section="WORKS" color="text-[#26F7A0]" />

            {/* content */}
            <section className="">
                <div className="relative mx-auto flex flex-wrap justify-center p-4 lg:w-3/4 2xl:w-4/6">
                    <WorkTriangleIcon
                        pagepath="/works/algorap"
                        image={Rap}
                        updown="clip-tri-up"
                    />
                    <WorkTriangleIcon
                        pagepath="/works/synthfeed"
                        image={Synthfeed}
                        updown="clip-tri-down"
                    />
                    <WorkTriangleIcon
                        pagepath="/works/digihana"
                        image={Digihana}
                        updown="clip-tri-up"
                    />
                    <WorkTriangleIcon
                        pagepath="/works/er-simulation"
                        image={AmbulancePic}
                        updown="clip-tri-down"
                    />
                    <WorkTriangleIcon
                        pagepath="/works/radio"
                        image={Radio}
                        updown="clip-tri-up"
                    />
                </div>
            </section>

            {/* Lower menu + copyright */}
            <Footer />
        </div>
    )
}
