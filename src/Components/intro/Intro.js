import Bgimg from "../../assets/bgimg.jpg"
import hireimg from "../../assets/hire.gif"
import "../intro/intro.css"


function Intro(){

    return(
        <section className="introcontainer">
            <div className="Intro">
            <div className="Introcontent">
                <p id="hello">Hello,</p>
                <span className="details">I'm <span>Arunkumar</span><br/>Web Developer</span>
                <p className="bio-dtails">I am a skilled and passionate web developer with experience in creating visually appeling and user-friendly websites.</p>
                {/* <button className="hirebtn"><img src={hireimg} alt="hirelogo" />Hire me</button> */}
            </div>
            <div className="bg">
                <img src={Bgimg} alt="background" />
            </div>

        </div>
        </section>
    )
}
export default Intro;
