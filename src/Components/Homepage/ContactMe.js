function ContactMe() {
  return (
    <div className='px-4 form-content' id='contact-me'>
      <div className='text-center get-in-touch'>
        <div className=' d-flex justify-content-center align-items-center mt-5 mb-2 green-text'>
          <h6 className='me-2'>03.</h6>
          <h4>What's Next?</h4>
        </div>
        <h2>Get In Touch</h2>
        <p className='get-in-touch'>
          I'm open to new opportunities. Whether you have a question or just
          want to say hi.
        </p>
      </div>

      <form action='' className=''>
        <input
          type='text'
          className='my-1 p-2'
          name=''
          id=''
          placeholder='Name'
        />
        <input
          type='text'
          className='my-1 p-2'
          name=''
          id=''
          placeholder='Subject'
        />

        <textarea
          name=''
          className='my-1 p-2 textarea'
          id=''
          style={{ width: "100%" }}
          rows='4'
          placeholder='Message'></textarea>

        <button className='button my-1 py-2 px-4'>Send Message</button>
      </form>
    </div>
  );
}

export default ContactMe;
