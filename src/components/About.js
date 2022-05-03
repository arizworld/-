import React from 'react';

export default function About(props) {
  return (
    <>
        <header className="bg-primary text-center py-5 mb-4">
        <div className="container">
            <h1 className={`fw-light text-${props.mode === 'light'?'light':'dark'}`}>Meet the Team</h1>
        </div>
        </header>

        {/* <!-- Page Content --> */}
        <div className="container">
        <div className="row">
            {/* <!-- Team Member 1 --> */}
            <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
                <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" className="card-img-top" id="myImage" alt="..."/>
                <div className={`card-body text-center bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`}>
                <h5 className="card-title mb-0">Team Member</h5>
                <div className={`card-text text-${props.mode === 'light'?'dark':'light'}`}>Web Developer</div>
                </div>
            </div>
            </div>
            {/* <!-- Team Member 2 --> */}
            <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
                <img src="https://i.ibb.co/ynsj1dY/word.jpg" className="card-img-top" alt="word" border="0"/>
               {/* <img src="https://ibb.co/kgcCf59img" className="card-img-top" alt="..."/> */}
                <div className={`card-body text-center bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`}>
                <h5 className="card-title mb-0" id="imbalance">Team Member</h5>
                <div className={`card-text text-${props.mode === 'light'?'dark':'light'}`}>Web Developer</div>
                </div>
            </div>
            </div>
            {/* <!-- Team Member 3 --> */}
            <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
                <img src="https://source.unsplash.com/sNut2MqSmds/500x350" className="card-img-top" alt="..."/>
                <div className={`card-body text-center bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`}>
                <h5 className="card-title mb-0">Team Member</h5>
                <div className={`card-text text-${props.mode === 'light'?'dark':'light'}`}>Web Developer</div>
                </div>
            </div>
            </div>
            {/* <!-- Team Member 4 --> */}
            <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
                <img src="https://source.unsplash.com/7u5mwbu7qLg/500x350" className="card-img-top" alt="..."/>
                <div className={`card-body text-center bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`}>
                <h5 className="card-title mb-0">Team Member</h5>
                <div className={`card-text text-${props.mode === 'light'?'dark':'light'}`}>Web Developer</div>
                </div>
            </div>
            </div>
        </div>
        {/* <!-- /.row --> */}

        </div>
        {/* <!-- /.container --> */}
    </>
  )
}
