import React from 'react'

function Pricing() {
  return (
    <>
      <div className='industrypro_mein'>
        <div className='container'>
          <div className='text-center text-light pt-5'>
            <h1 className='fw-bolder '>Pricing</h1>
            <p>Problems trying to resolve the conflict between<br />
              the two major realms of Classical physics: Newtonian mechanics </p>
          </div>
          <div className='d-flex mt-5 justify-content-between price_meinbox pb-5'>
            <div className='price_box p-5 rounded'>
              <div className='text-center'>
                <h5><b>FREE</b></h5>
                <p>Organize across all<br />
                  apps by hand</p>
                <h3 className='fw-bolder text-primary'>0$</h3>
                <p className='text-primary'>Per Month</p>
                <button className='btn btn-primary'>Try for free</button>
              </div>
              <div className='mt-4'>
                <p><b><img src="doneicon.png" alt="" width={25} />&nbsp; Unlimited product updates</b></p>
                <p><b><img src="doneicon.png" alt="" width={25} />&nbsp; Unlimited product updates</b></p>
                <p><b><img src="doneicon.png" alt="" width={25} />&nbsp; Unlimited product updates</b></p>
                <p><b><img src="cancleicon.png" alt="" width={25} />&nbsp; 1GB  Cloud storage</b></p>
                <p><b><img src="cancleicon.png" alt="" width={25} />&nbsp; Email and community<br />
                  &nbsp; &nbsp; &nbsp; &nbsp; support</b></p>
              </div>
            </div>
            <div className='price_box p-5 rounded'>
              <div className='text-center'>
                <h5><b>Silver</b></h5>
                <p>Organize across all<br />
                  apps by hand</p>
                <h3 className='fw-bolder text-primary'>9.99$</h3>
                <p className='text-primary'>Per Month</p>
                <button className='btn btn-primary'>Try for free</button>
              </div>
              <div className='mt-4'>
                <p><b><img src="doneicon.png" alt="" width={25} />&nbsp; Unlimited product updates</b></p>
                <p><b><img src="doneicon.png" alt="" width={25} />&nbsp; Unlimited product updates</b></p>
                <p><b><img src="doneicon.png" alt="" width={25} />&nbsp; Unlimited product updates</b></p>
                <p><b><img src="cancleicon.png" alt="" width={25} />&nbsp; 1GB  Cloud storage</b></p>
                <p><b><img src="cancleicon.png" alt="" width={25} />&nbsp; Email and community<br />
                  &nbsp; &nbsp; &nbsp; &nbsp; support</b></p>
              </div>
            </div>
            <div className='price_box p-5 rounded'>
              <div className='text-center'>
                <h5><b>GOLD</b></h5>
                <p>Organize across all<br />
                  apps by hand</p>
                <h3 className='fw-bolder text-primary'>19.99$</h3>
                <p className='text-primary'>Per Month</p>
                <button className='btn btn-primary'>Try for free</button>
              </div>
              <div className='mt-4'>
                <p><b><img src="doneicon.png" alt="" width={25} />&nbsp; Unlimited product updates</b></p>
                <p><b><img src="doneicon.png" alt="" width={25} />&nbsp; Unlimited product updates</b></p>
                <p><b><img src="doneicon.png" alt="" width={25} />&nbsp; Unlimited product updates</b></p>
                <p><b><img src="cancleicon.png" alt="" width={25} />&nbsp; 1GB  Cloud storage</b></p>
                <p><b><img src="cancleicon.png" alt="" width={25} />&nbsp; Email and community<br />
                  &nbsp; &nbsp; &nbsp; &nbsp; support</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing
