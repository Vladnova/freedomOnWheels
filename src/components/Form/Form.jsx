const Form = () => {
  return (
    <div>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="bookingDate">Booking Date:</label>
          <input type="date" id="bookingDate" name="bookingDate" />
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea id="comment" name="comment" rows="4" cols="50"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
