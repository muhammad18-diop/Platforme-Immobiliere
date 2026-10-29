import HeroSection from "../Components/Hero"
import NousSommes from "../Components/Nous"
import CardVilla from "../Components/CardVilla"
import CarouselVilla from "../Components/CarouselVilla"
import QuiNousSommes from "../Components/Pourquoi"
import CommentMarche from "../Components/Marche"
import Statistiques from "../Components/statistiques"

function Home(){


    return(
        <div>
            <HeroSection />
            <NousSommes />
            <CardVilla />
            <QuiNousSommes />
            <CarouselVilla />
            <CommentMarche />
            <Statistiques />

            
        </div>
    )
}

export default Home