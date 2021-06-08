import React from 'react'
import { Link, useHistory } from "react-router-dom";
import './Home.css';
export function Home() {
    return (
        <div style={{marginTop:'0%', top:'0%'}}>
         {/* <div style={{marginTop:'0%'}}>
        <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom" style={{marginTop : '0%'}}>
            <div class="container-fluid">
                <a class="navbar-brand" component={Link} to="/Home" style={{paddingLeft: '0px'}}>
                    <img src="https://jadujobs.com/wp-content/uploads/2020/10/jadu-jobs-logo1.png" alt="Jadu" class="d-inline-block align-text-top jadu-logo"/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav navbar-right" style={{float:'right', right:'0px'}}>
                        <a class="nav-link active rounded-top" aria-current="page" href="landingpage.html">Home</a>
                        <a class="nav-link rounded-top" href="./contactUs.html">Contact Us</a>
                        <a class="nav-link rounded-top last-navlink" href="./login.html">Sign out</a>

                    </div>
                </div>
            </div>
        </nav>
    </div> */}



    <div class="container-fluid">
        <div class="top" style={{display: 'flex',  justifyContent: 'flex-start',  color: 'rgb(255, 255, 255)', marginTop:'20px' }}>
            <h1>Featured Blogs</h1>
        </div>

        <div id="myCarousel" class="carousel slide" data-ride="carousel" style={{margin: '50px 0px'}}>
           

            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>


            <div class="carousel-inner">
                <div class="item active container">
                    <div class="item-container row">
                        <div class="col-md-6 col-sm-12 mt-5 ">
                            <img src="https://miro.medium.com/max/700/1*6iYRJgS-waRiMBKo69Owtw.jpeg" alt="image-3"/>
                        </div>
                        <div class=" col-md-6 col-sm-12 cor" style={{maxWidth: '500px', marginTop: '60px'}}>
                            <h2>Swat Valley — Beginning of a new era</h2>
                            <blockquote>Swat is an exceptional scenic valley located in northwest of Pakistan. The
                                valley
                                was once a stronghold for Talibans where state had almost lost its control there. TV was
                                banned, public hangings were common, girls were not allowed to go to school, even the
                                schools were destroyed. Then finally after a long lasting fight between the Armed forces
                                of
                                Pakistan and militants in Swat, the state has finally succeeded to take the full control
                                of
                                the valley.
                            </blockquote>
                            <div class="author">
                                <h4>~Muhammad Wahaj Mubeen</h4>
                            </div>
                            <div class="author"><a href="https://iwahajmubeen341.medium.com/">Read at
                                    Medium</a>
                            </div>
                        </div>
                    </div>
                </div>




                <div class="item">
                    <div class="item-container row">
                        <div class="col-md-6 col-sm-12 m-5 ">
                            <img src="https://miro.medium.com/max/700/1*z21kiJekRLbvLgfeVUnkQQ.jpeg" alt="image-1"/>
                        </div>
                        <div class=" col-md-6 col-sm-12 cor" style={{maxWidth: '500px', marginTop: '60px' }}>
                            <h2>Burnout!</h2>
                            <blockquote>Burnout is a state of emotional, physical, and mental exhaustion caused by
                                excessive
                                and
                                prolonged stress. It occurs when you feel overwhelmed, emotionally drained, and unable
                                to
                                meet
                                constant demands. As the stress continues, you begin to lose the interest and motivation
                                that
                                led you to take on a certain role in the first place.</blockquote>
                            <div class="author">
                                <h4>~Saadiah</h4>
                            </div>
                            <div class="author"><a
                                    href="https://saadiyahh.medium.com/burnout-how-it-feels-like-384fef2d4d6c">Read at
                                    Medium</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="item">
                    <div class="item-container row">
                        <div class="col-md-6 col-sm-12 m-5">
                            <img src="https://miro.medium.com/max/700/1*7Y4nKCZIDLNHWHcLhWfDRA.png" alt="image-2"/>
                        </div>
                        <div class=" col-md-6 col-sm-12 cor" style={{maxWidth: '500px' , marginTop: '60px'}}>
                            <h2>Taking it to the Next Level</h2>
                            <blockquote>Hey peeps, as promised in the previous blog, this week has been very fruitful in
                                terms of Learning advanced JavaScript. This week we really did took it to the next
                                level.
                            </blockquote>
                            <div class="author">
                                <h4>~Saad Farooq</h4>
                            </div>
                            <div class="author"><a href="https://engr-saadfarooq.medium.com/">Read at
                                    Medium</a></div>
                        </div>
                    </div>
                </div>


                <div class="item">
                    <div class="item-container row">
                        <div class="col-md-6 col-sm-12 m-5">
                            <img src="https://miro.medium.com/max/700/1*73atmf2FBPP2yHASzAWUaw.jpeg" alt="image-4"/>
                        </div>
                        <div class=" col-md-6 col-sm-12 cor" style={{maxWidth: '500px' , marginTop: '60px'}}>
                            <h2>Software Bug</h2>
                            <blockquote>“Bug” literally means an insect. So what does an insect has to do with software?
                                Is
                                it like an insect getting into your computer/laptop and affecting your software? Or some
                                virus getting into your system and affecting the software?
                            </blockquote>
                            <div class="author">
                                <h4>~Muhammad Wahaj Mubeen</h4>
                            </div>
                            <div class="author"><a
                                    href="https://iwahajmubeen341.medium.com/software-bug-823dd406fac2">Read at
                                    Medium</a></div>
                        </div>
                    </div>
                </div>
            </div>



            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

    </div>


    <div class="container-fluid time">
        <b>
            <h2 class="text-decoration-underline text-center">
                <p>
                    Hang on! Something new coming in:
                </p>
            </h2>
            <p class="primary text-dark text-center mt-5 neons" id="timer"></p>
        </b>
    </div>



    <div>
        <p class="footer">
        <h6 class="fp text-primary fw-bold">

            Developed by Tribe 6 - Jadu Full Stack Development Fellowship

        </h6>
        </p>
    </div>
   
        </div>
    )
}
