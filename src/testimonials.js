import testimonialsVideo from './assets/videos/Activities & The Activity Lifecycle - Android Basics 2023.mp4'
const Testimonials = () => {
    return ( 
        <div className="container">
            <div className="tContent1 pt-4">
                <center>
                    <h4>Testimonials</h4>
                    <h1 className="fw-bold my-4">Success Stories From Previous Mentees</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat neque ex sunt corrupti, minus sint asperiores pariatur quasi alias itaque porro veniam, quo aperiam quibusdam velit saepe, vel in incidunt.
                        Lorem ipsum dolor sit amet consecetur adipisicing elit. Placeat aspernatur beatae cumque, libero vero iusto repellat nam dolores perspiciatis voluptas ratione quod pariatur repudiandae magnam. Aliquam ullam quasi in quam.
                    </p>
                </center>
            </div>
            <div className="tContent2">
                <div className="row">
                    <div className="col-lg-4">
                    <video className="shadow-lg" width="480px" height="360px" controls>
                        <source src={testimonialsVideo} type="video/mp4"/>
                    </video>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Testimonials;