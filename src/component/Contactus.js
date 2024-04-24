import React from 'react'

function Contactus() {
  return (
    <>
      <div className='contact_img'>
        <div className='container'>
          <div className='contact_mein'>
            <p><b>Contact Us</b></p>
            <h2><b>Make an Appointment</b></h2>
            <div >
              <form>
                <div className='d-flex gap-4 mt-5 contact_form'>
                  <div class="w-5 magan">
                    <input type="text" className=" form-control" placeholder="First name" />
                  </div>
                  <div class="w-5 magan">
                    <input type="text" class="form-control" placeholder="Last name" />
                  </div>
                </div>
              </form>
              <div className='d-flex gap-4 mt-4 '>
                <div className='w-5 chagan'>
                  <select class="form-select text-secondary " aria-label="Default select example">
                    <option selected>Please Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className='w-5 chagan'>
                  <select class="form-select text-secondary" aria-label="Default select example">
                    <option selected>4:00 Available</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className='mt-4'>
                <textarea cols="70" rows="5" placeholder='Message' className='footer_msg p-2 rounded-2' style={{ border: '1px solid lightgray' }}></textarea>
              </div>
              <div className='mt-4'>
                <button className='btn btn-primary'>Book Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactus
